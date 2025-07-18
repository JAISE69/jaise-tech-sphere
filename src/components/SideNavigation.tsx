import { useState } from 'react';

export function SideNavigation() {
  const [activeSection, setActiveSection] = useState('about');

  const sections = [
    { id: 'about', label: 'About', number: '01' },
    { id: 'tech-stack', label: 'Tech Stack', number: '02' },
    { id: 'achievements', label: 'Achievements', number: '03' },
    { id: 'education', label: 'Education', number: '04' },
    { id: 'contact', label: 'Contact', number: '05' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <nav className="space-y-6">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`flex items-center space-x-3 text-sm transition-colors group ${
              activeSection === section.id
                ? 'text-primary'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <span className="text-xs font-mono">{section.number}.</span>
            <span className="font-medium">{section.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}