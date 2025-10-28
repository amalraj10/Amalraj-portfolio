import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Folder } from 'lucide-react';

interface ProjectsSectionProps {
  projects: Array<{
    name: string;
    description: string;
    highlights: string[];
  }>;
}

export const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="p-6 bg-card/50 backdrop-blur-lg border-accent/20 hover:border-accent/40 transition-all duration-300 h-full group relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-accent/20 rounded-lg">
                      <Folder className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {project.name}
                    </h3>
                  </div>
                  
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2">
                    {project.highlights.map((highlight, hIndex) => (
                      <motion.div
                        key={hIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + hIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-2"
                      >
                        <span className="text-accent text-sm mt-1">●</span>
                        <span className="text-sm text-foreground/70">
                          {highlight}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
