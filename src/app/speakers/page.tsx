'use client'
import SpeakerCard from '../../components/SpeakerCard'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation' // use next/navigation in app dir

export default function SpeakersPage() {
  // Comprehensive speaker data - replace with real data
  const speakers = [
    {
      id: 1,
      name: 'Varenya Borbora',
      title: 'Storyteller',
      company: '',
      image: 'https://ik.imagekit.io/w8o6876wf/Tedx-Vjit-Speakers/Varenya.jpeg',
      bio: 'A storyteller who communicates ideas through emotion and visual creativity.',
      description:
        'Varenya Borbora is a storyteller who paints ideas through emotion and expression. A creator with a unique voice and a passion for creative communication, she crafts visual journeys that touch the heart and inspire countless people to explore, express, and evolve.',
      expertise: ['Storytelling', 'Creative Communication', 'Visual Expression'],
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: 'https://instagram.com/vivacious_varenya',
        website: '#'
      }
    },

    {
      id: 2,
      name: 'Sri Satya Gaura Chandra Dasa',
      title: 'Spiritual Mentor',
      company: '',
      image: 'https://ik.imagekit.io/w8o6876wf/Tedx-Vjit-Speakers/Sathya%20Gaura%20Chandra%20Das.jpeg',
      bio: 'Simplifies Vedic wisdom into practical, modern-day guidance.',
      description:
        'Sri Sathya Gaura Chandra Das brings profound Vedic philosophy into everyday life by simplifying complex teachings into relatable stories and practical life tools. He humanizes spirituality, making ancient wisdom accessible and deeply relevant.',
      expertise: ['Vedic Philosophy', 'Spiritual Guidance', 'Mindfulness'],
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#',
        website: '#'
      }
    },

    {
      id: 3,
      name: 'Aishwarya T V Pillai',
      title: 'Accessibility Innovator',
      company: 'Grailmaker / Spacefelt',
      image: 'https://ik.imagekit.io/w8o6876wf/Tedx-Vjit-Speakers/Aishwarya.jpeg',
      bio: 'Creates inclusive tech solutions for visually impaired communities.',
      description:
        'Aishwarya T.V. is a visionary technologist and accessibility advocate. As Co-founder of Grailmaker Innovations and CMO at Spacefelt, she builds inclusive tech for visually impaired people and leads VisionNanny, an AI platform supporting visually challenged children.',
      expertise: ['Accessibility Tech', 'AI for Good', 'Product Innovation'],
      social: {
        linkedin: 'https://www.linkedin.com/in/aishwarya-t-v-pillai/',
        instagram: 'https://instagram.com/aishwarya.pillai.11',
        twitter: '#',
        website: '#'
      }
    },

    {
      id: 4,
      name: 'Ananya Lohan',
      title: 'AI Researcher',
      company: 'Athena.AI',
      image: 'https://ik.imagekit.io/w8o6876wf/Tedx-Vjit-Speakers/Ananya.jpeg',
      bio: 'Young researcher inspiring students through AI and STEM.',
      description:
        'Ananya Lohan is a curious researcher committed to creating impact through science and AI. As the founder of Athena.AI, she empowers students with STEM education and conducts workshops for underprivileged children to fuel creativity and curiosity.',
      expertise: ['AI Research', 'STEM Education', 'Innovation'],
      social: {
        linkedin: 'https://www.linkedin.com/in/ananya-lohan-534675223/',
        instagram: '#',
        twitter: '#',
        website: '#'
      }
    },

    {
      id: 5,
      name: 'Vishnu Vijayan',
      title: 'AI Educator',
      company: '',
      image: 'https://ik.imagekit.io/w8o6876wf/Tedx-Vjit-Speakers/Vishnu.jpeg',
      bio: 'Explains AI through simple stories, memes, and analogies.',
      description:
        'Vishnu Vijayan makes AI simple and accessible through stories, memes, and everyday analogies. He democratizes AI education by helping students and professionals approach the future with clarity and confidence.',
      expertise: ['Artificial Intelligence', 'Content Creation', 'Tech Education'],
      social: {
        linkedin: 'https://www.linkedin.com/in/vishnu--vijayan/',
        instagram: 'https://instagram.com/v.i.s.h.ai',
        twitter: '#',
        website: '#'
      }
    },

    {
      id: 6,
      name: 'Harshal Maniyar',
      title: 'Product Leader',
      company: 'Amber',
      image: 'https://ik.imagekit.io/w8o6876wf/Tedx-Vjit-Speakers/Harshal.jpeg',
      bio: 'Builds AI-powered products focused on human-centered innovation.',
      description:
        'Harshal Maniyar is a creator and problem-solver leading product teams at Amber. He blends generative AI with thoughtful design to reimagine workflows and build experiences that keep people at the center.',
      expertise: ['Generative AI', 'Product Strategy', 'Workflow Automation'],
      social: {
        linkedin: 'https://www.linkedin.com/in/harshalmaniyar/',
        instagram: '#',
        twitter: '#',
        website: '#'
      }
    },

    {
      id: 7,
      name: 'Dr. Mohd Ali Shah',
      title: 'Motivational Speaker',
      company: '',
      image: 'https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Core%20Images/TEDimage.JPG',
      bio: 'One of the world’s most featured TEDx speakers and leadership mentor.',
      description:
        'Dr. Mohd Ali Shah’s journey spans the armed forces, corporate leadership, and global stages. An IIM graduate and a highly featured TEDx speaker, he inspires people to lead with courage, compassion, and authenticity.',
      expertise: ['Leadership', 'Motivational Speaking', 'Personal Growth'],
      social: {
        linkedin: '#',
        instagram: '#',
        twitter: '#',
        website: '#'
      }
    },

    {
      id: 8,
      name: 'Jeet Basak',
      title: 'Digital Strategist',
      company: 'Snapchat',
      image: 'https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Core%20Images/TEDimage.JPG',
      bio: 'Shapes how communities connect through digital culture and storytelling.',
      description:
        'Jeet Basak is a strategic thinker shaping digital culture at Snapchat. He leads Pop Culture and Partnerships, building initiatives around creativity and community while promoting inclusive storytelling and human-centered design.',
      expertise: ['Digital Strategy', 'Cultural Innovation', 'Community Design'],
      social: {
          linkedin: '#',
          instagram: '#',
          twitter: '#',
          website: '#'
      }
    }
  ];



  const router = useRouter()

  const handleExploreClick = () => {
    router.push('/2024/speakers') // programmatic navigation works now
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center py-20 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-red-800/10" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto text-center">
          <h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in"
          >
            Meet Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              Speakers
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in-delay-1"
          >
            Discover thought leaders, innovators, and visionaries who will share their insights,
            experiences, and groundbreaking ideas that will inspire and challenge your perspective.
          </p>

          <div
            className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 animate-fade-in-delay-2"
          >
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              {speakers.length} Inspiring Speakers
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              Diverse Perspectives
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              Interactive Sessions
            </span>
          </div>
        </div>
      </section>

      {/* Speakers Grid Section */}
      <section className="py-16 px-4 flex justify-center">
        <div className="w-full max-w-6xl">
          {/* Section Header */}
          <div
            className="text-center mb-16 animate-fade-in"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Speakers
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Each speaker brings unique expertise and insights that will expand your horizons
              and inspire new ways of thinking.
            </p>
          </div>

          {/* Speakers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 m-4 justify-items-center">
            {speakers.map((speaker, index) => (
              <div
                key={speaker.id}
                className="w-[280px] animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <SpeakerCard speaker={speaker} />
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div
            className="text-center mt-16 animate-fade-in-delay-3"
          >
            <div className="bg-gradient-to-r from-red-600/20 to-red-800/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Be Inspired?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join us for an unforgettable experience where ideas come to life and
                inspiration meets action. Register now to secure your spot.
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-red-600/25">
                Register for Event
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
    // <section className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black via-gray-900 to-black text-center overflow-hidden px-4 sm:px-6 lg:px-8 py-16 sm:py-20 pt-24 sm:pt-28 md:pt-32">
    //   {/* Background glows */}
    //   <div
    //     className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-red-600/20 rounded-full blur-[150px] sm:blur-[200px] animate-pulse"
    //     style={{ animationDuration: "4s" }}
    //   />
    //   <div
    //     className="absolute bottom-0 right-1/4 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-yellow-500/10 rounded-full blur-[100px] sm:blur-[150px] animate-pulse"
    //     style={{ animationDuration: "5s" }}
    //   />
    //   <div className="absolute top-1/4 left-1/4 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-red-500/10 rounded-full blur-[80px] sm:blur-[100px]" />

    //   {/* Content Container */}
    //   <div className="relative z-10 max-w-5xl mx-auto w-full">
    //     {/* Heading */}
    //     <motion.h1
    //       initial={{ opacity: 0, y: 40 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 1, ease: "easeOut" }}
    //       className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400 mb-6 sm:mb-8 leading-tight"
    //     >
    //       Countdown to Brilliance: Speakers Coming Soon!
    //     </motion.h1>

    //     {/* Subtitle - First Paragraph */}
    //     <motion.p
    //       initial={{ opacity: 0, y: 20 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ delay: 0.4, duration: 1 }}
    //       className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4 sm:mb-5 px-2"
    //     >
    //       We&apos;re getting ready to unveil the incredible minds who will take
    //       the TED<sup>x</sup> VJIT 2025 stage. This year&apos;s theme,{" "}
    //       <span className="font-semibold text-red-400">
    //         &quot;Metamorphosis&quot;
    //       </span>
    //       , is all about transformation, reinvention, and growth.
    //     </motion.p>

    //     {/* Subtitle - Second Paragraph */}
    //     <motion.p
    //       initial={{ opacity: 0, y: 20 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ delay: 0.6, duration: 1 }}
    //       className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10 px-2"
    //     >
    //       Our upcoming lineup will feature changemakers and storytellers who
    //       have embraced change and turned it into something extraordinary. Their
    //       journeys will inspire you to turn challenges into opportunities and
    //       embrace your own transformation.
    //     </motion.p>

    //     {/* Animated Divider */}
    //     <motion.div
    //       initial={{ scaleX: 0 }}
    //       animate={{ scaleX: 1 }}
    //       transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
    //       className="w-20 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-red-600 to-slate-800 rounded-full mb-8 sm:mb-10 mx-auto"
    //     />

    //     {/* Info Box */}
    //     <motion.div
    //       initial={{ opacity: 0, y: 40 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ delay: 1, duration: 1 }}
    //       className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 max-w-2xl mx-auto shadow-lg mb-8 sm:mb-10 md:mb-12"
    //     >
    //       <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
    //         Stay tuned — the speaker reveal is just around the corner!
    //       </p>
    //     </motion.div>

    //     {/* Button */}
    //     <motion.button
    //       onClick={handleExploreClick}
    //       className="relative flex items-center justify-center font-semibold text-white rounded-[0.9em] overflow-hidden cursor-pointer bg-red-600 px-5 sm:px-6 pr-12 sm:pr-14 py-2.5 sm:py-3 shadow-lg hover:shadow-red-600/30 transition-shadow mx-auto"
    //       initial="initial"
    //       animate="initial"
    //       whileHover="hovered"
    //       whileTap={{ scale: 0.96 }}
    //     >
    //       <motion.span
    //         className="relative z-10 text-xs sm:text-sm md:text-base whitespace-nowrap"
    //         variants={{
    //           initial: { opacity: 1 },
    //           hovered: { opacity: 0 },
    //         }}
    //         transition={{ duration: 0.28, ease: "easeInOut" }}
    //       >
    //         Explore Last Edition&apos;s Speakers
    //       </motion.span>

    //       <motion.div
    //         className="absolute top-0 right-0 h-full flex items-center justify-center bg-red-700 rounded-[0.9em]"
    //         variants={{
    //           initial: { width: "40px" },
    //           hovered: { width: "100%" },
    //         }}
    //         transition={{ duration: 0.28, ease: "easeInOut" }}
    //       >
    //         <ArrowRight className="text-white w-4 h-4 sm:w-5 sm:h-5" />
    //       </motion.div>
    //     </motion.button>

    //     {/* Footer Text */}
    //     <motion.p
    //       initial={{ opacity: 0 }}
    //       animate={{ opacity: 1 }}
    //       transition={{ delay: 1.5, duration: 1.5, ease: "easeInOut" }}
    //       className="text-xs sm:text-sm text-gray-500 mt-6 sm:mt-8"
    //     >
    //       Stay tuned for updates ✨
    //     </motion.p>
    //   </div>
    // </section>
  )
}
