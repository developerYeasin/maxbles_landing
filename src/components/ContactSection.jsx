import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react'; // Removed Twitter
import { toast } from "@/components/ui/use-toast";
import GradientButton from './GradientButton.jsx';
import { submitContactForm } from '@/lib/api.js'; // Import the API function

const ContactSection = () => {
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
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient-primary animate-fade-in-up">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-slide-in-left delay-200">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Have a project in mind or just want to say hello? We'd love to hear from you! Fill out the form or reach us directly using the contact details below. Our team is ready to discuss your next big idea and how we can bring it to life.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <Mail className="h-6 w-6 text-blue-500 mr-3" />
                <span>maxblesdigital@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <Phone className="h-6 w-6 text-blue-500 mr-3" />
                <span>+8801576-743443</span>
              </div>
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <MapPin className="h-6 w-6 text-blue-500 mr-3" />
                <span>Kazla, Matihar, Rajshahi, Bangladesh</span>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Connect With Us</h3>
              <p className="text-gray-700 dark:text-gray-300">Follow us on social media for updates and insights:</p>
              <div className="flex space-x-4 mt-4">
                <a href="https://www.facebook.com/maxblesdigital" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600 transition-colors"><Facebook className="h-6 w-6" /></a>
                {/* Removed Twitter link */}
                <a href="https://www.linkedin.com/company/74510058" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600 transition-colors"><Linkedin className="h-6 w-6" /></a>
                <a href="https://www.instagram.com/maxblesdigital" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600 transition-colors"><Instagram className="h-6 w-6" /></a>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 animate-slide-in-right delay-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-gray-800 dark:text-white">Name</Label>
                <Input id="name" type="text" placeholder="Your Name" required className="mt-1 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white" value={formData.name} onChange={handleChange} />
              </div>
              <div>
                <Label htmlFor="email" className="text-gray-800 dark:text-white">Email</Label>
                <Input id="email" type="email" placeholder="Your Email" required className="mt-1 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white" value={formData.email} onChange={handleChange} />
              </div>
              <div>
                <Label htmlFor="subject" className="text-gray-800 dark:text-white">Subject</Label>
                <Input id="subject" type="text" placeholder="Subject" required className="mt-1 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white" value={formData.subject} onChange={handleChange} />
              </div>
              <div>
                <Label htmlFor="message" className="text-gray-800 dark:text-white">Message</Label>
                <Textarea id="message" placeholder="Your Message" rows={5} required className="mt-1 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white" value={formData.message} onChange={handleChange} />
              </div>
              <GradientButton type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </GradientButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;