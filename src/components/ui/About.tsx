import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Monitor, DollarSign, Code, Briefcase } from "lucide-react";

const highlights = [
  { icon: Monitor, text: "100% Online Learning" },
  { icon: DollarSign, text: "Affordable Monthly Pricing" },
  { icon: Code, text: "Practical Skill-Based Courses" },
  { icon: Briefcase, text: "Internship Opportunities" },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        <section className="py-24 relative">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <span className="section-badge">🏢 About Us</span>
                <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold font-heading">
                  Who We{" "}
                  <span className="gradient-text">Are</span>
                </h1>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-12 glass-card p-8 lg:p-12"
              >
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We are an online learning platform focused on helping students build practical technology skills. Our goal is to make quality tech education affordable, beginner-friendly and accessible to everyone.
                </p>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  We provide structured 6-month courses, hands-on projects and internship opportunities to help students gain real-world experience and confidence.
                </p>
              </motion.div>

              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="glass-card-glow p-6 flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="font-semibold font-heading">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
