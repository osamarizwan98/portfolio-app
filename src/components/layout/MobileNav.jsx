"use client";

import { useRef } from "react";
import { site } from "@/content/site";
import { Close, Menu } from "@/components/ui/icons";

export function MobileNav() {
  const dialogRef = useRef(null);

  const open = () => dialogRef.current?.showModal();
  const close = () => dialogRef.current?.close();

  const links = [...site.nav, { label: "Contact", href: "#contact" }];

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-label="Open menu"
        aria-haspopup="dialog"
        className="inline-flex size-11 items-center justify-center rounded-full border border-line-2 text-text transition-colors hover:border-accent md:hidden"
      >
        <Menu />
      </button>

      <dialog ref={dialogRef} aria-label="Menu" className="menu-dialog md:hidden">
        <div className="wrap flex items-center justify-between pt-[25px]">
          <span className="display flex items-center gap-3 text-[17px]">
            <span className="inline-flex size-9 items-center justify-center rounded-full border border-line-2 text-[13px] text-accent">
              {site.initials}
            </span>
            {site.name}
          </span>
          <button
            type="button"
            onClick={close}
            aria-label="Close menu"
            className="inline-flex size-11 items-center justify-center rounded-full border border-line-2 text-text transition-colors hover:border-accent"
          >
            <Close />
          </button>
        </div>

        <nav aria-label="Mobile" className="wrap mt-12 flex flex-1 flex-col">
          {links.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={close}
              style={{ "--k": i }}
              className="menu-item display flex items-center justify-between border-t border-line py-5 text-[40px] leading-none tracking-[-0.03em] transition-colors hover:text-accent"
            >
              {item.label}
              <span className="mono text-accent">0{i + 1}</span>
            </a>
          ))}
        </nav>

        <div className="wrap pb-10">
          <a href={`mailto:${site.email}`} className="btn btn-primary w-full">
            {site.email}
          </a>
        </div>
      </dialog>
    </>
  );
}
