const Title = ({title, highlightTitle, subTitle}) => {
    return (
    <div className="text-center mb-16 2xl:mb-24" data-aos="fade-down">
        <h2 className="text-4xl md:text-5xl 2xl:text-6xl font-bold text-white mb-4">
            {title} <span className="text-pink">{highlightTitle}</span>
        </h2>
        <p className="text-xl 2xl:text-2xl text-light/70 max-w-2xl 2xl:max-w-4xl mx-auto mb-6">
            {subTitle}
        </p>
        <div className="w-24 2xl:w-32 h-1 2xl:h-1.5 bg-linear-to-r from-pink to-purple mx-auto rounded-full"></div>
    </div>
    )
}

export default Title
