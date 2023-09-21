import "dotenv/config"

import { Client } from "discord.js"
import { doesContainHangul, hangulToHepburnJapanese } from "./utils.js"
import got from "got"
import hangul from "hangul-js"

const client = new Client({ intents: 130815 })

client.on("ready", (ready) => {
  console.log(ready.user.username, "Logged in")
})

client.on("messageCreate", async (message) => {
  if (!message.content.startsWith("?")) return

  const query = message.content.substring(1).replace(/ /gi, "")

  const character = hangul
    .disassemble(query, true)
    .map((v) => hangulToHepburnJapanese(v))
    .join("")

  console.log(character)

  const data = await got.get(
    `https://api.ennead.cc/buruaka/character/${encodeURIComponent(character)}`,
  )

  console.log(data)
})

client.login(process.env.BOT_TOKEN)

process.on("uncaughtException", console.error)
process.on("unhandledRejection", console.error)
