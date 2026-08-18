import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { getLegalPageSchema, getSeoHead, jsonLdScript } from "@/lib/seo";

const title = "Legal notice — Wirkstattnatur";
const description = "Provider details, responsibilities and legal notices.";

export const Route = createFileRoute("/en/impressum")({
  head: () => ({
    ...getSeoHead({ path: "/en/impressum", title, description, locale: "en" }),
    scripts: [
      jsonLdScript(
        getLegalPageSchema({ path: "/en/impressum", name: title, description, inLanguage: "en" }),
      ),
    ],
  }),
  component: EnglishImpressumPage,
});

function EnglishImpressumPage() {
  return (
    <LegalPage currentPath="/en/impressum" locale="en" title={title} description={description}>
      <section>
        <h2>Provider, owner and person responsible for content</h2>
        <address>
          <strong>Wirkstattnatur</strong>
          <br />
          Urs Gremlich
          <br />
          Hernerholzgasse 30
          <br />
          8810 Horgen
          <br />
          Switzerland
        </address>
        <p>
          <a href="mailto:info@wirkstattnatur.ch">info@wirkstattnatur.ch</a>
          <br />
          <a href="tel:+41794131830">079 413 18 30</a>
        </p>
      </section>

      <section>
        <h2>Photography and text</h2>
        <p>
          Photography: Roger Oberholzer, Fotografie-Manufaktur.
          <br />
          Text from the previous website: Marcel Friedli, Friedlitexte, and Rahel Zuber.
        </p>
      </section>

      <section>
        <h2>Copyright</h2>
        <p>
          The copyright and all other rights to content, images, photos or other files on the
          website belong exclusively to Wirkstattnatur or the specifically named rights holders.
          Prior written consent must be obtained from the copyright holders for the reproduction of
          any elements.
        </p>
      </section>

      <section>
        <h2>Disclaimer</h2>
        <p>
          The author accepts no liability whatsoever regarding the correctness, accuracy,
          timeliness, reliability and completeness of the information.
        </p>
        <p>
          Liability claims against the author for material or immaterial damage arising from access
          to, the use or non-use of the published information, misuse of the connection or technical
          faults are excluded to the extent permitted by law.
        </p>
        <p>
          All offers are non-binding. The author expressly reserves the right to modify, supplement,
          delete or temporarily or permanently discontinue publication of parts of the pages or the
          entire offer without prior notice.
        </p>
      </section>

      <section>
        <h2>Liability for links</h2>
        <p>
          References and links to third-party websites lie outside our sphere of responsibility. Any
          responsibility for such websites is declined. Access to and use of such websites are
          entirely at the user’s own risk.
        </p>
      </section>
    </LegalPage>
  );
}
