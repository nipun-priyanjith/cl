// client/src/services/api.js
//https://nipun-priyanjith-pf.vercel.app/api/experiences
 const API_URL = 'https://nipun-priyanjith-pf.vercel.app/api';// Ensure /api prefix matches your server routes





export const createExperience = async (experience) => {
  try {
    const response = await fetch(`${API_URL}/experiences`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(experience),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Create experience error:', error);
    throw error;
  }
};

export const fetchExperiences = async () => {
  try {
    const response = await fetch(`nipun-priyanjith-eiic5ik9c-nipuns-projects-a980ca2d.vercel.app/experiences`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch experiences error:', error);
    throw error;
  }
};
Fetch Experiences





//nnnnnnnnnnnnn
export const fetchProjects = async () => {
  try {
    const response = await fetch(`${API_URL}/projects`);
    if (!response.ok) {
      const errorText = await response.text(); // Get the text response for debugging
      throw new Error(`Network response was not ok: ${response.statusText} - ${errorText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch projects error:', error);
    throw error;
  }
};








export const createProject = async (project, images) => {
  try {
    const formData = new FormData();
    formData.append('title', project.title);
    formData.append('description', project.description);
    formData.append('technologies', project.technologies);
    formData.append('link', project.link);

    images.forEach((image, i) => {
      formData.append('images', image);
    });

    const response = await fetch(`${API_URL}/projects`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  } catch (error) {
    console.error('Create project error:', error);
    throw error;
  }
};
