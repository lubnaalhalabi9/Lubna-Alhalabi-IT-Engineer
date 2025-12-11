const Statistics = ({number, description, numberColor, dataAosDelay}) => {
    return (
            <div className="bg-dark-purple/50 p-4 2xl:p-6 rounded-xl border border-purple/20" data-aos="fade-up" data-aos-delay={dataAosDelay}>
                <div className={`text-2xl md:text-3xl 2xl:text-4xl font-bold text-${numberColor} font-mono`}>{number}</div>
                <div className="text-sm 2xl:text-base text-light/80">{description}</div>
            </div>
    )
}

export default Statistics
