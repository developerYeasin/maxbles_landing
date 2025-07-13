import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend.
    // For now, we'll just show a toast notification.
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We will get back to you soon.",
    });
    // Clear form fields (optional)
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Have a project in mind or just want to say hello? We'd love to hear from you! Fill out the form or reach us directly using the contact details below.
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
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-gray-800 dark:text-white">Name</Label>
                <Input id="name" type="text" placeholder="Your Name" required className="mt-1 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white" />
              </div>
              <div>
                <Label htmlFor="email" className="text-gray-800 dark:text-white">Email</Label>
                <Input id="email" type="email" placeholder="Your Email" required className="mt-1 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white" />
              </div>
              <div>
                <Label htmlFor="subject" className="text-gray-800 dark:text-white">Subject</Label>
                <Input id="subject" type="text" placeholder="Subject" required className="mt-1 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white" />
              </div>
              <div>
                <Label htmlFor="message" className="text-gray-800 dark:text-white">Message</Label>
                <Textarea id="message" placeholder="Your Message" rows={5} required className="mt-1 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white" />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;