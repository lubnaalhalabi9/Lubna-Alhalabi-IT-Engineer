import React from 'react';
import Title from '../components/Title';
import {Smartphone, Flower, Leaf, ShoppingBag, BarChart3, Laptop, ExternalLink, Code, Database, Globe, Brain, LineChart, Server, Cpu, Zap, Lock } from 'lucide-react';

const PROJECTS_DATA = [
    {
        id: 1,
        title: "FLORABEELE Flower Shop",
        description: "An interactive e-commerce flower shop website with dynamic page navigation, product filtering by color themes, and responsive design.",
        link: "https://flowers-shop-var4.onrender.com/",
        tech: [ "HTML", "CSS", "JavaScript", "Responsive Design", "SPA Navigation"],
        icon: <Flower size={20} />,
    },
    {
        id: 2,
        title: "Laptop Price Analyzer",
        description: "Advanced data analysis project for laptop price prediction and market insights using machine learning algorithms.",
        link: "https://nbviewer.org/github/lubnaalhalabi9/LapPrice/blob/main/LapPrice.ipynb",
        tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Jupyter"],
        icon: <Laptop size={20} />,
    },
    {
        id: 3,
        title: "Zen Digital Agency",
        description: "A modern, responsive single-page application for a digital agency with dark/light mode, portfolio management, and interactive testimonials.",
        link: "https://zen-digital-8zs9.onrender.com",
        tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Responsive Design"],
        icon: <Globe size={20} />,
    },
    {
        id: 4,
        title: "StyleShop E-commerce",
        description: "A responsive fashion e-commerce website with product catalog, shopping cart functionality, and modern UI design.",
        link: "https://style-shop-vaur.onrender.com",
        tech: ["HTML", "CSS", "Responsive Design", "Flexbox/Grid"],
        icon: <ShoppingBag size={20} />,
    },
    {
        id: 5,
        title: "EcoBuild Construction",
        description: "A sustainable construction company website with responsive design, interactive testimonials slider, and mobile navigation.",
        link: "https://eco-build.onrender.com",
        tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Responsive Design"],
        icon: <Leaf size={20} />,
    },
    {
        id: 6,
        title: "Portfolio Website",
        description: "Personal portfolio website showcasing projects, skills, and contact information.",
        link: "https://github.com/lubna/portfolio",
        tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
        icon: <Code size={20} />,
    },
    {
        id: 7,
        title: "Mobile Store ",
        description: "A comprehensive mobile phone e-commerce platform with user authentication, mobile browsing, buying/selling functionality, rating system, and data analysis with price prediction using machine learning.",
        link: "https://mobile-store-app.onrender.com",
        tech: ["Python", "Streamlit", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Data Analysis", "Machine Learning"],
        icon: <Smartphone size={20} />
    }
];

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-20 2xl:py-32 relative overflow-hidden font-primary">
            {/* خلفيات متحركة */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-purple/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 2xl:px-8 relative z-10">
                {/* العنوان */}
                <Title title="My" highlightTitle="Projects" subTitle="A showcase of my technical projects and development work"/>

                {/* شبكة المشاريع */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 2xl:gap-8">
                    {PROJECTS_DATA.map((project, index) => (
                        <div
                            key={project.id}
                            className="max-h-96 group relative bg-dark-purple/40 backdrop-blur-sm border border-purple/20 rounded-2xl p-4 md:p-6 hover:border-purple/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple/10 overflow-hidden flex flex-col"
                            data-aos="zoom-in"
                            data-aos-delay={(index % 3) * 100}
                        >
                            {/* الرأس */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-purple/20 text-purple shrink-0">
                                        {project.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center flex-wrap gap-2">
                                            <h3 className="font-bold text-white md:text-lg 2xl:text-xl group-hover:text-pink transition-colors truncate">
                                                {project.title}
                                            </h3>
                                            <span className="text-xs 2xl:text-sm text-light/50 shrink-0">
                                                #{project.id.toString().padStart(2, '0')}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <ExternalLink size={18} className="text-light/40 group-hover:text-pink transition-colors shrink-0 ml-2" />
                            </div>
                        
                            {/* الوصف */}
                            <div className="grow mb-6">
                                <p className="text-light/70 text-sm 2xl:text-base leading-relaxed line-clamp-3">
                                    {project.description}
                                </p>
                            </div>

                            {/* التقنيات المستخدمة */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="px-3 py-1 text-xs 2xl:text-sm rounded-full bg-purple/10 text-purple border border-purple/20"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* الرابط */}
                            <div className="mt-auto">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/link flex items-center justify-between p-3 rounded-lg bg-linear-to-r from-purple/10 to-blue/10 border border-purple/20 hover:from-purple/20 hover:to-blue/20 transition-all w-full"
                                >
                                    <div className="flex items-center gap-2">
                                        <Code size={16} className="text-purple" />
                                        <span className="text-sm 2xl:text-base text-light font-medium">
                                            View Project
                                        </span>
                                    </div>
                                    <ExternalLink size={16} className="text-light/40 group-hover/link:text-pink transition-colors" />
                                </a>
                            </div>

                            {/* تأثير التحويم */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-purple to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                        </div>
                    ))}
                </div>

                
                <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="300">
                    <p className="text-light/60 text-lg 2xl:text-xl max-w-3xl mx-auto">
                        Want to see more? Check out my{" "}
                        <a 
                            href="https://github.com/lubnaalhalabi9" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-pink hover:underline font-medium"
                        >
                            GitHub profile
                        </a>{" "}
                        for additional projects and contributions.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;