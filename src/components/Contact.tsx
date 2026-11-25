import { ArrowUpRight, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from '../data/links';
import { GithubMark } from './GithubMark';
import { LinkedinMark } from './LinkedinMark';

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
              QuentinPN
            </span>
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <a className="contact__link" href={LINKEDIN_URL}>
            <LinkedinMark size={22} />
            <span>
              linkedin.com/in/<wbr />
              poullain-quentin
            </span>
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
