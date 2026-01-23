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
      image: 'https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Speakers/1686123857520.jpg',
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
      name: 'Vishnu Vijayan',
      title: 'AI Educator',
      company: '',
      image: 'https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Speakers/1748492332778.jpg',
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
      id: 5,
      name: 'Prathamesh Sinha',
      title: 'Social Innovator',
      company: 'Thinkerbell Labs',
      image: 'https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Speakers/607368965_18084775550027583_3347693349190696838_n.jpg',
      bio: '',
      description:
        '',
      expertise: [],
      social: {
          linkedin: 'https://www.linkedin.com/in/prathmesh-sinha-713196277',
          instagram: 'https://www.instagram.com/prathameshsinha__official/',
          twitter: '#',
          website: '#'
      }
    },

    {
      id: 6,
      name: 'Harshal Maniyar',
      title: 'Product Leader',
      company: 'Amber',
      image: 'https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Speakers/WhatsApp%20Image%202026-01-07%20at%2023.03.21.jpeg',
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
      name: 'Major Mohd Ali Shah',
      title: 'Motivational Speaker',
      company: '',
      image: 'https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Speakers/Mohammed_Ali_Shah%20(1).png',
      bio: 'One of the world’s most featured TEDx speakers and leadership mentor.',
      description:
        'Dr. Mohd Ali Shah’s journey spans the armed forces, corporate leadership, and global stages. An IIM graduate and a highly featured TEDx speaker, he inspires people to lead with courage, compassion, and authenticity.',
      expertise: ['Leadership', 'Motivational Speaking', 'Personal Growth'],
      social: {
        linkedin: '#',
        instagram: 'https://www.instagram.com/majoralishah/',
        twitter: '#',
        website: '#'
      }
    },

    {
      id: 8,
      name: 'Jeet Basak',
      title: 'Independent Music Artist',
      company: 'Snapchat',
      image: 'https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Speakers/1721453020191.jpg',
      bio: 'Shapes how communities connect through digital culture and storytelling.',
      description:
        'Jeet Basak is a strategic thinker shaping digital culture at Snapchat. He leads Pop Culture and Partnerships, building initiatives around creativity and community while promoting inclusive storytelling and human-centered design.',
      expertise: ['Digital Strategy', 'Cultural Innovation', 'Community Design'],
      social: {
          linkedin: 'https://www.linkedin.com/in/jeetbasak/',
          instagram: 'https://www.instagram.com/jeeeeet_/',
          twitter: '#',
          website: '#'
      }
    },

    {
      id: 9,
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
      id: 10,
      name: 'BK Sumalatha',
      title: 'Spiritual Mentor',
      company: 'Spiritual Mentor',
      image: 'https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Speakers/hq720.jpg',
      bio: 'Spiritual mentor known for expertise in Rajyoga and inner growth.',
      description:
        'BK Sumalatha is a spiritual mentor known for her expertise in Rajyoga, guiding individuals toward resilience, emotional balance, and inner growth through practical spiritual wisdom.',
      expertise: ['Rajyoga', 'Spiritual Growth', 'Emotional Well-being'],
      social: {
          linkedin: '#',
          instagram: '#',
          twitter: '#',
          website: '#'
      }
    },

    {
      id: 11,
      name: 'Pradeep Kondiparthi',
      title: 'Actor & Motivational Speaker',
      company: 'Telugu Film Industry',
      image: 'https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Speakers/pradeep-kondiparthi.jpg',
      bio: 'Renowned actor known for versatile roles in Telugu cinema and television.',
      description:
        'Pradeep Kondiparthi is a renowned actor in the Telugu film industry, known for his versatile roles in cinema and television. With a career spanning several decades, he has captivated audiences with his compelling performances and dedication to the craft of acting.',
      expertise: ['Acting', 'Theatre', 'Film and Television'],
      social: {
          linkedin: '#',
          instagram: 'https://www.instagram.com/pradeepkondiparthi?igsh=dXJmM2puZGYyc3dn',
          twitter: '#',
          website: '#'
      }
    }
  ];



  const router = useRouter()

  const handleExploreClick = () => {
    router.push('/2024/speakers') // programmatic navigation works now
  }

  const handleRegisterClick = () => {
    router.push('/#join-tedx')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center py-20 px-4 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{
            backgroundImage: "url('https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Core%20Images/Screenshot%202025-10-04%20213144.png?updatedAt=1759593832587')"
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
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
              <button onClick={handleRegisterClick} className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-red-600/25">
                Register for Event
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
