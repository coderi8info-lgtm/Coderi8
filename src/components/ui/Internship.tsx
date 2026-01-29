import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Calendar, FileCheck, Users, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const internships = [
  {
    title: "15 Days Internship",
    features: [
      { icon: Calendar, text: "Short-term internship" },
      { icon: Users, text: "Beginner-friendly" },
      { icon: FileCheck, text: "Project based learning" },
      { icon: Award, text: "Internship Certificate" },
    ],
  },
  {
    title: "1 Month Internship",
    features: [
      { icon: Calendar, text: "In-depth internship program" },
      { icon: FileCheck, text: "Real-world project" },
      { icon: Users, text: "Mentor guidance" },
      { icon: Award, text: "Internship Certificate" },
    ],
  },
];

const Internship = () => {
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
              <span className="section-badge">🎯 Internship Programs</span>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold font-heading">
                Gain{" "}
                <span className="gradient-text">Real Experience</span>
              </h1>
            </motion.div>

            {/* Internship Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {internships.map((internship, index) => (
                <motion.div
                  key={internship.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card-glow p-8 flex flex-col"
                >
                  <h3 className="text-2xl font-bold font-heading text-foreground text-center">
                    {internship.title}
                  </h3>

                  <ul className="mt-8 space-y-4 flex-1">
                    {internship.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-muted-foreground">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <feature.icon className="w-5 h-5 text-primary" />
                        </div>
                        {feature.text}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center mt-12"
            >
              <Button variant="glow" size="xl" asChild>
                <Link to="/contact">
                  Apply for Internship
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Internship;
