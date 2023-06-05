export default function Header({socials, meta}) {
    return (
        <>
            <div className="p-8 fixed top-0 left-0 w-full h-16 bg-transparent p-4 backdrop-filter backdrop-blur-sm z-50 flex flex-row items-center justify-between">
                <div className="mt-2 flex flex-row items-center justify-center gap-4">
                    <img src={meta.avatar} className="w-10 h-10" />
                    <h1 className="text-2xl font-bold text-white">{meta.bot_name}</h1>
                </div>
                <div className="mt-2 flex flex-row items-center justify-center gap-4">
                    <a className="text-white/70 hover:text-white hover:shadow-lg transition duration-200 ease-in-out cursor-pointer"
                        href='/#'>Home</a>
                    <a className="text-white/70 hover:text-white hover:shadow-lg transition duration-200 ease-in-out cursor-pointer"
                        href='/#features'>About</a>
                    <a className="text-white/70 hover:text-white hover:shadow-lg transition duration-200 ease-in-out cursor-pointer"
                        href='/#developers'>Developers</a>
                    <a className="text-white/70 hover:text-white hover:shadow-lg transition duration-200 ease-in-out cursor-pointer"
                        href={meta.bot_invite}>Invite</a>
                    <a className="text-white/70 hover:text-white hover:shadow-lg transition duration-200 ease-in-out cursor-pointer"
                        href={meta.guild_invite}>Support</a>
                    <a className="text-white/70 hover:text-white hover:shadow-lg transition duration-200 ease-in-out cursor-pointer"
                        href={meta.topgg}>Vote</a>

                    <div className="border-l-2 border-white/20 w-0.5 h-8" />

                    <a 
                    href={meta.dashboard}
                    className="hover:bg-purple-700/20 text-white font-bold py-1.5 px-6 rounded-md border border-purple-700 hover:border-purple-800 shadow shadow-lg hover:shadow-purple-600/30 backdrop-filter backdrop-blur-sm transition duration-200 ease-in-out">
                        Dashboard
                    </a>

                    <div className="border-l-2 border-white/20 w-0.5 h-8" />

                    <div className="flex flex-row items-center justify-center gap-4">
                        {socials.map((social, index) => (
                            <a href={social.link} target="_blank" key={index}>
                                <i className={`fab fa-${social.name.toLowerCase()} text-white/70 hover:text-white hover:shadow-lg transition duration-200 ease-in-out cursor-pointer`} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}