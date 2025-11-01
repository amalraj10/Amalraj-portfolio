import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  data: {
    name: string;
    title: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
  };
}

export const HeroSection = ({ data }: HeroSectionProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            className="text-5xl md:text-9xl font-display  mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent tracking-tight"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {data.name}
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-4"
          >
            <p className="text-2xl md:text-3xl text-foreground/90 font-light">
              {data.title}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button
                variant="default"
                size="lg"
                className="bg-primary hover:bg-primary-glow transition-all duration-300 shadow-lg shadow-primary/50"
                asChild
              >
                <a href={`mailto:${data.email}`}>
                  <Mail className="mr-2 h-5 w-5" />
                  Email Me
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                asChild
              >
                <a href={`tel:${data.phone}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call
                </a>
              </Button>
            </div>
            
            <div className="flex justify-center gap-6 mt-8">
              <a
                href={`https://${data.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Linkedin className="h-8 w-8" />
              </a>
              <a
                href={`https://${data.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Github className="h-8 w-8" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
