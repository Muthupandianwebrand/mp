import { motion } from 'framer-motion';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-16"
    >
      <div className="container mx-auto px-4">
        <motion.div {...fadeIn} className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">About Us</h1>
          <div className="space-y-8">
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="bg-white/5 p-8 rounded-2xl"
            >
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="text-white/70 leading-relaxed">
                WE BRAND MEDIA is a pioneering digital growth agency that combines
                the power of artificial intelligence with proven digital marketing
                strategies. Our journey began with a vision to transform how
                businesses approach digital presence and growth in the AI era.
              </p>
            </motion.div>

            <motion.div
              {...fadeIn}
              transition={{ delay: 0.3 }}
              className="bg-white/5 p-8 rounded-2xl"
            >
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-white/70 leading-relaxed">
                To empower businesses with cutting-edge AI solutions and digital
                marketing strategies that drive measurable growth and sustainable
                success in the digital landscape.
              </p>
            </motion.div>

            <motion.div
              {...fadeIn}
              transition={{ delay: 0.4 }}
              className="bg-white/5 p-8 rounded-2xl"
            >
              <h2 className="text-2xl font-semibold mb-4">Our Expertise</h2>
              <ul className="grid md:grid-cols-2 gap-4 text-white/70">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Advanced AI Integration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Digital Marketing Strategy</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Search Engine Optimization</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Social Media Marketing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>AI-Powered Automation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Performance Analytics</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;