export default function Developers({bot_name}) {

    const developers = [
        { name: 'Mârius', tag: '2998', avatar: 'https://cdn.discordapp.com/avatars/1030495490963411045/18e85dc187b8a7fac931316bb0c12782.webp?size=64', roles: ['Owner', 'Developer'] },
        { name: 'Nexwead', avatar: 'https://cdn.discordapp.com/avatars/944253466249945108/a9577d28e13de9837c6ffb2f6d4148a2.png?size=64', roles: ['Owner', 'Developer'] },
        { name: 'JanjyTapYT', tag: '0001', avatar: 'https://cdn.discordapp.com/avatars/679407120743137300/fdf2db0eaf90ad286d89c66313a09c90', roles: ['Website Designer'] }
    ]

    return (
        <>
           <div className="z-[-1] absolute blur-3xl top-[234%] right-[64%] w-60 h-60 rounded-full bg-gradient-to-br from-purple-800" />
           <div className="z-[-1] absolute blur-3xl top-[260%] left-[70%] w-80 h-80 rounded-full bg-gradient-to-br from-purple-800/80" />

           <div className="flex flex-col items-center justify-center py-2 mt-32">
                <h1 className="text-5xl text font-extrabold text-white-600">
                    Developers
                </h1>
                <div className="mt-3 bg-gradient-to-r from-transparent via-purple-500 to-transparent w-3/4 h-0.5" />
            </div>

            <div className="flex flex-col items-center justify-center py-2">
                <div className="flex flex-col items-center justify-center w-full text-center">
                    <p className="mt-2.5 font-semibold text-2xl text-gray-500">
                        Below are listed all developers who have contributed and are working on {bot_name}.
                    </p>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center py-2">
                <div className="flex flex-col items-center justify-center w-full text-center">
                    <div className="grid grid-cols-4 gap-4 w-full items-start">
                        {developers.map((developer, index) => (
                            <div key={index} className="flex flex-col select-none items-center justify-center w-full text-center bg-purple-500/10 rounded-xl p-5 border border-purple-500/20 hover:border-purple-500/40 transition duration-200 ease-in-out">
                                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-900/60">
                                    <img src={developer.avatar} className="w-20 h-20 rounded-full" />
                                </div>
                                <h1 className="flex gap-1 mt-2 text-2xl font-semibold text-white">
                                    {developer.name}
                                    {
                                        developer.tag ? (
                                            <span className="text-gray-500">#{developer.tag}</span>
                                        ) : null
                                    }
                                </h1>
                                <h1 className="mt-1 text-xl font-semibold text-gray-500">
                                    <div className="flex flex-row items-center justify-center gap-1">
                                    {developer.roles.map((role, index) => (
                                        <span key={index} className="text-purple-500">{role}</span>
                                    )).reduce((prev, curr) => [prev, ' | ', curr])}
                                    </div>
                                </h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}