

// export default ProjectForm;

import axios from 'axios';
import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ProjectForm extends Component {
  state = {
    title: '',
    description: '',
    technologies: '',
    link: '',
    selectedFiles: [],
    projectId: '', // For updating an existing project if needed
  };

  // Handle file selection
  onFilesChange = (event) => {
    this.setState({
      selectedFiles: event.target.files,
    });
  };

  // Handle input changes for text fields
  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // Handle file upload
  onFilesUpload = () => {
    const formData = new FormData();

    // Append files
    for (let i = 0; i < this.state.selectedFiles.length; i++) {
      formData.append('myFiles', this.state.selectedFiles[i]);
    }

    // Append other form fields
    formData.append('title', this.state.title);
    formData.append('description', this.state.description);
    formData.append('technologies', this.state.technologies);
    formData.append('link', this.state.link);

    // Append project ID if it's an update
    if (this.state.projectId) {
      formData.append('projectId', this.state.projectId);
    }

    // API call to upload files and form data
    axios.post('http://localhost:5000/api/projects/uploadfiles', formData)
      .then(response => {
        toast.success('Files uploaded successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch(error => {
        toast.error('File upload failed. Please try again.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  // Render file details after upload
  filesData = () => {
    if (this.state.selectedFiles.length > 0) {
      return (
        <div>
          <h2 className="text-lg font-semibold">File Details:</h2>
          <ul>
            {Array.from(this.state.selectedFiles).map((file, index) => (
              <li key={index} className="mt-2">
                <p><strong>File Name:</strong> {file.name}</p>
                <p><strong>File Type:</strong> {file.type}</p>
                <p><strong>Last Modified:</strong> {file.lastModifiedDate.toDateString()}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4 className="text-red-500">Choose files before pressing the Upload button</h4>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-xl">
          <h1 className="text-2xl font-semibold text-center mb-6">Upload New Project</h1>
          <div className="space-y-4">
            <input
              type="text"
              name="title"
              placeholder="Project Title"
              onChange={this.onInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="description"
              placeholder="Project Description"
              onChange={this.onInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="technologies"
              placeholder="Technologies Used"
              onChange={this.onInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="link"
              placeholder="Project Link"
              onChange={this.onInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="file"
              multiple
              onChange={this.onFilesChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <button
              onClick={this.onFilesUpload}
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Upload!
            </button>
          </div>
          {this.filesData()}
        </div>
        {/* ToastContainer to display notifications */}
        <ToastContainer />
      </div>
    );
  }
}

export default ProjectForm;








