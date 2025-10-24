import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FeatureCard = ({ icon, title, description, delay }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition-all duration-300 group"
    >
      <div className="text-4xl mb-4 text-blue-500 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default function Features() {
  const features = [
    {
      icon: "📱",
      title: '6.7" Super Retina Display',
      description:
        "Edge-to-edge OLED display with ProMotion technology and Always-On display.",
    },
    {
      icon: "📸",
      title: "Triple Camera System",
      description:
        "48MP Main, 12MP Ultra Wide, and 12MP Telephoto with Night mode.",
    },
    {
      icon: "⚡",
      title: "A16 Bionic Chip",
      description:
        "The fastest chip in a smartphone with advanced machine learning capabilities.",
    },
    {
      icon: "🔋",
      title: "All-Day Battery",
      description:
        "Up to 28 hours of video playback with fast charging and wireless charging.",
    },
    {
      icon: "💧",
      title: "IP68 Water Resistant",
      description:
        "Protected against spills, splashes, and dust. Tested under controlled conditions.",
    },
    {
      icon: "🛡️",
      title: "Privacy Focused",
      description:
        "Advanced security features including Face ID and end-to-end encryption.",
    },
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
            Revolutionary Features
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Designed to empower your creativity and transform how you capture
            and share your world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
