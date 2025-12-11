const Buttons = ({ link, title, variant, delay, animation}) => {
    return (
        <a 
            href={link}
            data-aos={animation}
            data-aos-delay={delay}
            className={`
                inline-flex w-fit items-center gap-2 px-6 py-2 rounded-lg font-semibold 
                text-lg 2xl:text-xl transition-all duration-300 
                ${variant === "primary" 
                    ? "bg-linear-to-r from-purple to-blue text-white hover:scale-102 hover:from-purple2 hover:to-blue2 hover:shadow-xl" 
                    : "border border-purple text-purple hover:bg-purple/10"
                }`}>
            {title}
        </a>
    )
}

export default Buttons