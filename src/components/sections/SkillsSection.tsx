import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface SkillsSectionProps {
  skills: {
    frontend: string[];
    uiux: string[];
    backend: string[];
    database: string[];
    tools: string[];
  };
}

const skillCategories = [
  { key: 'frontend', title: 'Frontend', color: 'from-primary to-primary-glow' },
  { key: 'uiux', title: 'UI/UX & Styling', color: 'from-secondary to-accent' },
  { key: 'backend', title: 'Backend & APIs', color: 'from-accent to-primary' },
  { key: 'database', title: 'Database', color: 'from-primary to-secondary' },
  { key: 'tools', title: 'DevOps & Tools', color: 'from-secondary to-primary' },
];

export const SkillsSection = ({ skills }: SkillsSectionProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-card/50 backdrop-blur-lg border-primary/20 hover:border-primary/40 transition-all duration-300 h-full">
                  <h3 className={`text-2xl font-semibold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills[category.key as keyof typeof skills].map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge
                          variant="secondary"
                          className="text-sm px-3 py-1 bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                        >
                          {skill}
                        </Badge>
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
