import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'This is a description for Project One.',
    imageUrl: 'https://via.placeholder.com/300x200', // Placeholder image
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'This is a description for Project Two.',
    imageUrl: 'https://via.placeholder.com/300x200', // Placeholder image
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'This is a description for Project Three.',
    imageUrl: 'https://via.placeholder.com/300x200', // Placeholder image
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section className="p-8 bg-gradient-to-r from-blue-500 to-blue-300 opacity-75 min-h-screen">
      <div className="text-center">
      <h2 className="text-5xl font-bold mb-8 text-white inline-block relative after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-full after:h-0.5 after:bg-white">
        My Projects
      </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white p-6 rounded-lg shadow-lg">
            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-700">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
