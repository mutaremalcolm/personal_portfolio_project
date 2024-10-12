"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/assets/work/4.png",
    category: "NextJS",
    name: "FlipDish Technical Take Home Assesment",
    description:
        `Developed as part of a technical take-home assessment, 
         this project serves as a menu renderer for Flipdish restaurant menus. Harnessing 
         the power of Vite, Tailwind CSS, React. Key requirements include 
         rendering the restaurant menu, selecting an appropriate layout 
         & displaying item names & images.`,
    link: "https://flipdish-assesment.vercel.app",
    gitbranch: "https://github.com/mutaremalcolm/deliveroo_take_home_assesment"
  },
  {
    image: "/assets/work/6.png",
    category: "next js",
    name: "ClearScore Technical Take Home Assesment",
    description:
      `Introducing ThinkPad, my solution for organizing brilliant ideas. Built with React, 
       Next.js 14, and Tailwind CSS, offers a seamless experience across devices. 
       Editable idea tiles with sorting options and localStorage persistence, 
       organization and continuity are ensured. Real-time character countdown and toast 
       notifications enhance clarity and usability.`,
    link: "https://technical-take-home-assesment.vercel.app",
    gitbranch: "https://github.com/mutaremalcolm/technical-take-home_assesment"
  },
  {
    image: "/assets/work/5.png",
    category: "next js",
    name: "Thymia Gamified App",
    description:
      `The project focuses on developing a gamified version of the 2-back task, a 
      cognitive assessment used to measure working memory. 
      I selected Next.js for its built-in routing capabilities and utilized a global
      React context to manage state across components. Additionally, I 
      implemented error logging, simulated post requests, and a toggle function 
      to show event logs as toast notifications.`,
    link: "https://thymia-mutaremalcolms-projects.vercel.app/",
    gitbranch: "https://github.com/mutaremalcolm/Thymia"
  },
  {
    image: "/assets/work/2.png",
    category: "fullstack",
    name: "Movieland",
    description:
      `The project makes an API call to fetch movies from a database. It then
       renders them and allows a search functionality. It also features a pop-up modal.
       It was completed for a time constrainted technical assessment for Leo Vegas, 
       the technical assesment demanded a code review prior to any re-factoring being done,
       in addition to a few other technical constraints`,
    link: "https://calorie-counter-app-eight.vercel.app/",
    gitbranch: "https://github.com/mutaremalcolm/movie_land_v2"
  },
  {
    image: "/assets/work/1.png",
    category: "next js",
    name: "Car Showcase Project",
    description:
      `CarShowcase is a Next.js 14 project featuring advanced search, filtering, 
        and custom elements such as custom images, combo boxes, and modals. Utilizing 
        Next.js 13's App Router and Server Side Rendering, it optimizes metadata 
        for SEO and maintains clean code principles with a well-organized file 
        structure. The app makes an API call to fetch data and render it in the app`,
    link: "https://car-showcase-project-nine.vercel.app",
    gitbranch: "https://github.com/mutaremalcolm/car_showcase_project"
  },
  {
    image: "/assets/work/3.png",
    category: "next js",
    name: "Travel App",
    description:
      `Utilizing Next.js 14 and Tailwind CSS, this feature-rich travel app single-page-application
       embodies a sleek UI design incorporating mobile-first best practices. Seamlessly navigate 
       destinations, accommodations, and activities with ease.From intuitive user 
       interfaces to responsive layouts, TravelApp redefines travel planning with 
       elegance and functionality`,
    link: "https://vercel.com/mutaremalcolms-projects/travel-app",
    gitbranch: "https://github.com/mutaremalcolm/travel_app"
  },
]

// remove category duplicates
const uniqueCategories = [
  'all projects',
  ...new Set(projectData.map(item => item.category)),
];



const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all projects');

  const filteredProjects = projectData.filter(project => {
    // if category is 'all projects' return all projects, else filter by category
    return category === 'all projects' 
    ? project 
    : project.category === category; 
  });
  
  return (
    <section id="projects" className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px]
          mb-12 mx-auto md:border dark:border-none"
          >
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              )
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index)=> {
              return ( 
              <TabsContent value={category} key={index}>
                <ProjectCard project={project}/>
              </TabsContent>
            )})}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Projects