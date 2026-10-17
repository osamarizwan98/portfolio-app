const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  "aria-hidden": true,
  focusable: false,
};

export function ArrowRight({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" {...base}>
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export function ArrowLeft() {
  return (
    <svg width={20} height={20} viewBox="0 0 16 16" {...base}>
      <path d="M13 8H3M7 4L3 8l4 4" />
    </svg>
  );
}

export function Plus() {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" {...base}>
      <path d="M8 2v12M2 8h12" />
    </svg>
  );
}

export function Menu() {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" {...base}>
      <path d="M3 6h14M3 14h14" />
    </svg>
  );
}

export function Close() {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" {...base}>
      <path d="M5 5l10 10M15 5L5 15" />
    </svg>
  );
}
