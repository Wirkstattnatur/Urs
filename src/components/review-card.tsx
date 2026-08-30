import { useId, useState } from "react";
import { googleMapsUrl } from "@/lib/seo";

const REVIEW_PREVIEW_WORDS = 70;

type ReviewCardProps = {
  review: {
    author: string;
    language?: string;
    text: string;
  };
  labels: {
    collapse: string;
    expand: string;
    excerpt: string;
    googleLink: string;
    stars: string;
  };
  quotationMarks: readonly [string, string];
};

function getReviewPreview(text: string) {
  const words = text.trim().split(/\s+/);

  return {
    isTruncated: words.length > REVIEW_PREVIEW_WORDS,
    preview: words.slice(0, REVIEW_PREVIEW_WORDS).join(" "),
  };
}

export function ReviewCard({ review, labels, quotationMarks }: ReviewCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const reviewBodyId = useId();
  const { isTruncated, preview } = getReviewPreview(review.text);
  const displayedText = isExpanded || !isTruncated ? review.text : preview;

  return (
    <article className="site-card site-card-interactive p-7">
      <div className="flex items-center gap-4">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary font-display text-xl text-primary-foreground">
          {review.author.charAt(0)}
        </span>
        <div>
          <h3 className="font-sans text-base font-semibold">{review.author}</h3>
          <p
            className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm"
            aria-label={labels.stars}
          >
            <span className="tracking-wider text-amber-500" aria-hidden="true">
              ★★★★★
            </span>
            <span className="text-muted-foreground">
              {labels.excerpt} ·{" "}
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-sm font-medium underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {labels.googleLink}
              </a>
            </span>
          </p>
        </div>
      </div>
      <blockquote
        id={reviewBodyId}
        lang={review.language}
        className="mt-6 text-base leading-relaxed text-foreground/85"
      >
        {quotationMarks[0]}
        {displayedText}
        {isTruncated && !isExpanded ? " …" : ""}
        {quotationMarks[1]}
      </blockquote>
      {isTruncated ? (
        <button
          type="button"
          aria-expanded={isExpanded}
          aria-controls={reviewBodyId}
          onClick={() => setIsExpanded((expanded) => !expanded)}
          className="mt-4 inline-flex min-h-11 items-center rounded-control font-semibold text-primary underline-offset-4 transition-colors hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          {isExpanded ? labels.collapse : labels.expand}
        </button>
      ) : null}
    </article>
  );
}
