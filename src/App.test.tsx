import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { App } from './App';
import { featuredProjects, projects } from './data/projects';
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

  it('every project card links to its public repository', () => {
    render(<App />);

    for (const project of [...featuredProjects, ...projects]) {
      expect(project.repo).toMatch(/^https:\/\/github\.com\/QuentinPN\/[\w.-]+$/);
      const card = screen.getByRole('article', { name: project.name });
      const links = within(card).getAllByRole('link');
      expect(links.map((link) => link.getAttribute('href'))).toEqual([project.repo]);
    }
  });
});
