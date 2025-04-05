import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const navLinks = [
  { name: 'AboutMe', href: '#about' },
  { name: 'experience', href: '#projects' },
  { name: 'Projects', href: '#mye' },
  { name: 'MyYouTube', href: '#experience' },
  { name: 'Articles', href: '#vl' },
  { name: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // ✅ useCallback here to avoid ESLint warning
  const controlNavbar = useCallback(() => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // hide when scrolling down
      } else {
        setShowNavbar(true); // show when scrolling up
      }
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [controlNavbar]); // ✅ dependency fixed

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed w-full top-0 left-0 z-50 p-5 bg-darkGray text-white border-b border-neutral-900 shadow-md">
      <div className="flex items-center justify-between">
        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {menuOpen ? (
              <XIcon className="w-8 h-8 text-white" />
            ) : (
              <MenuIcon className="w-8 h-8 text-white" />
            )}
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-6 ml-auto">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              whileHover={{ scale: 1.1, color: '#9CFF00' }}
              className="text-lg font-mono"
              style={{ color: '#fffce1' }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden mt-4 flex flex-col space-y-4">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-lg font-mono"
              style={{ color: '#fffce1' }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
