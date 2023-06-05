import { useEffect, useState } from 'react'

import Hero from '@/components/Global/Pages/Index/Hero'
import Features from '@/components/Global/Pages/Index/Features'
import Developers from '@/components/Global/Pages/Index/Developers'

const meta = {
  bot_invite: "https://discord.com/oauth2/authorize?client_id=1031201130803368066&permissions=8&scope=bot%20applications.commands",
  guild_invite:"https://discord.com/invite/BnXJNMgV66",
  topgg:"https://top.gg/bot/1031201130803368066/vote",
  bot_name: "Shinobu"
}



export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-screen py-2" id="home">
        <Hero {...meta} />
      </section>

      <section className="flex flex-col items-center justify-center py-2" id="features">
        <Features {...meta} />
      </section>

      <section className="flex flex-col items-center justify-center py-2" id="developers">
        <Developers {...meta} />
      </section>
    </>
  )
}
