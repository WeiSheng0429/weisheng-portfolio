import { FaGithub } from "react-icons/fa";
import { projects } from "../data/resume";
import type { Project } from "../data/resume";
import SectionHeading from "./SectionHeading";

const TechList = ({ tech }: { tech: string[] }) => (
  <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
    {tech.map((item) => (
      <li
        key={item}
        className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
      >
        {item}
      </li>
    ))}
  </ul>
);

const GithubLink = ({ project }: { project: Project }) => (
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`View ${project.title} on GitHub (opens in a new tab)`}
    className="inline-flex items-center gap-2 text-cyan-400 transition hover:text-cyan-300"
  >
    <FaGithub size={18} aria-hidden="true" />
    View on GitHub
  </a>
);

const Projects = () => {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="bg-slate-950 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="projects-heading"
          title="Projects"
          description="Projects I built during my Computer Science degree, plus the portfolio site that came before this one."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((project) => (
            <article
              key={project.title}
              className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:border-cyan-400"
            >
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <p className="mt-1 text-cyan-400">{project.subtitle}</p>

              <p className="mt-5 leading-relaxed text-slate-300">
                {project.description}
              </p>

              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-400">
                {project.highlights.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="text-cyan-400" aria-hidden="true">
                      ▹
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <TechList tech={project.tech} />
                <div className="mt-6">
                  <GithubLink project={project} />
                </div>
              </div>
            </article>
          ))}
        </div>

        {others.map((project) => (
          <article
            key={project.title}
            className="mt-6 grid gap-6 rounded-2xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:border-cyan-400 md:grid-cols-[1fr_auto] md:items-center"
          >
            <div>
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="mt-3 max-w-2xl leading-relaxed text-slate-400">
                {project.description}
              </p>
              <div className="mt-5">
                <TechList tech={project.tech} />
              </div>
            </div>
            <GithubLink project={project} />
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
