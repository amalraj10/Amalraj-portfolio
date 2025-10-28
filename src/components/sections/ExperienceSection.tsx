import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase } from 'lucide-react';

interface ExperienceSectionProps {
  experience: Array<{
    title: string;
    company: string;
    period: string;
    highlights: string[];
  }>;
}

export const ExperienceSection = ({ experience }: ExperienceSectionProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Experience
          </h2>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 bg-card/50 backdrop-blur-lg border-secondary/20 hover:border-secondary/40 transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/10 to-transparent rounded-bl-full transform group-hover:scale-150 transition-transform duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-secondary/20 rounded-lg">
                          <Briefcase className="w-6 h-6 text-secondary" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground">
                            {exp.title}
                          </h3>
                          <p className="text-xl text-secondary font-semibold">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      <Badge variant="outline" className="border-secondary text-secondary">
                        {exp.period}
                      </Badge>
                    </div>
                    
                    <ul className="space-y-3 mt-6">
                      {exp.highlights.map((highlight, hIndex) => (
                        <motion.li
                          key={hIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.2 + hIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3"
                        >
                          <span className="text-primary mt-1">▹</span>
                          <span className="text-foreground/80 leading-relaxed">
                            {highlight}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
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
