import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { SiMongodb } from 'react-icons/si';
import { DiRedis } from 'react-icons/di';
import { FaNodeJs } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';

import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

import { animate, motion } from 'framer-motion';

const iconVariants =(duration)=>({
  initial:{y:-10},
  animate:{
    y:[10,-10],
    transition: {
      duration:duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse",
    }
  }
});

function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
        className='my-20 text-center text-4xl font-mono' style={{ color: '#fffce1' }}>Technologies</motion.h1>
      <motion.div
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:100}}
        transition={{duration:1.5}}
       className="flex flex-wrap items-center justify-center gap-4" >
                <motion.div
          variants={iconVariants(3.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          style={{ borderColor: '#9CFF00', borderWidth: '2px', borderStyle: 'solid' }}>
          <FaJava className='text-5xl' style={{ color: '#f89820' }} />
        </motion.div>
        <motion.div
          variants={iconVariants(3.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          style={{ borderColor: '#9CFF00', borderWidth: '2px', borderStyle: 'solid' }}>
          <FaPython className='text-5xl' style={{ color: '#3776AB' }} />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate" 
          className="rounded-2xl border-4 border-neutral-800 p-4"
          style={{ borderColor: '#9CFF00', borderWidth: '2px', borderStyle: 'solid' }}>
          <RiReactjsLine className='text-5xl' style={{ color: '#61DAFB' }} />
        </motion.div>
        <motion.div
          variants={iconVariants(3.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          style={{ borderColor: '#9CFF00', borderWidth: '2px', borderStyle: 'solid' }}>
          <SiFlutter className='text-5xl' style={{ color: '#02569B' }} />
        </motion.div>
        <motion.div
          variants={iconVariants(3.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          style={{ borderColor: '#9CFF00', borderWidth: '2px', borderStyle: 'solid' }}>
          <RiTailwindCssFill className='text-5xl' style={{ color: '#38B2AC' }} />
        </motion.div>
        <motion.div
          variants={iconVariants(3.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          style={{ borderColor: '#9CFF00', borderWidth: '2px', borderStyle: 'solid' }}>
          <IoLogoFirebase className='text-5xl' style={{ color: '#FFCA28' }} />
        </motion.div>
        <motion.div
          variants={iconVariants(3.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          style={{ borderColor: '#9CFF00', borderWidth: '2px', borderStyle: 'solid' }}>
          <SiMysql className='text-5xl' style={{ color: '#4479A1' }} />
        </motion.div>
        <motion.div
          variants={iconVariants(2.8)}
          initial="initial"
          animate="animate" 
          className="rounded-2xl border-4 border-neutral-800 p-4"
          style={{ borderColor: '#9CFF00', borderWidth: '2px', borderStyle: 'solid' }}>
          <SiMongodb className='text-5xl' style={{ color: '#47A248' }} />
        </motion.div>
        <motion.div
          variants={iconVariants(3.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          style={{ borderColor: '#9CFF00', borderWidth: '2px', borderStyle: 'solid' }}>
          <FaGitAlt className='text-5xl' style={{ color: '#F05032' }} />
        </motion.div>
        <motion.div
          variants={iconVariants(3.4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          style={{ borderColor: '#9CFF00', borderWidth: '2px', borderStyle: 'solid' }}>
          <FaNodeJs className='text-5xl' style={{ color: '#339933' }} />
        </motion.div>




      </motion.div>
    </div>
  );
}

export default Technologies;
