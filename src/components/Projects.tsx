import React from 'react';
import ProjectItemComponent from '@/components/ProjectItem';
import { projects } from '@/data/projects';

const Projects: React.FC = () => {
  return (
    <section className="bg-amber-50 min-h-screen py-12 px-4 sm:py-16 sm:px-6 lg:py-20 lg:px-8">
      {/* Page Title */}
      <h1 className="font-primary font-black text-center leading-tight mb-12 
        text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[160px]">
        Projects
      </h1>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 w-screen">
            {projects.map((project, idx) => (
              <div key={project.slug || idx} className="w-full">
                <ProjectItemComponent
                  title={project.title}
                  imgSrc={project.imgSrc}
                  hoverImgSrc={project.hoverImgSrc}
                  slug={project.slug}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
