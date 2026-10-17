export function SectionLabel({ index, children }) {
  return (
    <p className="mono sec-label">
      <b>[{index}]</b>
      {children}
    </p>
  );
}
