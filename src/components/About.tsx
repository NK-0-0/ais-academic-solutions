import { Award, Palette, Code } from "lucide-react";
import genImage from "/src/assets/gen.jpeg";

const credentials = [
  { icon: Award, label: "Tutor (6+ years)" },
  { icon: Palette, label: "Graphic Designer" },
  { icon: Code, label: "Web Developer" },
];

const About = () => (
  <section id="about" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">Meet the Founder</h2>
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-28 h-28 mx-auto rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading text-4xl font-bold mb-6">
          <img src={genImage} alt="founders image" className="rounded-full" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Gen</h3>
        <p className="text-muted-foreground mb-6">Founder of Academic Improvement Solutions </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {credentials.map((c) => (
            <div key={c.label} className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <c.icon size={16} />
              {c.label}
            </div>
          ))}
        </div>
        <p className="text-muted-foreground leading-relaxed">
          With over 6 years of tutoring experience, With over 6 years of tutoring experience, Gen founded Academic Improvement Solutions to create a safe space for students to learn, grow, and achieve academic excellence. The mission is to make quality education accessible and to support students holistically — academically, emotionally, and spiritually. to create a safe space for students to learn, grow, and achieve academic excellence. The mission is to make quality education accessible and to support students holistically — academically, emotionally, and spiritually.
        </p>
      </div>
    </div>
  </section>
);

export default About;
