import { FaGithub, FaLinkedin } from "react-icons/fa";
import profilePhoto from "../assets/ws_picture.jpg";
import { education, profile } from "../data/resume";
import SectionHeading from "./SectionHeading";

const About = () => {
  const degree = education[0];

  const facts = [
    { label: "Based in", value: profile.location },
    { label: "Status", value: profile.citizenship },
    { label: "Degree", value: `${degree.degree}, ${degree.period.split(" – ")[1]}` },
    { label: "Looking for", value: `${profile.title} role` },
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-slate-950 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="about-heading" title={`Hi, I'm ${profile.shortName}`} />

        <div className="grid items-center gap-12 md:grid-cols-[auto_1fr] md:gap-16">
          {/* Photo */}
          <div className="flex justify-center">
            <div className="rounded-3xl border border-slate-700 bg-slate-900 p-3">
              <img
                src={profilePhoto}
                alt="Portrait of Wong Wei Sheng"
                width={288}
                height={384}
                loading="lazy"
                className="h-96 w-72 rounded-2xl object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            {profile.about.map((paragraph) => (
              <p
                key={paragraph}
                className="mb-4 max-w-xl leading-relaxed text-slate-400"
              >
                {paragraph}
              </p>
            ))}

            <dl className="mt-8 grid max-w-xl gap-x-8 gap-y-5 border-t border-slate-800 pt-8 sm:grid-cols-2">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-sm text-slate-500">{fact.label}</dt>
                  <dd className="mt-1 text-slate-200">{fact.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex gap-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 text-white transition hover:border-cyan-400"
              >
                <FaGithub size={18} aria-hidden="true" />
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 text-white transition hover:border-cyan-400"
              >
                <FaLinkedin size={18} aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
