"use client";
import Projects from "../../data/projects";
import { useState } from "react";
import Carousel from "../../components/Carousel";
import Image from "next/image";

export default function page() {
    const [selectedProject, setSelectedProject] = useState(1);
    const project = Projects[selectedProject];
    const handleProjectClick = (index: number) => {
        setSelectedProject(index);
    };

    return (
        <div className="container m-0 p-0">
            <div className="horizontalBar w-full flex justify-around align-center border border-red-800 m-0 p-0">
                {Projects.map((project, index) => (
                    <div
                        key={index}
                        className={`cursor-pointer border border-[#FF0000] p-2 bg-[#FF0000] ${selectedProject === index ? "font-bold" : ""}`}
                        onClick={() => handleProjectClick(index)}
                    >
                        {project.title}
                    </div>
                ))}
            </div>
            {
                selectedProject !== -1 && (
                    <div className="project-info">
                        <Carousel loop align={"center"}>
                            {Projects[selectedProject].images?.map((src, i) => {
                                return (
                                    <div className="relative flex-[0_0_100%] max-w-full">
                                        <div className="container w-full h-80 flex justify-center items-center overflow-hidden">
                                            <Image src={src} alt="Project Demo" className="object-contain p-2" style={{ maxWidth: '60%' }} />
                                        </div>
                                    </div>
                                );
                            })}
                        </Carousel>

                        <div className="m-2 p-4 border-white rounded-lg shadow-md">
                            <h2 className="text-white text-3xl m-1 font-semibold">{project.title}</h2>
                            {project.tagline && <p className="text-white">{project.tagline}</p>}
                            <p className="mt-3 text-white text-md">{project.description}</p>
                            <div className="mt-4 flex flex-row ">
                                <div className="flex flex-row items-center">
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="#FF0000" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" className="css-i6dzq1 me-1"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-#FF0000 hover:underline"
                                    >
                                        GitHub Repository
                                    </a>
                                </div>
                                {project.liveLink && (
                                    <div className="flex items-center">
                                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="#FF0000" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" className="ms-3 css-i6dzq1 me-1"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-#FF0000 hover:underline"
                                        >
                                            Live
                                        </a>
                                    </div>
                                )}
                            </div>
                            <div className="mt-2 m-0">
                                {project.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs mr-1 mt-2 inline-block"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}