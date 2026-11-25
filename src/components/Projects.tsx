import { ArrowUpRight, Lock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { featuredProjects, projects, type FeaturedProject, type Project } from '../data/projects';
import { GithubMark } from './GithubMark';
import { AdmissionsHubCover, PokefeetCover } from './ProjectCovers';
import { SectionHeading } from './SectionHeading';
import { Tags } from './Tags';

function FeaturedCard({ project }: { project: FeaturedProject }) {
  const { t } = useTranslation();
  const titleId = `project-${project.id}`;

  return (
    <article className="feature-card" aria-labelledby={titleId} data-reveal>
      {project.id === 'admissionsHub' ? (
        <AdmissionsHubCover alt={t('projects.items.admissionsHub.coverAlt')} />
      ) : (
        <PokefeetCover />
      )}
      <div className="feature-card__body">
        <p className="meta">
          {t(project.kindKey)} · {t('projects.public')}
        </p>
        <h3 id={titleId} className="feature-card__name">
          {project.name}
        </h3>
        <p className="feature-card__tagline">{t(project.taglineKey)}</p>
        <p className="muted">{t(project.descriptionKey)}</p>
        <Tags items={project.stack} />
        <a className="pill pill--ghost pill--sm feature-card__link" href={project.repo}>
          <GithubMark size={16} />
          {t('projects.source')}
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const { t } = useTranslation();
  const Icon = project.icon;
  const titleId = `project-${project.id}`;

  return (
    <article className={`project-card project-card--${project.id}`} aria-labelledby={titleId} data-reveal>
      <div className="project-card__top">
        <span className="icon-tile" aria-hidden="true">
          <Icon size={18} />
        </span>
        {project.visibility === 'private' ? (
          <span className="state">
            <Lock size={14} aria-hidden="true" />
            {t('projects.private')}
          </span>
        ) : (
          <span className="state state--public">{t('projects.public')}</span>
        )}
      </div>
      <h3 id={titleId} className="project-card__name">
        {project.name}
      </h3>
      <p className="muted">{t(project.descriptionKey)}</p>
      <Tags items={project.stack} />
      {project.visibility === 'public' ? (
        <a className="text-link" href={project.repo}>
          {t('projects.source')}
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      ) : null}
    </article>
  );
}

export function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projets" className="section container" aria-labelledby="projects-title">
      <SectionHeading
        id="projects-title"
        eyebrow={t('projects.eyebrow')}
        title={t('projects.title')}
        aside={<p className="muted">{t('projects.intro')}</p>}
      />
      <div className="featured-grid">
        {featuredProjects.map((project) => (
          <FeaturedCard key={project.id} project={project} />
        ))}
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
