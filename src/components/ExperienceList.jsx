


// client/src/components/ExperienceList.jsx
import React, { useEffect, useState } from 'react';
import { fetchExperiences } from '../services/api';

const ExperienceList = () => {
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

  if (loading) return <p className="text-center text-lg font-semibold">Loading...</p>;
  if (error) return <p className="text-center text-red-500 font-semibold">Error: {error}</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">YouTube Video List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-3 px-6 text-left font-semibold text-gray-700">Video Name</th>
              <th className="py-3 px-6 text-left font-semibold text-gray-700">channel</th>
              <th className="py-3 px-6 text-left font-semibold text-gray-700">Description</th>
              <th className="py-3 px-6 text-left font-semibold text-gray-700">Link</th>
            </tr>
          </thead>
          <tbody>
            {experiences.map((exp) => (
              <tr key={exp._id} className="border-b">
                <td className="py-4 px-6 text-gray-700">{exp.role}</td>
                <td className="py-4 px-6 text-gray-700">{exp.company}</td>
                <td className="py-4 px-6 text-gray-700">{exp.description}</td>
                <td className="py-4 px-6">
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExperienceList;
