
import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, LifeBuoy, ShieldCheck, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Index = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your interest! We'll be in touch soon.");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1 mb-6 text-primary-foreground bg-primary rounded-full text-sm font-medium">
            Coming Soon
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI-Powered Drowning Detection System
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Advanced dual-camera technology for comprehensive pool monitoring and immediate drowning detection.
          </p>
        </motion.div>

        {/* Product Image Placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-12 rounded-xl overflow-hidden shadow-2xl max-w-4xl mx-auto bg-white p-4"
        >
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Product Image Coming Soon</p>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Dual Camera System</h3>
              <p className="text-gray-600">
                Comprehensive monitoring with top and bottom pool coverage
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-time Detection</h3>
              <p className="text-gray-600">
                Instant alerts and monitoring for maximum safety
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <LifeBuoy className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Protection</h3>
              <p className="text-gray-600">
                Continuous monitoring for round-the-clock safety
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Pre-order Inquiry</h2>
            <p className="text-gray-600">
              Interested in implementing our AI drowning detection system? Get in touch with us.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            onSubmit={handleContact}
            className="space-y-6"
          >
            <div>
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
            </div>
            <div>
              <Textarea
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full min-h-[150px]"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white flex items-center justify-center gap-2 group"
            >
              Send Inquiry
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} AI Drowning Detection System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
