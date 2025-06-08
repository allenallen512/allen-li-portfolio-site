
import ProjectTags from "./ProjectTags";

interface WorkCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
  size?: 'small' | 'large';
}

const WorkCard = ({ image, title, description, tags, size = 'small' }: WorkCardProps) => {
  const cardWidth = size === 'large' ? 'w-[30vw]' : 'w-80';
  const titleSize = size === 'large' ? 'text-3xl' : 'text-2xl';
  const descriptionSize = size === 'large' ? 'text-xl' : 'text-lg';

  return (
    <div className={`flex-shrink-0 ${cardWidth} group cursor-pointer`}>
      <div className="bg-gray-100 rounded-lg overflow-hidden mb-6 aspect-video">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="space-y-4">
        <h2 className={`font-hanson ${titleSize} font-bold text-gray-900 tracking-wide`}>
          {title}
        </h2>
        <p className={`font-hanson ${descriptionSize} text-gray-600 tracking-wide`}>
          {description}
        </p>
        <ProjectTags tags={tags} />
      </div>
    </div>
  );
};

export default WorkCard;
