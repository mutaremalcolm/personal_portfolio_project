
import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";


import {
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine
} from "react-icons/ri";

import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = ({theme}) => {
  return (
    <section id="home" className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat
      bg-bottom bg-cover dark:bg-none mb-20">
        <div className="container mx-auto">
            <div className="flex justify-between gap-x-8">
                {/*text*/}
                <div className="flex max-w[600px] flex-col justify-center mx-auto xl:mx-8
                 text-center xl:text-left">
                    <div className="text-sm uppercase font-semibold mb-4 text-primary
                     tracking-[4px]">Front End Developer {`</>`}
                     </div> 
                    <h1 className="h1 mb-4">Hi my name is Malcolm Mutare</h1>
                    <p className="subtitle max-w-[490px] mx-auto xl:mx-0"> 
                    I am a Front-End Developer based in Pretoria, South Africa.
                    I work with Typescript, React, NextJS, Jest for TDD, NodeJS, Express & SQL.
                    </p>
                    {/*buttons*/}
                    <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-6">   
                        <Link href="/contact">
                            <Button className="gap-x-2">
                             Contact me <Send size={18} />
                            </Button>
                        </Link>
                        <Link href="/assets/hero/Malcolm_Mutare_Resume_2.0.pdf">
                            <Button variant="secondary" className="gap-x-2" download>
                             Download CV 
                             <Download size={18} />
                            </Button>
                        </Link> 
                    </div>
                    <Socials containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-10" 
                    iconStyles="text-foreground text-[22] hover:text-primary transition-all" />
                </div>
                {/* image */}
                 <div className="hidden xl:flex relative">
                    {/*badge */}
                     <Badge 
                    containerStyles="absolute top-[24%] -left-[2rem]"
                    icon={<RiBriefcase4Fill />} 
                    endCountNum={3} 
                    badgeText="Years Of Experience"
                    />
                    {/* badge 2 */}
                    <Badge 
                    containerStyles="absolute top-[60%] -left-[1rem]"
                    icon={<RiTodoFill />} 
                    endCountNum={10} 
                    endCountText="k"
                    badgeText="Quality Hours"
                    />
                    {/* badge 3 */}
                    <Badge 
                    containerStyles="absolute top-[55%] -right-8"
                    icon={<RiTeamFill />} 
                    endCountNum={2} 
                    endCountText="M"
                    badgeText="Lines of Clean Code"
                    />
                    
                    <div className=" w-[500px] h-[500px] 
                    -top-1 -right-2 bg-no-repeat absolute"></div>
                    <DevImg containerStyles=" w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
                    imgSrc="/assets/hero/developer.svg"
                    />
                </div> 
            </div>
            {/* icon */}
            <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
                <RiArrowDownSLine className="text-3xl text-primary"/>
            </div>
        </div>
    </section>
  )
}

export default Hero

