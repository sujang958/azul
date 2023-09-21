import { Client, EmbedBuilder } from "discord.js"
import { doesContainHangul, hangulToHepburnJapanese } from "./utils.js"
import hangul from "hangul-js"
import { Character, Student } from "./types.js"

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

  const res = await fetch(
    `https://api.ennead.cc/buruaka/character/${encodeURIComponent(character)}`,
  )
  const data: Student = await res.json()

  console.log(data)

  const embed = new EmbedBuilder()
    .setColor("#00d2fe")
    .setTitle(data.character.name)
    .setThumbnail(data.image.lobby)

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })
})

client.login(process.env.BOT_TOKEN)

process.on("uncaughtException", console.error)
process.on("unhandledRejection", console.error)
