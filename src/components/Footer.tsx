import { profile } from "../data/resume";

const Footer = () => (
  <footer className="border-t border-slate-800 bg-slate-950 px-6 py-8">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-slate-500 sm:flex-row">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
      <p>Built with React, TypeScript, and Tailwind CSS.</p>
      <a href="#home" className="transition hover:text-cyan-400">
        Back to top
      </a>
    </div>
  </footer>
);

export default Footer;
