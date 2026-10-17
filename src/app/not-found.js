import Link from "next/link";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="wrap flex min-h-[70vh] flex-col items-start justify-center py-24">
      <p className="mono sec-label w-full">
        <b>[404]</b> Page not found
      </p>
      <h1 className="h2">
        This page <span className="serif">doesn&apos;t</span> exist.
      </h1>
      <p className="mt-6 max-w-[480px] text-muted">The link may be old or mistyped. The rest of the site is right where you left it.</p>
      <Link href="/" className="btn btn-primary mt-10">
        Back to home
      </Link>
    </section>
  );
}
