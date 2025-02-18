import { motion } from "framer-motion";
export default function Skills() {
  return (
    <section className="w-full py-16 bg-gray-800 text-center">
      <h2 className="text-3xl font-bold mb-6 text-white">Skills</h2>

      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-6">
        {[
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "JavaScript",
          "HTML",
          "CSS",
          "Git",
          "Firebase",
          "Node.js",
        ].map((skill, index) => (
          <div
            key={index}
            className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow-md text-lg font-medium 
                       hover:bg-blue-500 transition-all transform hover:scale-105 animate-fadeIn"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
