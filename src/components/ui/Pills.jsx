export function Pills({ items, className = "", style }) {
  return (
    <ul className={`m-0 flex list-none flex-wrap gap-2 p-0 ${className}`} style={style}>
      {items.map((item) => (
        <li key={item} className="pill">
          {item}
        </li>
      ))}
    </ul>
  );
}
