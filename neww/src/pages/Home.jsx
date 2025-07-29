import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight,ShoppingCart } from "lucide-react";
import image from '../assets/images/image.jpg';
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.png';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import products from '../data/products';

   const images = [
      { src: image, alt: "Fresh groceries delivery" },
      { src: image1, alt: "Farm-fresh fruits and vegetables" },
      { src: image2, alt: "Organic produce selection" },
    ];

   
export default function Home() {
      const [current, setCurrent] = useState(0);
      const [isLoading, setIsLoading] = useState(true);
      const [quantities, setQuantities] = useState({});
      const [selectedSizes, setSelectedSizes] = useState({});

      useEffect(() => {
        images.forEach((img) => {
          const imgElement = new Image();
          imgElement.src = img.src;
        });
        const interval = setInterval(
          () => setCurrent((prev) => (prev + 1) % images.length),
          4000
        );
        setIsLoading(false);
        return () => clearInterval(interval);
      }, []);

      const handleSizeChange = (index, value) => {
        setSelectedSizes((prev) => ({ ...prev, [index]: value }));
      };

      const handleAdd = (index, product) => {
        const size = selectedSizes[index] || product.sizes[0].label;
        setQuantities((prev) => ({
          ...prev,
          [index]: { size, qty: 1 },
        }));
        toast.success(`${product.name} (${size}) added to cart!`, {
          autoClose: 1500,
          position: "top-right",
        });
      };

      const handleIncrease = (index) => {
        setQuantities((prev) => ({
          ...prev,
          [index]: { ...prev[index], qty: prev[index].qty + 1 },
        }));
      };

      const handleDecrease = (index) => {
        setQuantities((prev) => {
          const newQty = prev[index].qty - 1;
          if (newQty <= 0) {
            const updated = { ...prev };
            delete updated[index];
            return updated;
          }
          return { ...prev, [index]: { ...prev[index], qty: newQty } };
        });
      };

      return (
        <>
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 to-black">
            <div className="absolute inset-0 z-0">
              <AnimatePresence>
                {!isLoading && (
                  <motion.img
                    key={current}
                    src={images[current].src}
                    alt={images[current].alt}
                    initial={{ opacity: 0, scale: 1.2 }}
                    animate={{ opacity: 0.7, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                )}
              </AnimatePresence>
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-10 text-center px-4 sm:px-6 lg:px-8 text-white drop-shadow-2xl"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl sm:text-6xl lg:text-8xl font-extrabold mb-6 leading-tight tracking-tight"
              >
                Your <span className="text-green-400">Grocery Mart</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto mb-10"
              >
                Discover farm-fresh produce, pantry staples, and organic essentials delivered to your door in no time.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="flex flex-col sm:flex-row justify-center gap-6"
              >
               <Link
  to="/shop"
  className="group relative overflow-hidden px-12 py-4 text-lg font-bold rounded-full 
             bg-white text-green-600 border-2 border-green-500 shadow-lg
             transition-all duration-500 ease-out hover:text-white
             hover:bg-gradient-to-r hover:from-green-400 hover:to-green-600"
>
  {/* Shiny swipe effect */}
  <span className="absolute inset-0 w-full h-full bg-white/30 
                   translate-x-[-100%] group-hover:translate-x-[100%] 
                   transition-transform duration-700 ease-out"></span>

  {/* Button text with animated arrow */}
  <span className="relative z-10 flex items-center">
    Shop Now
    <ArrowRight className="ml-3 w-6 h-6 transform group-hover:translate-x-2 
                           transition-transform duration-300 ease-out" />
  </span>
</Link>

                <Link
                  to="/categories"
                  className="px-8 py-4 text-lg font-bold rounded-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 hover:scale-105 transition-all duration-300"
                >
                  Explore Categories
                </Link>
              </motion.div>
            </motion.div>
          </section>

          {/* Products Section */}
       <section className="py-16 px-4 bg-gradient-to-b from-green-50 to-white">
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-4xl font-bold text-center mb-12 text-green-800"
  >
    Our Fresh Picks
  </motion.h2>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
    {products.map((product, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -5 }}
        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col"
      >
        {/* Product Image */}
        <div className="relative overflow-hidden h-40 sm:h-48">
          <img
            src={product.img}
            alt={product.alt}
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
            ₹{product.sizes[0].price}+
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4 flex flex-col flex-1">
          <h3 className="text-lg font-bold mb-1 text-gray-800">{product.name}</h3>
          <p className="text-gray-600 text-sm mb-3 flex-1">{product.description}</p>

          {/* Size Selector */}
          <select
            value={selectedSizes[index] || product.sizes[0].label}
            onChange={(e) => handleSizeChange(index, e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          >
            {product.sizes.map((size, i) => (
              <option key={i} value={size.label}>
                {size.label} - ₹{size.price}
              </option>
            ))}
          </select>

          {/* Add button or Quantity Controls */}
          <AnimatePresence initial={false} mode="wait">
            {quantities[index] ? (
              <motion.div
                key="quantity"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center justify-between"
              >
                <button
                  onClick={() => handleDecrease(index)}
                  className="bg-red-500 hover:bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center transition"
                >
                  -
                </button>
                <span className="font-semibold">{quantities[index].qty}</span>
                <button
                  onClick={() => handleIncrease(index)}
                  className="bg-green-500 hover:bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center transition"
                >
                  +
                </button>
              </motion.div>
            ) : (
              <motion.button
                key="add"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => handleAdd(index, product)}
                className="flex items-center justify-center w-full py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition duration-300"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    ))}
  </div>
</section>


          {/* Reduced Motion Styles */}
          <style jsx>{`
            @media (prefers-reduced-motion: reduce) {
              .motion-img, .motion-div, .motion-h1, .motion-p {
                transition: none !important;
                transform: none !important;
              }
            }
          `}</style>
        </>
      );
    }