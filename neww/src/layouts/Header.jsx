import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingCart, Search } from "lucide-react";
import logoos from '../assets/logoos.png';
import footer from '../assets/images/footer.png'
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Categories", href: "/categories" },
    { name: "Offers", href: "/offers" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href) => location.pathname === href;

  return (
    <>
      {/* Header */}
  <motion.header
  initial={{ y: -80, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, type: "spring" }}
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled
      ? "bg-white/80 backdrop-blur-lg shadow-lg"
      : "bg-transparent"
  }`}
>
  <div className="relative container mx-auto px-4 py-4 flex items-center justify-center">
    {/* Logo - left */}
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1, rotate: 2 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="absolute left-4"
    >
      <Link to="/">
        <img
          src={logoos}
          alt="Freshlio Logo"
          className="w-12 h-12 object-contain"
        />
      </Link>
    </motion.div>

    {/* Title - centered */}
    <span
      className={`text-2xl font-bold ${
        isScrolled ? "text-green-700" : "text-white"
      }`}
    >
      FreshKartz
    </span>

    {/* Right side: Search, Cart, and Menu Toggle */}
    <div className="absolute right-4 flex items-center gap-4">
      <motion.button
        whileHover={{ scale: 1.2, rotate: 10 }}
        className={`transition-colors ${
          isScrolled ? "text-green-700" : "text-white"
        }`}
      >
        <Search className="w-6 h-6" />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.2, rotate: -10 }}
        className={`transition-colors ${
          isScrolled ? "text-green-700" : "text-white"
        }`}
      >
        <ShoppingCart className="w-6 h-6" />
      </motion.button>
      <motion.button
      
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsMenuOpen(true)}
        className="p-2 rounded-md border border-green-500"
      >
        
        <Menu
        
          className={`w-6 h-6 ${
            isScrolled ? "text-green-700" : "text-white"
          }`}
        />
      </motion.button>
    </div>
  </div>
</motion.header>


      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ x: "100%" }}
              
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed inset-0 bg-green-700/95 backdrop-blur-lg z-[9999] flex flex-col items-center justify-center gap-8"
            ><img
              src={footer}  // put your image path here
              alt="Menu Icon"
              className={`w-15 h-15 ${isScrolled ? "filter-green" : ""} object-contain`}
            />

              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-2xl font-semibold hover:text-yellow-300 ${
                      isActive(item.href) ? "text-yellow-200" : "text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full text-white"
              >
                <X className="w-8 h-8" />
              </motion.button>
            </motion.div>

            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998]"
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}
