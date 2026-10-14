import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Download, Mail } from "lucide-react";
import { profile } from "../data/resume";

const outline =
  "flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 text-white transition hover:border-cyan-400";

const Contact = () => (
  <section
    id="contact"
    aria-labelledby="contact-heading"
    className="bg-slate-950 px-6 py-24"
  >
    <div className="mx-auto max-w-4xl text-center">
      <h2
        id="contact-heading"
        className="text-3xl font-semibold tracking-tight text-white md:text-4xl"
      >
        Let's work together
      </h2>

      <p className="mx-auto mt-5 max-w-xl leading-relaxed text-slate-400">
        I'm looking for a {profile.title} role. Send me an email if you'd like to
        talk about an opportunity or a project.
      </p>

      <p className="mt-3 text-sm text-slate-500">
        Based in {profile.location}. {profile.citizenship}.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-5">
        <a
          href={`mailto:${profile.email}`}
          className="flex items-center gap-2 rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          <Mail size={18} aria-hidden="true" />
          Email me
        </a>

        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className={outline}
        >
          <FaGithub size={18} aria-hidden="true" />
          GitHub
        </a>

        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={outline}
        >
          <FaLinkedin size={18} aria-hidden="true" />
          LinkedIn
        </a>

        <a href={profile.resume} download className={outline}>
          <Download size={18} aria-hidden="true" />
          Resume
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
