import React from 'react';
import Title from '../components/Title';
import Statistics from '../components/Statistics'
import Icons from '../components/icons';
import Buttons from '../components/Buttons';
import { Laptop, User, Code, Brain, Sparkles, BookOpen, GraduationCap, Lightbulb } from 'lucide-react';

const ICONS=[
    {
        icon:Code,
        text:"Development",
        iconColor:"purple"
    },
    {
        icon:Brain,
        text:"AI",
        iconColor:"blue"
    },
    {
        icon:Laptop,
        text:"Engineering",
        iconColor:"pink"
    }
]

const STATISTICS=[
    {
        number:"15+",
        numberColor:"pink",
        description:"Academic Projects",
        dataAosDelay:"400"
    },
    {
        number:"3+",
        numberColor:"blue",
        description:"Years of Study",
        dataAosDelay:"500"
    }
];

const ABOUT_BUTTONS = [
    {
        link: "#skills",
        title: "Explore my technical skills",
        variant: "primary",
        animation:"fade-up",
        delay: "700"
    },
    {
        link: "#projects",
        title: "See my projects",
        variant: "secondary",
        animation:"fade-up",
        delay: "700"
    }
];


const AboutSection = () => {
    return (
        <section id="about" className="py-20 relative overflow-hidden font-primary">
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue/10 rounded-full blur-3xl"></div>
            
            <div className="container mx-auto px-4 2xl:px-8 relative z-10">
                {/* العنوان */}
                
                <Title title="About" highlightTitle="Me" subTitle="Get to know more about my journey and expertise"/>

                <div className="max-w-6xl 2xl:max-w-8xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 2xl:gap-16 items-center">
                        {/* النص الشخصي */}
                        <div className="text-left order-2 md:order-1" data-aos="fade-right" data-aos-delay="100">
                            <h3 className="text-3xl 2xl:text-4xl font-bold text-white mb-6">
                                Computer Engineer & <span className="text-pink">AI Specialist</span>
                            </h3>
                            
                            <div className="space-y-4 2xl:space-y-6 text-lg 2xl:text-xl text-light/90">
                                <p data-aos="fade-right" data-aos-delay="200">
                                    As a passionate <span className="text-purple font-semibold font-mono">Computer Engineer</span> 
                                    and <span className="text-blue font-semibold font-mono"> AI Specialist</span>, I bridge the gap 
                                    between innovative technology and real-world solutions.
                                </p>
                                
                                <p className="font-medium" data-aos="fade-right" data-aos-delay="300">
                                    My journey is a <span className="text-pink">constellation of curiosity</span>, 
                                    where every line of code is a star in the galaxy of 
                                    <span className="text-blue"> digital possibilities</span> I'm determined to explore.
                                </p>
                                
                                <p data-aos="fade-right" data-aos-delay="400">
                                    Specializing in both <span className="font-mono text-purple">full-stack development</span> and 
                                    <span className="font-mono text-blue"> data analysis</span>, I approach every project with a 
                                    problem-solving mindset, ensuring elegant solutions that are both efficient and scalable.
                                </p>
                            </div>

                            {/* الإحصائيات */}
                            <div className="grid grid-cols-2 gap-6 2xl:gap-8 mt-8">
                                {STATISTICS.map((item, index) => (
                                    <Statistics 
                                        key={index}
                                        number={item.number}
                                        numberColor={item.numberColor}
                                        description={item.description}
                                        dataAosDelay={item.dataAosDelay}
                                    />
                                ))}
                            </div>
                            {/* الأزرار */}

                            <div className="mt-8 2xl:mt-12 flex flex-wrap gap-4 2xl:gap-6">
                                {ABOUT_BUTTONS.map((item, index) => (
                                    <Buttons 
                                        key={index}
                                        link={item.link}
                                        title={item.title}
                                        variant={item.variant}
                                        delay={item.delay}
                                        animation={item.animation}
                                    />
                                ))}
                            </div>
                        
                        </div>

                       {/* الصورة */}
                        <div className="relative order-1 md:order-2" data-aos="zoom-in" data-aos-delay="100">
                            <div className="relative w-60 h-60 md:w-80 md:h-80 2xl:w-96 2xl:h-96 mx-auto">
                                <div className="absolute inset-0 bg-linear-to-br from-purple to-blue rounded-full blur-xl opacity-50 animate-pulse"></div>
                                
                                <div className="relative w-full h-full flex items-center justify-center">
                                    <div className="relative bg-dark-purple rounded-full p-8 shadow-2xl w-[80%] h-[80%]">
                                        <div className="w-full h-full bg-linear-to-br from-purple2 to-blue2 rounded-full flex items-center justify-center overflow-hidden p-1">
                                            <img 
                                                src="./src/assets/aboutMe.jpg"
                                                alt="Lubna Alhalabi - Computer Engineer & AI Specialist"
                                                className="w-full h-full object-cover rounded-full"
                                                data-aos="zoom-in" data-aos-delay="100"
                                            />
                                        </div>
                                    </div>
                                </div>
                                
                                {/* الأيقونات الصغيرة */}
                                <div className="absolute -top-4 -left-4 w-12 h-12 bg-pink/30 rounded-full animate-bounce"
                                     data-aos="fade-down-right" data-aos-delay="100">
                                    <BookOpen size={20} className="text-pink absolute inset-0 m-auto" />
                                </div>
                                <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-purple/30 rounded-full animate-bounce delay-300"
                                     data-aos="fade-up-left" data-aos-delay="100">
                                    <Lightbulb size={24} className="text-blue absolute inset-0 m-auto" />
                                </div>
                            </div>
                            
                            {/* الأيقونات السفلية*/}
                            <div className="flex justify-center gap-6 mt-6" data-aos="fade-up" data-aos-delay="300">
                                {ICONS.map((item, index) => (
                                    <Icons 
                                        key={index}
                                        icon={item.icon}
                                        text={item.text}
                                        iconColor={item.iconColor}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
            </div>

                {/* قسم الاقتباس */}
                <div className="max-w-3xl 2xl:max-w-4xl mx-auto mt-20 2xl:mt-28 p-8 2xl:p-12 rounded-2xl bg-linear-to-br from-purple/10 via-dark-purple/20 to-blue/10 border border-purple/20 backdrop-blur-sm"
                     data-aos="zoom-in" data-aos-delay="200">
                    <div className="text-center">
                        <div className="inline-block text-5xl text-pink/30 mb-4">"</div>
                        <p className="text-xl 2xl:text-2xl italic text-light mb-6 leading-relaxed">
                            I dance with algorithms, converse with data, and paint with code—each project 
                            is a <span className="text-pink">symphony of logic and creativity</span> 
                            that brings digital dreams to life.
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-linear-to-br from-pink to-purple flex items-center justify-center shadow-lg"
                                 data-aos="zoom-in" data-aos-delay="200">
                                <User size={24} className="text-white" />
                            </div>
                            <div data-aos="zoom-in" data-aos-delay="200">
                                <div className="text-white font-bold 2xl:text-lg">Lubna Alhalabi</div>
                                <div className="text-sm 2xl:text-base text-light/60">
                                    <span className="text-purple">Digital Creator</span> • 
                                    <span className="text-blue"> AI Architect</span> • 
                                    <span className="text-pink"> Future Builder</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;