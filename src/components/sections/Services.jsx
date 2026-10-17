import { services, servicesFootnote } from "@/content/services";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { Pills } from "@/components/ui/Pills";
import { ServicesConsole } from "./ServicesConsole";
import { AiDiagram, AppsDiagram, FullStackDiagram, ThemesDiagram } from "./ServiceDiagrams";

const diagrams = {
  apps: AppsDiagram,
  themes: ThemesDiagram,
  fullstack: FullStackDiagram,
  ai: AiDiagram,
};

export function Services() {
  const panels = services.map((s, i) => {
    const Diagram = diagrams[s.id];
    return (
      <>
        <p className="mono in m-0 text-accent" style={{ "--k": 0 }}>
          0{i + 1} · {s.name}
        </p>
        <h3 className="in" style={{ "--k": 1 }}>
          {s.title}
        </h3>
        <p className="in m-0 max-w-[520px] text-base text-muted" style={{ "--k": 2 }}>
          {s.description}
        </p>
        <div className="viz in" style={{ "--k": 3 }}>
          <Diagram />
        </div>
        <Pills items={s.chips} className="in" style={{ "--k": 4 }} />
      </>
    );
  });

  return (
    <section id="services" className="wrap section">
      <Reveal>
        <SectionLabel index="02">Services</SectionLabel>
        <h2 className="h2">
          Four ways I can <span className="serif">help</span>.
        </h2>
      </Reveal>

      <Reveal>
        <ServicesConsole items={services.map(({ id, name, sub }) => ({ id, name, sub }))} panels={panels} />
      </Reveal>

      <p className="mt-8 max-w-[640px] text-muted">{servicesFootnote}</p>
    </section>
  );
}
