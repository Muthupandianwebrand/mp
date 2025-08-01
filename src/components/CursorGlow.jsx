import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <motion.div
      className="fixed w-8 h-8 rounded-full bg-white/30 pointer-events-none mix-blend-difference z-50"
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
        transition: {
          type: 'spring',
          mass: 0.1,
          stiffness: 100,
          damping: 10,
        },
      }}
    />
  );
};

export default CursorGlow;