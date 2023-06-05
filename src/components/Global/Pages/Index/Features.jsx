export default function Features({bot_name}) {

    const features = [
        { name: 'Music', description: 'a legendary music bot that you can listen to whatever you want!', icon: 'fas fa-music' },
        { name: 'Now Playing', description: 'see what song is currently playing.', icon: 'fas fa-headphones' },
        { name: 'Seek', description: 'If you want to search for music.', icon: 'fas fa-search' },
        { name: 'Play', description: 'To satisfy your need for listening to music.', icon: 'fas fa-play' }
    ]

    return (
        <>
            <div className="z-[-1] absolute blur-3xl top-[144%] left-[64%] w-40 h-40 rounded-full bg-gradient-to-br from-purple-800" />
            <div className="z-[-1] absolute blur-3xl top-[174%] left-[84%] w-40 h-40 rounded-full bg-gradient-to-br from-purple-800/80" />
            <div className="z-[-1] absolute blur-3xl top-[154%] right-[54%] w-40 h-40 rounded-full bg-gradient-to-br from-purple-800/70" />
            <div className="z-[-1] absolute blur-3xl top-[144%] right-[84%] w-40 h-40 rounded-full bg-gradient-to-br from-purple-800" />
            <div className="z-[-1] absolute blur-3xl top-[184%] right-[80%] w-40 h-40 rounded-full bg-gradient-to-br from-purple-800/90" />

            <div className="flex flex-col items-center justify-center py-2">
                <h1 className="text-5xl text font-extrabold text-white-600">
                    Features
                </h1>
                <div className="mt-3 bg-gradient-to-r from-transparent via-purple-500 to-transparent w-3/4 h-0.5" />
            </div>

            <div className="flex flex-col items-center justify-center py-2">
                <div className="flex flex-col items-center justify-center w-full text-center">
                    <p className="mt-2.5 font-semibold text-2xl text-gray-500">
                        {bot_name} has music based features which allow you to listen to music in discord with ease.
                    </p>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center py-2 p-10">
                <div className="grid grid-cols-2 gap-4 w-full">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col select-none items-center justify-center w-full text-center bg-purple-500/10 rounded-xl p-5 border border-purple-500/20 hover:border-purple-500/40 transition duration-200 ease-in-out">
                            <div className="flex flex-col items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-900/60">
                                <i className={`${feature.icon} text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700 animate-bounce mx-auto`} />
                            </div>
                            <h1 className="mt-3 text-2xl font-semibold text-white">
                                {feature.name}
                            </h1>
                            <p className="mt-2.5 text-xl font-medium text-gray-500">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}