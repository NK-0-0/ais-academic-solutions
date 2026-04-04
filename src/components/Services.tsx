import { BookOpen, Monitor, Users, GraduationCap, FileText, Heart } from "lucide-react";

const services = [
  { icon: BookOpen, title: "Mathematics", desc: "Differential Calculus, Geometry & more" },
  { icon: Monitor, title: "Physical Sciences", desc: "Mechanics, Electric Circuits & more" },
  { icon: FileText, title: "Study Materials", desc: "Free study materials & techniques included" },
];

const Services = () => (
  <section id="services" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground text-center mb-4">What We Offer</h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
        Our lessons accommodate all types of learners — from basics to advanced level. We also assist with university and bursary applications.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="group bg-card border border-border rounded-xl p-6 hover:border-secondary hover:shadow-lg hover:shadow-secondary/10 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
              <s.icon className="text-primary group-hover:text-secondary transition-colors" size={24} />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
