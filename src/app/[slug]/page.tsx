"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { projectData } from "@/data/projects";
import { ProjectData } from "@/types/projects";
import "@/app/font-config.css";
import Image from "next/image";

interface PageParams {
  params: Promise<{ slug: string }>;
}

const SlugDetail: React.FC<PageParams> = ({ params }) => {
  const [project, setProject] = useState<ProjectData | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProject = async () => {
      const slug = (await params).slug;
      const foundProject = projectData.find((p) => p.slug === slug);
      if (!foundProject) {
        router.push("/");
      } else {
        setProject(foundProject);
      }
    };

    fetchProject();
  }, [params, router]);

  if (!project) return <p>Loading...</p>;

  const goToNextProject = () => {
    router.push(project.nextProject);
  };

  const goToCheckOut = () => {
    router.push(project.link);
  };

  return (
    <div className="bg-amber-50 min-h-screen flex flex-col">
      {/* Main Content */}
      <div className="p-10">
        <p
          className="cursor-pointer hover:underline hover:text-amber-500"
          onClick={() => router.push("/")}
        >
          Take me home
        </p>

        <h1 className="font-primary text-4xl sm:text-5xl md:text-7xl mt-5 font-black">
          {project.title}
        </h1>

        <div className="flex flex-col items-center md:flex-row md:justify-between mt-16 gap-8">
          <p className="text-lg sm:text-xl text-gray-700 font-medium max-w-full md:max-w-xl text-center md:text-left">
            {project.description}
          </p>
          <button
            className="border w-full md:w-1/3 lg:w-1/5 h-12 rounded-lg border-gray-500 font-semibold hover:bg-black hover:text-white duration-300"
            onClick={goToCheckOut}
          >
            Check it out!
          </button>
        </div>

        <div className="mt-10 flex justify-center">
          <img
            src={project.mainImage}
            alt={`${project.title} Mockup`}
            className="w-full h-[70vh] object-cover rounded-lg shadow-lg md:max-w-3xl"
          />
        </div>
      </div>

      {/* Impact Section */}
      <div className="bg-black text-amber-50 px-6 sm:px-12 md:px-32 lg:px-52 mt-10 py-16">
        <h1 className="font-black font-primary text-2xl sm:text-4xl md:text-7xl">
          My Impact?
        </h1>

        <div className="mt-16 space-y-6 text-xl font-medium">
          {project.impact.map((point: string, index: number) => (
            <p key={index}>{`#${index + 1}: ${point}`}</p>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-12">
            <Image
                src={`/mockups/${project.slug}/1.png`}
                width={500}
                height={500}
                alt={`${project.title} Screenshot 1`}
                className="rounded-lg shadow-lg w-full sm:w-1/2 object-cover max-h-96"
            />
            <Image
                src={`/mockups/${project.slug}/2.png`}
                width={500}
                height={500}
                alt={`${project.title} Screenshot 2`}
                className="rounded-lg shadow-lg w-full sm:w-1/2 object-cover max-h-96"
            />
        </div>
      </div>

      {/* Stats Section */}
      <div className="px-6 sm:px-12 md:px-32 lg:px-52 mt-10 mb-20">
        <h1 className="font-black font-primary text-2xl sm:text-4xl md:text-7xl mb-5">
          Stats?
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 text-center lg:text-left">
          {project.stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center lg:items-start">
              <h1 className="font-bold text-amber-800 text-4xl sm:text-5xl lg:text-6xl mb-1">
                {stat.stat}
              </h1>
              <p className="text-gray-700">{stat.desc}</p>
            </div>
          ))}
        </div>

        <hr className="h-px my-8 bg-black border-0" />
        <p
          className="text-right cursor-pointer hover:underline hover:text-amber-500 mb-10"
          onClick={goToNextProject}
        >
          View next project ➔
        </p>
      </div>
    </div>
  );
};

export default SlugDetail;
