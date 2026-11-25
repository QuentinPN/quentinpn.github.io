import { ArrowUpRight, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { EMAIL, GITHUB_URL } from '../data/links';
import { GithubMark } from './GithubMark';

export function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="section container" aria-labelledby="contact-title">
      <div className="contact" data-reveal>
        <p className="eyebrow">{t('contact.eyebrow')}</p>
        <h2 id="contact-title" className="contact__title">
          {t('contact.title')}
        </h2>
        <p className="contact__text">{t('contact.text')}</p>
        <div className="contact__links">
          <a className="contact__link" href={`mailto:${EMAIL}`}>
            <Mail size={22} aria-hidden="true" />
            <span>{EMAIL}</span>
          </a>
          <a className="contact__link" href={GITHUB_URL}>
            <GithubMark size={22} />
            <span>
              github.com/<wbr />
              Lachetquentin
            </span>
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
