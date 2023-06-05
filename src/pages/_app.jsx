import '@/styles/globals.css'
import Head from 'next/head'

import Header from '@/components/Static/Header'
import Footer from '@/components/Static/Footer'




const meta = {
  bot_invite: "https://discord.com/oauth2/authorize?client_id=1031201130803368066&permissions=8&scope=bot%20applications.commands",
  guild_invite: "https://discord.com/invite/BnXJNMgV66",
  topgg: "https://top.gg/bot/1031201130803368066/vote",
  bot_name: "Shinobu",
  avatar:"https://cdn.discordapp.com/avatars/1031201130803368066/42d90fd719e9181f5dbd9da8c3576085.png?size=64",
  dashboard: "http://sec.byte.rasbyte.net:25635/"
}
const socials = [
  { name: 'Discord', link: meta.guild_invite },
  { name: 'Github', link: 'https://github.com/Vaniellee' },
]

export default function App({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>{meta.bot_name}</title>
        <meta property="og:description" content="Powerful, easy, advanced best music bot. You can find out more by visiting our site or our server." />
        <meta property="og:title" content="Shinobu - The best Music bot for your server." />
        <meta property="og:image" content={meta.avatar} />
        <meta property="og:color" content="#a154e0" />
        <link rel="shortcut icon" href={meta.avatar} />
        <meta itemprop="name" content="Shinobu - The best music bot for your server." />
        <meta itemprop="description" content="Powerful, easy, advanced best music bot. Add Shinobu to your discord server and listen to any song you want!" />
      </Head>

      <main className="container mx-auto my-8 max-w-7xl">
        <div className="max-w-full mx-auto">
          <Header socials={socials} meta={meta} />
        </div>

        <Component {...pageProps} />

        <div className="max-w-full mx-auto">
          <Footer socials={socials} />
        </div>
      </main>
    </>
  )
}
