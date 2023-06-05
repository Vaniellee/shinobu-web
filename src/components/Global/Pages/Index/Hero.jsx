export default function Hero({ bot_invite, guild_invite, bot_name }) {
  
  
    return (
        <>
         <div className="absolute blur-3xl top-[34%] left-[24%] w-40 h-40 rounded-full bg-gradient-to-br from-purple-900/60" />
         <div className="absolute blur-3xl top-[44%] left-[64%] w-40 h-40 rounded-full bg-gradient-to-br from-purple-800/70" />
          
          <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <div className="flex flex-col items-center justify-center w-full text-center">
              <h1 className="flex text-5xl font-bold items-center justify-center">
                Best Trending Discord Bot{' '}
                <span className="text-5xl text font-extrabold text-purple-600 ml-4">
                  {bot_name}
                </span>
                .
              </h1>
              <p className="mt-2.5 text-2xl text-gray-500">
                Make your server perfect and fun by inviting this bot. Why don't give it a try?
              </p>
              <div className="bg-gradient-to-r from-transparent via-purple-500 to-transparent w-2/4 h-0.5 mt-4" />
              <div className="flex flex-row items-center justify-center mt-10 gap-3">
                <a 
                href={bot_invite}
                className="hover:bg-purple-700/20 text-white font-bold py-3 px-6 rounded-md border border-purple-700 hover:border-purple-800 shadow shadow-lg hover:shadow-purple-600/30 backdrop-filter backdrop-blur-sm transition duration-200 ease-in-out">
                  Invite {bot_name}
                </a>
                <a 
                href={guild_invite}
                className="hover:bg-purple-700/20 text-white font-bold py-3 px-6 rounded-md border border-purple-700 hover:border-purple-800 shadow shadow-lg hover:shadow-purple-600/30 backdrop-filter backdrop-blur-sm transition duration-200 ease-in-out">
                  Join the Support Server
                </a>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full text-center mb-8">
            <i className="fas fa-angle-down text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700 animate-bounce mx-auto" />
          </div>
        </>
      )
}