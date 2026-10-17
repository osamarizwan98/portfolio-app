import { education, experienceIntro, roles } from "@/content/experience";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { Pills } from "@/components/ui/Pills";

export function Experience() {
  return (
    <section id="experience" className="wrap section grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,392fr)_minmax(0,704fr)] lg:gap-16">
      <Reveal className="min-w-0 lg:sticky lg:top-[110px]">
        <SectionLabel index="03">Experience</SectionLabel>
        <h2 className="h2">
          Six years, one <span className="serif">stack</span> widening.
        </h2>
        <p className="mt-7 max-w-[340px] text-muted">{experienceIntro}</p>
        <div className="mt-9 flex flex-col gap-1.5">
          <span className="mono">Education</span>
          <span>{education[0]}</span>
          <span className="text-muted">{education[1]}</span>
        </div>
        <p className="mono mt-9 hidden text-accent md:block">Scroll: each role stacks on the last ↓</p>
      </Reveal>

      <ol className="m-0 min-w-0 list-none p-0">
        {roles.map((role, i) => (
          <li key={role.period} className="deck-card" style={{ "--i": i }}>
            <article>
              <div className="mb-6 flex h-[26px] items-center justify-between gap-4 md:mb-7">
                <span className="mono text-accent">{role.period}</span>
                <span className="mono text-right">{role.company}</span>
              </div>
              <div className="flex flex-wrap items-end justify-between gap-6">
                <div className="min-w-0 flex-[1_1_320px]">
                  <h3 className="display m-0 mb-3 text-[26px] leading-[1.1] tracking-[-0.02em] sm:text-[32px]">{role.title}</h3>
                  <p className="m-0 mb-[18px] max-w-[520px] text-muted">{role.description}</p>
                  <Pills items={role.pills} />
                </div>
                <div className="bignum max-sm:hidden" aria-hidden="true">
                  {role.year}
                </div>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
