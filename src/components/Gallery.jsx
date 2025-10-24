import { motion } from "framer-motion";
import { useState } from "react";

const GalleryImage = ({ src, alt, delay }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      className="relative overflow-hidden rounded-2xl group cursor-pointer"
      whileHover={{ scale: 1.05 }}
    >
      {/* Placeholder */}
      <div className="w-full h-64 bg-gray-800 rounded-2xl flex items-center justify-center">
        <div className="text-gray-600 text-lg">{alt}</div>
      </div>

      {/* You would replace the placeholder with actual images */}
      {/* <img
        src={src}
        alt={alt}
        className={`w-full h-64 object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setIsLoaded(true)}
      /> */}

      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          whileHover={{ scale: 1 }}
          className="text-white text-lg font-semibold"
        >
          View Details
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function Gallery() {
  const galleryItems = [
    { src: "/gallery/1.jpg", alt: "Front View" },
    { src: "/gallery/2.jpg", alt: "Camera System" },
    { src: "/gallery/3.jpg", alt: "Display" },
    { src: "/gallery/4.jpg", alt: "Design" },
    { src: "/gallery/5.jpg", alt: "Colors" },
    { src: "/gallery/6.jpg", alt: "Accessories" },
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-6">
            Visual Excellence
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Captured with the advanced camera system of Nexus Pro.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <GalleryImage key={index} {...item} delay={index * 0.1} />
          ))}
        </div>

        {/* Color Variants */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold mb-8 text-white">
            Available Colors
          </h3>
          <div className="flex justify-center gap-8 flex-wrap">
            {["Space Black", "Silver", "Gold", "Deep Purple"].map(
              (color, index) => (
                <motion.div
                  key={color}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gray-700 mb-2 mx-auto border-2 border-gray-600"></div>
                  <span className="text-gray-400">{color}</span>
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
