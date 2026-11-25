import { useTranslation } from 'react-i18next';
import { Career } from './components/Career';
import { Contact } from './components/Contact';
import { Expertise } from './components/Expertise';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Projects } from './components/Projects';
import { useReveal } from './useReveal';

export function App() {
  const { t } = useTranslation();
  useReveal();

  return (
    <>
      <a className="skip-link" href="#content">
        {t('a11y.skip')}
      </a>
      <Header />
      <main id="content">
        <Hero />
        <Marquee />
        <Projects />
        <Expertise />
        <Career />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="container site-footer__inner">
          <p>{t('footer.copyright')}</p>
          <a href="#top">{t('footer.top')}</a>
        </div>
      </footer>
    </>
  );
}
