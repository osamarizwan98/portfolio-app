import { clientWork, flagship, labTiles } from "@/content/work";
import { site } from "@/content/site";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/icons";
import { Pills } from "@/components/ui/Pills";
import { BundleMock } from "./BundleMock";

export function Work() {
  return (
    <section id="work" className="wrap section">
      <Reveal>
        <SectionLabel index="01">Selected work · field reports</SectionLabel>
        <h2 className="h2">
          Work that is <span className="serif">live</span>, not mock-ups.
        </h2>
      </Reveal>

      <Reveal className="mt-9 md:mt-14">
      <article className="card grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <div className="flex min-w-0 flex-col justify-between gap-8 p-6 sm:p-11">
          <div>
            <p className="mono mb-[18px] text-accent">{flagship.label}</p>
            <h3 className="display m-0 text-[40px] leading-none tracking-[-0.03em] sm:text-[56px]">{flagship.title}</h3>
            <p className="mt-5 max-w-[480px] text-muted">{flagship.description}</p>
            <ul className="m-0 mt-6 flex list-none flex-col gap-2.5 p-0 text-[15px]">
              {flagship.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span aria-hidden="true" className="text-accent">
                    →
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[15px] text-muted">
              <span className="text-text">My role:</span> {flagship.role}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={site.links.smartbundle}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary min-h-12 px-6 text-[15px]"
            >
              {flagship.cta}
              <ArrowRight />
            </a>
            <Pills items={flagship.stack} />
          </div>
        </div>

        <div className="flex min-w-0 flex-col justify-center gap-[18px] border-line bg-[#08100c] p-5 max-lg:border-t sm:p-9 lg:border-l">
          <BundleMock />
          <Pills items={flagship.screens} />
        </div>
      </article>
      </Reveal>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-6">
        {clientWork.map((item, i) => (
          <Reveal key={item.id} delay={i} className="md:col-span-3">
            <article className="card flex h-full min-h-[300px] flex-col justify-between gap-10 p-6 sm:gap-14 sm:p-9">
              <div className="flex items-start justify-between gap-4">
                <span className="mono">{item.meta}</span>
                <span className="mono text-right">{item.source}</span>
              </div>
              <div>
                <h3 className="display m-0 text-[26px] leading-[1.1] tracking-[-0.02em] sm:text-[32px]">
                  {item.title} <span className="serif">{item.accent}</span>
                </h3>
                <p className="mt-3 text-[15px] text-muted">
                  {item.description} <span className="text-text">{item.result}</span>
                </p>
              </div>
              <Pills items={item.pills} />
            </article>
          </Reveal>
        ))}

        {labTiles.map((tile, i) => (
          <Reveal key={tile.name} delay={i} className="md:col-span-2">
            <a
              href={tile.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card flex h-full min-h-[230px] flex-col justify-between gap-10 p-6 sm:p-[30px]"
            >
              <div className="flex justify-between gap-4">
                <span className="mono">Lab · {tile.year}</span>
                <span className="mono text-accent">{tile.linkLabel} ↗</span>
              </div>
              <div>
                <h3 className="display m-0 text-[26px] leading-tight">{tile.name}</h3>
                <p className="mt-2 text-[15px] text-muted">{tile.description}</p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
