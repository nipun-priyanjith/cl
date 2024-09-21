// import React, { useEffect, useState } from 'react';
// import { fetchProjects } from '../services/api';

// const ProjectList = () => {
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const getProjects = async () => {
//       try {
//         const data = await fetchProjects();
//         setProjects(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     getProjects();
//   }, []);




//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h1>Project List</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Description</th>
//             <th>Technologies</th>
//             <th>Link</th>
//             <th>Images</th>
//           </tr>
//         </thead>
//         <tbody>
//           {projects.map((project) => (
//             <tr key={project._id}>
//               <td>{project.title}</td>
//               <td>{project.description}</td>
//               <td>{project.technologies}</td>
//               <td>
//                 <a href={project.link} target="_blank" rel="noopener noreferrer">
//                   View Project
//                 </a>
//               </td>
//               <td>
//                 {project.images.map((image, index) => (
//                   <img
//                     key={index}
//                     src={`data:${image.contentType};base64,${image.data}`}
//                     alt={`Project image ${index}`}
//                     style={{ width: '100px', height: '100px' }} // Adjust size as needed
//                   />
//                 ))}

//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ProjectList;


import React, { useEffect, useState } from 'react';
import { fetchProjects } from '../services/api';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return <p className="text-center text-lg font-semibold">Loading...</p>;
  if (error) return <p className="text-center text-red-500 font-semibold">Error: {error}</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Project List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-3 px-6 text-left font-semibold text-gray-700">Title</th>
              <th className="py-3 px-6 text-left font-semibold text-gray-700">Description</th>
              <th className="py-3 px-6 text-left font-semibold text-gray-700">Technologies</th>
              <th className="py-3 px-6 text-left font-semibold text-gray-700">Link</th>
              <th className="py-3 px-6 text-left font-semibold text-gray-700">Images</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project._id} className="border-b">
                <td className="py-4 px-6 text-gray-700">{project.title}</td>
                <td className="py-4 px-6 text-gray-700">{project.description}</td>
                <td className="py-4 px-6 text-gray-700">{project.technologies}</td>
                <td className="py-4 px-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    View Project
                  </a>
                </td>
                <td className="py-4 px-6">
                  <div className="flex flex-wrap gap-4">
                    {project.images.map((image, index) => (
                      <img
                        key={index}
                        src={`data:${image.contentType};base64,${image.data}`}
                        alt={`Project image ${index}`}
                        className="w-24 h-24 object-cover rounded-md shadow-lg"
                      />
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectList;
