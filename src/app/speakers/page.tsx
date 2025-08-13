import SpeakerCard from '../../components/SpeakerCard'
export default function SpeakersPage() {
  // Mock data—replace with real
  const speakers = [{ name: 'Speaker 1', bio: 'Bio...', image: '/s1.jpg' }]
  return (
    <section className="container mx-auto py-16">
      <h1 className="text-4xl font-bold mb-6">Speakers</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {speakers.map((s, i) => (
          <SpeakerCard key={i} speaker={s} />
        ))}
      </div>
    </section>
  )
}
