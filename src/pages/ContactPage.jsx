import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react'; // Removed Twitter
import { toast } from "@/components/ui/use-toast";
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import GradientButton from '@/components/GradientButton.jsx';
import { submitContactForm } from '@/lib/api.js'; // Import the API function

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await submitContactForm(formData);
      toast({
        title: "Message Sent!",
        description: response.message,
      });
      setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
    } catch (error) {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-950">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gradient-primary mb-6 animate-fade-in-up">
            Let's Connect
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Whether you have a groundbreaking idea, a challenging project, or just want to say hello, we're eager to hear from you. Reach out to Maxbles and let's build something amazing together.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-slide-in-left delay-300">
            <h2 className="text-3xl font-bold text-gradient-primary mb-6">Contact Information</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Our team is available to answer your questions and provide support. Feel free to reach us through any of the following channels:
            </p>
            <div className="space-y-6">
              <div className="flex items-center text-gray-700 dark:text-gray-300 text-lg">
                <Mail className="h-7 w-7 text-primary mr-4" />
                <span>maxblesdigital@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-700 dark:text-gray-300 text-lg">
                <Phone className="h-7 w-7 text-primary mr-4" />
                <span>+8801576-743443</span>
              </div>
              <div className="flex items-center text-gray-700 dark:text-gray-300 text-lg">
                <MapPin className="h-7 w-7 text-primary mr-4" />
                <span>Kazla, Matihar, Rajshahi, Bangladesh</span>
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Connect With Us</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Follow our journey and get the latest updates on social media:
              </p>
              <div className="flex space-x-6 mt-4">
                <a href="https://www.facebook.com/maxblesdigital" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent dark:text-primary-foreground dark:hover:text-accent-foreground transition-colors transform hover:scale-110"><Facebook className="h-8 w-8" /></a>
                {/* Removed Twitter link */}
                <a href="https://www.linkedin.com/company/74510058" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent dark:text-primary-foreground dark:hover:text-accent-foreground transition-colors transform hover:scale-110"><Linkedin className="h-8 w-8" /></a>
                <a href="https://www.instagram.com/maxblesdigital" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent dark:text-primary-foreground dark:hover:text-accent-foreground transition-colors transform hover:scale-110"><Instagram className="h-8 w-8" /></a>
              </div>
            </div>
          </div>
          <div className="bg-white/80 dark:bg-gray-900/80 p-8 rounded-lg shadow-lg border border-primary/20 dark:border-primary/50 backdrop-blur-sm animate-slide-in-right delay-400">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-gray-800 dark:text-white text-base">Name</Label>
                <Input id="name" type="text" placeholder="Your Name" required className="mt-2 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white focus:border-primary focus:ring-primary" value={formData.name} onChange={handleChange} />
              </div>
              <div>
                <Label htmlFor="email" className="text-gray-800 dark:text-white text-base">Email</Label>
                <Input id="email" type="email" placeholder="Your Email" required className="mt-2 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white focus:border-primary focus:ring-primary" value={formData.email} onChange={handleChange} />
              </div>
              <div>
                <Label htmlFor="subject" className="text-gray-800 dark:text-white text-base">Subject</Label>
                <Input id="subject" type="text" placeholder="Subject" required className="mt-2 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white focus:border-primary focus:ring-primary" value={formData.subject} onChange={handleChange} />
              </div>
              <div>
                <Label htmlFor="message" className="text-gray-800 dark:text-white text-base">Message</Label>
                <Textarea id="message" placeholder="Your Message" rows={6} required className="mt-2 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white focus:border-primary focus:ring-primary" value={formData.message} onChange={handleChange} />
              </div>
              <GradientButton type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </GradientButton>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;