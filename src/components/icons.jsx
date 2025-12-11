const Icons = ({ icon: Icon, text, iconColor }) => {
    return (
        <div className="flex items-center gap-2 text-light/70">
            <Icon size={18} className={`text-${iconColor}`} />
            <span className="text-sm 2xl:text-base">{text}</span>
        </div>
    )
}

export default Icons