import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/ais-logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Register", href: "#register" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary-foreground/10">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="AIS Academic Solutions" className="h-10 w-auto object-contain" />
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm font-medium">
              {l.label}
            </a>
          ))}
        </div>
        <a href="#contact" className="hidden md:block bg-secondary text-secondary-foreground px-5 py-2 rounded-lg font-semibold text-sm hover:brightness-110 transition">
          Get Started
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden text-primary-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10 px-4 pb-4">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-primary-foreground/80 hover:text-secondary transition-colors font-medium">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="block mt-2 bg-secondary text-secondary-foreground px-5 py-2 rounded-lg font-semibold text-sm text-center">
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
