import type { ParseKeys } from 'i18next';
import type { LucideIcon } from 'lucide-react';
import { Clapperboard, LayoutDashboard, PackageX, Terminal, Tv } from 'lucide-react';

type Visibility =
  | { visibility: 'public'; repo: string }
  /** Private repositories are listed without any link. */
  | { visibility: 'private' };

export type FeaturedProject = {
  id: 'admissionsHub' | 'pokefeet';
  name: string;
  kindKey: ParseKeys;
  taglineKey: ParseKeys;
  descriptionKey: ParseKeys;
  stack: string[];
  repo: string;
};

export type Project = Visibility & {
  id: string;
  name: string;
  icon: LucideIcon;
  descriptionKey: ParseKeys;
  stack: string[];
};

export const featuredProjects: FeaturedProject[] = [
  {
    id: 'admissionsHub',
    name: 'Admissions Hub',
    kindKey: 'projects.items.admissionsHub.kind',
    taglineKey: 'projects.items.admissionsHub.tagline',
    descriptionKey: 'projects.items.admissionsHub.description',
    stack: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Drizzle', 'Docker'],
    repo: 'https://github.com/QuentinPN/admissions-hub',
  },
  {
    id: 'pokefeet',
    name: 'Pokefeet',
    kindKey: 'projects.items.pokefeet.kind',
    taglineKey: 'projects.items.pokefeet.tagline',
    descriptionKey: 'projects.items.pokefeet.description',
    stack: ['C#', 'Blazor Server', 'JavaScript', 'Docker'],
    repo: 'https://github.com/QuentinPN/Pokefeet',
  },
];

export const projects: Project[] = [
  {
    id: 'cleanup',
    name: 'claude-remote-control-cleanup',
    icon: Terminal,
    descriptionKey: 'projects.items.cleanup.description',
    stack: ['Python'],
    visibility: 'public',
    repo: 'https://github.com/QuentinPN/claude-remote-control-cleanup',
  },
  {
    id: 'hub',
    name: 'Hub',
    icon: LayoutDashboard,
    descriptionKey: 'projects.items.hub.description',
    stack: ['Go', 'PostgreSQL', 'Svelte', 'Docker'],
    visibility: 'private',
  },
  {
    id: 'request',
    name: 'Request',
    icon: Clapperboard,
    descriptionKey: 'projects.items.request.description',
    stack: ['TypeScript', 'Node.js', 'Docker'],
    visibility: 'private',
  },
  {
    id: 'viewer',
    name: 'Viewer',
    icon: Tv,
    descriptionKey: 'projects.items.viewer.description',
    stack: ['Go', 'Wails', 'Svelte 5', 'TypeScript', 'Kotlin'],
    visibility: 'private',
  },
  {
    id: 'uninstaller',
    name: 'Uninstaller',
    icon: PackageX,
    descriptionKey: 'projects.items.uninstaller.description',
    stack: ['Tauri 2', 'Svelte 5', 'Rust'],
    visibility: 'private',
  },
];
