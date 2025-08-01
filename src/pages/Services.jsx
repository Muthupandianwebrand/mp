import { motion } from 'framer-motion';
import { useState } from 'react';

const Services = () => {
  const [activeForm, setActiveForm] = useState(null);

  const services = [
    {
      id: 'seo',
      title: 'SEO',
      description: 'Search Engine Optimization to improve your website\'s visibility',
      category: 'digital'
    },
    {
      id: 'google-ads',
      title: 'Google Ads',
      description: 'Strategic PPC campaigns for Search & Display networks',
      category: 'digital'
    },
    {
      id: 'meta-ads',
      title: 'Meta Ads',
      description: 'Targeted advertising on Facebook & Instagram platforms',
      category: 'digital'
    },
    {
      id: 'ai-agent',
      title: 'AI Agent',
      description: 'Custom chatbots and automation solutions for your business',
      category: 'ai'
    },
    {
      id: 'sales-ai',
      title: 'Sales AI',
      description: 'AI-powered lead qualification and follow-up systems',
      category: 'ai'
    }
  ];

  const handleSubmit = (e, service) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(`Form submitted for ${service}`);
    setActiveForm(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-16"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-12">Our Services</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Digital Marketing Services */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Digital Marketing</h2>
            <div className="space-y-6">
              {services
                .filter(service => service.category === 'digital')
                .map(service => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/5 p-6 rounded-xl"
                  >
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-white/70 mb-4">{service.description}</p>
                    <button
                      onClick={() => setActiveForm(service.id)}
                      className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                    >
                      Enquire Now
                    </button>

                    {activeForm === service.id && (
                      <motion.form
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        onSubmit={(e) => handleSubmit(e, service.title)}
                        className="mt-4 space-y-4"
                      >
                        <input
                          type="text"
                          placeholder="Name"
                          required
                          className="w-full p-2 bg-black/50 rounded border border-white/20 focus:border-white/50 outline-none"
                        />
                        <input
                          type="email"
                          placeholder="Email"
                          required
                          className="w-full p-2 bg-black/50 rounded border border-white/20 focus:border-white/50 outline-none"
                        />
                        <input
                          type="tel"
                          placeholder="Phone"
                          required
                          className="w-full p-2 bg-black/50 rounded border border-white/20 focus:border-white/50 outline-none"
                        />
                        <textarea
                          placeholder="Message"
                          rows="3"
                          className="w-full p-2 bg-black/50 rounded border border-white/20 focus:border-white/50 outline-none"
                        ></textarea>
                        <button
                          type="submit"
                          className="w-full py-2 bg-white text-black font-semibold rounded hover:bg-white/90 transition-colors"
                        >
                          Submit
                        </button>
                      </motion.form>
                    )}
                  </motion.div>
                ))}
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">AI Solutions</h2>
            <div className="space-y-6">
              {services
                .filter(service => service.category === 'ai')
                .map(service => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/5 p-6 rounded-xl"
                  >
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-white/70 mb-4">{service.description}</p>
                    <button
                      onClick={() => setActiveForm(service.id)}
                      className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                    >
                      Enquire Now
                    </button>

                    {activeForm === service.id && (
                      <motion.form
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        onSubmit={(e) => handleSubmit(e, service.title)}
                        className="mt-4 space-y-4"
                      >
                        <input
                          type="text"
                          placeholder="Name"
                          required
                          className="w-full p-2 bg-black/50 rounded border border-white/20 focus:border-white/50 outline-none"
                        />
                        <input
                          type="email"
                          placeholder="Email"
                          required
                          className="w-full p-2 bg-black/50 rounded border border-white/20 focus:border-white/50 outline-none"
                        />
                        <input
                          type="tel"
                          placeholder="Phone"
                          required
                          className="w-full p-2 bg-black/50 rounded border border-white/20 focus:border-white/50 outline-none"
                        />
                        <textarea
                          placeholder="Message"
                          rows="3"
                          className="w-full p-2 bg-black/50 rounded border border-white/20 focus:border-white/50 outline-none"
                        ></textarea>
                        <button
                          type="submit"
                          className="w-full py-2 bg-white text-black font-semibold rounded hover:bg-white/90 transition-colors"
                        >
                          Submit
                        </button>
                      </motion.form>
                    )}
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;