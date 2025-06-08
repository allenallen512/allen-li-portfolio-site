
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
    <div className={`bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 ${
      isProfessional ? 'border-l-4 border-gray-900' : 'border-r-4 border-gray-600'
    }`}>
      <div className="font-hanson text-sm font-bold text-gray-500 mb-2">
        {isProfessional ? 'PROFESSIONAL' : 'PERSONAL'}
      </div>
      <div className="font-hanson text-lg font-bold text-gray-900 mb-2">
        {year}
      </div>
      <h3 className="font-hanson text-xl font-bold mb-1">
        {title}
      </h3>
      {company && (
        <p className="text-gray-600 font-medium mb-2">
          {company}
        </p>
      )}
      <p className="text-gray-700 text-sm">
        {description}
      </p>
    </div>
  );
};

export default TimelineTile;
