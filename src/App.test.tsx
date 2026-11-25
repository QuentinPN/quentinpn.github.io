import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { App } from './App';
import { projects } from './data/projects';
import en from './locales/en.json';
import fr from './locales/fr.json';

const stripTags = (value: string) => value.replace(/<\/?\w+>/g, '');

describe('App', () => {
  it('switching to English translates the page and updates <html lang>', async () => {
    render(<App />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading.textContent).toBe(stripTags(fr.hero.title));

    const languages = screen.getByRole('group', { name: fr.a11y.language });
    await userEvent.click(within(languages).getByRole('button', { name: 'EN' }));

    expect(heading.textContent).toBe(stripTags(en.hero.title));
    expect(document.documentElement.lang).toBe('en');
  });

  it('private projects expose no link', () => {
    render(<App />);
    const privateProjects = projects.filter((project) => project.visibility === 'private');
    expect(privateProjects.length).toBeGreaterThan(0);

    for (const project of privateProjects) {
      const card = screen.getByRole('article', { name: project.name });
      expect(within(card).queryAllByRole('link')).toEqual([]);
    }
  });
});
