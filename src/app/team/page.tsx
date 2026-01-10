'use client'

import { useState, useRef } from 'react'
import { motion, Variants, useInView } from 'framer-motion'
import SpeakerCard from '../../components/SpeakerCard'

type TeamName =
    | 'Core'
    | 'Organising'
    | 'Web Dev'
    | 'Marketing'
    | 'Design'
    | 'Sponsorship'
    | 'Hospitality'
    | 'Content & Curation'
    | 'Productions'

interface Member {
    id: number
    name: string
    title: string
    company: string
    image: string
    bio: string
    description: string
    expertise: string[]
    social: {
        linkedin: string
        instagram?: string
        twitter: string
        website: string
    }
}

export default function TeamsPage() {
    const [activeTeam, setActiveTeam] = useState<TeamName>('Web Dev')

    const teams: Record<TeamName, Member[]> = {
        Core: [
            { id: 1, name: "Palla Rajeswar Reddy", title: "Chairman", company: "VJIT", image: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Core%20Team/Rajeswar%20Reddy.jpg?updatedAt=1758099508501", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "", twitter: "", website: "" } },
            { id: 2, name: "Dr. A. Srujana", title: "Principal", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/core/srujana.jpg?updatedAt=1729522759124", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/srujana-avula-a66167ba/", instagram: "", twitter: "", website: "" } },
            { id: 3, name: "Dr. A. Padmaja", title: "Dean", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/core/WhatsApp%20Image%202024-10-21%20at%2017.24.34_ff68359b.jpg?updatedAt=1729534845207", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/dr-padmaja-meesala-ba3a729/", instagram: "", twitter: "", website: "" } },
            { id: 4, name: "Mrs. G. Srilatha", title: "Academic Coordinator", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/core/srilatha.jpg?updatedAt=1729522759229", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "", twitter: "", website: "" } },
            { id: 5, name: "Mr. R. Venkata Chalam", title: "Sr. Administrative Officer", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/core/chalam.jpg?updatedAt=1729522756976", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "", twitter: "", website: "" } },
            { id: 6, name: "Dr. D. Aruna Kumari", title: "Head of CSE", company: "VJIT", image: "https://ik.imagekit.io/bixqi9iwy/csehod-arunakumari.jpg?updatedAt=1758166667694", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/dr-aruna-kumari-devarakonda-879500167/", instagram: "", twitter: "", website: "" } },
            { id: 7, name: "Dr. KSRK Sarma", title: "Head of CSE(DS)", company: "VJIT", image: "https://ik.imagekit.io/bixqi9iwy/CSEDS-HOD.jpg?updatedAt=1758166958449", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/dr-sarma-ksrk-086a6722/", instagram: "", twitter: "", website: "" } },
            { id: 8, name: "Dr. N. Anusha", title: "Head of CSE(AI&ML)", company: "VJIT", image: "https://ik.imagekit.io/bixqi9iwy/dr.-anusha.jpg?updatedAt=1758167304187", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/dr-n-anusha-2b1156240/", instagram: "", twitter: "", website: "" } },
            { id: 9, name: "Dr. A. Obulesu", title: "Head of IT", company: "VJIT", image: "https://ik.imagekit.io/bixqi9iwy/VJIT-AI-HoD.jpg?updatedAt=1758167466059", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/dr-avuku-obulesh-a04358163/", instagram: "", twitter: "", website: "" } },
            { id: 10, name: "Dr. P. Nageswara Rao", title: "Head of ECE", company: "VJIT", image: "https://ik.imagekit.io/bixqi9iwy/dr.-p.-nageswara-rao.jpg?updatedAt=1758167663583", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "", twitter: "", website: "" } },
            { id: 11, name: "Dr. C. N. Ravi", title: "Head of EEE", company: "VJIT", image: "https://ik.imagekit.io/bixqi9iwy/c.n.raju_.jpg", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "", twitter: "", website: "" } },
            { id: 12, name: "Dr. N. Sudharsan", title: "Head of CIVIL", company: "VJIT", image: "https://ik.imagekit.io/bixqi9iwy/civil-dept.-hod.jpg", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "", twitter: "", website: "" } },
            { id: 13, name: "Dr. G Sreeram Reddy", title: "Head of MECHANICAL", company: "VJIT", image: "https://ik.imagekit.io/bixqi9iwy/sreeramreddy.jpg", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "", twitter: "", website: "" } },
        ],
        Organising: [
            { id: 14, name: "Keerthana", title: "Licensee", company: "VJIT", image: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Organizing/20250927_171839.jpg?updatedAt=1759343102363", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/sai-keerthana-kurapati-15841b24a/", instagram: "", twitter: "", website: "" } },
            { id: 15, name: "Amena Yasmeen", title: "Co - Licensee", company: "VJIT", image: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Organizing/IMG_2641.jpg?updatedAt=1759561146230", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/amenayasmeen/", instagram: "", twitter: "", website: "" } },
            { id: 16, name: "Srinivasulu", title: "Convenor", company: "VJIT", image: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Organizing/IMG_3132.PNG?updatedAt=1759522008332", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "", twitter: "", website: "" } },
            { id: 17, name: "Dr. Ramesh Cheripelli", title: "Co - Convenor", company: "VJIT", image: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Organizing/IMG_3129.PNG?updatedAt=1759522008551", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/dr-ramesh-cheripelli-66057399/", instagram: "", twitter: "", website: "" } },
        ],
        "Web Dev": [
            { id: 20, name: "Varshith Reddy", title: "Team Lead", company: "VJIT", image: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Tech/Varshith.jpg?updatedAt=1757798704189", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/varshithreddy-aileni", instagram: "", twitter: "", website: "" } },
            { id: 21, name: "Vijay Guttula", title: "Co - Lead", company: "VJIT", image: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Tech/Vijay%20Guttula.jpg?updatedAt=1757798815754", bio: "", description: "", expertise: [], social: { linkedin: "https://linkedin.com/in/vijay-guttula", instagram: "", twitter: "", website: "" } },
            { id: 22, name: "Rahul Sai Nadh", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Tech/Rahul.jpg?updatedAt=1757828582345", bio: "", description: "", expertise: [], social: { linkedin: "https://linkedin.com/in/rahul-sai-nadh-638a21324", instagram: "", twitter: "", website: "" } },
            { id: 23, name: "Shivasai Pondurthi", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/y6avvekax/Gemini_Generated_Image_9slgnk9slgnk9slg.png", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/shivasai-pondurthi/", instagram: "", twitter: "", website: "" } },
            { id: 24, name: "Syed Rizwan", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Tech/Riz.jpeg?updatedAt=1768019589280", bio: "", description: "", expertise: [], social: { linkedin: "https://linkedin.com/in/rizwansyed995 ", instagram: "", twitter: "", website: "" } },
        ],
        Marketing: [
            { id: 30, name: "Anirudh Singh", title: "Team Lead", company: "VJIT", image: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Marketing/Anirudh_Singh.jpg?updatedAt=1759331892274", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/anirudh-singh-495127324/", instagram: "", twitter: "", website: "" } },
            { id: 31, name: "A. Sankeerth", title: "Co - Lead", company: "VJIT", image: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Marketing/Sankeerth.jpg?updatedAt=1759331892883", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/sankeerth-alla-3b4a3b336/", instagram: "", twitter: "", website: "" } },
            { id: 32, name: "Ch Vidya", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Marketing/Ch%20vidya.jpg", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/chakilam-vidya-515157378/", instagram: "", twitter: "", website: "" } },
            { id: 33, name: "Md. Mubashir", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Marketing/Mohammad%20Mubashir%20Ahmed.jpg?updatedAt=1759331893580", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/md-mubashir-ahmed-00511728b/", instagram: "", twitter: "", website: "" } },
            { id: 34, name: "Garima Choudhary", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Tech/Garima.jpeg", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/garima-choudhary-51b404356/", instagram: "", twitter: "", website: "" } },
            { id: 35, name: "Syed Iliyaz", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Marketing/WhatsApp%20Image%202025-12-28%20at%2015.22.51.jpeg", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/syediliyaz18/", instagram: "", twitter: "", website: "" } },
        ],
        Design: [
            { id: 40, name: "Sana Fatima", title: "Team Lead", company: "VJIT", image: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Design/Sana.jpg?updatedAt=1759592803088", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/sana-fatima-641a4628a/", instagram: "", twitter: "", website: "" } },
            { id: 41, name: "Kashish K", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Design/Kashish%20K.JPG?updatedAt=1759332328841", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/kashish-k-59941a334/", instagram: "", twitter: "", website: "" } },
            { id: 42, name: "Manogna", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Design/Manogna.jpg", bio: "", description: "", expertise: [], social: { linkedin: "http://linkedin.com/in/manogna-pulipaka-90b58626b/", instagram: "", twitter: "", website: "" } },
            { id: 43, name: "Neethika Guttula", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Design/Neethika%20Guttula.jpg?updatedAt=1759332330172", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/neethika-guttula-bbb6a3286", instagram: "", twitter: "", website: "" } },
            { id: 44, name: "Shashank", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Design/Shashank.jpg?updatedAt=1759592803355", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/madishetty-shashank-1365793a4", instagram: "", twitter: "", website: "" } },
            { id: 45, name: "Sushmitha Das", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Design/Sushmitha%20Das.jpg?updatedAt=1759332329117", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/sushmithadas13", instagram: "", twitter: "", website: "" } },
            { id: 46, name: "Zunairah", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Design/Zunairah.jpg", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/syeda-zunairah-fathima-40360a387/", instagram: "", twitter: "", website: "" } },
        ],
        Sponsorship: [
            { id: 50, name: "Akula Nehal", title: "Team Lead", company: "VJIT", image: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Sponsorship/Akula%20Nehal.jpg?updatedAt=1759331600551", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/akulanehal/", instagram: "", twitter: "", website: "" } },
            { id: 51, name: "Mohammed Fouzaan", title: "Co - Lead", company: "VJIT", image: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Sponsorship/M.fouzaan.heic?updatedAt=1759331601943", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/mohammed-fouzaan-hussain-36b078297/", instagram: "", twitter: "", website: "" } },
            { id: 52, name: "C. Snikitha", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Sponsorship/C.Snikitha.jpg?updatedAt=1759331674373", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/chelikani-snikitha-2930b52b8/", instagram: "", twitter: "", website: "" } },
            { id: 53, name: "Dhruv", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Sponsorship/Dhruv.jpg?updatedAt=1759331598811", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/dhruv-bokka-357b40359", instagram: "", twitter: "", website: "" } },
            { id: 54, name: "G Veekshana Reddy", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Sponsorship/IMG_2638.jpg", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/veekshana-reddy-53856a297/", instagram: "", twitter: "", website: "" } },
            { id: 55, name: "Kavya", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Sponsorship/Kavya.jpg?updatedAt=1759814456090", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/kavya-sri-kopalli-924396377", instagram: "", twitter: "", website: "" } },
        ],
        Hospitality: [
            { id: 60, name: "Parth Asawa", title: "Team Lead", company: "VJIT", image: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Hospitality/1756661688903.jpg", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/parthasawa/", instagram: "", twitter: "", website: "" } },
            { id: 61, name: "Rohan Kumar", title: "Co - Lead", company: "VJIT", image: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Hospitality/WhatsApp%20Image%202026-01-07%20at%2011.59.58.jpeg", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/rohan-kumar-105891259/", instagram: "", twitter: "", website: "" } },
            { id: 62, name: "Abdullah", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Hospitality/Photo%20from%20Abdullah%20Aarif%20Shaikh.jpg?updatedAt=1767634635404", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/abdullah-aarif-shaikh-0b248b227/", instagram: "", twitter: "", website: "" } },
            { id: 63, name: "B Rajshekar", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Hospitality/WhatsApp%20Image%202026-01-06%20at%2021.59.45.jpeg?updatedAt=1767717033586", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/b-rajshekar/", instagram: "", twitter: "", website: "" } },
            { id: 64, name: "Faizan", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Hospitality/Faizan.jpeg", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/faizanmohammed07tech/", instagram: "", twitter: "", website: "" } },
            { id: 65, name: "Sagar", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Hospitality/WhatsApp%20Image%202026-01-07%20at%2012.12.04.jpeg", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/g-sagar-kumar-0a292b298/", instagram: "", twitter: "", website: "" } },
        ],
        "Content & Curation": [
            { id: 70, name: "P Naga Bhavagnya", title: "Team Lead", company: "VJIT", image: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Content%20and%20Curation/P.%20Naga%20Bhavagnya.jpg?updatedAt=1759332620236", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/bhavagnya-p-384858297/", instagram: "", twitter: "", website: "" } },
            { id: 71, name: "Rishika Devi", title: "Co - Lead", company: "VJIT", image: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Content%20and%20Curation/Rishika%20Devi.jpg?updatedAt=1759332621276", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/rishika-devi-362102285/", instagram: "", twitter: "", website: "" } },
            { id: 72, name: "Juveria Usman", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Content%20and%20Curation/Juveria%20Usman.jpg?updatedAt=1759332620370", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/juveria-usman-07821b2aa/", instagram: "", twitter: "", website: "" } },
            { id: 74, name: "Ruthvik Reddy", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Content%20and%20Curation/Ruthvik%20Reddy%20Devidi.jpg?updatedAt=1759332620422", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/ruthvik-reddy-devidi-205638298/", instagram: "", twitter: "", website: "" } },
            { id: 76, name: "Vedasri Keerthi", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Content%20and%20Curation/VedasriKeerthi.jpg?updatedAt=1759332620726", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/vedasri-keerthi-a57043299/", instagram: "", twitter: "", website: "" } },
        ],
        Productions: [
            { id: 80, name: "Akshith Reddy", title: "Team Lead", company: "VJIT", image: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Productions/Akshith%20Reddy.jpg?updatedAt=1759332802432", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/akshith-reddy-k-7a4566319/", instagram: "", twitter: "", website: "" } },
            { id: 81, name: "Naidhruv", title: "Co - Lead", company: "VJIT", image: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Productions/Naidhruv.jpg?updatedAt=1759332800819", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/naidhruv-kunderu-36129a28b/", instagram: "", twitter: "", website: "" } },
            { id: 82, name: "Bhavani Devi", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Productions/BHAVANI%20DEVI%20.jpg?updatedAt=1759332799408", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/tenneti-bhavani-devii-a2a24932a/", instagram: "", twitter: "", website: "" } },
            { id: 83, name: "Charitha", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Productions/charitha.jpg?updatedAt=1759817018171", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/charitha-choudary-4960b72b8/", instagram: "", twitter: "", website: "" } },
            { id: 84, name: "Harshavardhan", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Productions/harshavardhan.jpg?updatedAt=1759332840884", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/harsh-vardhan-6b0a69325/", instagram: "", twitter: "", website: "" } },
            { id: 85, name: "Jithendra", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Productions/Jithendra.jpg?updatedAt=1759332840818", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/jithendra-appari-3234743a4", instagram: "", twitter: "", website: "" } },
            { id: 86, name: "Neehala", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Productions/Neehala.jpeg", bio: "", description: "", expertise: [], social: { linkedin: "", instagram: "", twitter: "", website: "" } },
            { id: 87, name: "Tarun", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Productions/Tarunnn.jpg?updatedAt=1759332801013", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/tarun-kumar-518961388", instagram: "", twitter: "", website: "" } },
            { id: 88, name: "Yuvraj", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Productions/Yuvraj.jpg?updatedAt=1759332800149", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/yuvraj7singh/", instagram: "", twitter: "", website: "" } },
        ],
    }

    // Variants
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    }

    const buttonVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    }

    const heroVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    }

    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 my-auto">
            {/* Hero Section */}
            <motion.section
                className="relative min-h-screen flex flex-col justify-center py-20 px-4 overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={heroVariants}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-red-800/10" />
                <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
                <div className="relative max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                        Meet Our
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                            Team
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                        The passionate individuals working behind the scenes to bring TED<sup>x</sup> VJIT to life.
                    </p>
                </div>
            </motion.section>

            {/* Core Team Section */}
            <section ref={sectionRef} className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center my-8">
                        <h2 className="text-2xl lg:text-3xl font-bold text-white">Core Team</h2>
                        <hr className="mx-auto mt-2 w-24 lg:w-28 border-t-2 border-red-500" />
                    </div>
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
                        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                    >
                    {teams.Core.map((member) => (
                        <motion.div
                            key={member.id}
                            variants={cardVariants}
                            whileHover={{
                                scale: 1.05
                            }}
                            className="flex justify-center"
                        >
                            <SpeakerCard speaker={member} />
                        </motion.div>
                    ))}
                    </motion.div>
                </div>
            </section>

            {/* Organising Team Section */}
            <section className="py-10 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center my-8">
                        <h2 className="text-2xl lg:text-3xl font-bold text-white">Organising Team</h2>
                        <hr className="mx-auto mt-2 w-36 lg:w-40 border-t-2 border-red-500" />
                    </div>
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
                        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                    >
                        {teams.Organising.map((member) => (
                            <motion.div
                                key={member.id}
                                variants={cardVariants}
                                whileHover={{
                                    scale: 1.05
                                }}
                                className="flex justify-center"
                            >
                                <SpeakerCard speaker={member} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>



            {/* Other Teams Section */}
            <section className="py-10 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center my-8">
                        <h2 className="text-2xl lg:text-3xl font-bold text-white">Student Team</h2>
                        <hr className="mx-auto mt-2 w-30 lg:w-36 border-t-2 border-red-500" />
                    </div>
                    {/* Team Tabs */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-5 mb-8"
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
                    >
                        {Object.keys(teams)
                            .filter((team) => team !== 'Core' && team !== 'Organising')
                            .map((team) => (
                                <motion.button
                                    key={team}
                                    onClick={() => setActiveTeam(team as TeamName)}
                                    variants={buttonVariants}
                                    whileHover={{ scale: 1.05 }}
                                    className={`relative px-5.5 py-2.5 text-sm md:text-base font-medium rounded-full overflow-hidden cursor-pointer transition-all duration-300 ${activeTeam === team
                                            ? 'bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white shadow-md'
                                            : 'bg-white/10 text-gray-300 border border-white/10 hover:bg-white/20 hover:text-white'
                                        }`}
                                >
                                    {team}
                                </motion.button>
                            ))}
                    </motion.div>

                    {/* Active Team Grid */}
                    <motion.div
                        className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
                        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                    >
                        {teams[activeTeam].map((member) => (
                            <motion.div
                                key={member.id}
                                variants={cardVariants}
                                whileHover={{
                                    scale: 1.05
                                }}
                                className="flex justify-center"                               
                            >
                                <SpeakerCard speaker={member} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

