'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import projectsData from '../../../projects.json';

interface Project {
  id: number;
  name: string;
  description?: string;
  urlPhoto: string;
  gitHubUrl: string;
  technologies: string[];
  liveUrl?: string;
}

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const projects: Project[] = projectsData.projects;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectCardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 bg-dark-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-500 mb-3 sm:mb-4">
            Featured Projects
          </h2>
          <p className="text-dark-400 text-base sm:text-lg max-w-2xl mx-auto px-2">
            A showcase of my recent work and contributions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectCardVariants}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group"
            >
              <Card className="bg-dark-100 border-dark-300 overflow-hidden h-full flex flex-col hover:border-dark-400 transition-all duration-300 hover:shadow-2xl hover:shadow-dark-300/20">
                {/* Project Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden bg-dark-200">
                  <motion.div
                    animate={{
                      scale: hoveredProject === project.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.4 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={project.urlPhoto}
                      alt={project.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Overlay on hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: hoveredProject === project.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-dark-100/80 flex items-center justify-center gap-4"
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-dark-500 text-dark-500 hover:bg-dark-500 hover:text-dark-100"
                        onClick={() => window.open(project.gitHubUrl, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      {project.liveUrl && (
                        <Button
                          size="sm"
                          className="bg-dark-500 hover:bg-dark-400 text-dark-100"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live
                        </Button>
                      )}
                    </motion.div>
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow">
                  <h3 className="text-xl sm:text-2xl font-bold text-dark-500 mb-3 group-hover:text-dark-400 transition-colors">
                    {project.name}
                  </h3>
                  
                  {project.description && (
                    <p className="text-dark-400 text-sm sm:text-base mb-4 leading-relaxed flex-grow">
                      {project.description}
                    </p>
                  )}

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.slice(0, 6).map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-dark-200 text-dark-400 hover:bg-dark-300 text-xs px-2 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 6 && (
                      <Badge
                        variant="secondary"
                        className="bg-dark-200 text-dark-400 hover:bg-dark-300 text-xs px-2 py-1"
                      >
                        +{project.technologies.length - 6} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Footer with links */}
                <div className="px-5 sm:px-6 pb-5 flex gap-3 border-t border-dark-300 pt-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex-1 text-dark-400 hover:text-dark-500 hover:bg-dark-200"
                    onClick={() => window.open(project.gitHubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                  {project.liveUrl && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex-1 text-dark-400 hover:text-dark-500 hover:bg-dark-200"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View all projects link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-dark-400 text-dark-400 hover:bg-dark-500 hover:text-dark-100 px-6 sm:px-8"
            onClick={() => window.open('https://github.com/Ichurri', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            View More on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
