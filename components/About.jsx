import DevImg from "./DevImg"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
    User2,
    MailIcon,
    HomeIcon,
    PhoneCall,
    GraduationCap,
    Calendar,
    Briefcase
}
    from "lucide-react"

const infoData = [
    {
        icon: <User2 size={20} />,
        text: "Malcolm Mutare",
    },
    {
        icon: <PhoneCall size={20} />,
        text: "+27 786812164",
    },
    {
        icon: <MailIcon size={20} />,
        text: "mutarem@gmail.com",
    },
    {
        icon: <Calendar size={20} />,
        text: "Born on 17 February",
    },
    {
        icon: <GraduationCap size={20} />,
        text: "Diploma in IT",
    },
    {
        icon: <HomeIcon size={20} />,
        text: "Faerie Glen Pretoria",
    },
];

const qualificationData = [
    {
        title: "education",
        data: [
            {
                university: "British Computer Society",
                qualificationData: "Diploma in IT",
                years: "2022-2024"
            },
            {
                university: "Zero To Mastery",
                qualificationData: "Full React Developer BootCamp",
                years: "2022-2024"
            },
            {
                university: "Institute for the Mangement of Information Systems",
                qualificationData: "Diploma in IT",
                years: "2008-2010"
                // TODO: replace the years
            },
        ]
    },
    {
        title: "Experience",
        data: [
            {
                company: "Digi-Drip",
                role: "Full Stack Developer",
                years: "2022-2024"
            },
            {
                company: "Munch Software",
                role: "Business Development Consultant",
                years: "2021-2023"
            },
            {
                company: "Lemon & Thyme Food Services",
                role: "Wordpress Developer",
                years: "2018-2023"
                // TODO: update companies & dates
            },
        ]
    }
];

const skillData = [
    {
        title: "skills",
        data: [
            {
                name: "HTML, CSS"
            },
            {
                name: "Typescript, Javascript"
            },
            {
                name: "React, Tailwind"
            },
            {
                name: "NodeJS, SQL"
            },
            {
                name: "Agile Scrum, OOP"
            },]
    },
    {
        title: "tools",
        data: [
            {
                imgPath: "/assets/about/vscode.svg"
            },
            {
                imgPath: "/assets/about/figma.svg"
            }, {
                imgPath: "/assets/about/notion.svg"
            }, {
                imgPath: "/assets/about/wordpress.svg"
            },

        ]
    }

]


const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title)
    };

    console.log(getData(qualificationData, "education"))
    return (
        <section className="xl:h-[868px] pb-12 xl:py-24">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
                    About me
                </h2>
                <div className="flex flex-col xl:flex-row">
                    {/* {image} */}
                    <div className="hidden xl:flex flex-1 relative">
                        <DevImg containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] 

                    h-[505px] bg-no-repeat relative" imgSrc="/assets/about/developer.png" />

                    </div>
                    {/* {tabs} */}
                    <div className="flex-1">
                        <Tabs defaultValue="personal">
                            <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px]
                            xl:border dark:border-none">
                                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">Personal Information</TabsTrigger>
                                <TabsTrigger className="w-[162px] xl:w-auto" value="qualifications">Qualifications</TabsTrigger>
                                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">Skills</TabsTrigger>
                            </TabsList>
                            {/* tabs content */}
                            <div className="text-lg mt-12 xl:mt-8">
                                {/* personal */}
                                <TabsContent value="personal">
                                    <div className="text-center xl:text-left">
                                        <h3 className="h3 mb-4">Unmatched Service Quality for Over 3 Years</h3>
                                        <p className="subtitle max-w-xl mx-auto xl:mx-0">I specialize in crafting intuitive websites with cutting-edge
                                            technology, delivering dynamic and engaging user experiences
                                        </p>
                                        {/* {icons} */}
                                        <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                            {infoData.map((item, index) => {
                                                return (
                                                    <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                                                        <div className="text-primary">{item.icon}</div>
                                                        <div>{item.text}</div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        {/* { languages } */}
                                        <div className="flex flex-col gap-y-2">
                                            <div className="text-primary">Language Skill</div>
                                            <div className="border-b border-border"></div>
                                            <div>English, German A1, Shona, Northern Sotho & siZulu</div>

                                        </div>
                                    </div>
                                </TabsContent>
                                {/* {qualifications} */}
                                <TabsContent value="qualifications">
                                    <div>
                                        <h3 className="h3 mb-8 text-center xl:text-left">
                                            My Awesome Journey
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-y-8">
                                            {/* Experience */}
                                            <div className="flex flex-col gap-y-6">
                                                <div className="flex gap-x-4 items-center text-[22px] text-primary ">
                                                    <Briefcase />
                                                    <h4 className="capitalize font-medium">
                                                        {getData(qualificationData, "Experience").title}
                                                    </h4>
                                                </div>
                                                {/* Experience list */}
                                                <div className="flex flex-col gap-y-8">
                                                    {getData(qualificationData, "Experience").data.map((item, index) => (
                                                        <div className="flex gap-x-8 group" key={index}>
                                                            <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                            </div>
                                                            <div>
                                                                <div className="font-semibold text-xl leading-none mb-2">{item.company}</div>
                                                                <div className="text-lg leading-none text-muted-foreground mb-4">{item.role}</div>
                                                                <div className="text-base font-medium">{item.years}</div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            {/* Education */}
                                            <div className="flex flex-col gap-y-6">
                                                <div className="flex gap-x-4 items-center text-[22px] text-primary ">
                                                    <GraduationCap size={28} />
                                                    <h4 className="capitalize font-medium">
                                                        {getData(qualificationData, "education").title}
                                                    </h4>
                                                </div>
                                                {/* Education list */}
                                                <div className="flex flex-col gap-y-8">
                                                    {getData(qualificationData, "education").data.map((item, index) => (
                                                        <div className="flex gap-x-8 group" key={index}>
                                                            <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                            </div>
                                                            <div>
                                                                <div className="font-semibold text-xl leading-none mb-2">{item.university}</div>
                                                                <div className="text-lg leading-none text-muted-foreground mb-4">{item.qualificationData}</div>
                                                                <div className="text-base font-medium">{item.years}</div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                {/* skills */}
                                <TabsContent value="skills">
                                    <div className="text-center xl:text-left">
                                        <h3 className="h3 mb-8 ">What I Use Everyday</h3>
                                        <div className="mb-16">
                                            <h4 className="text-xl font-semibold mb-2">Skills </h4>
                                            <div className="border-b border-border mb-4"></div>
                                            {/* skill list  */}
                                            <div>
                                                {getData(skillData, "skills").data.map((item, index) => {
                                                    const { name } = item;
                                                    return (
                                                        <div className="w-2/4 text-center xl:text-left mx-auto
                                                        xl:mx-0" 
                                                        key={index}>
                                                            <div className="font-medium">{name}</div>
                                                        </div>)
                                                })}
                                            </div>
                                        </div>
                                        {/* {tools} */}
                                        <div>
                                            <h4 className="text-xl font-semibold mb-2 xl:text-left">Tools</h4>
                                            <div className="border-b border-border mb-4"></div>
                                            {/* tool list */}
                                            <div className="flex gap-x-8 justify-center xl:justify-start">
                                                {getData(skillData, 'tools').data.map((item, index)=> {
                                                    const{ imgPath } = item;
                                                    return (
                                                    <div key={index}>
                                                        <Image 
                                                        src={imgPath} 
                                                        width={48}
                                                        height={48} 
                                                        alt=''
                                                        priority 
                                                        />
                                                    </div>
                                                )})}
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About