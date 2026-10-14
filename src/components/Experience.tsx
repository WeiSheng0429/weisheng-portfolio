import { experience } from "../data/resume";
import SectionHeading from "./SectionHeading";

const Experience = () => (
  <section
    id="experience"
    aria-labelledby="experience-heading"
    className="bg-slate-950 px-6 py-24"
  >
    <div className="mx-auto max-w-6xl">
      <SectionHeading
        id="experience-heading"
        title="Work experience"
        description="Internship and event roles, newest first."
      />

      {/* Chronological timeline */}
      <ol className="ml-2 space-y-10 border-l border-slate-800">
        {experience.map((item) => (
          <li key={`${item.company}-${item.period}`} className="relative pl-8">
            <span
              aria-hidden="true"
              className="absolute top-2 -left-[5px] h-2.5 w-2.5 rounded-full bg-cyan-400 ring-4 ring-slate-950"
            />

            <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-6">
              <div>
                <h3 className="text-xl font-bold text-white">{item.role}</h3>
                <p className="mt-1 text-cyan-400">{item.company}</p>
              </div>
              <p className="text-sm text-slate-400">{item.period}</p>
            </div>

            <ul className="mt-4 max-w-2xl space-y-2 text-slate-300">
              {item.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="text-cyan-400" aria-hidden="true">
                    ▹
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
