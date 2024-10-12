"use client"
import Link from "next/link"
import { Button } from "./ui/button"

// import swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import "swiper/css"
import "swiper/css/pagination"

// import  required modules
import { Pagination } from "swiper/modules"

// components
import ProjectCard from "./ProjectCard"

const projectData = [
    {
        image: "/assets/work/2.png",
        category: "react js",
        name: "Movieland",
        description:
            `The project makes an API call to fetch movies from a database. It then renders them and allows a search 
             functionality. It was completed for a time constrainted technical assessment.`,
        link: "https://calorie-counter-app-eight.vercel.app/",
        gitbranch: "https://github.com/mutaremalcolm/movie_land_v2"
    },
    {
        image: "/assets/work/1.png",
        category: "react js",
        name: "Car Showcase Project",
        description:
            `I built this app using Next.js 13, for the car models dynamic content fetched from a reliable API source. 
            the website showcases responsive design, and a sleek interface`,
        link: "https://car-showcase-project-nine.vercel.app",
        gitbranch: "https://github.com/mutaremalcolm/car_showcase_project"
    },
    {
        image: "/assets/work/3.png",
        category: "next js",
        name: "Lumina Website",
        description:
            "Lorem Ipsum dolor sit amet consectetur adispicing elit. Cumque, quis?",
        link: "/",
        gitbranch: "/"
    },
    {
        image: "/assets/work/4.png",
        category: "next js",
        name: "Evolve Website",
        description:
            "Lorem Ipsum dolor sit amet consectetur adispicing elit. Cumque, quis?",
        link: "/",
        gitbranch: "/"
    },
    {
        image: "/assets/work/3.png",
        category: "next js",
        name: "Ignite Website",
        description:
            "Lorem Ipsum dolor sit amet consectetur adispicing elit. Cumque, quis?",
        link: "/",
        gitbranch: "/"
    },
    {
        image: "/assets/work/4.png",
        category: "next js",
        name: "Envision Website",
        description:
            "Lorem Ipsum dolor sit amet consectetur adispicing elit. Cumque, quis?",
        link: "/",
        gitbranch: "/"
    },
    {
        image: "/assets/work/3.png",
        category: "fullstack",
        name: "Serenity Website",
        description:
            "Lorem Ipsum dolor sit amet consectetur adispicing elit. Cumque, quis?",
        link: "/",
        gitbranch: "/"
    },
    {
        image: "/assets/work/2.png",
        category: "fullstack",
        name: "Nova Website",
        description:
            "Lorem Ipsum dolor sit amet consectetur adispicing elit. Cumque, quis?",
        link: "/",
        gitbranch: "/"
    },

]

const Work = () => {
    return (
        <section className="relative mb-12 xl:mb-48 mt-14">
            <div className="container mx-auto">
                {/* {text} */}
                <div className="max-w-[400px] mx-auto xl:mx-0 text-center 
                xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center 
                xl:items-start">
                    <h2 className="section-title mb-4">Latest Projects</h2>
                    <p className="subtitle mb-8">
                        Here are some projects that i have recently worked on:
                    </p>
                    <Link href="/projects">
                        <Button>All Projects</Button>
                    </Link>
                </div>
                {/* slide */}
                <div className="xl:max-w-[750px] xl:absolute right-0 top-0">
                    <Swiper
                        className="h-[480px]"
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 2
                            }
                        }} spaceBetween={30}
                        modules={[Pagination]}
                        pagination={{ clickable: true }}>
                        {/* { show only the first 4 projects for the slides } */}
                        {projectData.slice(0, 4).map((project, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <ProjectCard project={project} />
                                </SwiperSlide>)
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Work