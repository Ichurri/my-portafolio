'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send } from 'lucide-react';
import { contactFormSchema, type ContactFormValues } from '@/lib/schema';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Input } from '../ui/input';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

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

      // const result = await response.json();
      
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
        className="flex min-h-[80px] w-full rounded-md border border-dark-400/30 bg-dark-300/50 px-3 py-2 text-xs sm:text-sm ring-offset-dark-100 placeholder:text-dark-400/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        {...props}
      />
    );
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 bg-dark-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-500 mb-3 sm:mb-4">
            Contact me
          </h2>
          <p className="text-dark-400 text-base sm:text-lg max-w-2xl mx-auto px-2">
            Do you have any questions or suggestions? Feel free to send me a message.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto w-full">
          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-dark-300 rounded-lg p-4 sm:p-6 md:p-8 border border-dark-400/20"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-dark-500 mb-4 sm:mb-6">Sent me a message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-dark-500">Name</FormLabel>
                      <FormControl>
                        <motion.div
                          animate={{
                            scale: focusedField === 'name' ? 1.02 : 1,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <Input 
                            placeholder="Your name" 
                            className="bg-dark-300/50 border-dark-400/30 focus:ring-dark-500 focus:border-dark-500 transition-all"
                            {...field}
                            onFocus={() => setFocusedField('name')}
                            onBlur={() => setFocusedField(null)}
                          />
                        </motion.div>
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
                        <motion.div
                          animate={{
                            scale: focusedField === 'email' ? 1.02 : 1,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <Input 
                            placeholder="your.email@example.com" 
                            type="email" 
                            className="bg-dark-300/50 border-dark-400/30 focus:ring-dark-500 focus:border-dark-500 transition-all"
                            {...field}
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField(null)}
                          />
                        </motion.div>
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
                        <motion.div
                          animate={{
                            scale: focusedField === 'message' ? 1.02 : 1,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <TextArea 
                            placeholder="Write your message here..." 
                            rows={5}
                            {...field}
                            onFocus={() => setFocusedField('message')}
                            onBlur={() => setFocusedField(null)}
                          />
                        </motion.div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    type="submit" 
                    className="w-full bg-dark-500 hover:bg-dark-400 text-dark-100 text-sm sm:text-base py-2 sm:py-3 h-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-dark-100 border-t-transparent rounded-full mr-2"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
