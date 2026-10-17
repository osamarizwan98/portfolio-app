import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { StackTabs } from "./StackTabs";

export function Stack() {
  return (
    <section id="stack" className="wrap section">
      <Reveal>
        <SectionLabel index="05">Stack</SectionLabel>
        <h2 className="h2">
          Tools I actually <span className="serif">ship</span> with.
        </h2>
      </Reveal>
      <StackTabs />
    </section>
  );
}
