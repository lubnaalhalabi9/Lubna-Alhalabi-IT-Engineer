import React from 'react';
import Title from '../components/Title';
import Statistics from '../components/Statistics';
import Icons from '../components/icons';
import Buttons from '../components/Buttons';
import { Laptop, User, Code, Brain, Sparkles, BookOpen, GraduationCap, Lightbulb } from 'lucide-react';

const ICONS = [
    {
        icon: Code,
        text: "Development",
        iconColor: "purple"
    },
    {
        icon: Brain,
        text: "AI",
        iconColor: "blue"
    },
    {
        icon: Laptop,
        text: "Engineering",
        iconColor: "pink"
    }
];

const STATISTICS = [
    {
        number: "15+",
        numberColor: "pink",
        description: "Academic Projects",
        dataAosDelay: "400"
    },
    {
        number: "3+",
        numberColor: "blue",
        description: "Years of Study",
        dataAosDelay: "500"
    }
];

const ABOUT_BUTTONS = [
    {
        link: "#skills",
        title: "Explore my technical skills",
        variant: "primary",
        animation: "fade-up",
        delay: "700"
    },
    {
        link: "#projects",
        title: "See my projects",
        variant: "secondary",
        animation: "fade-up",
        delay: "700"
    }
];

const AboutSection = () => {
    return (
        <section id="about" className="py-12 md:py-20 relative overflow-hidden font-primary">
            <div className="absolute top-0 left-0 w-48 md:w-96 h-48 md:h-96 bg-purple/10 rounded-full blur-2xl md:blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-blue/10 rounded-full blur-2xl md:blur-3xl"></div>
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* العنوان */}
                <Title title="About" highlightTitle="Me" subTitle="Get to know more about my journey and expertise" />

                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-center">
                        {/* الصورة */}
                        <div className="relative w-full lg:w-1/2 order-1 lg:order-2" data-aos="zoom-in" data-aos-delay="100">
                            <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple to-blue rounded-full blur-lg md:blur-xl opacity-50 animate-pulse"></div>
                                
                                <div className="relative w-full h-full flex items-center justify-center">
                                    <div className="relative bg-dark-purple rounded-full p-4 sm:p-6 md:p-8 shadow-xl md:shadow-2xl w-[85%] h-[85%]">
                                        <div className="w-full h-full bg-gradient-to-br from-purple2 to-blue2 rounded-full flex items-center justify-center overflow-hidden p-0.5 sm:p-1">
                                            <img 
                                                src="/assets/aboutMe.jpg"
                                                alt="Lubna Alhalabi - Computer Engineer & AI Specialist"
                                                className="w-full h-full object-cover rounded-full"
                                                data-aos="zoom-in" 
                                                data-aos-delay="100"
                                            />
                                        </div>
                                    </div>
                                </div>
                                
                                {/* الأيقونات الصغيرة */}
                                <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-pink/30 rounded-full animate-bounce"
                                     data-aos="fade-down-right" data-aos-delay="100">
                                    <BookOpen size={12} className="sm:size-4 md:size-5 text-pink absolute inset-0 m-auto" />
                                </div>
                                <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-purple/30 rounded-full animate-bounce delay-300"
                                     data-aos="fade-up-left" data-aos-delay="100">
                                    <Lightbulb size={14} className="sm:size-5 md:size-6 text-blue absolute inset-0 m-auto" />
                                </div>
                            </div>
                            
                            {/* الأيقونات السفلية */}
                            <div className="flex justify-center gap-4 sm:gap-6 mt-4 sm:mt-6" data-aos="fade-up" data-aos-delay="300">
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

                        {/* النص الشخصي */}
                        <div className="w-full lg:w-1/2 text-left order-2 lg:order-1" data-aos="fade-right" data-aos-delay="100">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                                Computer Engineer & <span className="text-pink">AI Specialist</span>
                            </h3>
                            
                            <div className="space-y-3 sm:space-y-4 md:space-y-6 text-sm sm:text-base md:text-lg text-light/90">
                                <p data-aos="fade-right" data-aos-delay="200">
                                    As a passionate <span className="text-purple font-semibold font-mono">Computer Engineer</span> 
                                    and <span className="text-blue font-semibold font-mono">AI Specialist</span>, I bridge the gap 
                                    between innovative technology and real-world solutions.
                                </p>
                                
                                <p className="font-medium" data-aos="fade-right" data-aos-delay="300">
                                    My journey is a <span className="text-pink">constellation of curiosity</span>, 
                                    where every line of code is a star in the galaxy of{' '}
                                    <span className="text-blue">digital possibilities</span> I'm determined to explore.
                                </p>
                                
                                <p data-aos="fade-right" data-aos-delay="400">
                                    Specializing in both <span className="font-mono text-purple">full-stack development</span> and{' '}
                                    <span className="font-mono text-blue">data analysis</span>, I approach every project with a 
                                    problem-solving mindset, ensuring elegant solutions that are both efficient and scalable.
                                </p>
                            </div>

                            {/* الإحصائيات */}
                            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8">
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
                            <div className="mt-6 sm:mt-8 md:mt-12 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 md:gap-6">
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
                    </div>

                    {/* قسم الاقتباس */}
                    <div className="max-w-3xl mx-auto mt-12 md:mt-16 lg:mt-20 p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl md:rounded-2xl bg-gradient-to-br from-purple/10 via-dark-purple/20 to-blue/10 border border-purple/20 backdrop-blur-sm"
                         data-aos="zoom-in" data-aos-delay="200">
                        <div className="text-center">
                            <div className="inline-block text-3xl sm:text-4xl md:text-5xl text-pink/30 mb-2 sm:mb-4">"</div>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl italic text-light mb-4 sm:mb-6 leading-relaxed sm:leading-relaxed">
                                I dance with algorithms, converse with data, and paint with code—each project 
                                is a <span className="text-pink">symphony of logic and creativity</span> 
                                that brings digital dreams to life.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-pink to-purple flex items-center justify-center shadow-lg"
                                     data-aos="zoom-in" data-aos-delay="200">
                                    <User size={12} className="sm:size-4 md:size-5 text-white" />
                                </div>
                                <div data-aos="zoom-in" data-aos-delay="200" className="text-center sm:text-left">
                                    <div className="text-white font-bold text-sm sm:text-base md:text-lg">Lubna Alhalabi</div>
                                    <div className="text-xs sm:text-sm text-light/60">
                                        <span className="text-purple">Digital Creator</span> •{' '}
                                        <span className="text-blue">AI Architect</span> •{' '}
                                        <span className="text-pink">Future Builder</span>
                                    </div>
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