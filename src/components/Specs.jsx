import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SpecItem = ({ category, items }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800"
    >
      <h3 className="text-2xl font-bold mb-6 text-blue-500">{category}</h3>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="border-b border-gray-800 pb-4 last:border-b-0"
          >
            <div className="flex justify-between items-center">
              <span className="text-gray-400">{item.name}</span>
              <span className="text-white font-semibold">{item.value}</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default function Specs() {
  const specifications = [
    {
      category: "Display",
      items: [
        { name: "Size", value: "6.7 inches" },
        { name: "Type", value: "Super Retina XDR OLED" },
        { name: "Resolution", value: "2796 x 1290" },
        { name: "Refresh Rate", value: "120Hz" },
      ],
    },
    {
      category: "Camera",
      items: [
        { name: "Main Camera", value: "48MP" },
        { name: "Ultra Wide", value: "12MP" },
        { name: "Telephoto", value: "12MP" },
        { name: "Front Camera", value: "12MP" },
      ],
    },
    {
      category: "Performance",
      items: [
        { name: "Chip", value: "A16 Bionic" },
        { name: "Storage", value: "128GB/256GB/512GB" },
        { name: "RAM", value: "6GB" },
        { name: "OS", value: "iOS 16" },
      ],
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent mb-6">
            Technical Specifications
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Engineered for exceptional performance and stunning visuals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {specifications.map((spec, index) => (
            <SpecItem key={index} {...spec} />
          ))}
        </div>

        {/* Battery Life Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">Battery Life</h3>
            <div className="w-full bg-gray-800 rounded-full h-4 mb-4">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "85%" }}
                transition={{ duration: 2, delay: 0.5 }}
                className="bg-gradient-to-r from-green-400 to-blue-500 h-4 rounded-full"
              />
            </div>
            <p className="text-gray-400">Up to 28 hours video playback</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
