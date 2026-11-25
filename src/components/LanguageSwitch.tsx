import { useTranslation } from 'react-i18next';
import { LANGUAGES } from '../i18n';

export function LanguageSwitch() {
  const { t, i18n } = useTranslation();
  const active = i18n.resolvedLanguage;

  return (
    <div className="lang" role="group" aria-label={t('a11y.language')}>
      {LANGUAGES.map((lng) => (
        <button
          key={lng}
          type="button"
          lang={lng}
          className="lang__btn"
          aria-pressed={active === lng}
          onClick={() => void i18n.changeLanguage(lng)}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
