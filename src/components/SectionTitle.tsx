type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-300">{description}</p>
    </div>
  );
}
