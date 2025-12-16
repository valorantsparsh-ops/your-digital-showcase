import { motion } from "framer-motion";
import { FolderGit2, Star, GitFork, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ✏️ EDIT: Replace with your actual projects */
const projects = [
  {
    title: "Project Name 1", /* ✏️ EDIT */
    description: "Project description goes here. Describe what the project does and its key features.", /* ✏️ EDIT */
    language: "TypeScript",
    stars: 74,
    forks: 28,
    link: "#", /* ✏️ EDIT: Live demo URL */
    github: "#", /* ✏️ EDIT: GitHub repo URL */
    image: "/placeholder.svg",
  },
  {
    title: "Project Name 2", /* ✏️ EDIT */
    description: "Another project description. Highlight the technologies used and the problem it solves.", /* ✏️ EDIT */
    language: "JavaScript",
    stars: 64,
    forks: 25,
    link: "#", /* ✏️ EDIT */
    github: "#", /* ✏️ EDIT */
    image: "/placeholder.svg",
  },
  {
    title: "Project Name 3", /* ✏️ EDIT */
    description: "Your third project. Add more projects by copying this object structure.", /* ✏️ EDIT */
    language: "TypeScript",
    stars: 45,
    forks: 18,
    link: "#", /* ✏️ EDIT */
    github: "#", /* ✏️ EDIT */
    image: "/placeholder.svg",
  },
  {
    title: "Project Name 4", /* ✏️ EDIT */
    description: "Fourth project description. Include any notable achievements or results.", /* ✏️ EDIT */
    language: "Python",
    stars: 32,
    forks: 12,
    link: "#", /* ✏️ EDIT */
    github: "#", /* ✏️ EDIT */
    image: "/placeholder.svg",
  },
  {
    title: "Project Name 5", /* ✏️ EDIT */
    description: "Fifth project. You can add or remove projects as needed.", /* ✏️ EDIT */
    language: "JavaScript",
    stars: 28,
    forks: 10,
    link: "#", /* ✏️ EDIT */
    github: "#", /* ✏️ EDIT */
    image: "/placeholder.svg",
  },
  {
    title: "Project Name 6", /* ✏️ EDIT */
    description: "Last project in the grid. Feel free to adjust the number of projects.", /* ✏️ EDIT */
    language: "TypeScript",
    stars: 19,
    forks: 7,
    link: "#", /* ✏️ EDIT */
    github: "#", /* ✏️ EDIT */
    image: "/placeholder.svg",
  },
];

const languageColors: Record<string, string> = {
  TypeScript: "bg-blue-500",
  JavaScript: "bg-yellow-500",
  Python: "bg-green-500",
};

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <FolderGit2 className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground uppercase tracking-widest">
                My Work
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Projects</h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              A collection of my recent projects and open source contributions
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="glass-card rounded-xl overflow-hidden h-full flex flex-col hover:border-primary/30 transition-all duration-300 group-hover:glow-soft edit-highlight">
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <FolderGit2 className="w-16 h-16 text-primary/30" />
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-display text-lg font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2">
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
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            {/* ✏️ EDIT: Your GitHub URL */}
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
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
