import '@fontsource-variable/bricolage-grotesque';
import '@fontsource-variable/instrument-sans';
import './styles.css';
import './i18n';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

const motionOk = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (motionOk && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('reveal');
}

const root = document.getElementById('root');
if (!root) throw new Error('Missing #root element');

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
