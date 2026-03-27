import { MessageCircle, Mail, MapPin, Facebook } from "lucide-react";

const WHATSAPP_NUMBER = "27726631875";
const EMAIL = "info@aisacademic.co.za";

const Contact = () => (
  <section id="contact" className="py-20 bg-primary">
    <div className="container mx-auto px-4">
      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground text-center mb-4">Get In Touch</h2>
      <p className="text-primary-foreground/60 text-center max-w-xl mx-auto mb-12">
        Ready to start your academic journey? Reach out to us via WhatsApp, email, or visit our Facebook page.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I'm interested in AIS tutoring services!")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-3 bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6 text-primary-foreground hover:border-secondary hover:text-secondary transition-all group"
        >
          <MessageCircle size={32} className="group-hover:scale-110 transition-transform" />
          <span className="font-bold">WhatsApp</span>
          <span className="text-sm opacity-70">072 663 1875</span>
        </a>
        <a
          href={`mailto:${EMAIL}`}
          className="flex flex-col items-center gap-3 bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6 text-primary-foreground hover:border-secondary hover:text-secondary transition-all group"
        >
          <Mail size={32} className="group-hover:scale-110 transition-transform" />
          <span className="font-bold">Email</span>
          <span className="text-sm opacity-70">Send us an email</span>
        </a>
        <a
          href="https://www.facebook.com/TutorGen"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-3 bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6 text-primary-foreground hover:border-secondary hover:text-secondary transition-all group"
        >
          <Facebook size={32} className="group-hover:scale-110 transition-transform" />
          <span className="font-bold">Facebook</span>
          <span className="text-sm opacity-70">Tutor Gen</span>
        </a>
        <div className="flex flex-col items-center gap-3 bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6 text-primary-foreground">
          <MapPin size={32} />
          <span className="font-bold">Location</span>
          <span className="text-sm opacity-70">Elim, Limpopo</span>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
