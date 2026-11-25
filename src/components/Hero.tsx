import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { Trans, useTranslation } from 'react-i18next';
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from '../data/links';
import { GithubMark } from './GithubMark';
import { LinkedinMark } from './LinkedinMark';

// Drop a photo (avif, webp, jpg or png) in src/assets/avatar/ and it replaces the monogram.
const avatarFiles = import.meta.glob<string>('../assets/avatar/*.{avif,webp,jpg,jpeg,png}', {
  eager: true,
  import: 'default',
});
const avatarSrc = Object.values(avatarFiles)[0];

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero__text" data-reveal>
        <p className="badge">
          <span className="badge__dot" aria-hidden="true" />
          {t('hero.badge')}
        </p>
        <h1 id="hero-title" className="hero__title">
          <Trans i18nKey="hero.title" components={{ hl: <span className="hl" /> }} />
        </h1>
        <p className="hero__intro">{t('hero.intro')}</p>
        <div className="actions">
          <a className="pill pill--primary" href={`mailto:${EMAIL}`}>
            <Mail size={18} aria-hidden="true" />
            {t('hero.ctaContact')}
          </a>
          <a className="pill pill--ghost" href={GITHUB_URL}>
            <GithubMark />
            {t('hero.ctaGithub')}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <a className="pill pill--ghost" href={LINKEDIN_URL}>
            <LinkedinMark />
            {t('hero.ctaLinkedin')}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="hero__visual" data-reveal>
        <div className="portrait">
          {avatarSrc ? (
            <img className="portrait__photo" src={avatarSrc} alt={t('hero.avatarAlt')} width={320} height={320} />
          ) : (
            <span className="portrait__monogram" aria-hidden="true">
              QP
            </span>
          )}
        </div>
        <p className="chip chip--stat">
          <strong>{t('hero.xpValue')}</strong>
          <span>{t('hero.xpLabel')}</span>
        </p>
        <p className="chip chip--place">
          <MapPin size={15} aria-hidden="true" />
          {t('hero.location')}
        </p>
      </div>
    </section>
  );
}
