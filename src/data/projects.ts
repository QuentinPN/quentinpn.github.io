import type { ParseKeys } from 'i18next';
import type { LucideIcon } from 'lucide-react';
import { Clapperboard, LayoutDashboard, PackageX, PawPrint, Terminal } from 'lucide-react';
import hubShot from '../assets/projects/hub.webp';
import requestShot from '../assets/projects/request.webp';

export type FeaturedProject = {
  id: 'admissionsHub' | 'viewer';
  name: string;
  kindKey: ParseKeys;
  taglineKey: ParseKeys;
  descriptionKey: ParseKeys;
  stack: string[];
  repo: string;
};

/** Screenshot shown cropped to its top part in a small card. */
export type Thumbnail = { src: string; width: number; height: number; altKey: ParseKeys };

export type Project = {
  id: string;
  name: string;
  icon: LucideIcon;
  descriptionKey: ParseKeys;
  stack: string[];
  repo: string;
  thumbnail?: Thumbnail;
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
    id: 'viewer',
    name: 'Viewer',
    kindKey: 'projects.items.viewer.kind',
    taglineKey: 'projects.items.viewer.tagline',
    descriptionKey: 'projects.items.viewer.description',
    stack: ['Go', 'Wails', 'Svelte 5', 'TypeScript', 'Kotlin'],
    repo: 'https://github.com/QuentinPN/viewer',
  },
];

export const projects: Project[] = [
  {
    id: 'hub',
    name: 'Hub',
    icon: LayoutDashboard,
    descriptionKey: 'projects.items.hub.description',
    stack: ['Go', 'PostgreSQL', 'Svelte', 'Docker'],
    repo: 'https://github.com/QuentinPN/hub',
    thumbnail: { src: hubShot, width: 1600, height: 1238, altKey: 'projects.items.hub.thumbAlt' },
  },
  {
    id: 'request',
    name: 'Request',
    icon: Clapperboard,
    descriptionKey: 'projects.items.request.description',
    stack: ['TypeScript', 'Node.js', 'Docker'],
    repo: 'https://github.com/QuentinPN/request',
    thumbnail: { src: requestShot, width: 1227, height: 1032, altKey: 'projects.items.request.thumbAlt' },
  },
  {
    id: 'uninstaller',
    name: 'Uninstaller',
    icon: PackageX,
    descriptionKey: 'projects.items.uninstaller.description',
    stack: ['Tauri 2', 'Svelte 5', 'Rust'],
    repo: 'https://github.com/QuentinPN/uninstaller',
  },
  {
    id: 'cleanup',
    name: 'claude-remote-control-cleanup',
    icon: Terminal,
    descriptionKey: 'projects.items.cleanup.description',
    stack: ['Python'],
    repo: 'https://github.com/QuentinPN/claude-remote-control-cleanup',
  },
  {
    id: 'pokefeet',
    name: 'Pokefeet',
    icon: PawPrint,
    descriptionKey: 'projects.items.pokefeet.description',
    stack: ['C#', 'Blazor Server', 'JavaScript', 'Docker'],
    repo: 'https://github.com/QuentinPN/Pokefeet',
  },
];
