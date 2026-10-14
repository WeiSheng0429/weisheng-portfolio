import { skillGroups } from "../data/resume";
import SectionHeading from "./SectionHeading";

const Skills = () => (
  <section
    id="skills"
    aria-labelledby="skills-heading"
    className="bg-slate-950 px-6 py-24"
  >
    <div className="mx-auto max-w-6xl">
      <SectionHeading
        id="skills-heading"
        title="Technical skills"
        description="The languages, frameworks, and tools I've used to build my projects."
      />

      <dl className="divide-y divide-slate-800 rounded-2xl border border-slate-800 bg-slate-900">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="grid gap-4 p-6 md:grid-cols-[200px_1fr] md:items-center"
          >
            <dt className="text-lg font-semibold text-white">{group.title}</dt>
            <dd>
              <ul className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300 transition hover:text-cyan-400"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default Skills;
