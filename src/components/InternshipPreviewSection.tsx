import { motion } from "framer-motion";
import { Award, Calendar, FileCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const highlights = [
  { icon: Calendar, text: "15 Days Internship" },
  { icon: Calendar, text: "1 Month Internship" },
  { icon: FileCheck, text: "Project & Certificate Included" },
];

const paths = [
  "Python",
  "Data Science", 
  "Java",
  "Web Development",
];

export const InternshipPreviewSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge">🎯 Internship Programs Available</span>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold font-heading">
              Gain{" "}
              <span className="gradient-text">Real-World Experience</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Gain real-world experience through short-term internships with project work and certification.
            </p>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass-card px-6 py-3 flex items-center gap-3"
              >
                <item.icon className="w-5 h-5 text-primary" />
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Learning Paths */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12"
          >
            <p className="text-muted-foreground mb-4">
              Dedicated learning paths available for:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {paths.map((path) => (
                <span
                  key={path}
                  className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground font-medium"
                >
                  {path}
                </span>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12"
          >
            <Button variant="glow" size="lg" asChild>
              <Link to="/internship">
                View Internship Programs
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
