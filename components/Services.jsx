import { GanttChartSquare, Blocks, Gem } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

const servicesData = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
        title: 'Web Design',
        description: `I specialize in crafting visually stunning & user-friendly websites that drive results. 
        I work closely with you to bring your vision to life.`
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8} />,
        title: 'Web Development',
        description: `I excel in building powerful and scalable web applications tailored to your needs.
         I transform your ideas into fully functional digital solutions.`
    },
    {
        icon: <Gem size={72} strokeWidth={0.8} />,
        title: 'App Development',
        description: `I leverage the latest technologies to create intuitive and
         high-performance apps that deliver exceptional user experiences.`
    }
]

const Services = () => {
    return (
        <section className="xl:h-[868px] pb-12 xl:py-24">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
                    My Services
                </h2>
                {/* grid items */}
                <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
                    {servicesData.map((item, index) => {
                        return (
                            <Card className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10
                                justify-center items-center relative"
                                key={index}>
                                <CardHeader className="text-primary absolute -top-[60px]">
                                    <div className="w-[140px] h-[80px] bg-white dark:bg-background
                                        flex justify-center items-center relative">
                                        {item.icon}
                                    </div>
                                </CardHeader>
                                <CardContent className="text-center">
                                  <CardTitle className="mb-4">{item.title}</CardTitle> 
                                  <CardDescription className="text-lg">
                                    {item.description}
                                </CardDescription> 
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Services