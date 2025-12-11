import React, { useState } from 'react';
import Title from '../components/Title';
import InputField from '../components/InputField';
import { Mail, MapPin, Phone, Send, User, MessageSquare, MailCheck, Loader2 } from 'lucide-react';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            console.log('Form submitted:', formData);
            setSubmitStatus('success');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: ''
            });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const CONTACT_INFO = [
        {
            image: "/assets/Mail.png",
            title: "Email Address",
            value: "lubnaalhalabi5@gmail.com",
            link: "mailto:lubnaalhalabi5@gmail.com",
            animation: "fade-left",
            delay: "100"
        },
        {
            image: "/assets/Location.png",
            title: "Location",
            value: "Al-Sweida, Syria",
            link: "https://maps.google.com/?q=Al-Sweida,Syria",
            animation: "fade-left",
            delay: "200"
        },
        {
            image: "/assets/Phone.png",
            title: "Phone Number",
            value: "+963 953 284 792",
            link: "tel:+963953284792",
            animation: "fade-left",
            delay: "300"
        }
    ];

    const INPUTS = [
        {
            type: "text",
            name: "firstName",
            label: "First Name",
            placeholder: "Enter your first name",
            required: true,
            icon: User,
            animation: "fade-right",
            delay: "200",
            colSpan: "md:col-span-1"
        },
        {
            type: "text",
            name: "lastName",
            label: "Last Name",
            placeholder: "Enter your last name",
            required: true,
            icon: null,
            animation: "fade-right",
            delay: "300",
            colSpan: "md:col-span-1"
        },
        {
            type: "email",
            name: "email",
            label: "Email Address",
            placeholder: "your.email@example.com",
            required: true,
            icon: Mail,
            animation: "fade-right",
            delay: "400",
            colSpan: "md:col-span-1"
        },
        {
            type: "tel",
            name: "phone",
            label: "Phone Number",
            placeholder: "+999 999 999",
            required: false,
            icon: Phone,
            animation: "fade-right",
            delay: "500",
            colSpan: "md:col-span-1"
        }
    ];

    return (
        <section id="contact" className="py-12 md:py-20 lg:py-24 relative overflow-hidden font-primary">
            <div className="absolute top-10 left-5 md:left-10 w-48 h-48 md:w-72 md:h-72 bg-purple/5 rounded-full blur-2xl md:blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-5 md:right-10 w-48 h-48 md:w-96 md:h-96 bg-blue/5 rounded-full blur-2xl md:blur-3xl"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <Title 
                    title="Contact" 
                    highlightTitle="Me" 
                    subTitle="Let's connect and discuss how we can work together"
                />

                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12">
                        {/* نموذج التواصل */}
                        <div className="w-full lg:w-1/2 bg-dark-purple/40 backdrop-blur-sm border border-purple/20 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8"
                             data-aos="fade-right" data-aos-delay="100">
                            <div className="mb-6 md:mb-8">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                                    Send Me a Message
                                </h3>
                                <p className="text-light/70 text-sm sm:text-base md:text-lg">
                                    Fill out the form below and I'll get back to you as soon as possible.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                    {INPUTS.map((input, index) => (
                                        <div key={index} className={input.colSpan}>
                                            <InputField
                                                type={input.type}
                                                name={input.name}
                                                label={input.label}
                                                value={formData[input.name]}
                                                onChange={handleChange}
                                                placeholder={input.placeholder}
                                                required={input.required}
                                                icon={input.icon}
                                                animation={input.animation}
                                                delay={input.delay}
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-2" data-aos="fade-right" data-aos-delay="600">
                                    <label className="block text-light text-sm md:text-base font-medium">
                                        <span className="flex items-center gap-2">
                                            <MessageSquare size={14} className="sm:size-4" />
                                            Message
                                        </span>
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="4"
                                        className="w-full px-4 py-3 bg-dark-purple/60 border border-purple/30 rounded-lg text-light placeholder:text-light/40 focus:outline-none focus:border-purple focus:ring-2 focus:ring-purple/20 transition-all text-sm sm:text-base resize-none"
                                        placeholder="Tell me about your project or inquiry..."
                                    />
                                </div>

                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4">
                                    <div className="text-sm md:text-base">
                                        {submitStatus === 'success' && (
                                            <div className="flex items-center gap-2 text-green-400" data-aos="fade-up">
                                                <MailCheck size={16} />
                                                <span>Message sent successfully!</span>
                                            </div>
                                        )}
                                        {submitStatus === 'error' && (
                                            <div className="flex items-center gap-2 text-red-400" data-aos="fade-up">
                                                <span>Failed to send message. Please try again.</span>
                                            </div>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full sm:w-auto group relative bg-linear-to-r from-purple to-blue hover:from-purple2 hover:to-blue2 text-white font-semibold px-6 sm:px-8 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 sm:gap-3"
                                        data-aos="zoom-in"
                                        data-aos-delay="700"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 size={16} className="sm:size-5 animate-spin" />
                                                <span>Sending...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>Send Message</span>
                                                <Send size={16} className="sm:size-5 group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* معلومات التواصل */}
                        <div className="w-full lg:w-1/2">
                            <div className="bg-dark-purple/40 backdrop-blur-sm border border-purple/20 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8"
                                 data-aos="fade-left" data-aos-delay="100">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
                                    Get In Touch Directly
                                </h3>
                                <p className="text-light/70 text-sm sm:text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                                    Prefer to contact me directly? Here are all the ways you can reach out. 
                                    I typically respond within 24 hours.
                                </p>

                                <div className="space-y-4 sm:space-y-6">
                                    {CONTACT_INFO.map((item, index) => (
                                        <a
                                            key={index}
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group block"
                                            data-aos={item.animation}
                                            data-aos-delay={item.delay}
                                        >
                                            <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-dark-purple/60 border border-purple/20 rounded-lg md:rounded-xl hover:border-purple/40 hover:bg-purple/10 transition-all duration-300">
                                                <div className="relative shrink-0">
                                                    <img 
                                                        src={item.image} 
                                                        alt={item.title}
                                                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                                                    />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="text-xs sm:text-sm md:text-base text-light/60 font-medium truncate">
                                                        {item.title}
                                                    </div>
                                                    <div className="text-sm sm:text-base md:text-lg text-white font-semibold group-hover:text-pink transition-colors truncate">
                                                        {item.value}
                                                    </div>
                                                </div>
                                                <div className="text-purple opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-2">
                                                    <Send size={14} className="sm:size-4 md:size-5" />
                                                </div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;