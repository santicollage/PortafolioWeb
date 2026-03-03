interface SectionHeaderProps {
  tag?: string;
  title: string;
  highlight?: string;
  description?: string;
}

export function SectionHeader({ tag, title, highlight, description }: SectionHeaderProps) {
  return (
    <div className="mb-12 md:mb-16">
      {tag && (
        <span className="inline-block mb-3 text-xs font-semibold tracking-widest uppercase gradient-text">
          {tag}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-white leading-tight">
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {description && (
        <p className="mt-4 text-[#A0A0A0] text-base md:text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
