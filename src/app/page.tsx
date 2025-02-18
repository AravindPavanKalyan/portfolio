// app/page.js
'use client';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaJsSquare, FaCogs } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiDocker } from "react-icons/si";
import { FaGitAlt, FaLinkedin, FaEnvelope, FaGlobe } from "react-icons/fa";
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
import Navbar from "../app/components/Navbar/page";
import Background from "../app/components/background/page";
import ContactForm from "./components/contact/page";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  
  useEffect(() => {
    setIsClient(true); 
  }, []);

  if (!isClient) {
    return null; 
  }

  return (
    <div className="relative w-full flex flex-col text-white overflow-hidden">
      {/* Animated Background */}
     <Background />

      {/* Header Section */}
      <header className="w-full h-20 flex items-center justify-center px-6 md:px-12 shadow-lg bg-gradient-to-r from-blue-800 via-blue-500 to-slate-800 border-b-2 border-b-gray-600 z-10">
        <img
          src="./Logo1.png"
          alt="Logo"
          className="w-14 h-14 md:w-20 md:h-20 text-center "
        />
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex flex-col min-h-screen items-center justify-center flex-1 px-6 text-center space-y-6 z-10">
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-300"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Hi, I'm <span className="text-[#6B778D]">Ahmed Allali <span className="text-[#6B778D]">👋🏻</span></span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl max-w-2xl mt-4 leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          I'm a <span className="font-semibold text-sky-400">Frontend Developer</span> passionate about crafting responsive, accessible, and user-friendly web applications.
          I specialize in <span className="font-semibold text-sky-400">Next.js, React, TypeScript, and Tailwind CSS</span> to build modern, high-performance UIs.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-6 flex gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <a
            href="./cv.pdf"
            target="_blank"
            className="px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold rounded-lg shadow-lg transition-all"
          >
            My Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold rounded-lg shadow-lg transition-all"
          >
            Contact Me
          </a>
        </motion.div>
      </main>

      {/* Skills Section */}
      <section id="skills" className="relative w-full py-16 bg-gradient-to-r from-blue-600 via-blue-500 to-gray-800 text-center z-10">
        <motion.h2
          className="text-3xl font-bold mb-6 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          Skills
        </motion.h2>

        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-6">
          {[
            { name: "Next.js", icon: <SiNextdotjs className="text-blue-500 text-4xl" /> },
            { name: "React", icon: <FaReact className="text-cyan-400 text-4xl" /> },
            { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-4xl" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-4xl" /> },
            { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500 text-4xl" /> },
            { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
            { name: "CSS", icon: <FaCss3Alt className="text-blue-600 text-4xl" /> },
            { name: "Git", icon: <FaGitAlt className="text-orange-600 text-4xl" /> },
            { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
            { name: "C", icon: <FaCogs className="text-green-600 text-4xl" /> },
            { name: "C++", icon: <FaCogs className="text-blue-600 text-4xl" /> },
            { name: "Docker", icon: <SiDocker className="text-blue-600 text-4xl" /> },
            { name: "Docker Compose", icon: <SiDocker className="text-blue-500 text-4xl" /> },
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-b from-gray-700 to-gray-800 text-white px-6 py-4 rounded-lg shadow-lg text-lg font-medium hover:bg-gradient-to-r hover:from-sky-500 hover:to-indigo-500 transition-all transform hover:scale-105 flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2 + index * 0.1 }}
            >
              {skill.icon}
              <span className="mt-2">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </section>
      <section id="projects" className="w-full py-16 bg-gradient-to-r from-blue-500 via-blue-400 to-gray-700 text-center z-10">
  <motion.h2
    className="text-3xl font-bold mb-6 text-white"
    initial={{ opacity: 0.5 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2, delay: 2 }}
  >
    Projects
  </motion.h2>
  <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
  {[
    { 
      title: "Astro Pong", 
      description: "A multiplayer Pong game with a modern twist, built using Next.js, TailwindCSS, and Django.", 
      image: "/astro_pong.jpg", // Replace with actual image path
      githubLink: "https://github.com/abizyane/ft_transcendence" 
    },
    { 
      title: "Portfolio Website", 
      description: "A personal portfolio website showcasing 42 projects, built with Next.js and Tailwind CSS.", 
      image: "/portfolio.png", // Replace with actual image path
      githubLink: "https://github.com/yourusername/project2" 
    },
    { 
      title: "Inception", 
      description: "A Docker-based project to set up a WordPress website with Docker Compose, NGINX, and MariaDB.", 
      image: "/inception.jpg", // Replace with actual image path
      githubLink: "https://github.com/yourusername/project3" 
    },
    { 
      title: "IRC", 
      description: "An Internet Relay Chat server and client implemented in C++, supporting multiple users and channels.", 
      image: "/ft_irc.jpg", // Replace with actual image path
      githubLink: "https://github.com/yourusername/project4" 
    },
    { 
      title: "Cub3D", 
      description: "A raycasting-based 3D game inspired by Wolfenstein 3D, built in C using the MinilibX library.", 
      image: "/Cub3D.png", // Replace with actual image path
      githubLink: "https://github.com/yourusername/project5" 
    },
    { 
      title: "Minishell", 
      description: "A minimalist shell implementation in C, supporting basic commands, pipes, and redirections.", 
      image: "/minishell.jpg", // Replace with actual image path
      githubLink: "https://github.com/yourusername/project6" 
    },
  ].map((project, index) => (
    <motion.div
      key={index}
      className="relative bg-gradient-to-b from-gray-700 to-gray-800 bg-opacity-10 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform flex flex-col justify-between overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }} // Start slightly scaled down
      animate={{ opacity: 1, scale: 1 }} // Animate to full scale and visible
      transition={{ duration: 0.2, delay: index * 0.1 }} // Faster animation with shorter delay
      whileHover={{ scale: 1.05 }} // Subtle scale-up on hover
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-40 object-cover rounded-lg mb-4 transition-transform duration-300 hover:scale-105" // Image scales slightly on hover
      />
      <div className="flex flex-col items-center text-white p-2">
        <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
        <p className="text-sm opacity-80 text-center">{project.description}</p>
      </div>
      <a
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105" // Button scales slightly on hover
      >
        View Project
      </a>
    </motion.div>
  ))}
</div>
</section>
      {/* Contact Section */}
      <ContactForm />
      <section id="contact" className="w-full pt-16 bg-gradient-to-r from-blue-500 via-blue-400 to-gray-700 text-center z-10">

        <div className="mt-12">
          <motion.h3
            className="text-2xl font-semibold text-white mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            Connect with Me
          </motion.h3>

          <div className="flex justify-center gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-gray-400 transition-all">
              <FaGitAlt />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-gray-400 transition-all">
              <FaLinkedin />
            </a>
            <a href="mailto:ahmedallali1@outlook.com" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-gray-400 transition-all">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <footer className="mt-16 py-6 flex-1 bg-gray-800 text-center text-white">
          <p>&copy; 2025 Ahmed Allali. All rights reserved.</p>
        </footer>
      </section>
    </div>
  );
}