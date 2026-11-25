import { describe, expect, it } from 'vitest';
import { careerEntries } from './data/career';
import { expertiseAreas, toolbelt } from './data/expertise';
import { marqueeItems } from './data/marquee';
import { featuredProjects, projects } from './data/projects';
import en from './locales/en.json';
import fr from './locales/fr.json';

type Tree = { [key: string]: string | Tree };

function keys(tree: Tree, prefix = ''): string[] {
  return Object.entries(tree).flatMap(([key, value]) =>
    typeof value === 'string' ? [`${prefix}${key}`] : keys(value, `${prefix}${key}.`),
  );
}

describe('content', () => {
  it('French and English locales define exactly the same keys', () => {
    expect(keys(en).sort()).toEqual(keys(fr).sort());
  });

  it('never mentions the "Ushy" brand in copy or data', () => {
    const published = JSON.stringify([
      fr,
      en,
      featuredProjects,
      projects,
      expertiseAreas,
      toolbelt,
      careerEntries,
      marqueeItems,
    ]);
    expect(published).not.toMatch(/ushy/i);
  });
});
