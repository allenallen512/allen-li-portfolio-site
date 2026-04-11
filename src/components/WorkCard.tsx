import ProjectTags from "./ProjectTags";

interface WorkCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
  onLinkPress?: string;
}

const WorkCard = ({ image, title, description, tags, onLinkPress }: WorkCardProps) => {
  return (
    <div
      className="flex flex-col w-full h-full"
      style={{
        background: "rgba(255, 255, 255, 0.06)",
        border: "1px solid rgba(255, 255, 255, 0.11)",
        borderRadius: "20px",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
        overflow: "hidden",
      }}
    >
      {/* Image */}
      <div
        className="overflow-hidden flex-shrink-0"
        style={{
          height: "160px",
          background: "rgba(255,255,255,0.04)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1 gap-2">
        <h2 className="font-hanson text-base font-bold text-white tracking-wide leading-tight">
          {title}
        </h2>
        <p
          className="font-hanson text-xs tracking-wide leading-relaxed flex-1"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          {description}
        </p>
        <div className="pt-1">
          <ProjectTags tags={tags.slice(0, 2)} />
        </div>
        {onLinkPress && (
          <button
            onClick={() => window.open(onLinkPress, "_blank", "noopener,noreferrer")}
            className="mt-3 w-full font-hanson text-xs tracking-widest py-2.5 px-4 rounded-xl transition-all duration-300 ease-out hover:bg-white hover:text-black hover:scale-105"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.22)",
              color: "white",
              cursor: "pointer",
            }}
          >
            View  →
          </button>
        )}
      </div>
    </div>
  );
};

export default WorkCard;
