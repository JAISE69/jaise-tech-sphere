import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function SideNavigation() {
  const [activeSection, setActiveSection] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = [
    { id: 'about', label: 'About', number: '01' },
    { id: 'tech-stack', label: 'Tech Stack', number: '02' },
    { id: 'achievements', label: 'Achievements', number: '03' },
    { id: 'education', label: 'Education', number: '04' },
    { id: 'contact', label: 'Contact', number: '05' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'tech-stack', 'achievements', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial active section

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  return (
    <>
      {/* Desktop Side Navigation */}
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

      {/* Mobile Navigation Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-6 right-6 z-50 lg:hidden p-3 rounded-lg bg-card border border-border hover:bg-accent transition-colors"
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? (
          <X className="h-5 w-5 text-foreground" />
        ) : (
          <Menu className="h-5 w-5 text-foreground" />
        )}
      </button>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div 
            className="fixed inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-64 bg-card border-l border-border p-6">
            <div className="mt-16 space-y-6">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`flex items-center space-x-3 text-sm transition-colors w-full text-left ${
                    activeSection === section.id
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <span className="text-xs font-mono">{section.number}.</span>
                  <span className="font-medium">{section.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}