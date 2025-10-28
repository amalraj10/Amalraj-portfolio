import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

interface AboutSectionProps {
  summary: string;
  education: Array<{
    degree: string;
    period: string;
    institution: string;
  }>;
}

export const AboutSection = ({ summary, education }: AboutSectionProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-card/50 backdrop-blur-lg border-primary/20 hover:border-primary/40 transition-all duration-300">
                <p className="text-lg text-foreground/80 leading-relaxed">
                  {summary}
                </p>
              </Card>
            </motion.div>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-secondary mb-6">Education</h3>
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 bg-card/50 backdrop-blur-lg border-secondary/20 hover:border-secondary/40 transition-all duration-300">
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-primary font-medium mb-1">{edu.institution}</p>
                    <p className="text-muted-foreground">{edu.period}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
