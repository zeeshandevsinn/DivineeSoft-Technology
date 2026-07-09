import Link from "next/link";
import { MapPin, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { services, socialLinks } from "@/lib/data";
// import Image from "next/image";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-muted-foreground pt-20 pb-10 border-t border-border shadow-lg relative overflow-hidden">
      {/* Background Illustration */}
      {/* <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop"
          alt="World Map Background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div> */}

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Logo isFooter />

            <p className="text-muted-foreground leading-relaxed">
              We are a full-service digital agency helping brands grow through
              innovation, design, and technology.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${social.name} page`}
                  className="w-10 h-10 rounded-full bg-[#112236] flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Blog", href: "/blog" },
                { label: "Contact Us", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.id}`}
                    className="hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#112236] flex items-center justify-center text-primary shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="block text-white font-medium mb-1">
                    Pakistan
                  </span>
                  <span className="text-sm">
                    House 4/5, Street 62 , near Sharief Park Multan Road Lahore
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#112236] flex items-center justify-center text-primary shrink-0">
                  <FaWhatsapp size={18} />
                </div>
                <div>
                  <span className="block text-white font-medium mb-1">
                    WhatsApp
                  </span>
                  <a
                    href="https://wa.me/+923146256754"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-white transition-colors"
                  >
                    +92 314 6256754
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#112236] flex items-center justify-center text-primary shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="block text-white font-medium mb-1">
                    Email Us
                  </span>
                  <a
                    href="mailto:divineesofttechnologies@gmail.com"
                    className="text-sm hover:text-white transition-colors"
                  >
                    divineesofttechnologies@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} DivineeSoft Technology. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
