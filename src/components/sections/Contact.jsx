import { site } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "./ContactForm";

const socials = [
  { label: "LinkedIn", href: site.links.linkedin },
  { label: "GitHub", href: site.links.github },
  { label: "Upwork", href: site.links.upwork },
];

export function Contact() {
  return (
    <section id="contact" className="wrap section">
      <Reveal className="relative grid grid-cols-1 gap-14 overflow-hidden rounded-(--radius-panel) border border-line bg-[#0a100d] px-5 py-12 sm:rounded-(--radius-panel-lg) sm:px-10 sm:py-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:px-[60px] lg:py-20">
        <div
          aria-hidden="true"
          className="hero-glow -top-40 -right-30 size-[520px] bg-[radial-gradient(circle,rgb(61_220_151/0.16),rgb(61_220_151/0)_65%)]"
        />
        <div className="relative min-w-0">
          <p className="mono mb-[26px] flex items-center gap-3 text-accent">
            <span className="dot" />
            Available for new work
          </p>
          <h2 className="display m-0 text-[clamp(2.75rem,1.6rem+3.6vw,4.5rem)] leading-[0.98] tracking-[-0.035em]">
            Let&apos;s build something that <span className="serif">holds up</span>.
          </h2>
          <p className="mt-7 max-w-[440px] text-muted">
            Tell me what&apos;s broken or what you want to build. Average reply time is about an hour.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href={`mailto:${site.email}`} className="btn btn-primary max-sm:px-5 max-sm:text-[15px]">
              {site.email}
            </a>
            <a href={site.links.fiverr} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Hire on Fiverr
            </a>
          </div>
          <ul className="mono m-0 mt-9 flex list-none flex-wrap gap-x-7 gap-y-3 p-0">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="ul nav-link -my-3.5 inline-block py-3.5">
                  {s.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
        <ContactForm />
      </Reveal>
    </section>
  );
}
