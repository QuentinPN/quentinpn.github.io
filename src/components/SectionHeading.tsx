import type { ReactNode } from 'react';

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  aside?: ReactNode;
};

export function SectionHeading({ id, eyebrow, title, aside }: Props) {
  return (
    <header className="section-head" data-reveal>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={id} className="section-title">
          {title}
        </h2>
      </div>
      {aside ? <div className="section-head__aside">{aside}</div> : null}
    </header>
  );
}
