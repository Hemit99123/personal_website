"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

interface ProjectItemProps {
  title: string;
  imgSrc: string;
  hoverImgSrc: string;
  slug: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, imgSrc, hoverImgSrc, slug }) => {
  const router = useRouter();

  const handleGoPage = () => {
    router.push(`/${slug}`);
  };

  return (
    <div
      onClick={handleGoPage}
      className="cursor-pointer group transition-transform hover:-translate-y-1 active:scale-95 duration-200 ease-in-out"
    >
      <div className="relative overflow-hidden rounded-xl border border-neutral-800 bg-white flex items-center justify-center
        h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        {/* Base image */}
        <img
          src={imgSrc}
          alt={title}
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0 object-contain"
          draggable={false}
        />

        {/* Hover image */}
        <img
          src={hoverImgSrc}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
          draggable={false}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Title */}
        <div className="absolute bottom-3 left-3 right-3 text-center sm:text-left text-sm sm:text-base md:text-lg lg:text-xl font-black text-amber-50
          drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] bg-black/60 px-2 py-1 rounded-md z-10">
          {title}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
