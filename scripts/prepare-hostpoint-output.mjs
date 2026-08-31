import { copyFile, mkdir, readFile, stat } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const publicOutput = join(repositoryRoot, ".output", "public");
const deploymentFiles = join(repositoryRoot, "deploy", "hostpoint");

const sitemap = await readFile(join(repositoryRoot, "public", "sitemap.xml"), "utf8");
const canonicalPaths = [
  ...sitemap.matchAll(/<loc>https:\/\/wirkstattnatur\.ch([^<]*)<\/loc>/g),
].map(([, pathname]) => pathname || "/");

if (canonicalPaths.length === 0) {
  throw new Error("No canonical routes were found in public/sitemap.xml");
}

for (const pathname of canonicalPaths) {
  const relativeHtmlPath = pathname === "/" ? "index.html" : `${pathname.slice(1)}.html`;
  const htmlPath = join(publicOutput, relativeHtmlPath);

  try {
    const file = await stat(htmlPath);
    if (!file.isFile() || file.size === 0) throw new Error("empty output");
  } catch (error) {
    throw new Error(`Missing prerendered HTML for ${pathname}: ${htmlPath}`, { cause: error });
  }
}

const hostpointFiles = [".htaccess", "index.php", "404.html", "robots-staging.txt"];

await mkdir(publicOutput, { recursive: true });
for (const filename of hostpointFiles) {
  await copyFile(join(deploymentFiles, filename), join(publicOutput, filename));
}

console.log(
  `Prepared Hostpoint artifact with ${canonicalPaths.length} prerendered routes and ${hostpointFiles.length} server files.`,
);
