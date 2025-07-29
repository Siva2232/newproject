import { motion } from "framer-motion";

export default function Category() {
  const categories = [
    { name: "Fruits & Vegetables", img: "https://via.placeholder.com/150" },
    { name: "Dairy & Bakery", img: "https://via.placeholder.com/150" },
    { name: "Snacks & Beverages", img: "https://via.placeholder.com/150" },
    { name: "Household Essentials", img: "https://via.placeholder.com/150" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
    hover: {
      scale: 1.1,
      rotate: 2,
      boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.2)",
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <section id="categories" className="py-20 px-6 bg-gray-100 text-center overflow-hidden">
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl font-bold mb-12"
      >
        Shop by Category
      </motion.h3>

      <motion.div
        className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            className="p-6 bg-white rounded-xl shadow cursor-pointer"
            variants={itemVariants}
            whileHover="hover"
          >
            <motion.img
              src={cat.img}
              alt={cat.name}
              className="mx-auto mb-4 w-24 h-24 object-cover rounded-full"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8, type: "spring" }}
            />
            <h4 className="text-lg font-semibold">{cat.name}</h4>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
