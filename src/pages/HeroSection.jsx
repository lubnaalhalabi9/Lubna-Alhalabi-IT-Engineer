import React, { useState, useEffect } from 'react';
import Buttons from '../components/Buttons';

const BUTTONS = [
    {
        link: "/MyResume.pdf",
        title: "View My Resume",
        variant: "primary"
    },
    {
        link: "#projects",
        title: "Explore My Work",
        variant: "secondary"
    }
];

const HeroSection = () => {
    const titles = [
        "Computer Engineer",
        "AI Specialist",
        "Data Analyst",
        "Full Stack Developer", 
        "Problem Solver"
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }, 2000);
        
        return () => clearInterval(interval);
    }, [titles.length]);
    
    return (
        <section className="py-16 min-h-[80vh] md:min-h-screen flex items-center relative overflow-hidden font-primary">
            <div className="absolute inset-0 bg-linear-to-br from-dark-purple via-dark-blue to-dark-purple"></div>
            
            
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-linear-to-r from-purple/20 to-pink/20 rounded-full animate-pulse blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-linear-to-r from-blue/20 to-purple/20 rounded-full animate-ping blur-3xl"></div>
            
            <div className="container mx-auto px-4 2xl:px-8 relative z-10">
                <div className="text-center 2xl:max-w-7xl 2xl:mx-auto">
                   
                    <div className="mb-8 2xl:mb-16">
                        <p className="text-pink font-mono text-lg 2xl:text-2xl mb-2">Hello, I'm</p>
                        <h1 className="text-4xl md:text-8xl 2xl:text-9xl font-bold text-white mb-4 animate-fadeInUp">
                            Lubna Alhalabi
                        </h1>
                    </div>
                    
                    <div className="h-24 2xl:h-32 mb-8 2xl:mb-16 flex items-center justify-center">
                        <div className="relative h-24 2xl:h-32 w-full">
                            {titles.map((title, index) => (
                                <h2 
                                    key={index}
                                    className={`font-mono text-3xl md:text-4xl 2xl:text-5xl text-pink absolute w-full text-center transition-all duration-300 ease-in-out ${
                                        index === currentIndex 
                                            ? 'opacity-100 translate-y-0' 
                                            : 'opacity-0 translate-y-7'
                                    }`}
                                >
                                    {title}
                                </h2>
                            ))}
                        </div>
                    </div>
                    
                   
                    <p className="font-primary text-xl md:text-2xl 2xl:text-3xl text-light max-w-3xl 2xl:max-w-5xl mx-auto mb-12 2xl:mb-20 leading-relaxed 2xl:leading-loose font-semibold">
                        <span className="text-purple">Code</span> that speaks,{" "}
                        <span className="text-blue">data</span> that leads.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 2xl:gap-8 justify-center items-center">
                        {BUTTONS.map((button, index) => (
                            <Buttons 
                                key={index}
                                link={button.link}
                                title={button.title}
                                variant={button.variant}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;