interface SectionHeadingProps {
  id: string;
  title: string;
  description?: string;
}

const SectionHeading = ({ id, title, description }: SectionHeadingProps) => (
  <div className="mb-12 max-w-2xl">
    <h2
      id={id}
      className="text-3xl font-semibold tracking-tight text-white md:text-4xl"
    >
      {title}
    </h2>
    {description && (
      <p className="mt-4 leading-relaxed text-slate-400">{description}</p>
    )}
  </div>
);

export default SectionHeading;
