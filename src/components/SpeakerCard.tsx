interface SpeakerCardProps {
  name: string;
  title: string;
  image: string;
  bio: string;
}

export default function SpeakerCard({
  name,
  title,
  image,
  bio,
}: SpeakerCardProps) {
  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-lg text-white hover:shadow-2xl transition duration-300">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-red-500"
      />
      <h3 className="text-xl font-bold text-center mt-4">{name}</h3>
      <p className="text-red-400 text-sm text-center">{title}</p>
      <p className="text-sm mt-3 text-center">{bio}</p>
    </div>
  );
}
