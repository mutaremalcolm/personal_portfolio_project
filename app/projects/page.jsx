"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/assets/work/1.png",
    category: "next js",
    name: "Car Showcase Project",
    description:
      `CarShowcase is a Next.js 14 project featuring advanced search, filtering, 
        and custom elements such as filters, combo boxes, and modals. Utilizing 
        Next.js 13's App Router and Server Side Rendering, it optimizes metadata 
        for SEO and maintains clean code principles with a well-organized file 
        structure`,
    link: "https://car-showcase-project-nine.vercel.app",
    gitbranch: "https://github.com/mutaremalcolm/car_showcase_project"
  },
  {
    image: "/assets/work/2.png",
    category: "fullstack",
    name: "MangoStore",
    description:
      `MangoStore:E-Commerce platform for clothing sales. Built with React, Styled 
       Components, Redux, Firebase, and Stripe. Explore diverse clothing items, easily
       sorted by type, size, and color. Benefit from secure authentication, 
       hassle-free transactions, and Firebase-backed backend for smooth operations. 
       Netlify ensures seamless deployment.`,
    link: "https://incomparable-dieffenbachia-18c4c9.netlify.app",
    gitbranch: "https://github.com/mutaremalcolm/e-commerce-project"
  },
  {
    image: "/assets/work/3.png",
    category: "next js",
    name: "Travel App",
    description:
      `Utilizing Next.js 14 and Tailwind CSS, this feature-rich travel app
       embodies sleek UI design and mobile-first best practices. Seamlessly navigate 
       destinations, accommodations, and activities with ease.From intuitive user 
       interfaces to responsive layouts, TravelApp redefines travel planning with 
       elegance and functionality`,
    link: "https://vercel.com/mutaremalcolms-projects/travel-app",
    gitbranch: "https://github.com/mutaremalcolm/travel_app"
  },
  {
    image: "/assets/work/4.png",
    category: "react js",
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
    image: "/assets/work/5.png",
    category: "next js",
    name: "Spotify Clone",
    description:
      `Spotify Clone: Crafted as a showcase project, this Spotify clone mirrors the 
       core functionalities of the official app. Leveraging React, Next.js 14, and 
       Tailwind CSS, users can seamlessly explore and enjoy their favorite tunes, 
       akin to the authentic Spotify experience. Dive into a familiar interface, 
       navigate playlists, and immerse yourself in music, all within this meticulously 
       crafted replica.`,
    link: "https://spotify-clone-showcase.vercel.app",
    gitbranch: "https://github.com/mutaremalcolm/spotify_clone_showcase"
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
  // {
  //   image: "/assets/work/3.png",
  //   category: "fullstack",
  //   name: "Serenity Website",
  //   description:
  //     "Lorem Ipsum dolor sit amet consectetur adispicing elit. Cumque, quis?",
  //   link: "/",
  //   gitbranch: "/"
  // },
  // {
  //   image: "/assets/work/2.png",
  //   category: "fullstack",
  //   name: "Nova Website",
  //   description:
  //     "Lorem Ipsum dolor sit amet consectetur adispicing elit. Cumque, quis?",
  //   link: "/",
  //   gitbranch: "/"
  // },

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