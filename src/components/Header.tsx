import { Mail, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { EMAIL } from '../data/links';
import { LanguageSwitch } from './LanguageSwitch';
import { ThemeToggle } from './ThemeToggle';

const SECTIONS = [
  { id: 'projets', key: 'nav.projects' },
  { id: 'expertise', key: 'nav.expertise' },
  { id: 'parcours', key: 'nav.career' },
  { id: 'contact', key: 'nav.contact' },
] as const;

export function Header() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const links = SECTIONS.map(({ id, key }) => (
    <li key={id}>
      <a href={`#${id}`} onClick={() => setOpen(false)}>
        {t(key)}
      </a>
    </li>
  ));

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="brand" href="#top" aria-label={t('a11y.home')}>
          <span className="brand__mark" aria-hidden="true">
            QP
          </span>
          <span className="brand__name">Quentin Poullain</span>
        </a>

        <nav className="nav" aria-label={t('a11y.sections')}>
          <ul>{links}</ul>
        </nav>

        <div className="site-header__tools">
          <ThemeToggle />
          <LanguageSwitch />
          <a className="pill pill--primary pill--sm site-header__cta" href={`mailto:${EMAIL}`}>
            <Mail size={16} aria-hidden="true" />
            <span>{t('nav.cta')}</span>
          </a>
          <button
            type="button"
            className="icon-btn menu-btn"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={t(open ? 'a11y.menuClose' : 'a11y.menuOpen')}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav id="mobile-nav" className="mobile-nav" aria-label={t('a11y.sections')} hidden={!open}>
        <ul className="container">{links}</ul>
      </nav>
    </header>
  );
}
