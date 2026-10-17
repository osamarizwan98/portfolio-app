import { site } from "@/content/site";
import { MobileNav } from "./MobileNav";

export function SiteHeader() {
  return (
    <div className="wrap sticky top-[14px] z-50 pt-[14px]">
      <header className="flex items-center justify-between gap-4 rounded-full border border-line bg-[#080d0b] py-[10px] pr-3 pl-3 sm:pl-5">
        <a href="#top" className="display flex min-h-11 items-center gap-3 text-[17px] sm:text-[19px]">
          <span aria-hidden="true" className="inline-flex size-9 items-center justify-center rounded-full border border-line-2 text-[13px] text-accent">
            {site.initials}
          </span>
          {site.name}
        </a>

        <nav aria-label="Primary" className="mono hidden gap-[26px] md:flex">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} className="ul nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn btn-primary hidden min-h-11 px-[22px] text-[15px] md:inline-flex">
          <span className="dot bg-on-accent after:hidden" />
          Hire me
        </a>

        <MobileNav />
      </header>
    </div>
  );
}
