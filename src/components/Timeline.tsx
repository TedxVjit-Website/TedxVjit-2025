interface Event {
  time: string;
  title: string;
  description: string;
}

interface TimelineProps {
  events: Event[];
}

export default function Timeline({ events }: TimelineProps) {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Event Timeline</h2>
        <div className="relative border-l-4 border-red-600 pl-6">
          {events.map((event, idx) => (
            <div key={idx} className="mb-10 relative">
              <div className="absolute w-4 h-4 bg-red-600 rounded-full -left-2 top-1.5" />
              <h3 className="text-xl font-semibold text-gray-800">
                {event.time} - {event.title}
              </h3>
              <p className="text-gray-600 text-sm mt-1">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
