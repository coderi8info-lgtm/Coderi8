import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Code, Globe, Coffee, Database } from "lucide-react";

const projectTypes = [
  { icon: Code, title: "Python mini projects" },
  { icon: Globe, title: "Web development websites" },
  { icon: Coffee, title: "Java applications" },
  { icon: Database, title: "Data science mini projects" },
];

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        <section className="py-24 relative">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="section-badge">🚀 Student Projects</span>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold font-heading">
                Build Real{" "}
                <span className="gradient-text">Projects</span>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Our students work on real-world projects during and after the course to improve practical skills.
              </p>
            </motion.div>

            {/* Project Types */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {projectTypes.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card-glow p-6 flex items-center gap-4 group"
                  whileHover={{ y: -4 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <project.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold font-heading text-lg">
                    {project.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
