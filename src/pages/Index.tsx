import { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, PerspectiveCamera } from '@react-three/drei';
import { portfolioData } from '@/data/portfolio';
import { Navigation } from '@/components/Navigation';
import { ParticleField, FloatingOrb, AnimatedRing, TechCube } from '@/components/Scene3D';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  const scrollToSection = (index: number) => {
    sectionsRef.current[index]?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(index);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    sectionsRef.current.forEach((section, index) => {
      if (section) {
        const { offsetTop, offsetHeight } = section;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(index);
        }
      }
    });
  };

  return (
    <div className="relative bg-background text-foreground" onScroll={handleScroll}>
      {/* 3D Background */}
      <div className="fixed inset-0 z-0">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 10]} />
          <ambientLight intensity={0.5} />
      
          
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <ParticleField count={800} />
          
      
          
          <TechCube position={[-6, 0, -5]} speed={0.5} />
          <TechCube position={[6, 0, -5]} speed={0.7} />
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>

      {/* Navigation */}
      <Navigation activeSection={activeSection} onNavigate={scrollToSection} />

      {/* Content Sections */}
      <div className="relative z-10">
        <div ref={(el) => el && (sectionsRef.current[0] = el)}>
          <HeroSection data={portfolioData.personal} />
        </div>
        
        <div ref={(el) => el && (sectionsRef.current[1] = el)}>
          <AboutSection 
            summary={portfolioData.summary} 
            education={portfolioData.education} 
          />
        </div>
        
        <div ref={(el) => el && (sectionsRef.current[2] = el)}>
          <SkillsSection skills={portfolioData.skills} />
        </div>
        
        <div ref={(el) => el && (sectionsRef.current[3] = el)}>
          <ExperienceSection experience={portfolioData.experience} />
        </div>
        
        <div ref={(el) => el && (sectionsRef.current[4] = el)}>
          <ProjectsSection projects={portfolioData.projects} />
        </div>
        
        <div ref={(el) => el && (sectionsRef.current[5] = el)}>
          <ContactSection data={portfolioData.personal} />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 lg:hidden">
        <div className="flex gap-2 bg-card/80 backdrop-blur-lg p-2 rounded-full border border-primary/20">
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <button
              key={index}
              onClick={() => scrollToSection(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === index
                  ? 'bg-primary scale-125'
                  : 'bg-muted-foreground/50'
              }`}
              aria-label={`Go to section ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
