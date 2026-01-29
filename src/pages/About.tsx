import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Monitor, DollarSign, Code, Briefcase, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import amithPhoto from "@/assets/amith-photo.jpg.jpeg";

const highlights = [
  { icon: Monitor, text: "100% Online Learning" },
  { icon: DollarSign, text: "Affordable Monthly Pricing" },
  { icon: Code, text: "Practical Skill-Based Courses" },
  { icon: Briefcase, text: "Internship Opportunities" },
];

const founders = [
  {
    name: "Amith Roshan Raj",
    role: "Founder & CEO",
    description: "Amith, the Founder and CEO of this startup, is a third-year B.Tech IT student and an intern at T-Machine Software Solutions. He is also the former founder of CodeTriangle. After completing his 12th grade, he pursued Full Stack Development in Python and Advanced AI & ML. With this strong technical foundation and a clear vision to support students, he started this online learning platform to provide quality education at an affordable cost.",
    image: amithPhoto,
    linkedin: "https://www.linkedin.com/in/amithroshanraj-tnj-87616328a/",
  },
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

        {/* Founders Section */}
        <section className="py-24 relative bg-muted/30">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading">
                Meet our <span className="gradient-text">Founder</span>
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {founders.map((founder, index) => (
                <motion.div
                  key={founder.name}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center mb-12"
                >
                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                    className="rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center bg-card"
                  >
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full max-w-md h-96 object-cover object-center transition-transform duration-500 hover:scale-105"
                    />
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  >
                    <h3 className="text-3xl lg:text-4xl font-bold font-heading mb-2">
                      {founder.name}
                    </h3>
                    <p className="text-primary font-semibold text-lg mb-4">
                      {founder.role}
                    </p>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6" style={{ wordSpacing: "0.1em" }}>
                      {founder.description.replace("T-Machine Software Solutions", "T-Machine\u00A0Software\u00A0Solutions")}
                    </p>
                    <Button
                      variant="glow"
                      size="lg"
                      className="flex items-center gap-2"
                      onClick={() => window.open(founder.linkedin, "_blank")}
                    >
                      <Linkedin className="w-5 h-5" />
                      LinkedIn
                    </Button>
                  </motion.div>
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

export default About;
