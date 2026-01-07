"use client";

import React, { useState, useEffect } from "react";
import Slider, { Settings, CustomArrowProps } from "react-slick";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SpeakerCard from "./SpeakerCard";
import { useRouter } from "next/navigation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrows
function NextArrow({ onClick }: CustomArrowProps) {
  return (
    <button
      onClick={onClick}
      className="absolute -right-8 top-1/2 -translate-y-1/2 
                 bg-red-600 hover:bg-red-700 text-white rounded-full p-3 
                 shadow-lg shadow-red-600/40 transition-all duration-300 z-20"
      style={{ outline: "none" }}
    >
      <ChevronRight className="w-6 h-6" />
    </button>
  );
}

function PrevArrow({ onClick }: CustomArrowProps) {
  return (
    <button
      onClick={onClick}
      className="absolute -left-8 top-1/2 -translate-y-1/2 
                 bg-red-600 hover:bg-red-700 text-white rounded-full p-3 
                 shadow-lg shadow-red-600/40 transition-all duration-300 z-20"
      style={{ outline: "none" }}
    >
      <ChevronLeft className="w-6 h-6" />
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
      image: 'https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Speakers/ZkJ1cIN8_400x400.jpg',
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


export default function SpeakersPreview() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
      setIsTablet(window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 350,
    slidesToShow: isMobile || isTablet ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: !isMobile && !isTablet,
    nextArrow: !isMobile && !isTablet ? <NextArrow /> : undefined,
    prevArrow: !isMobile && !isTablet ? <PrevArrow /> : undefined,
    appendDots: (dots: React.ReactNode) => (
      <div style={{ bottom: "-30px", left: 0, right: 0 }}>
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gray-600 hover:bg-red-400 transition-all duration-300"></div>
    ),
  };

  const handleViewAllClick = () => router.push("/speakers");

  return (
    <section className="w-full mx-auto px-2 xs:px-3 sm:px-6 py-12 sm:py-16 md:py-20 relative bg-black">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 text-center text-white px-2">
        Featured Speakers
      </h2>

      <Slider {...settings} className="max-w-6xl pb-6 mx-auto relative px-0 sm:px-4 md:px-12">
        {sampleSpeakers.map((speaker) => (
          <motion.div
            key={speaker.id}
            className="flex justify-center items-stretch px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div
              className={`flex items-stretch ${
                isMobile || isTablet
                  ? "w-full mx-auto py-2 justify-center"
                  : "w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xs xl:max-w-xs mx-4"
              }`}
            >
              <SpeakerCard speaker={speaker} />
            </div>
          </motion.div>
        ))}
      </Slider>

      <div className="flex justify-center mt-8 sm:mt-12">
        <motion.button
          className="relative flex items-center justify-center font-semibold text-white rounded-[0.9em] overflow-hidden cursor-pointer
             bg-red-600 px-[1.2em] pr-[3em] py-[0.35em] h-[2.8em] shadow-[inset_0_0_1.6em_-0.6em_rgba(180,0,0,0.5)]] min-w-[150px] sm:min-w-[200px]"
          initial="initial"
          animate="initial"
          whileHover="hovered"
          whileTap={{ scale: 0.96 }}
          onClick={handleViewAllClick}
        >
          <motion.span
            className="relative z-10 text-sm sm:text-base"
            variants={{
              initial: { opacity: 1 },
              hovered: { opacity: 0 },
            }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
          >
            View All Speakers
          </motion.span>

          <motion.div
            className="absolute top-0 right-0 h-full flex items-center justify-center bg-red-600 rounded-[0.9em]"
            variants={{
              initial: { width: 44 },
              hovered: { width: '100%' },
            }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
          >
            <ArrowRight className="text-white w-5 h-5 sm:w-6 sm:h-6" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
