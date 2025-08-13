import SpeakerCard from './SpeakerCard';

const sampleSpeakers = [
  {
    name: 'Alice Johnson',
    title: 'Transforming Ideas',
    image: '/speakers/alice.jpg',
    bio: 'Alice is a visionary leader in innovation and storytelling.',
  },
  {
    name: 'Bob Smith',
    title: 'Shaping Futures',
    image: '/speakers/bob.jpg',
    bio: 'Bob explores future tech and youth empowerment.',
  },
  {
    name: 'Catherine Lee',
    title: 'The Power of Change',
    image: '/speakers/catherine.jpg',
    bio: 'Catherine is known for social reform through education.',
  },
];

export default function SpeakersPreview() {
  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold mb-10 text-center">Featured Speakers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {sampleSpeakers.map((speaker, idx) => (
          <SpeakerCard
            key={idx}
            name={speaker.name}
            title={speaker.title}
            image={speaker.image}
            bio={speaker.bio}
          />
        ))}
      </div>
    </section>
  );
}
