type Props = { items: string[]; label?: string };

export function Tags({ items, label }: Props) {
  return (
    <ul className="tags" aria-label={label}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
