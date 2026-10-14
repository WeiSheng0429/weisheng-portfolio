import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { profile } from "../data/resume";

const stack = ["React", "TypeScript", "Node.js", "React Native", "Python"];

/** Each line of the code window, written as tokens so it can be coloured. */
const k = (t: string) => <span className="text-fuchsia-300">{t}</span>;
const s = (t: string) => <span className="text-emerald-300">{t}</span>;
const p = (t: string) => <span className="text-sky-300">{t}</span>;
const d = (t: string) => <span className="text-slate-500">{t}</span>;

const codeLines: ReactNode[] = [
  <>
    {k("const")} WeiSheng {d("=")} {"{"}
  </>,
  <>
    {"  "}
    {p("role")}: {s('"Junior Software Engineer"')},
  </>,
  <>
    {"  "}
    {p("degree")}: {s('"BSc Computer Science, University of London"')},
  </>,
  <>
    {"  "}
    {p("location")}: {s('"Singapore"')},
  </>,
  <>
    {"  "}
    {p("stack")}: [{s('"React"')}, {s('"TypeScript"')}, {s('"Node.js"')},{" "}
    {s('"React Native"')}],
  </>,
  <>
    {"  "}
    {p("projects")}: [{s('"NextTrack"')}, {s('"SGCharge"')}],
  </>,
  <>
    {"  "}
    {p("openToWork")}: {k("true")},
  </>,
  <>{"};"}</>,
];

const Hero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="flex min-h-screen items-center bg-slate-950 pt-20"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        {/* Left content */}
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-4 py-1.5 text-sm text-slate-300">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to Junior Software Engineer roles
          </p>

          <h1 className="text-5xl leading-tight font-bold tracking-tight text-white md:text-6xl">
            {profile.name}
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-cyan-400">
            {profile.title}
          </h2>

          <p className="mt-6 max-w-lg leading-relaxed text-slate-400">
            {profile.summary}
          </p>

          <ul className="mt-6 flex flex-wrap gap-3" aria-label="Core stack">
            {stack.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-300"
              >
                {skill}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              View projects
              <ArrowRight size={18} aria-hidden="true" />
            </a>

            <a
              href={profile.resume}
              download
              className="flex items-center gap-2 rounded-lg border border-slate-600 px-6 py-3 text-white transition hover:border-cyan-400"
            >
              Download resume
              <Download size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Code window: the one animated moment on the page */}
        <div
          className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-xl"
          role="img"
          aria-label="A short summary of Wei Sheng written as a JavaScript object"
        >
          <div className="mb-5 flex items-center gap-2" aria-hidden="true">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
            <span className="ml-3 font-mono text-xs text-slate-500">
              weiSheng.ts
            </span>
          </div>

          <pre className="overflow-x-auto font-mono text-sm leading-relaxed text-slate-300">
            {codeLines.map((line, i) => (
              <motion.div
                key={i}
                initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.35 }}
              >
                {line}
              </motion.div>
            ))}
          </pre>
        </div>
      </div>
    </section>
  );
};

export default Hero;
