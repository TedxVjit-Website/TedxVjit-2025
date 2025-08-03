export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-red-900 to-black">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
            TEDx VJIT 2025
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Ideas Worth Spreading • Innovation • Inspiration
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Join us for an inspiring day of powerful talks, connect with thought leaders, 
            and be part of the conversation that shapes our future.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-900 via-black to-red-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-8 text-red-500">About TEDx VJIT</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-black/50 p-6 rounded-lg border border-red-800">
              <h3 className="text-2xl font-semibold mb-4 text-red-400">Our Mission</h3>
              <p className="text-gray-300">
                To bring together brilliant minds and innovative ideas that challenge 
                conventional thinking and inspire positive change in our community.
              </p>
            </div>
            <div className="bg-black/50 p-6 rounded-lg border border-red-800">
              <h3 className="text-2xl font-semibold mb-4 text-red-400">The Experience</h3>
              <p className="text-gray-300">
                A full-day event featuring inspiring speakers, interactive sessions, 
                and networking opportunities that will leave you motivated and inspired.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-red-800 to-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-12 text-center text-red-500">Event Schedule</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { time: "9:00 AM", title: "Opening Ceremony", desc: "Welcome and introduction to TEDx VJIT 2025" },
              { time: "10:30 AM", title: "Keynote Speakers", desc: "Inspiring talks from industry leaders" },
              { time: "2:00 PM", title: "Interactive Sessions", desc: "Engage with speakers and fellow attendees" },
              { time: "4:30 PM", title: "Networking", desc: "Connect with like-minded individuals" },
              { time: "6:00 PM", title: "Closing Remarks", desc: "Reflections and future outlook" },
              { time: "7:00 PM", title: "Reception", desc: "Celebrate the day's achievements" }
            ].map((event, idx) => (
              <div key={idx} className="bg-black/60 p-6 rounded-lg border border-red-700 hover:border-red-500 transition-colors">
                <div className="text-red-400 font-semibold text-lg mb-2">{event.time}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{event.title}</h3>
                <p className="text-gray-400">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-900 via-black to-red-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-12 text-center text-red-500">Featured Speakers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Dr. Sarah Johnson", role: "AI Researcher", topic: "The Future of Artificial Intelligence" },
              { name: "Marcus Chen", role: "Entrepreneur", topic: "Building Sustainable Businesses" },
              { name: "Dr. Elena Rodriguez", role: "Climate Scientist", topic: "Climate Action Now" },
              { name: "James Wilson", role: "Innovation Expert", topic: "Disruptive Technologies" },
              { name: "Dr. Priya Patel", role: "Healthcare Innovator", topic: "Digital Health Revolution" },
              { name: "Alex Thompson", role: "Social Impact Leader", topic: "Creating Positive Change" }
            ].map((speaker, idx) => (
              <div key={idx} className="bg-black/50 p-6 rounded-lg border border-red-800 text-center hover:border-red-500 transition-colors">
                <div className="w-24 h-24 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                  {speaker.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{speaker.name}</h3>
                <p className="text-red-400 mb-3">{speaker.role}</p>
                <p className="text-gray-400 text-sm">{speaker.topic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-red-800 to-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-8 text-red-500">Get In Touch</h2>
          <p className="text-xl text-gray-300 mb-8">
            Have questions about TEDx VJIT 2025? We'd love to hear from you.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/50 p-6 rounded-lg border border-red-800">
              <h3 className="text-2xl font-semibold mb-4 text-red-400">Contact Info</h3>
              <div className="space-y-3 text-gray-300">
                <p>📧 info@tedxvjit2025.com</p>
                <p>📱 +1 (555) 123-4567</p>
                <p>📍 VJIT Campus, Hyderabad</p>
              </div>
            </div>
            <div className="bg-black/50 p-6 rounded-lg border border-red-800">
              <h3 className="text-2xl font-semibold mb-4 text-red-400">Follow Us</h3>
              <div className="space-y-3 text-gray-300">
                <p>🐦 Twitter: @TEDxVJIT</p>
                <p>📘 Facebook: TEDx VJIT</p>
                <p>📷 Instagram: @tedxvjit</p>
                <p>💼 LinkedIn: TEDx VJIT</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-900 via-black to-red-900">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-8 text-red-500">Register Now</h2>
          <p className="text-xl text-gray-300 mb-8">
            Secure your spot at TEDx VJIT 2025 and be part of this transformative experience.
          </p>
          <div className="bg-black/50 p-8 rounded-lg border border-red-800">
            <h3 className="text-2xl font-semibold mb-6 text-red-400">Event Details</h3>
            <div className="space-y-4 text-gray-300 mb-8">
              <p>📅 Date: March 15, 2025</p>
              <p>⏰ Time: 9:00 AM - 7:00 PM</p>
              <p>📍 Venue: VJIT Auditorium</p>
              <p>💰 Early Bird: $25 (Limited Time)</p>
            </div>
            <a href="#" className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-md hover:-translate-y-0.5 transition duration-200 text-lg">
              Register for TEDx VJIT 2025
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
