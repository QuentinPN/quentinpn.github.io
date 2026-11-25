import { useTranslation } from 'react-i18next';
import { careerEntries } from '../data/career';

export function Career() {
  const { t } = useTranslation();

  return (
    <section id="parcours" className="section container career" aria-labelledby="career-title">
      <div className="career__intro" data-reveal>
        <p className="eyebrow">{t('career.eyebrow')}</p>
        <h2 id="career-title" className="section-title">
          {t('career.title')}
        </h2>
        <dl className="stats">
          <div className="stat">
            <dt>{t('career.stats.yearsLabel')}</dt>
            <dd>{t('career.stats.yearsValue')}</dd>
          </div>
          <div className="stat">
            <dt>{t('career.stats.degreeLabel')}</dt>
            <dd>{t('career.stats.degreeValue')}</dd>
          </div>
        </dl>
      </div>

      <ol className="timeline">
        {careerEntries.map((entry) => (
          <li
            key={entry.id}
            className={`timeline__item${entry.current ? ' timeline__item--current' : ''}`}
            data-reveal
          >
            <span className="timeline__dot" aria-hidden="true" />
            <p className="timeline__meta">
              <span className={`kind kind--${entry.kind}`}>
                {t(entry.kind === 'job' ? 'career.kindJob' : 'career.kindSchool')}
              </span>
              <span>{t(entry.periodKey)}</span>
            </p>
            <h3 className="timeline__role">{t(entry.roleKey)}</h3>
            <p className="timeline__place">{t(entry.placeKey)}</p>
            {entry.textKey ? <p className="muted timeline__text">{t(entry.textKey)}</p> : null}
          </li>
        ))}
      </ol>
    </section>
  );
}
