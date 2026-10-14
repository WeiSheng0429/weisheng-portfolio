import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Download, Menu, X } from "lucide-react";
import { navLinks, profile } from "../data/resume";
import { useActiveSection } from "../hooks/useActiveSection";
import ThemeToggle from "./ThemeToggle";

const sectionIds = ["home", ...navLinks.map((link) => link.id)];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const linkClass = (id: string) =>
    `transition duration-300 hover:text-cyan-400 ${
      active === id ? "text-cyan-400" : "text-slate-300"
    }`;

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:rounded-md focus:bg-cyan-400 focus:px-3 focus:py-2 focus:font-semibold focus:text-slate-950"
      >
        Skip to content
      </a>

      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
      >
        <a
          href="#home"
          aria-label="Wong Wei Sheng, back to top"
          className="text-2xl font-bold text-cyan-400"
        >
          WS
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? "true" : undefined}
                className={linkClass(link.id)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-slate-300 transition hover:text-cyan-400"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-slate-300 transition hover:text-cyan-400"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href={profile.resume}
            download
            className="hidden items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm text-white transition hover:border-cyan-400 sm:flex"
          >
            Resume
            <Download size={15} aria-hidden="true" />
          </a>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="text-slate-300 transition hover:text-cyan-400 md:hidden"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-slate-800 bg-slate-950 md:hidden"
        >
          <ul className="mx-auto flex max-w-6xl flex-col px-6 py-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={`block py-3 ${linkClass(link.id)}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.resume}
                download
                className="block py-3 text-slate-300 transition hover:text-cyan-400"
              >
                Download resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
