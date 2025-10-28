import { motion } from 'framer-motion';

interface NavigationProps {
  activeSection: number;
  onNavigate: (index: number) => void;
}

const sections = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'];

export const Navigation = ({ activeSection, onNavigate }: NavigationProps) => {
  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
    >
      <div className="flex flex-col gap-4">
        {sections.map((section, index) => (
          <button
            key={section}
            onClick={() => onNavigate(index)}
            className="group relative"
          >
            <div className="flex items-center gap-3">
              <motion.div
                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                  activeSection === index
                    ? 'bg-primary border-primary scale-125'
                    : 'border-muted-foreground hover:border-primary'
                }`}
                whileHover={{ scale: 1.2 }}
              />
              <span
                className={`text-sm font-medium transition-all duration-300 ${
                  activeSection === index
                    ? 'text-primary opacity-100'
                    : 'text-muted-foreground opacity-0 group-hover:opacity-100'
                }`}
              >
                {section}
              </span>
            </div>
          </button>
        ))}
      </div>
    </motion.nav>
  );
};
