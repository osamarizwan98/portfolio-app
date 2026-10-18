import { marquee } from "@/content/site";

function Words({ hidden }) {
  return (
    <span aria-hidden={hidden || undefined} className="display text-[22px] whitespace-nowrap text-muted sm:text-[30px]">
      {marquee.map((word) => (
        <span key={word}>
          {word} <span className="serif">/</span>{" "}
        </span>
      ))}
    </span>
  );
}

export function Marquee() {
  return (
    <div aria-hidden="true" className="marquee overflow-hidden border-y border-line bg-[#070b09] py-[18px] sm:py-[22px]">
      <div className="marquee-track">
        <Words />
        <Words hidden />
      </div>
    </div>
  );
}
