import { ArrowRight, BookOpen } from "lucide-react";

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center bg-primary overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 right-20 w-72 h-72 bg-secondary rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
    </div>
    <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-6">
          <BookOpen size={16} />
          CAPS & IEB Curriculum
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-primary-foreground leading-tight mb-6">
          Need Help With <br />
          <span className="text-secondary">Academic Improvement?</span><br />
          We've Got You
        </h1>
        <p className="text-primary-foreground/70 text-lg max-w-xl mb-8 font-body">
          Learn the latest updated CAPS and IEB curriculum from experienced tutors and teachers. Online & in-person classes available.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#pricing" className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-7 py-3 rounded-lg font-bold hover:brightness-110 transition text-lg">
            View Pricing <ArrowRight size={20} />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-7 py-3 rounded-lg font-bold hover:border-secondary hover:text-secondary transition text-lg">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
