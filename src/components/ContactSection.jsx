import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";
import GradientButton from './GradientButton.jsx'; // Import GradientButton

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend.
    // For now, we'll just show a toast notification.
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We will get back to you soon.",
    });
    // Clear form fields (optional)
    (e.target).reset();
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient-primary animate-fade-in-up">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-slide-in-left delay-200">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Have a project in mind or just want to say hello? We'd love to hear from you! Fill out the form or reach us directly using the contact details below. Our team is ready to discuss your next big idea and how we can bring it to life.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <Mail className="h-6 w-6 text-blue-500 mr-3" />
                <span>info@maxbles.com</span>
              </div>
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <Phone className="h-6 w-6 text-blue-500 mr-3" />
                <span>+1 (123) 456-7890</span>
              </div>
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <MapPin className="h-6 w-6 text-blue-500 mr-3" />
                <span>123 Creative Lane, Digital City, World</span>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Connect With Us</h3>
              <p className="text-gray-700 dark:text-gray-300">Follow us on social media for updates and insights:</p>
              <div className="flex space-x-4 mt-4">
                {/* Placeholder for social media icons */}
                <a href="#" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
                <a href="#" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2 1.1 1.2 3 1.9 5 2 1.5 1.5 3.3 2.3 5.2 2.3 6.5 0 10.9-5.6 10.9-10.9V4.5L22 4Z"/></svg></a>
                <a href="#" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></a>
                <a href="#" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.5" y1="6.5" y2="6.5"/></svg></a>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 animate-slide-in-right delay-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-gray-800 dark:text-white">Name</Label>
                <Input id="name" type="text" placeholder="Your Name" required className="mt-1 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white" />
              </div>
              <div>
                <Label htmlFor="email" className="text-gray-800 dark:text-white">Email</Label>
                <Input id="email" type="email" placeholder="Your Email" required className="mt-1 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white" />
              </div>
              <div>
                <Label htmlFor="subject" className="text-gray-800 dark:text-white">Subject</Label>
                <Input id="subject" type="text" placeholder="Subject" required className="mt-1 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white" />
              </div>
              <div>
                <Label htmlFor="message" className="text-gray-800 dark:text-white">Message</Label>
                <Textarea id="message" placeholder="Your Message" rows={5} required className="mt-1 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white" />
              </div>
              <GradientButton type="submit" className="w-full">Send Message</GradientButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;