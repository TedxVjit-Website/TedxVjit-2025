"use client";

import React, { useState, useEffect } from "react";
import Slider, { Settings, CustomArrowProps } from "react-slick";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SpeakerCard from "./SpeakerCard";
import { useRouter } from "next/navigation";

// Slick carousel CSS is imported in globals.css, no need to duplicate here

function NextArrow({ onClick }: CustomArrowProps) {
  return (
    <button
      onClick={onClick}
      className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 
                 bg-red-600 hover:bg-red-700 text-white rounded-full p-2 md:p-3 
                 shadow-lg shadow-red-600/40 transition-all duration-300 z-20"
      aria-label="Next speaker"
    >
      <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
    </button>
  );
}

function PrevArrow({ onClick }: CustomArrowProps) {
  return (
    <button
      onClick={onClick}
      className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 
                 bg-red-600 hover:bg-red-700 text-white rounded-full p-2 md:p-3 
                 shadow-lg shadow-red-600/40 transition-all duration-300 z-20"
      aria-label="Previous speaker"
    >
      <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
    </button>
  );
}

const sampleSpeakers = [
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
      bio: 'One of the world’s most featured TEDˣ speakers and leadership mentor.',
      description:
        'Dr. Mohd Ali Shah’s journey spans the armed forces, corporate leadership, and global stages. An IIM graduate and a highly featured TEDˣ speaker, he inspires people to lead with courage, compassion, and authenticity.',
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


export default function SpeakersPreview() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  };

  if (!mounted) {
    return (
      <section className="w-full py-20 bg-black min-h-[400px] flex items-center justify-center">
        <div className="text-white opacity-20">Loading Speakers...</div>
      </section>
    );
  }

  return (
    <section 
      className="w-full mx-auto px-4 sm:px-6 py-12 sm:py-20 relative bg-black overflow-hidden"
      style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center text-white">
          Featured Speakers
        </h2>

        <div className="max-w-6xl mx-auto px-4 md:px-10">
          <Slider {...settings}>
            {sampleSpeakers.map((speaker) => (
              <div key={speaker.id} className="px-2 pb-8">
                <SpeakerCard speaker={speaker as any} />
              </div>
            ))}
          </Slider>
        </div>

        <div className="flex justify-center mt-12">
          <motion.button
            className="group relative flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-red-600/40 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/speakers")}
          >
            <span>View All Speakers</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}


