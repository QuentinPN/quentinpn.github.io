import { Bot } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { expertiseAreas, toolbelt } from '../data/expertise';
import { SectionHeading } from './SectionHeading';
import { Tags } from './Tags';

export function Expertise() {
  const { t } = useTranslation();

  return (
    <section id="expertise" className="section container" aria-labelledby="expertise-title">
      <SectionHeading id="expertise-title" eyebrow={t('expertise.eyebrow')} title={t('expertise.title')} />
      <div className="expertise-grid">
        {expertiseAreas.map(({ id, icon: Icon, titleKey, textKey, stack }) => (
          <article key={id} className="expertise-card" data-reveal>
            <span className="icon-tile icon-tile--soft" aria-hidden="true">
              <Icon size={20} />
            </span>
            <h3 className="expertise-card__title">{t(titleKey)}</h3>
            <p className="muted">{t(textKey)}</p>
            <Tags items={stack} />
          </article>
        ))}
      </div>
      <div className="toolbelt" data-reveal>
        <p className="toolbelt__label">{t('expertise.tagsLabel')}</p>
        <Tags items={toolbelt} label={t('expertise.tagsLabel')} />
      </div>
      <p className="ai-note" data-reveal>
        <Bot size={18} aria-hidden="true" />
        {t('expertise.ai')}
      </p>
    </section>
  );
}
