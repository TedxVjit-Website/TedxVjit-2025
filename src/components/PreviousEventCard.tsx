interface PreviousEventCardProps {
  year: string;
  title: string;
  image: string;
  description: string;
}

export default function PreviousEventCard({
  year,
  title,
  image,
  description,
}: PreviousEventCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
      <img src={image} alt={title} className="w-full h-60 object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800">{title} ({year})</h3>
        <p className="mt-2 text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}
