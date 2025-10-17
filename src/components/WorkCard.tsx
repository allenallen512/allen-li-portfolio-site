import ProjectTags from "./ProjectTags";

interface WorkCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  size?: 'small' | 'large';
}

const WorkCard = ({ image, title, description, tags, link, size = 'small' }: WorkCardProps) => {
  const cardWidth = size === 'large' ? 'w-full md:w-[30vw]' : 'w-full md:w-80';
  const titleSize = size === 'large' ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl';
  const descriptionSize = size === 'large' ? 'text-lg md:text-xl' : 'text-base md:text-lg';

  // Helper to wrap content in a link if provided
  const LinkWrapper = ({ children }: { children: React.ReactNode }) =>
    link ? (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity"
      >
        {children}
      </a>
    ) : (
      <>{children}</>
    );

  return (
    <div className={`flex-shrink-0 ${cardWidth} group`}>
      <LinkWrapper>
        <div className="rounded-lg overflow-hidden mb-6 aspect-video cursor-pointer">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </LinkWrapper>
      <div className="space-y-4">
        <LinkWrapper>
          <h2 className={`font-hanson ${titleSize} font-bold text-gray-900 tracking-wide cursor-pointer`}>
            {title}
          </h2>
        </LinkWrapper>
        <p className={`font-hanson ${descriptionSize} text-gray-600 tracking-wide`}>
          {description}
        </p>
        <ProjectTags tags={tags} />
      </div>
    </div>
  );
};

export default WorkCard;
