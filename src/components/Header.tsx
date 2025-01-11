import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { href: "/#services", label: "Услуги" },
    { href: "/#projects", label: "Проекты" },
    { href: "/calculator", label: "Калькулятор" },
    { href: "/contact", label: "Контакты" }
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      x: "0%",
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: 50 },
    open: { opacity: 1, x: 0 }
  };

  React.useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="fixed w-full z-50 bg-slate-900 border-b border-slate-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
              HAS ILYAS
            </div>
            <div className="text-slate-400 font-medium">СТРОЙ</div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map(item => (
              <a 
                key={item.href}
                href={item.href}
                className="text-slate-300 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isOpen ? "close" : "menu"}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed right-0 top-20 bottom-0 w-[300px] bg-slate-900/95 backdrop-blur-md shadow-xl md:hidden border-l border-slate-700"
            >
              <div className="bg-slate-900 h-full">
                <nav className="flex flex-col divide-y divide-slate-800">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      variants={itemVariants}
                      className="group"
                    >
                      <a
                        href={item.href}
                        className="block py-4 px-6 text-lg font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors relative overflow-hidden"
                      >
                        <span className="relative z-10">{item.label}</span>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-400/20"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </a>
                    </motion.div>
                  ))}
                </nav>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="p-6 bg-slate-800 mt-4 mx-4 rounded-xl border border-slate-700"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Нужна консультация?
                  </h3>
                  <p className="text-slate-300 mb-4">
                    Оставьте заявку, и мы свяжемся с вами в ближайшее время
                  </p>
                  <Link
                    to="/contact"
                    className="block w-full py-3 px-4 text-center text-white bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg font-medium hover:from-blue-700 hover:to-blue-500 transition-all hover:scale-[1.02]"
                  >
                    Связаться с нами
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};