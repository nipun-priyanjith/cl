import React, { useState } from "react";
import axios from "axios";

function AdminProject() {
  const [project, setProject] = useState({
    title: "",
    description: "",
    technologies: "",
    link: ""
  });
  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({
      ...project,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    setImages(e.target.files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', project.title);
    formData.append('description', project.description);
    formData.append('technologies', project.technologies);
    formData.append('link', project.link);
    for (let i = 0; i < images.length; i++) {
      formData.append('images', images[i]);
    }

    axios.post('/api/projects', formData)
      .then(response => {
        console.log("Project added", response.data);
      })
      .catch(error => {
        console.error("There was an error adding the project!", error);
      });
  };

  return (
    <div>
      <h1>Add Project</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={project.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={project.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Technologies (comma-separated):</label>
          <input
            type="text"
            name="technologies"
            value={project.technologies}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Link (comma-separated):</label>
          <input
            type="text"
            name="link"
            value={project.link}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Images:</label>
          <input
            type="file"
            multiple
            onChange={handleImageChange}
          />
        </div>
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
}

export default AdminProject;
