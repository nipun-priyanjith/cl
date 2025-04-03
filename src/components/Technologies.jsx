import React from 'react';
import { FaJava, FaPython, FaGitAlt, FaNodeJs, FaLinux, FaDocker } from 'react-icons/fa';
import { SiFlutter, SiMongodb, SiMysql, SiKubernetes, SiTerraform, SiJenkins, SiGithubactions, SiGrafana, SiAnsible, SiPuppet, SiPrometheus } from 'react-icons/si';
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
          { icon: FaLinux, color: '#FCC624' },
          { icon: SiKubernetes, color: '#326CE5' },
          { icon: SiTerraform, color: '#623CE4' },
          { icon: SiJenkins, color: '#D24939' },
          { icon: SiGithubactions, color: '#2088FF' },
          { icon: FaDocker, color: '#2496ED' },
          { icon: SiGrafana, color: '#F46800' },
          { icon: SiAnsible, color: '#EE0000' },
          { icon: SiPuppet, color: '#FFAE1A' },
          { icon: SiPrometheus, color: '#E6522C' },
          { icon: FaJava, color: '#f89820' },
          { icon: FaPython, color: '#3776AB' },
          { icon: RiReactjsLine, color: '#61DAFB' },
          { icon: SiFlutter, color: '#02569B' },
          { icon: RiTailwindCssFill, color: '#38B2AC' },
          { icon: IoLogoFirebase, color: '#FFCA28' },
          { icon: SiMysql, color: '#4479A1' },
          { icon: SiMongodb, color: '#47A248' },
          { icon: FaGitAlt, color: '#F05032' },
          { icon: FaNodeJs, color: '#339933' },
        ].map(({ icon: Icon, color }, index) => (
          <motion.div
            key={index}
            variants={iconVariants(3.5 + (index % 2) * 0.3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
            style={{ borderColor: '#9CFF00', borderWidth: '2px', borderStyle: 'solid' }}>
            <Icon className='text-5xl' style={{ color }} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Technologies;
