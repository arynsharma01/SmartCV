import { motion } from "motion/react"
import CvCard from "./CvCard"

export default function Marquee(){

    let UpperCards = [
        { 
            FullName: "Krishna Sharma", 
            color: "yellow", 
            domain: "Full Stack Developer", 
            description: "Expert in MERN stack, passionate about building scalable web applications and APIs." 
        },
        { 
            FullName: "Mohit Arora", 
            color: "pink", 
            domain: "Data Analyst", 
            description: "Proficient in Python, SQL, and Power BI, specializing in data visualization and insights." 
        },
        { 
            FullName: "Jatin Mehta", 
            color: "green", 
            domain: "Machine Learning", 
            description: "AI enthusiast with expertise in deep learning, NLP, and predictive analytics." 
        },
        { 
            FullName: "Aryan Sharma", 
            color: "green", 
            domain: "DevOps Engineer", 
            description: "Experienced in CI/CD, Kubernetes, and cloud automation for efficient deployments." 
        },
        { 
            FullName: "Rohan Kumar", 
            color: "gray", 
            domain: "UI/UX Developer", 
            description: "Creative designer with a strong focus on user-centric interfaces and accessibility." 
        },
        { 
            FullName: "Madhav Thakur", 
            color: "orange", 
            domain: "Cyber Security", 
            description: "Passionate about ethical hacking, penetration testing, and network security." 
        },
        { 
            FullName: "Radhika Jain", 
            color: "blue", 
            domain: "Data Science", 
            description: "Skilled in data modeling, machine learning, and big data technologies." 
        },
    ]
    let LowerCards = [
        { 
            FullName: "Sarthak Verma", 
            color: "purple", 
            domain: "Cloud Engineer", 
            description: "Specialist in AWS, Azure, and cloud security, optimizing infrastructure for scalability." 
        },
        { 
            FullName: "Neha Kapoor", 
            color: "teal", 
            domain: "Software Engineer", 
            description: "Experienced in Java, Spring Boot, and microservices architecture for enterprise applications." 
        },
        { 
            FullName: "Vikram Singh", 
            color: "red", 
            domain: "Blockchain Developer", 
            description: "Building decentralized applications and smart contracts using Solidity and Ethereum." 
        },
        { 
            FullName: "Ananya Joshi", 
            color: "cyan", 
            domain: "AI Researcher", 
            description: "Exploring reinforcement learning, computer vision, and AI-driven automation." 
        },
        { 
            FullName: "Kunal Taneja", 
            color: "indigo", 
            domain: "Mobile App Developer", 
            description: "Expert in Flutter and React Native, creating cross-platform mobile apps." 
        },
        { 
            FullName: "Pooja Rathi", 
            color: "lime", 
            domain: "Cyber Security Analyst", 
            description: "Focused on security audits, threat analysis, and penetration testing." 
        },
        { 
            FullName: "Rahul Mehta", 
            color: "emerald", 
            domain: "Embedded Systems Engineer", 
            description: "Developing IoT solutions and firmware for smart devices and automation." 
        },
    ];
    
    

    return <div className="container mx-auto">
        <div className="border ">
        <motion.div
        initial= {{x:0}}
        animate =  {{x:"-100%"}}
        transition={{duration :30 ,repeat :Infinity ,ease :"linear"}}

        className="flex">
        {UpperCards.map((card, index) => (
            <CvCard key={index} {...card} />
          ))}
        </motion.div>

        <motion.div
        initial= {{x:0}}
        animate =  {{x:"100%"}}
        transition={{duration :30 ,repeat :Infinity ,ease :"linear"}}
    
        className="flex">
        {LowerCards.map((card, index) => (
            <CvCard key={index} {...card} />
          ))}
        </motion.div>
        </div>
    </div>
}