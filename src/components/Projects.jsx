import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchProjects } from '../services/api';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const data = await fetchProjects();
        setProjects(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getProjects();
  }, []);

  if (loading) {
    return <p className="text-center text-xl text-white">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-xl text-red-500">Error: {error}</p>;
  }

  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-mono"
        style={{ color: '#fffce1' }}
      >
        Projects
      </motion.h1>
      <div>
        {visibleProjects.map((project) => (
          <div key={project._id} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/2"
            >
              <ImageCarousel images={project.images} />
            </motion.div>
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold font-mono text-2xl" style={{ color: '#fffce1' }}>
                {project.title}
              </h6>
              <p className="mb-4 text-neutral-400 font-mono">{project.description}</p>
              {project.technologies ? project.technologies.split(',').map((tech, index) => (
                <span 
                  key={index} 
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium font-mono" style={{ color: '#9CFF00' }}
                >
                  {tech.trim()}
                </span>
              )) : <p>No technologies listed</p>}
              <br />
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-4 inline-block font-mono text-sm font-semibold underline text-blue-400 transition-colors duration-300" style={{ color: '#40A4FF' }} onMouseEnter={(e) => e.target.style.color = '#9CFF00'}
                onMouseLeave={(e) => e.target.style.color = '#40A4FF'}
              >
                View Source Code
              </a>
            </motion.div>
          </div>
        ))}
      </div>
      {projects.length > 3 && (
        <div className="text-center mt-6">
          <button 
            onClick={() => setShowAll(!showAll)} 
            className="px-4 py-2 bg-darkGray border border-[#9CFF00] text-[#9CFF00] rounded-lg transition-colors duration-300 hover:border-[#40A4FF] hover:text-[#40A4FF]">
            {showAll ? 'Show Less' : 'Show More Projects'}
          </button>
        </div>
      )}
    </div>
  );
}

function ImageCarousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images && images.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [images]);

  if (!images || images.length === 0) {
    return <p>No images available</p>;
  }

  const currentImage = images[currentImageIndex];
  const imageSrc = `data:${currentImage.contentType};base64,${currentImage.data}`;

  return (
    <img
      src={imageSrc}
      width={400}
      height={400}
      alt="Project"
      className="mb-6 rounded" style={{ borderColor: '#9CFF00', borderWidth: '2px', borderStyle: 'solid' }}
    />
  );
}

export default Projects;
