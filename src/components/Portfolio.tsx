import { Navigation } from './Navigation';
import { Hero } from './Hero';
import { About } from './About';
import { Projects } from './Projects';
import { Skills } from './Skills';
import { Education } from './Education';
import { Footer } from './Footer';
import { ThemeProvider } from './ThemeProvider';

export function Portfolio() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          <section id="home">
            <Hero />
          </section>
          <About />
          <Projects />
          <Skills />
          <Education />
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}