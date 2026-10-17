import fs from "node:fs";
import path from "node:path";
import { hero, site } from "@/content/site";
import { ArrowRight } from "@/components/ui/icons";
import { HeroScene } from "./HeroScene";

const hasResume = fs.existsSync(path.join(process.cwd(), "public", site.resume));

const lines = [
  <>
    I build <span className="serif">Shopify&nbsp;apps,</span>
  </>,
  "full-stack products",
  "& AI automation.",
];

export function Hero() {
  return (
    <section
      id="top"
      className="wrap grid grid-cols-1 items-center gap-6 pt-10 pb-12 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:pt-10"
    >
      <div className="min-w-0">
        <p className="mono rise mb-[30px] flex items-center gap-3 text-accent" style={{ "--delay": "0.05s" }}>
          <span className="dot" />
          {hero.eyebrow}
        </p>

        <h1 className="display m-0 text-[clamp(2.75rem,1.2rem+5.2vw,4.875rem)] leading-[0.98] tracking-[-0.035em]">
          {lines.map((line, i) => (
            <span key={i} className="line-mask">
              <span className="rise block" style={{ "--delay": `${0.1 + i * 0.1}s` }}>
                {line}
              </span>
            </span>
          ))}
        </h1>

        <p
          className="rise mt-[34px] max-w-[540px] text-[17px] text-muted sm:text-[19px]"
          style={{ "--delay": "0.35s" }}
        >
          {hero.paragraph}
        </p>

        <div className="rise mt-10 flex flex-wrap gap-3.5" style={{ "--delay": "0.45s" }}>
          <a href="#work" className="btn btn-primary">
            See selected work
            <ArrowRight />
          </a>
          {hasResume ? (
            <a href={site.resume} className="btn btn-outline" download>
              Download résumé
            </a>
          ) : (
            <a href="#contact" className="btn btn-outline">
              Get in touch
            </a>
          )}
        </div>

        <ul
          className="mono rise m-0 mt-11 flex list-none flex-wrap gap-x-7 gap-y-2.5 p-0 text-[13px] tracking-[0.02em] normal-case"
          style={{ "--delay": "0.55s" }}
        >
          {hero.proof.map((item) => (
            <li key={item.label}>
              <b className="font-medium text-text">{item.value}</b> {item.label}
            </li>
          ))}
        </ul>
      </div>

      <HeroScene />
    </section>
  );
}
