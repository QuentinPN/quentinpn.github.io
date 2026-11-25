import type { ParseKeys } from 'i18next';
import type { LucideIcon } from 'lucide-react';
import { Building2, Code, Workflow } from 'lucide-react';

export type ExpertiseArea = {
  id: string;
  icon: LucideIcon;
  titleKey: ParseKeys;
  textKey: ParseKeys;
  stack: string[];
};

export const expertiseAreas: ExpertiseArea[] = [
  {
    id: 'business',
    icon: Building2,
    titleKey: 'expertise.items.business.title',
    textKey: 'expertise.items.business.text',
    stack: ['C#', '.NET', 'Blazor', 'MudBlazor'],
  },
  {
    id: 'web',
    icon: Code,
    titleKey: 'expertise.items.web.title',
    textKey: 'expertise.items.web.text',
    stack: ['TypeScript', 'React', 'Vue.js', 'Node.js / Express', 'PostgreSQL', 'MySQL'],
  },
  {
    id: 'lifecycle',
    icon: Workflow,
    titleKey: 'expertise.items.lifecycle.title',
    textKey: 'expertise.items.lifecycle.text',
    stack: ['Git', 'Docker', 'Linux', 'CI'],
  },
];

/** Wider tool belt shown under the three cards, from the CV skills list. */
export const toolbelt = [
  'C#',
  '.NET',
  'Blazor',
  'JavaScript',
  'TypeScript',
  'React',
  'Vue.js',
  'Quasar',
  'Node.js',
  'SQL',
  'PostgreSQL',
  'MySQL / MariaDB',
  'Python',
  'PHP',
  'Docker',
  'Linux',
  'Git',
];
