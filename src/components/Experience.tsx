import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Company",
    period: "2023 - Present",
    location: "Remote",
    description:
      "Developing modern, responsive frontend applications with focus on user experience and performance. Working with cutting-edge technologies to build scalable web solutions.",
    achievements: [
      "Building responsive and interactive user interfaces using React and Next.js",
      "Implementing modern UI/UX designs with TailwindCSS and Framer Motion",
      "Optimizing application performance and ensuring cross-browser compatibility",
      "Collaborating with design and backend teams to deliver high-quality features",
    ],
    skills: ["React", "Next.js", "TailwindCSS", "TypeScript", "Framer Motion"],
  },
  {
    title: "Full Stack Developer",
    company: "Startup Inc",
    period: "2021 - 2023",
    location: "Remote",
    description:
      "Developed and maintained full-stack web applications, working on both frontend and backend systems. Collaborated with cross-functional teams to deliver robust software solutions.",
    achievements: [
      "Developed and maintained full-stack web applications using React, Node.js, and MongoDB",
      "Implemented RESTful APIs and integrated third-party services",
      "Built responsive user interfaces and optimized application performance",
      "Worked on database design and backend architecture",
    ],
    skills: ["React", "Node.js", "MongoDB", "Express", "JavaScript"],
  },
  {
    title: "Junior Developer",
    company: "Agency XYZ",
    period: "2019 - 2021",
    location: "On-site",
    description:
      "Started my professional journey building websites and web applications for various clients. Gained foundational skills in modern web development practices.",
    achievements: [
      "Built responsive websites using HTML, CSS, and JavaScript",
      "Learned React and began contributing to larger projects",
      "Collaborated with senior developers on client projects",
      "Participated in code reviews and agile ceremonies",
    ],
    skills: ["HTML", "CSS", "JavaScript", "React", "Git"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Briefcase className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground uppercase tracking-widest">
              Professional Experience
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A journey through my professional career and key achievements
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-[11px] top-6 bottom-0 w-px bg-border" />
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full border-2 border-primary bg-background flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>

              {/* Content Card */}
              <div className="glass-card rounded-xl p-6 ml-4 hover:border-primary/30 transition-colors duration-300">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-1">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">▸</span>
                      {achievement}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
