import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { marqueeItems } from '../data/marquee';

/** The list is rendered twice so the strip loops seamlessly; the copy is hidden from assistive tech. */
function Row({ copy = false }: { copy?: boolean }) {
  return (
    <ul className="marquee__row" aria-hidden={copy || undefined}>
      {marqueeItems.map((item) => (
        <Fragment key={item}>
          <li>{item}</li>
          <li className="marquee__sep" aria-hidden="true" />
        </Fragment>
      ))}
    </ul>
  );
}

export function Marquee() {
  const { t } = useTranslation();

  return (
    <section className="marquee" aria-label={t('marquee.label')}>
      <div className="marquee__track">
        <Row />
        <Row copy />
      </div>
    </section>
  );
}
