export function BundleMock() {
  return (
    <div
      role="img"
      aria-label="Illustration of the SmartBundle storefront widget"
      className="browser mock-3d flex min-h-[300px] flex-col"
    >
      <div className="browser-bar">
        <i />
        <i />
        <i />
        <span className="mono ml-2.5 text-[11px]">SmartBundle · storefront widget</span>
        <span className="mono ml-auto text-[11px] text-accent">Illustration</span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        <div className="flex items-center gap-2 sm:gap-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex flex-1 items-center gap-2 sm:gap-3">
              {i > 0 && (
                <span aria-hidden="true" className="text-accent">
                  +
                </span>
              )}
              <div className="aspect-square flex-1 rounded-xl border border-line bg-[linear-gradient(140deg,#16201b,#0b120f)] p-2">
                <div className="h-full rounded-lg bg-[radial-gradient(circle_at_30%_30%,rgb(61_220_151/0.25),transparent_60%)]" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="tier flex items-center justify-between gap-3 rounded-[10px] border border-line px-3 py-2.5"
              style={{ "--s": `${i * 3}s` }}
            >
              <span className="flex items-center gap-2.5">
                <span className="size-3 rounded-full border border-line-2" />
                <span className="bb" style={{ width: 60 + i * 18 }} />
              </span>
              <span className="bb w-10 bg-[#24423a]" />
            </div>
          ))}
        </div>

        <div className="sheen-btn mt-auto flex h-10 items-center justify-center rounded-full bg-accent">
          <span className="bb w-28 bg-on-accent/60" />
        </div>
      </div>
    </div>
  );
}
