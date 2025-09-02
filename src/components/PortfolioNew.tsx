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
      
      <div className="max-w-3xl mx-auto px-6 py-16 lg:px-6">
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
          <div className="space-y-6">
            <div className="text-muted-foreground leading-relaxed space-y-4">
              <p>
                I am a Computer Science engineering student with a strong foundation in full-stack development, 
                machine learning, and cross-functional teamwork. With a passion for applying technology to solve 
                real-world problems and streamline digital processes.
              </p>
              <p>
                My technical skills include secure coding practices, web development, and automation solutions. 
                I'm proficient in languages such as JavaScript, Python, Java, and C++, and have experience with 
                frameworks like React, UiPath, and various development tools.
              </p>
              <p>
                I'm constantly learning and staying updated with the latest technology trends to ensure that 
                I can address emerging challenges and opportunities effectively.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">What I Do</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Full-Stack Web Development</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Machine Learning & AI</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Process Automation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>IoT Solutions</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Currently Learning</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Advanced React Patterns</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Cloud Computing (AWS)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>DevOps & CI/CD</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>System Design</span>
                  </li>
                </ul>
              </div>
            </div>
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