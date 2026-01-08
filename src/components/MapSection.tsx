// MapSection.tsx
"use client";
import { motion } from "framer-motion";

function MapSection() {
  return (
    <section
      className="w-full flex flex-col items-center justify-center py-24 px-6"
      style={{
        background:
          "radial-gradient(circle at 50% 40%, #8b2332 0%, #ff1b3c 100%)",
      }}
    >
      {/* Tagline */}
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-20 text-center drop-shadow-lg tracking-tight">
        Venue Location
      </h2>

      {/* Two Box Layout */}
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Box - Address */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-black/80 backdrop-blur-sm rounded-xl p-8 md:p-10 flex flex-col justify-between shadow-xl border border-red-900/40 h-[350px]"
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight">
              Event Venue
            </h3>
            <div className="text-white/90 text-base md:text-lg leading-relaxed space-y-2">
              <p className="font-semibold text-white">Auditorium - E Block</p>
              <p>Vidya Jyothi Institute of Technology</p>
              <p>Aziznagar, Hyderabad</p>
              <p>Telangana, 500075</p>
            </div>
          </div>
          <motion.a
            href="https://www.google.com/maps?ll=17.345586,78.323599&z=16&t=m&hl=en&gl=US&mapclient=embed&cid=7842846765913408154"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-full px-6 py-3 rounded-xl font-semibold bg-red-600 text-white shadow-lg hover:bg-red-700 transition-colors duration-300 text-center"
          >
            Open in Google Maps
          </motion.a>
        </motion.div>

        {/* Right Box - Map */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-xl overflow-hidden shadow-xl border border-red-900/40 h-[350px] bg-black/80 backdrop-blur-sm"
        >
          <iframe
            src="https://www.google.com/maps?q=Vidya+Jyothi+Institute+of+Technology&hl=en&z=16&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Vidya Jyothi Institute of Technology Location"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}

export default MapSection;
