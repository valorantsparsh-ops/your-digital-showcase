import { motion } from "framer-motion";
import { FolderGit2, Star, GitFork, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard.",
    language: "TypeScript",
    stars: 74,
    forks: 28,
    link: "#",
    github: "#",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop, and team features.",
    language: "JavaScript",
    stars: 64,
    forks: 25,
    link: "#",
    github: "#",
  },
  {
    title: "Portfolio Template",
    description:
      "A modern, animated portfolio template built with React and Framer Motion for developers and designers.",
    language: "TypeScript",
    stars: 45,
    forks: 18,
    link: "#",
    github: "#",
  },
  {
    title: "API Gateway Service",
    description:
      "A scalable API gateway built with Node.js featuring rate limiting, caching, and authentication middleware.",
    language: "TypeScript",
    stars: 32,
    forks: 12,
    link: "#",
    github: "#",
  },
  {
    title: "Real-time Chat App",
    description:
      "WebSocket-based chat application with private messaging, group chats, and file sharing capabilities.",
    language: "JavaScript",
    stars: 28,
    forks: 10,
    link: "#",
    github: "#",
  },
  {
    title: "Data Dashboard",
    description:
      "An analytics dashboard with interactive charts, data visualization, and customizable widgets.",
    language: "TypeScript",
    stars: 19,
    forks: 7,
    link: "#",
    github: "#",
  },
];

const languageColors: Record<string, string> = {
  TypeScript: "bg-blue-500",
  JavaScript: "bg-yellow-500",
  Python: "bg-green-500",
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <FolderGit2 className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground uppercase tracking-widest">
              Latest Github Projects
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Open Source Projects</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Check out my public portfolio projects on Github
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-xl p-6 h-full flex flex-col hover:border-primary/30 transition-all duration-300 group-hover:glow-soft">
                <div className="flex items-start justify-between mb-4">
                  <FolderGit2 className="w-10 h-10 text-primary/70" />
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.link}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-3 h-3 rounded-full ${languageColors[project.language] || "bg-gray-500"}`}
                    />
                    <span className="text-muted-foreground">{project.language}</span>
                  </div>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      {project.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      {project.forks}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            >
              <Github className="w-5 h-5 mr-2" />
              View More on Github
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
