import { GraduationCap } from "lucide-react";
import { education } from "../data/resume";
import SectionHeading from "./SectionHeading";

const Education = () => (
  <section
    id="education"
    aria-labelledby="education-heading"
    className="bg-slate-950 px-6 py-24"
  >
    <div className="mx-auto max-w-6xl">
      <SectionHeading id="education-heading" title="Education" />

      <div className="grid gap-6 md:grid-cols-2">
        {education.map((item) => (
          <article
            key={item.degree}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-8"
          >
            <GraduationCap
              className="text-cyan-400"
              size={28}
              aria-hidden="true"
            />
            <h3 className="mt-5 text-xl font-bold text-white">{item.degree}</h3>
            <p className="mt-2 text-slate-300">{item.school}</p>
            <p className="mt-1 text-sm text-slate-400">{item.period}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
