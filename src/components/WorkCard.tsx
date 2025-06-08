
interface WorkCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
}

const WorkCard = ({ image, title, description, tags }: WorkCardProps) => {
  return (
    <div className="flex-shrink-0 w-80 group cursor-pointer">
      <div className="bg-gray-100 rounded-lg overflow-hidden mb-6 aspect-video">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="space-y-4">
        <h2 className="font-hanson text-2xl font-bold text-gray-900 tracking-wide">
          {title}
        </h2>
        <p className="font-hanson text-lg text-gray-600 tracking-wide">
          {description}
        </p>
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
      </div>
    </div>
  );
};

export default WorkCard;
