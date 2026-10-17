"use client";

export default function Error({ reset }) {
  return (
    <section className="wrap flex min-h-[70vh] flex-col items-start justify-center py-24">
      <p className="mono sec-label w-full">
        <b>[!]</b> Something went wrong
      </p>
      <h2 className="h2">
        That didn&apos;t <span className="serif">hold up</span>.
      </h2>
      <p className="mt-6 max-w-[480px] text-muted">An unexpected error occurred. Please try again.</p>
      <button type="button" onClick={reset} className="btn btn-primary mt-10">
        Try again
      </button>
    </section>
  );
}
