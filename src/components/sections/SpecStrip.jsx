import { specs } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";

export function SpecStrip() {
  return (
    <section aria-label="At a glance" className="wrap">
      <dl className="m-0 grid grid-cols-2 border-b border-line lg:grid-cols-4">
        {specs.map((spec, i) => (
          <Reveal
            key={spec.label}
            delay={i}
            className="flex flex-col-reverse border-line py-7 pr-4 even:border-l even:pl-5 max-lg:nth-[n+3]:border-t lg:border-l lg:px-6 lg:py-9 lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0"
          >
            <dt className="mono mt-3">{spec.label}</dt>
            <dd className="display m-0 text-[40px] leading-none tracking-[-0.03em] sm:text-[52px]">
              {spec.value}
              <span className="serif text-[0.6em]"> {spec.unit}</span>
            </dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
