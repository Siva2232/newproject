import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import footer from '../assets/images/footer.png'
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-green-900 to-green-800 text-white relative overflow-hidden">
      {/* Animated Background Element */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/leaf.png')] animate-pulse" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {/* Company Info */}
        <div className="transform transition-all duration-500 hover:scale-105">
          <div className="flex items-center space-x-3 mb-6 animate-fadeIn">
            <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center overflow-hidden shadow-lg">
              <img
                src={footer} // Replace with actual logo
                alt="Greencoast Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-2xl font-extrabold tracking-tight">Fresh</h3>
              <p className="text-sm text-green-200 font-medium">Kartz</p>
            </div>
          </div>
          <p className="text-green-100 mb-6 text-sm leading-relaxed animate-fadeIn delay-100">
            Your one-stop shop for fresh, sustainable products with a commitment to quality and eco-friendly practices.
          </p>
          <div className="flex space-x-4">
            {[
              { Icon: Facebook, link: "https://www.facebook.com/people/Sora-Dental/100068991856553/#" },
              { Icon: Instagram, link: "https://www.instagram.com/soradental_hyd/?igsh=YTFlZWh0b2lrOWpl#" },
              { Icon: Linkedin, link: "https://www.linkedin.com/in/dr-sonica-raju-355270178/" },
            ].map(({ Icon, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center hover:bg-green-500 hover:scale-110 transition-all duration-300 shadow-md hover:shadow-xl"
              >
                <Icon className="w-5 h-5 animate-pulse" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="transform transition-all duration-500 hover:scale-105">
          <h4 className="text-lg font-semibold mb-4 text-green-50 animate-slideIn">Company</h4>
          <ul className="space-y-3">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/team", label: "Our Team" },
              { to: "/faqs", label: "FAQs" },
              { to: "/contact", label: "Contact" },
            ].map(({ to, label }, i) => (
              <li key={i} className="animate-slideIn" style={{ animationDelay: `${i * 100}ms` }}>
                <Link
                  to={to}
                  className="text-green-100 hover:text-white hover:underline transition-all duration-300 ease-in-out"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Help & Support */}
        <div className="transform transition-all duration-500 hover:scale-105">
          <h4 className="text-lg font-semibold mb-4 text-green-50 animate-slideIn">Help & Support</h4>
          <ul className="space-y-3">
            {[
              { to: "/privacy", label: "Privacy Policy" },
              { to: "/terms", label: "Terms of Service" },
              { to: "/support", label: "Customer Support" },
              { to: "/sitemap", label: "Sitemap" },
            ].map(({ to, label }, i) => (
              <li key={i} className="animate-slideIn" style={{ animationDelay: `${i * 100}ms` }}>
                <Link
                  to={to}
                  className="text-green-100 hover:text-white hover:underline transition-all duration-300 ease-in-out"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="transform transition-all duration-500 hover:scale-105">
          <h4 className="text-lg font-semibold mb-4 text-green-50 animate-slideIn">Contact Us</h4>
          <div className="space-y-4 text-green-100 text-sm">
            <div className="flex items-start space-x-3 animate-slideIn delay-200">
              <MapPin className="w-5 h-5 text-white flex-shrink-0" />
              <p>123 Greenway Blvd, Eco City, Hyderabad, India</p>
            </div>
            <div className="flex items-center space-x-3 animate-slideIn delay-300">
              <Phone className="w-5 h-5 text-white flex-shrink-0" />
              <span>+91 00000 00000</span>
            </div>
            <div className="flex items-center space-x-3 animate-slideIn delay-400">
              <Mail className="w-5 h-5 text-white flex-shrink-0" />
              <span>info@freshmart.com</span>
            </div>
            <div className="flex items-start space-x-3 animate-slideIn delay-500">
              <Clock className="w-5 h-5 text-white flex-shrink-0" />
              <div>
                <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                <p>Sat - Sun: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-700 py-4 text-center text-green-100 text-sm bg-green-900/50 backdrop-blur-sm">
        © {currentYear} Greencoast Mart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;