
interface ProjectTagsProps {
  tags: string[];
}

const ProjectTags = ({ tags }: ProjectTagsProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="font-hanson text-xs px-3 py-1 rounded-full tracking-wide"
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.12)",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default ProjectTags;
