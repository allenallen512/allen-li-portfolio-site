interface TimelineTileProps {
  type: 'professional' | 'personal';
  year: string;
  title: string;
  company?: string;
  description: string;
}

const TimelineTile = ({ type, year, title, company, description }: TimelineTileProps) => {
  const isProfessional = type === 'professional';

  return (
    <div
      className="flex-shrink-0 w-[130px] sm:w-[220px] h-[100px] sm:h-[180px] overflow-hidden p-3 sm:p-[18px] group transition-transform duration-300 hover:-translate-y-1"
      style={{
        background: "rgba(255, 255, 255, 0.06)",
        border: "1px solid rgba(255, 255, 255, 0.11)",
        borderRadius: "16px",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        boxShadow: "0 4px 24px rgba(0, 0, 0, 0.35)",
      }}
    >
      {/* Year badge */}
      <div className="mb-2 sm:mb-3">
        <span
          className="font-hanson text-[10px] sm:text-xs font-bold text-white/90"
          style={{
            background: isProfessional
              ? "rgba(147,197,253,0.12)"
              : "rgba(196,181,253,0.12)",
            borderRadius: "8px",
            padding: "3px 8px",
            border: isProfessional
              ? "1px solid rgba(147,197,253,0.2)"
              : "1px solid rgba(196,181,253,0.2)",
          }}
        >
          {year}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-hanson text-[11px] sm:text-sm font-bold text-white leading-tight mb-1">
        {title}
      </h3>

      {/* Company — desktop only */}
      {company && (
        <p
          className="hidden sm:block text-[11px] font-medium mb-2"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          {company}
        </p>
      )}

      {/* Description — desktop only */}
      <p
        className="hidden sm:block text-[11px] leading-relaxed"
        style={{ color: "rgba(255,255,255,0.4)" }}
      >
        {description}
      </p>
    </div>
  );
};

export default TimelineTile;
