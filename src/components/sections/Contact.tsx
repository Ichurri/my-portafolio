'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, Send, Github, Linkedin } from 'lucide-react';
import { contactFormSchema, type ContactFormValues } from '@/lib/schema';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { personalInfo } from '@/lib/data';
import { Input } from '../ui/input';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('There was a problem sending the message');
      }

      const result = await response.json();
      
      toast({
        title: 'Message sent!',
        description: 'Thank you for contacting me, I will reply as soon as possible.',
        variant: 'default',
      });
      
      form.reset();
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: 'Error',
        description: 'The message could not be sent. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Componente textarea con estilos personalizados
  const TextArea = ({ ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
    return (
      <textarea
        className="flex min-h-[80px] w-full rounded-md border border-dark-400/30 bg-dark-300/50 px-3 py-2 text-sm ring-offset-dark-100 placeholder:text-dark-400/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        {...props}
      />
    );
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 bg-dark-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-dark-500 mb-4">
            Contact me
          </h2>
          <p className="text-dark-400 text-lg max-w-2xl mx-auto">
            Do you have any questions or suggestions? Feel free to send me a message.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="bg-dark-300 rounded-lg p-8 border border-dark-400/20">
              <h3 className="text-2xl font-bold text-dark-500 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-dark-400/10 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-dark-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-dark-500">Email</h4>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="text-dark-400 hover:text-dark-500 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-dark-400/10 p-3 rounded-full">
                    <Linkedin className="w-6 h-6 text-dark-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-dark-500">LinkedIn</h4>
                    <a 
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark-400 hover:text-dark-500 transition-colors"
                    >
                      Perfil de LinkedIn
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-dark-400/10 p-3 rounded-full">
                    <Github className="w-6 h-6 text-dark-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-dark-500">GitHub</h4>
                    <a 
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark-400 hover:text-dark-500 transition-colors"
                    >
                      Perfil de GitHub
                    </a>
                  </div>
                </div>
              </div>

              <Separator className="my-8 bg-dark-400/20" />

              <div>
                <h4 className="text-lg font-medium text-dark-500 mb-4">Ubicación</h4>
                <p className="text-dark-400">{personalInfo.location}</p>
              </div>
            </div>
          </motion.div>

          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-dark-300 rounded-lg p-8 border border-dark-400/20"
          >
            <h3 className="text-2xl font-bold text-dark-500 mb-6">Sent me a message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-dark-500">Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your name" 
                          className="bg-dark-300/50 border-dark-400/30 focus:ring-dark-500"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-dark-500">Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="your.email@example.com" 
                          type="email" 
                          className="bg-dark-300/50 border-dark-400/30 focus:ring-dark-500"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-dark-500">Message</FormLabel>
                      <FormControl>
                        <TextArea 
                          placeholder="Write your message here..." 
                          rows={5}
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-dark-500 hover:bg-dark-400 text-dark-100"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
