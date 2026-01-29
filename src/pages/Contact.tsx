import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

// Initialize EmailJS
emailjs.init("6A45nWzNbeyD8_l1i");

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Send email via EmailJS
    emailjs
      .send("service_70jcfvf", "template_bx822oe", {
        name: formData.name,
        mobile: formData.mobile,
        email: formData.email,
        message: formData.message,
      })
      .then(
        () => {
          toast({
            title: "Message sent!",
            description: "We'll get back to you within 24 hours.",
          });
          setFormData({ name: "", mobile: "", email: "", message: "" });
        },
        (error) => {
          toast({
            title: "Error",
            description: "Failed to send message. Please try again.",
          });
          console.error("EmailJS error:", error);
        }
      );
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        <section className="py-24 relative">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="section-badge">📬 Contact Us</span>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold font-heading">
                Get in{" "}
                <span className="gradient-text">Touch</span>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Have questions about our courses or internship programs? We're here to help you start your tech journey.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="input-glow bg-background/50"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Mobile Number</label>
                    <Input
                      type="tel"
                      placeholder="+91 XXXXXXXXXX"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="input-glow bg-background/50"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="input-glow bg-background/50"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea
                      placeholder="Tell us how we can help..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="input-glow bg-background/50 min-h-[150px]"
                      required
                    />
                  </div>
                  <Button type="submit" variant="glow" size="lg" className="w-full">
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col justify-center space-y-8"
              >
                <div className="glass-card p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-heading">Email</h3>
                    <p className="text-muted-foreground mt-1">support@coderi8.com</p>
                  </div>
                </div>

                <div className="glass-card p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-heading">Mobile</h3>
                    <p className="text-muted-foreground mt-1">+91 9344521726</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  We typically respond within 24 hours during business days.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
