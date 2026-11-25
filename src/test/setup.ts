import { cleanup } from '@testing-library/react';
import { afterEach, beforeEach } from 'vitest';
import i18n from '../i18n';

// jsdom lacks these browser APIs; the app only reads them.
window.matchMedia ??= (query: string) =>
  ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: () => undefined,
    removeEventListener: () => undefined,
    addListener: () => undefined,
    removeListener: () => undefined,
    dispatchEvent: () => false,
  }) as MediaQueryList;

beforeEach(async () => {
  localStorage.clear();
  await i18n.changeLanguage('fr');
});

afterEach(() => {
  cleanup();
});
