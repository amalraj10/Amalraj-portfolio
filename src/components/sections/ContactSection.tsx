import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

interface ContactSectionProps {
  data: {
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    location: string;
  };
}

const contactMethods = [
  { icon: Mail, label: 'Email', key: 'email', href: (val: string) => `mailto:${val}` },
  { icon: Phone, label: 'Phone', key: 'phone', href: (val: string) => `tel:${val}` },
  { icon: Linkedin, label: 'LinkedIn', key: 'linkedin', href: (val: string) => `https://${val}` },
  { icon: Github, label: 'GitHub', key: 'github', href: (val: string) => `https://${val}` },
  { icon: MapPin, label: 'Location', key: 'location', href: null },
];

export const ContactSection = ({ data }: ContactSectionProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-foreground/80 mb-12">
            I'm always interested in hearing about new opportunities and projects
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              const value = data[method.key as keyof typeof data];
              
              return (
                <motion.div
                  key={method.key}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="p-6 bg-card/50 backdrop-blur-lg border-primary/20 hover:border-primary/40 transition-all duration-300 h-full">
                    {method.href ? (
                      <a
                        href={method.href(value)}
                        target={method.key === 'linkedin' || method.key === 'github' ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <div className="flex flex-col items-center gap-3">
                          <div className="p-4 bg-primary/20 rounded-full">
                            <Icon className="w-8 h-8 text-primary" />
                          </div>
                          <h3 className="font-semibold text-lg text-foreground">
                            {method.label}
                          </h3>
                          <p className="text-muted-foreground text-sm break-all">
                            {value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex flex-col items-center gap-3">
                        <div className="p-4 bg-primary/20 rounded-full">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="font-semibold text-lg text-foreground">
                          {method.label}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {value}
                        </p>
                      </div>
                    )}
                  </Card>
                </motion.div>
              );
            })}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary-glow hover:to-accent text-white font-semibold px-8 py-6 text-lg shadow-lg shadow-primary/50 transition-all duration-300"
              asChild
            >
              <a href={`mailto:${data.email}`}>
                Get In Touch
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
