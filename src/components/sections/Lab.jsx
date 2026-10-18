import { labRows } from "@/content/work";
import { site } from "@/content/site";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

export function Lab() {
  return (
    <section id="lab" className="wrap section">
      <Reveal>
        <SectionLabel index="04">Lab · open code</SectionLabel>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="h2">
            Things I build on <span className="serif">my own time</span>.
          </h2>
          <a href={site.links.github} target="_blank" rel="noopener noreferrer" className="ul mono text-accent">
            All repositories on GitHub ↗
          </a>
        </div>
      </Reveal>

      <ul className="m-0 mt-9 list-none border-b border-line p-0 md:mt-14">
        {labRows.map((row, i) => (
          <Reveal as="li" key={row.name} delay={i * 0.6}>
            <a
              href={row.href}
              target="_blank"
              rel="noopener noreferrer"
              className="lab-row grid grid-cols-[48px_1fr_24px] items-center gap-x-4 gap-y-1 border-t border-line py-5 sm:grid-cols-[56px_2fr_1fr_40px] sm:gap-x-8 sm:py-6"
            >
              <span className="mono text-accent">{row.year}</span>{" "}
              <span className="display text-[20px] leading-tight sm:text-[26px]">{row.name}</span>{" "}
              <span className="mono col-start-2 row-start-2 sm:col-auto sm:row-auto">{row.lang}</span>
              <span className="arrow mono col-start-3 row-span-2 row-start-1 text-accent sm:col-auto sm:row-auto" aria-hidden="true">
                ↗
              </span>
            </a>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
