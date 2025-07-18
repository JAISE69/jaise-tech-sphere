import { ProfileHeader } from './ProfileHeader';
import { TechStack } from './TechStack';
import { Achievements } from './Achievements';
import { Education } from './EducationNew';
import { ContactSection } from './ContactSection';
import { SideNavigation } from './SideNavigation';

export function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SideNavigation />
      
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Profile Header */}
        <ProfileHeader />

        {/* About Section */}
        <section id="about" className="mb-20">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              <span className="text-primary font-mono text-sm mr-4">01.</span>
              About
            </h2>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="tech-stack" className="mb-20">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              <span className="text-primary font-mono text-sm mr-4">02.</span>
              Tech Stack
            </h2>
          </div>
          <TechStack />
        </section>

        {/* Achievements/Projects Section */}
        <section id="achievements" className="mb-20">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              <span className="text-primary font-mono text-sm mr-4">03.</span>
              Achievements
            </h2>
          </div>
          <Achievements />
        </section>

        {/* Education Section */}
        <section id="education" className="mb-20">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              <span className="text-primary font-mono text-sm mr-4">04.</span>
              Education
            </h2>
          </div>
          <Education />
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-20">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              <span className="text-primary font-mono text-sm mr-4">05.</span>
              Contact
            </h2>
          </div>
          <ContactSection />
        </section>
      </div>
    </div>
  );
}