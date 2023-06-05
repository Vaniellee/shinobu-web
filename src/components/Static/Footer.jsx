export default function Footer({socials, meta}) {
    return (
        <>
            <footer className="mt-44 flex flex-col items-center justify-center w-full h-16 border-t border-white/20">

                <div className="flex items-center justify-center space-x-4 mt-5">
                    {socials.map((social, index) => (
                        <a href={social.link} target="_blank" key={index}>
                            <i className={`fab fa-${social.name.toLowerCase()} text-white/70 hover:text-white hover:shadow-lg transition duration-200 ease-in-out cursor-pointer`} />
                        </a>
                    ))}
                </div>

                <div className="flex items-center justify-between w-full max-w-7xl">
                    <p className="text-center ml-0 text-white/70 lg:text-left lg:ml-6">&copy; 2023 - Shinobu - All Rights Reserved.</p>
                    <p className="text-center mr-0 text-white/70 lg:text-right lg:mr-6">Website designed with <i className="fas fa-heart text-red-500"></i> by the Shinobu Team.</p>
                </div>
            </footer>
        </>
    )
}