import { faq } from "@/content/site";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { Plus } from "@/components/ui/icons";

export function Faq() {
  return (
    <section id="faq" className="wrap section grid grid-cols-1 gap-9 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-14">
      <Reveal>
        <SectionLabel index="07">FAQ</SectionLabel>
        <h2 className="h2">
          Quick <span className="serif">answers</span>.
        </h2>
      </Reveal>
      <Reveal className="min-w-0 border-b border-line">
        {faq.map((item) => (
          <details key={item.q} className="faq">
            <summary>
              {item.q}
              <span className="plus" aria-hidden="true">
                <Plus />
              </span>
            </summary>
            <p className="ans">{item.a}</p>
          </details>
        ))}
      </Reveal>
    </section>
  );
}
