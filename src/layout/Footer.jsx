import SocialIcons from "../components/SocialIcons";

const Footer = () => {
    return (
        <footer className="bg-dark-purple text-white py-9 2xl:py-12  border-t border-purple/20">
            <div className="container mx-auto px-4 2xl:px-8 relative">
                <div className="flex justify-center mb-4 2xl:mb-6">
                    <SocialIcons />
                </div>
                <div className="text-center">
                    <p className="text-light font-primary text-sm 2xl:text-lg">
                        Copyright &copy; {new Date().getFullYear()} - Lubna Alhalabi
                    </p>
                    <p className="text-pink text-xs 2xl:text-sm mt-1 font-primary opacity-80">
                        All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;