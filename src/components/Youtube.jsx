import React from 'react'
import { motion } from 'framer-motion';
import  { useEffect, useState } from 'react';
import { fetchExperiences } from '../services/api';




function Experience() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getExperiences = async () => {
      try {
        const data = await fetchExperiences();
        setExperiences(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getExperiences();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1 
       whileInView={{opacity:1, y:0}}
       initial={{opacity:0,y:-100}}
       transition={{duration:0.5}}
       className="my-20 text-center text-4xl font-mono"style={{ color: '#fffce1' }}>My <span className='my-20 text-center text-5xl font-mono' style={{color:"#FF0000"}}>YouTube</span> Channel</motion.h1>
      <div>
        {experiences.map(exp => (
          <div key={exp._id} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div 
       whileInView={{opacity:1, y:0}}
       initial={{opacity:0,y:-100}}
       transition={{duration:1}}
             className="w-full lg:w-1/2">
              <div><iframe width="400" height="250" title={exp._id} src={exp.link} style={{borderColor: '#FF0000', borderWidth: '2px', borderStyle: 'solid'}}>
              </iframe></div>
            </motion.div>
            <motion.div 
       whileInView={{opacity:1, x:0}}
       initial={{opacity:0,x:100}}
       transition={{duration:1}}
       className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 text-2xl font-mono font-semibold"style={{ color: '#fffce1' }}>
                {exp.role} -{" "}
                <span className=" text-2xl font-mono"style={{ color: '#FF0000' }}>
                  {exp.company}
                </span>
              </h6>
              <p className='mb-4 font-mono text-neutral-400'>{exp.description}</p>
              
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;