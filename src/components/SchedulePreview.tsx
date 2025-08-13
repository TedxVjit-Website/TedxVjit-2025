'use client'
import { motion } from 'framer-motion'

const sampleSchedule = [
  { time: '10:00 AM', title: 'Opening Remarks' },
  { time: '10:30 AM', title: 'Keynote: The Power of Transformation' },
  { time: '11:30 AM', title: 'Breakout Sessions' },
]

export default function SchedulePreview() {
  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold mb-10 text-center">Event Schedule</h2>
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-6 max-w-xl mx-auto"
      >
        {sampleSchedule.map(({ time, title }, idx) => (
          <motion.li
            key={idx}
            className="flex justify-between bg-gray-900 p-4 rounded-md shadow-sm"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ delay: idx * 0.2 }}
          >
            <span className="font-semibold">{time}</span>
            <span>{title}</span>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}
