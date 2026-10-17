import { rating, reviewFragments, reviewMeta, reviews } from "@/content/reviews";
import { site } from "@/content/site";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { ReviewsSlider } from "./ReviewsSlider";

function Fragments({ hidden }) {
  return (
    <span aria-hidden={hidden || undefined} className="display text-[18px] whitespace-nowrap text-muted sm:text-[22px]">
      {reviewFragments.map((text) => (
        <span key={text} className="mr-11">
          <span className="stars">★★★★★</span>&nbsp; {text}
        </span>
      ))}
    </span>
  );
}

export function Reviews() {
  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="wrap section">
      <Reveal>
        <SectionLabel index="06">Client words · Fiverr</SectionLabel>
        <ReviewsSlider
          heading={
            <h2 id="reviews-heading" className="h2">
              What repeat clients <span className="serif">say</span>.
            </h2>
          }
        >
          <div className="card rev-card bg-surface-accent">
            <div className="display text-[104px] leading-[0.82] tracking-[-0.05em] text-accent sm:text-[132px]">{rating.score}</div>
            <div>
              <div className="mono text-text">{rating.summary}</div>
              <div className="mono mt-2">{rating.detail}</div>
            </div>
          </div>
          {reviews.map((review) => (
            <figure key={review.id} className="card rev-card">
              <div className="stars" role="img" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <blockquote className="display m-0 text-[26px] leading-[1.15] tracking-[-0.02em] sm:text-[32px]">
                &quot;{review.quote}&quot;
              </blockquote>
              <figcaption className="mono">
                {reviewMeta.client}
                <br />
                {reviewMeta.job} · {review.duration}
              </figcaption>
            </figure>
          ))}
        </ReviewsSlider>
      </Reveal>

      <div className="marquee mt-2 overflow-hidden border-y border-line py-[18px]" aria-hidden="true">
        <div className="marquee-track slow gap-0">
          <Fragments />
          <Fragments hidden />
        </div>
      </div>

      <p className="mt-6">
        <a href={site.links.fiverr} target="_blank" rel="noopener noreferrer" className="ul mono text-accent">
          Read all 86 reviews on Fiverr ↗
        </a>
      </p>
    </section>
  );
}
