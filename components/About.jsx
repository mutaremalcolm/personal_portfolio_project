import DevImg from "./DevImg"
import Image from "next/image"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

import {User2, 
        MailIcon, 
        HomeIcon, 
        PhoneCall, 
        GraduationCap, 
        Calendar, 
        Briefcase} 
        from "lucide-react"

const infoData = [
    {
        icon: <User2 size={20}/>,
        text: "Malcolm Mutare",
    },
    {
        icon: <PhoneCall size={20}/>,
        text: "+27 786812164",
    },
    {
        icon: <MailIcon size={20}/>,
        text: "mutarem@gmail.com",
    },
    {
        icon: <Calendar size={20}/>,
        text: "Born on 17 February",
    },
    {
        icon: <GraduationCap size={20}/>,
        text: "Diploma in IT",
    },
    {
        icon: <HomeIcon size={20}/>,
        text: "Faerie Glen Pretoria",
    },
];

const qualificationData = [
    {
        title: "education",
        data: [
            {
                university: "British Coomputer Society",
                qualificationData: "Diploma in IT",
                years: "2022-2024"
            },
            {
                BootCamp: "Zero To Mastery",
                qualificationData: "Full React Developer BootCamp",
                years: "2021-2023"
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
                company: "British Coomputer Society",
                qualificationData: "Diploma in IT",
                years: "2022-2024"
            },
            {
                company: "Zero To Mastery",
                qualificationData: "Full React Developer BootCamp", 
                years: "2021-2023"
            },
            {
                company: "Institute for the Mangement of Information Systems",
                qualificationData: "Diploma in IT",
                years: "2008-2010" 
                // TODO: replace the companies
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
                name: "Front-end Development"
            },
            {
                name: "Javascript, SQL"
            },
            {
                name: "Back-end Development"
            },        ]
    },
    {
        title: "tools",
        data: [
            {
                imgPath: "/about/vscode.svg"
            }, 
            {
                imgPath: "/about/figma.svg"
            }, {
                imgPath: "/about/notion.svg"
            }, {
                imgPath: "/about/wordpress.svg"
            }, 

              ]
    }

] 


const About = () => {
  const getData = (arr, title) => {
    return arr.find((item)=> item.title === title)
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
                        <TabsList>
                            <TabsTrigger value="personal">Personal Information</TabsTrigger>
                            <TabsTrigger value="qualifications">Qualifications</TabsTrigger>
                            <TabsTrigger value="skills">Skills</TabsTrigger>
                        </TabsList>
                        {/* tabs content */}
                        <div className="text-lg mt-12 xl:mt-8">
                        {/* personal */}
                        <TabsContent value="personal">personal info</TabsContent>
                        <TabsContent value="qualifications">qualifications info</TabsContent>
                        <TabsContent value="skills">skills info</TabsContent>
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About