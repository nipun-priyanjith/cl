import React from 'react';
import { FaJava, FaPython, FaGitAlt, FaNodeJs, FaDocker } from 'react-icons/fa';
import { SiFlutter, SiMysql, SiMongodb, SiKubernetes, SiTerraform, SiJenkins, SiGrafana, SiAnsible, SiPuppet, SiPrometheus, SiOpenshift } from 'react-icons/si';
import { RiReactjsLine, RiTailwindCssFill } from 'react-icons/ri';
import { IoLogoFirebase } from 'react-icons/io5';
import { motion } from 'framer-motion';

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
});

function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl font-mono' style={{ color: '#fffce1' }}>
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4">
        {[ 
          { icon: <SiKubernetes className='text-5xl' style={{ color: '#326CE5' }} />, duration: 3.6 },
          { icon: <SiTerraform className='text-5xl' style={{ color: '#623CE4' }} />, duration: 3.7 },
          { icon: <SiJenkins className='text-5xl' style={{ color: '#D24939' }} />, duration: 3.3 },
          { icon: <SiGrafana className='text-5xl' style={{ color: '#F46800' }} />, duration: 3.2 },
          { icon: <SiAnsible className='text-5xl' style={{ color: '#EE0000' }} />, duration: 3.1 },
          { icon: <SiPuppet className='text-5xl' style={{ color: '#FFAE1A' }} />, duration: 3.0 },
          { icon: <SiPrometheus className='text-5xl' style={{ color: '#E6522C' }} />, duration: 2.9 },
          { icon: <SiOpenshift className='text-5xl' style={{ color: '#EE0000' }} />, duration: 2.8 },
          { icon: <FaDocker className='text-5xl' style={{ color: '#2496ED' }} />, duration: 3.5 },
          { icon: <FaPython className='text-5xl' style={{ color: '#3776AB' }} />, duration: 3.8 },
          { icon: <FaJava className='text-5xl' style={{ color: '#f89820' }} />, duration: 3.8 },
          { icon: <RiReactjsLine className='text-5xl' style={{ color: '#61DAFB' }} />, duration: 2.5 },
          { icon: <SiFlutter className='text-5xl' style={{ color: '#02569B' }} />, duration: 3.8 },
          { icon: <RiTailwindCssFill className='text-5xl' style={{ color: '#38B2AC' }} />, duration: 3.8 },
          { icon: <IoLogoFirebase className='text-5xl' style={{ color: '#FFCA28' }} />, duration: 3.8 },
          { icon: <SiMysql className='text-5xl' style={{ color: '#4479A1' }} />, duration: 3.8 },
          { icon: <SiMongodb className='text-5xl' style={{ color: '#47A248' }} />, duration: 2.8 },
          { icon: <FaGitAlt className='text-5xl' style={{ color: '#F05032' }} />, duration: 3.8 },
          { icon: <FaNodeJs className='text-5xl' style={{ color: '#339933' }} />, duration: 3.4 },
        ].map((tech, index) => (
          <motion.div
            key={index}
            variants={iconVariants(tech.duration)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
            style={{ borderColor: '#9CFF00', borderWidth: '2px', borderStyle: 'solid' }}>
            {tech.icon}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Technologies;
