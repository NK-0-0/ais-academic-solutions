import { Check } from "lucide-react";

const onlinePlans = [
    {
    title: "Package A",
    price: "R350",
    period: "/month",
    features: ["One Maths/Science session per week",
       "2hr per session",
      "Free learning Material",
        ],
        popular: false,
  },
     {
    title: "Package B",
    price: "R550",
    period: "/month",
    features: ["One Maths session per week"
      , "One Science session per week",
       "2hr per session",
      "Free learning Material"
        ],
        popular: true,
  },
  {
    title: "Package C",
    price: "R1000",
    period: "/month",
    features: ["Two Maths session per week"
      , "Two Science session per week",
       "2hr per session",
      "Free learning Material",
      "Research & assignment help",
      "Bursary & university application help"
        ],
        popular: false,
  }
];

const autumnPlans = [
  {
    title: "Grade 11",
    rows: [
      { label: "1 Subject", price: "R300" },
      { label: "2 Subjects", price: "R400" },
      { label: "3 Subjects", price: "R500" },
    ],
  },
  {
    title: "Grade 12",
    rows: [
      { label: "1 Subject", price: "R300" },
      { label: "2 Subjects", price: "R400" },
    ],
  },
];

const Pricing = () => (
  <section id="pricing" className="py-20 bg-primary">
    <div className="container mx-auto px-4">
      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground text-center mb-4">Pricing</h2>
      <p className="text-primary-foreground/60 text-center max-w-xl mx-auto mb-12">Affordable, transparent pricing for quality education.</p>

      {/* Online Lessons */}
      <h3 className="font-heading text-2xl font-bold text-secondary text-center mb-8">Online Lessons (via Microsoft Teams)</h3>
      <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
        {onlinePlans.map((p) => (
          <div key={p.title} className={`rounded-2xl p-8 ${p.popular ? "bg-secondary text-secondary-foreground ring-4 ring-secondary/30" : "bg-primary-foreground/5 text-primary-foreground border border-primary-foreground/10"}`}>
            {p.popular && <span className="text-xs font-bold uppercase tracking-wider bg-secondary-foreground/10 px-3 py-1 rounded-full">Most Popular</span>}
            <h4 className="font-heading text-xl font-bold mt-3">{p.title}</h4>
            <div className="mt-4 mb-6">
              <span className="text-4xl font-black">{p.price}</span>
              <span className="text-sm opacity-70">{p.period}</span>
            </div>
            <ul className="space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check size={16} className="mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <a href="#register" className={`block text-center mt-8 py-3 rounded-lg font-bold transition ${p.popular ? "bg-secondary-foreground text-secondary hover:opacity-90" : "bg-secondary text-secondary-foreground hover:brightness-110"}`}>
              Register Now
            </a>
          </div>
        ))}
      </div>

      {/* Autumn Classes */}
      {/* <h3 className="font-heading text-2xl font-bold text-secondary text-center mb-2">Autumn Holiday Classes</h3>
      <p className="text-primary-foreground/60 text-center mb-8">28 March – 4 April · 9 AM · Elim</p>
      <p className="text-primary-foreground/50 text-center text-sm mb-6">Subjects: Mathematics, Physical Sciences, Geography</p>
      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {autumnPlans.map((g) => (
          <div key={g.title} className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8 text-primary-foreground">
            <h4 className="font-heading text-xl font-bold mb-6">{g.title}</h4>
            <div className="space-y-4">
              {g.rows.map((r) => (
                <div key={r.label} className="flex justify-between items-center border-b border-primary-foreground/10 pb-3">
                  <span className="text-sm opacity-80">{r.label}</span>
                  <span className="font-bold text-secondary text-lg">{r.price}</span>
                </div>
              ))}
            </div>
            <a href="#contact" className="block text-center mt-8 py-3 rounded-lg font-bold bg-secondary text-secondary-foreground hover:brightness-110 transition">
              Register Now
            </a>
          </div>
        ))}
      </div> */}
    </div>
  </section>
);

export default Pricing;
