import React from 'react';
import Title from '../components/Title';
import {Server, Settings, Code, Database, Cpu, GitBranch, Globe, Terminal, Cloud, Brain, Shield, Zap } from 'lucide-react';

const SKILLS_DATA = [
    {
        id: 1,
        title: "HTML/CSS",
        description: "Semantic markup, responsive design, modern CSS techniques including Flexbox, Grid, and animations.",
        image:"/assets/HTML-CSS.png",
        category: "Frontend",
        color: "from-red-500 to-red-700"
    },
    {
        id: 2,
        title: "JavaScript",
        description: "ES6+, DOM manipulation, async programming, APIs, and modern JavaScript frameworks.",
        image: "/assets/JS.png",
        category: "Programming",
        color: "from-yellow-500 to-orange-500"
    },
    {
        id: 3,
        title: "React.js",
        description: "Component-based architecture, hooks, state management, React Router, and performance optimization.",
        image: "/assets/React.png",
        category: "Frontend",
        color: "from-cyan-500 to-blue-500"
    },
    {
        id: 4,
        title: "Tailwind CSS",
        description: "Utility-first CSS framework for rapid UI development and responsive design.",
        image: "/assets/TailwindCSS.png",
        category: "Frontend",
        color: "from-teal-500 to-cyan-500"
    },
    {
        id: 5,
        title: "Java",
        description: "Object-oriented programming, data structures, algorithms, and application development.",
        image: "/assets/Java.png",
        category: "Backend",
        color: "from-red-200 to-pink-500"
    },
    {
        id: 6,
        title: "C++",
        description: "System programming, memory management, competitive programming, and algorithm implementation.",
        image: "/assets/C++.png",
        category: "Programming",
        color: "from-blue-500 to-purple-500"
    },
    {
        id: 7,
        title: "Python",
        description: "Data analysis, scripting, automation, machine learning, and backend development with Django/Flask.",
        image: "/assets/Python.png",
        category: "Programming",
        color: "from-green-500 to-emerald-500"
    },
    {
        id: 8,
        title: "SQL & Databases",
        description: "Database design, query optimization, relational databases, and data modeling.",
        image: "/assets/SQL.png",
        category: "Backend",
        color: "from-purple-500 to-indigo-500"
    },
    {
        id: 9,
        title: "Data Analysis",
        description: "Data visualization, statistical analysis, pandas, numpy, and insights extraction.",
        image: "/assets/DataAnalysis2.png",
        category: "Data Science",
        color: "from-yellow-500 to-yellow-800"
    },
    {
        id: 10,
        title: "Git & GitHub",
        description: "Version control, collaboration, branching strategies, and CI/CD workflows.",
        image: "/assets/Git.png",
        category: "Tools",
        color: "from-gray-200 to-gray-900"
    }
];

const CATEGORY_ICONS = {
    "Frontend": <Globe />,
    "Backend": <Server />,
    "Programming": <Code />,
    "Data Science": <Brain />,
    "Tools": <Settings />
};

const SkillsSection = () => {
    const categories = [...new Set(SKILLS_DATA.map(skill => skill.category))];

    return (
        <section id="skills" className="py-20 2xl:py-32 relative overflow-hidden font-primary">
            <div className="absolute top-10 left-10 w-72 h-72 bg-purple/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 2xl:px-8 relative z-10">
                {/* العنوان*/}
                <Title title="My" highlightTitle="Skills" subTitle="Technologies and tools I work with to bring ideas to life"/>

                {/* فئات المهارات */}
                <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up" data-aos-delay="200">
                    {categories.map((category, index) => (
                        <button key={index} className="px-4 2xl:px-6 py-2 2xl:py-3 rounded-full bg-dark-purple/50 border border-purple/20 text-light hover:bg-purple/20 transition-all text-sm 2xl:text-base font-medium flex items-center gap-2">
                            {CATEGORY_ICONS[category] || <Code size={5} />}
                            {category}
                        </button>
                    ))}
                </div>

                {/* المهارات */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 2xl:gap-8">
                    {SKILLS_DATA.map((skill, index) => (
                        <div
                            key={skill.id}
                            className="group relative bg-dark-purple/40 backdrop-blur-sm border border-purple/20 rounded-2xl px-6 py-3 2xl:px-8 2xl:py-6 hover:border-purple/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple/10 overflow-hidden flex flex-col h-full min-h-[320px] 2xl:min-h-[340px]"
                            data-aos="zoom-in"
                            data-aos-delay={(index % 5) * 100} 
                        >
                            <div className={`absolute inset-0 bg-linear-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                            
                            <div className="mb-2 flex-shrink-0" data-aos="zoom-in" data-aos-delay={(index % 5) * 100 + 100}>
                                <div className="w-full h-20 2xl:h-24 flex items-center justify-center">
                                    {skill.image ? (
                                        <img 
                                            src={skill.image} 
                                            alt={skill.title}
                                            className="w-auto h-full max-w-full object-contain"
                                        />
                                    ) :<></>}
                                </div>
                            </div>

                            <h3 className="font-mono text-center text-xl 2xl:text-2xl font-bold text-white mb-3 group-hover:text-pink transition-colors flex-shrink-0"
                                data-aos="fade-up" data-aos-delay={(index % 5) * 100 + 200}>
                                {skill.title}
                            </h3>

                            <p className="text-light/70 text-center text-sm 2xl:text-base leading-relaxed mb-4 flex-grow line-clamp-3 2xl:line-clamp-4"
                               data-aos="fade-up" data-aos-delay={(index % 5) * 100 + 300}>
                                {skill.description}
                            </p>

                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-purple/20 flex-shrink-0"
                                 data-aos="fade-up" data-aos-delay={(index % 5) * 100 + 200}>
                                <span className="text-xs 2xl:text-sm text-purple font-medium">
                                    {skill.category}
                                </span>
                                <div className="text-xs 2xl:text-sm text-light/50">
                                    ID: {skill.id.toString().padStart(2, '0')}
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-purple to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;