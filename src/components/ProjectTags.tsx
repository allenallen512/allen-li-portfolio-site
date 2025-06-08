
interface ProjectTagsProps {
  tags: string[];
}

const ProjectTags = ({ tags }: ProjectTagsProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <span 
          key={index}
          className="font-hanson text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded-full tracking-wide"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default ProjectTags;
