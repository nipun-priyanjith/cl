import React from 'react';
import { HERO_CONTENT } from '../constants';
import profilePic from '../assets/kevinRushProfile.jpg';
import { motion } from 'framer-motion';
import TypingEffect from 'react-typing-effect';

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-mono tracking-tight lg:mt-16 lg:text-8xl"
              style={{ color: '#fffce1' }}
            >
              Nipun Priyanjith
            </motion.h1>

            <motion.div
              variants={container(0.8)}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.1 }}
              className="text-4xl font-mono"
              style={{ color: '#9CFF00' }}
            >
              <TypingEffect
                text={['Software Engineer...',  'Problem Solver...', 'Innovative Thinker...', 'Good Team Player...']}
                speed={100}
                eraseSpeed={50}
                typingDelay={900}
                eraseDelay={1000}
              />
            </motion.div>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-mono tracking-tighter text-xl"
              style={{ color: '#fffce1' }}
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="relative"
            ><br/><br/><br/><br/><br/>
              {/* Wrapper with the specific border color */}
              <div className=" rounded-full p-2" style={{ borderColor: '#9CFF00', borderWidth: '7px', borderStyle: 'solid' }}>
                {/* Actual Image */}
                <img
                  src={profilePic}
                  alt="profile pic"
                  className="w-80 h-80 rounded-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
