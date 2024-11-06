"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Digital Transport Ystem",
    description: "Digital Transport Ystem",
    image: "/images/projects/1.jpeg",
    tag:["All","Branding","Social"],
    gitUrl: "https://github.com/mehmood712/mehmood712",
    previewUrl: "https://github.com/mehmood712/mehmood712",
  },
  {
    id: 2,
    title: "Digital Transport Ystem",
    description: "Digital Transport Ystem",
    image: "/images/projects/2.jpeg",
    tag:["All","Branding","Social"],
    gitUrl: "https://github.com/mehmood712/mehmood712",
    previewUrl: "https://github.com/mehmood712/mehmood712",
  },
  {
    id: 3,
    title: "Digital Transport Ystem",
    description: "Digital Transport Ystem ",
    image: "/images/projects/3.jpeg",
    tag:["All","Branding","Social"],
    gitUrl: "https://github.com/mehmood712/mehmood712",
    previewUrl: "https://github.com/mehmood712/mehmood712",
  },
  {
    id: 4,
    title: "Digital Transport Ystem",
    description: "Digital Transport Ystem",
    image: "/images/projects/4.jpeg",
    tag:["All","Branding","Social"],
    gitUrl: "https://github.com/mehmood712/mehmood712",
    previewUrl: "https://github.com/mehmood712/mehmood712",
  },
  {
    id: 5,
    title: "Digital Transport Ystem",
    description: "Digital Transport Ystem",
    image: "/images/projects/5.jpeg",
    tag: ["All","Branding","Social"],
    gitUrl: "https://github.com/mehmood712/mehmood712",
    previewUrl: "https://github.com/mehmood712/mehmood712",
  },
  {
    id: 6,
    title: "Digital Transport Ystem",
    description: "Digital Transport Ystem",
    image: "/images/projects/6.jpeg",
    tag: ["All","Branding","Social"],
    gitUrl: "https://github.com/mehmood712/mehmood712",
    previewUrl: "https://github.com/mehmood712/mehmood712",
  },
  {
    id: 7,
    title: "Digital Transport Ystem",
    description: "Digital Transport Ystem",
    image: "/images/projects/7.jpeg",
    tag:["All","Branding","Social"],
    gitUrl: "https://github.com/mehmood712/mehmood712",
    previewUrl: "https://github.com/mehmood712/mehmood712",
  },
  {
    id: 8,
    title: "Digital Transport Ystem",
    description: "Digital Transport Ystem",
    image: "/images/projects/8.jpeg",
    tag:["All","Branding","Social"],
    gitUrl: "https://github.com/mehmood712/mehmood712",
    previewUrl: "https://github.com/mehmood712/mehmood712",
  },
  {
    id: 9,
    title: "Digital Transport Ystem",
    description: "Digital Transport Ystem",
    image: "/images/projects/9.jpeg",
    tag:["All","Branding","Social"],
    gitUrl: "https://github.com/mehmood712/mehmood712",
    previewUrl: "https://github.com/mehmood712/mehmood712",
  },
  {
    id: 10,
    title: "Digital Transport Ystem",
    description: "Digital Transport Ystem",
    image: "/images/projects/10.jpeg",
    tag:["All","Branding","Social"],
    gitUrl: "https://github.com/mehmood712/mehmood712",
    previewUrl: "https://github.com/mehmood712/mehmood712",
  },
  {
    id: 11,
    title: "Digital Transport Ystem",
    description: "Digital Transport Ystem",
    image: "/images/projects/11.jpeg",
    tag:["All","Branding","Social"],
    gitUrl: "https://github.com/mehmood712/mehmood712",
    previewUrl: "https://github.com/mehmood712/mehmood712",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Branding"
          isSelected={tag === "Branding"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Social"
          isSelected={tag === "Social"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
