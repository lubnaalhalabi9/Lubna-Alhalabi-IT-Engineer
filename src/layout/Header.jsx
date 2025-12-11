import React, { useState, useEffect } from 'react';
import { Mail, User, Code, Briefcase, Sparkles } from 'lucide-react';
import logo from '../assets/light.svg';
import Buttons from '../components/Buttons'

const MAIN_LINKS = [
    { 
        id: 1, 
        text: "About", 
        link: "#about",
        icon: User
    },
    { 
        id: 2, 
        text: "Skills", 
        link: "#skills",
        icon: Sparkles
    },
    { 
        id: 3, 
        text: "Projects", 
        link: "#projects",
        icon: Code
    }
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("#about");

    useEffect(() => {
        const handleScroll = () => {
            const sections = MAIN_LINKS.map(link => link.link.replace('#', ''));
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            
            if (currentSection) {
                setActiveLink(`#${currentSection}`);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const NavLink = ({ link, text, Icon }) => {
        const isActive = activeLink === link;
        
        return (
            <a 
                href={link}
                className="relative group"
                onClick={() => {
                    setActiveLink(link);
                    setIsMenuOpen(false);
                }}
            >
                <div className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActive 
                        ? 'text-white' 
                        : 'text-light/80 hover:text-white'
                }`}>
                    {Icon && (
                        <Icon 
                            size={18} 
                            className={`transition-transform duration-300 ${
                                isActive ? 'scale-110 text-pink' : 'group-hover:scale-110 group-hover:text-pink'
                            }`}
                        />
                    )}
                    <span className="font-medium text-sm">{text}</span>
                </div>
                
                {isActive && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-linear-to-r from-pink to-purple rounded-full"></div>
                )}
            </a>
        );
    };

    return (
        <>
            <header className="md:py-2 fixed top-0 left-0 right-0 z-50 w-full bg-dark-purple/20 backdrop-blur-md">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center h-full">
                        
                        {/* logo */}
                        <div className="flex items-center justify-center">
                            <a 
                                href="#home" 
                                className="group flex items-center gap-3"
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            >
                                <div className="relative">
                                    <img 
                                        src={logo} 
                                        alt="Lubna Alhalabi Logo" 
                                        className="w-20 h-20 object-cover"
                                    />
                                </div>
                            </a>
                        </div>

                        {/* القائمة الرئيسية */}
                        <nav className="hidden lg:flex items-center space-x-2">
                            {MAIN_LINKS.map((item) => (
                                <NavLink 
                                    key={item.id} 
                                    link={item.link} 
                                    text={item.text}
                                    Icon={item.icon}
                                />
                            ))}
                            
                            {/* زر Get In Touch */}
                            <Buttons 
                                link="#contact"
                                title="Get In Touch"
                                variant="primary"
                                animation="zoom-in"
                                delay="100"
                            />
                        </nav>

                        {/* زر القائمة المتنقلة */}
                        <button 
                            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-white/10 transition-all duration-300"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <div className="relative w-6 h-6">
                                <span className={`absolute top-1 left-0 w-6 h-0.5 bg-light rounded-full transition-all duration-300 ${
                                    isMenuOpen ? 'rotate-45 translate-y-2' : ''
                                }`}></span>
                                <span className={`absolute top-1/2 left-0 w-6 h-0.5 bg-light rounded-full transition-all duration-300 -translate-y-1/2 ${
                                    isMenuOpen ? 'opacity-0 scale-0' : ''
                                }`}></span>
                                <span className={`absolute bottom-1 left-0 w-6 h-0.5 bg-light rounded-full transition-all duration-300 ${
                                    isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                                }`}></span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* القائمة المتنقلة */}
                <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
                    isMenuOpen 
                        ? 'max-h-[400px] opacity-100' 
                        : 'max-h-0 opacity-0'
                }`}>
                    <div className="container mx-auto px-4 py-4">
                        <div className="bg-dark-purple/80 backdrop-blur-lg rounded-xl border border-purple/30 p-4 shadow-xl">
                            <div className="space-y-1">
                                {MAIN_LINKS.map((item) => (
                                    <a
                                        key={item.id}
                                        href={item.link}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                                            activeLink === item.link
                                                ? 'bg-linear-to-r from-purple/20 to-pink/20 text-white'
                                                : 'text-light/90 hover:bg-white/10 hover:text-white'
                                        }`}
                                        onClick={() => {
                                            setActiveLink(item.link);
                                            setIsMenuOpen(false);
                                        }}
                                    >
                                        <item.icon 
                                            size={18} 
                                            className={activeLink === item.link ? 'text-pink' : ''}
                                        />
                                        <span className="font-medium">{item.text}</span>
                                        {activeLink === item.link && (
                                            <div className="ml-auto w-2 h-2 bg-pink rounded-full"></div>
                                        )}
                                    </a>
                                ))}
                              {/* زر Contact Me  */}
                                <a 
                                    href="#contact" 
                                    className="mt-4 flex items-center justify-center gap-2 bg-linear-to-r from-purple to-blue text-white font-medium py-1 px-6 rounded-lg w-full transition-all duration-300 hover:shadow-md"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <Mail size={16} />
                                    <span>Contact Me</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;