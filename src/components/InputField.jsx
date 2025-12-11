import React from 'react';

const InputField = ({ 
    type = "text",
    name,
    label,
    value,
    onChange,
    placeholder = "",
    required = false,
    icon: Icon,
    animation = null,
    delay = null
}) => {
    return (
        <div className="space-y-2" data-aos={animation} data-aos-delay={delay}>
            <label className="block text-light text-sm 2xl:text-base font-medium">
                {Icon ? (
                    <span className="flex items-center gap-2">
                        <Icon size={16} />
                        {label}
                    </span>
                ) : (
                    label
                )}
            </label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                className="w-full px-4 py-3 2xl:py-4 bg-dark-purple/60 border border-purple/30 rounded-lg text-light placeholder:text-light/40 focus:outline-none focus:border-purple focus:ring-2 focus:ring-purple/20 transition-all text-base 2xl:text-lg"
                placeholder={placeholder}
            />
        </div>
    )
}

export default InputField;