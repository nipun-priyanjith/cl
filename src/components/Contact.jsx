import React from 'react';
import { CONTACT } from '../constants';
import { motion } from 'framer-motion';
import { FaGithub, FaYoutube, FaReddit, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="border-b border-neutral-900 pb-20">
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6 }}
        className="my-10 text-center text-4xl font-mono"
        style={{ color: '#fffce1' }}
      >
        Contact Me
      </motion.h1>

      <div className="text-center">
        <motion.p 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="my-4 text-lg font-mono"
          style={{ color: '#fffce1' }}
        >
          {CONTACT.address}
        </motion.p>

        {/* <motion.p 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4 text-lg font-mono"
          style={{ color: '#fffce1' }}
        >
          <FaPhoneAlt className="inline-block mr-2" /> {CONTACT.phoneNo}
        </motion.p> */}

        <motion.a 
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 1.2 }}
          href={`mailto:${CONTACT.email}`}
          className="text-lg font-mono border-b-2 border-transparent hover:border-green-500 transition-colors"
          style={{ color: '#9CFF00' }}
        >
          {CONTACT.email}
        </motion.a>

        <div className="flex justify-center mt-10 space-x-6">
          <motion.a 
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="text-3xl" style={{ color: '#fffce1' }} />
          </motion.a>

          <motion.a 
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
            href={CONTACT.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube className="text-3xl" style={{ color: '#FF0000' }} />
          </motion.a>

          <motion.a 
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
            href={CONTACT.reddit}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Reddit"
          >
            <FaReddit className="text-3xl" style={{ color: '#FF4500' }} />
          </motion.a>

          <motion.a 
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-3xl" style={{ color: '#0A66C2' }} />
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
