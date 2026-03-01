import Navbar from "@/components/homepage/Navbar";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Bubble Game",
    desc: [
      "Developed a browser-based number shooter game focused on logic and timing.",
      "Implemented dynamic DOM manipulation, real-time scoring, and countdown mechanics.",
      "Optimized event handling for smooth user interaction and performance."
    ],
    tech: ["HTML", "CSS", "JavaScript", "DOM Manipulation"],
    type: "Frontend",
    image: "/projects/bubble-game.jpg",
    repo: "https://github.com/srushtipadole/Bubble-Game"
  },
  {
    title: "AI Image Generator",
    desc: [
      "Built an AI-powered application that generates images from natural language prompts.",
      "Integrated external AI APIs for real-time image synthesis and rendering.",
      "Implemented clean UI flow for prompt handling and output display."
    ],
    tech: ["React", "Vite", "OpenAI / Gemini API", "Axios", "Tailwind CSS"],
    type: "Frontend",
    image: "/projects/AI-image.png",
    repo: "https://github.com/srushtipadole/AI_Image_Generator"
  },
  {
    title: "Campus Tree Mapper",
    desc: [
      "Built a geolocation-based web application to map and categorize campus trees.",
      "Integrated map APIs to display real-time location markers and species details.",
      "Designed structured data management for scalable environmental tracking."
    ],
    tech: ["React", "Google Maps API", "MongoDB", "Node.js", "Express", "Axios"],
    type: "Full-Stack",
    image: "/projects/tree-mapper.png",
    repo: "https://github.com/srushtipadole/Mapple_tree"
  },
  {
    title: "Fleet Management System",
    desc: [
      "Developing a comprehensive fleet monitoring system using the MERN stack.",
      "Implemented role-based dashboards for admin and operations tracking.",
      "Designed scalable architecture for trip analytics and maintenance logs."
    ],
    tech:  ["React", "Node.js", "Express", "MongoDB", "JWT Authentication", "REST APIs"],
    type: "Full-Stack",
    image: "/projects/fleet-management.png",
    repo: "https://github.com/srushtipadole/fleet-management"
  },
  {
    title: "Donara",
    desc: [
      "Developed a donation management platform connecting donors, NGOs, and delivery agents.",
      "Implemented admin approval and NGO assignment workflow.",
      "Designed structured backend logic for request tracking and distribution management."
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Role-Based Access Control", "REST APIs"],
    type: "Full-Stack",
    image: "/projects/donara.png",
    repo: "https://github.com/srushtipadole/Bubble-Game"
  }
];

export default function ProjectsSection() {
  return (
    <>
      <Navbar />

      <main id="projects" className="bg-black text-white pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">

          {/* ===== HEADER ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h1 className="text-5xl font-extrabold mb-4">
              Projects
            </h1>
            <p className="text-gray-400 leading-relaxed">
              A curated selection of academic, personal, and real-world projects
              showcasing my full-stack development journey.
            </p>
          </motion.div>

          {/* ===== PROJECT GRID ===== */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="border border-white/30 rounded-2xl overflow-hidden
                           hover:border-white transition-all duration-300
                           hover:-translate-y-1"
              >
                {/* IMAGE */}
                <div className="h-44 w-full overflow-hidden bg-black flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover
                               transition-transform duration-500 ease-out
                               hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">

                  <span className="inline-block text-xs mb-4 px-3 py-1 rounded-full
                                   border border-white/30 text-white/80">
                    {project.type}
                  </span>

                  <h3 className="text-xl font-semibold mb-4 text-[#d8c195]">
                    {project.title}
                  </h3>

                  {/* FIXED DESCRIPTION (NO <p> wrapping <ul>) */}
                  <ul className="text-sm text-gray-400 leading-relaxed mb-5 list-disc pl-5 space-y-2">
                    {project.desc.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>

                  {/* TECH STACK */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1 rounded-full
                                   border border-white/20 text-gray-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* ACTIONS */}
                  <div className="flex gap-3">
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 rounded-lg text-sm text-center
                                 border border-white/40 text-gray-300
                                 hover:border-white hover:text-white transition"
                    >
                      Code
                    </a>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </main>
    </>
  );
}

