import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="wrap pt-[72px]">
      <div className="wordmark-box overflow-hidden" aria-hidden="true">
        <span className="wordmark">OSAMA RIZWAN</span>
      </div>
      <div className="mt-9 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-9 pb-14 text-sm text-muted">
        <span>
          © {new Date().getFullYear()} {site.name} · {site.role} · Karachi
        </span>
        <span className="mono">Next.js · hosted on Vercel</span>
        <a href="#top" className="ul mono text-accent">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
