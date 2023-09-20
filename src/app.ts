import { Client } from "discord.js"
import { doesContainHangul, hangulToHepburnJapanese } from "./utils"
import got from "got"

const client = new Client({ intents: 130815 })

client.on("ready", (ready) => {
  console.log(ready.user.username, "Logged in")
})

client.on("messageCreate", async (message) => {
  if (!message.content.startsWith("?")) return

  const query = message.content.substring(1).replace(/ /gi, "")

  const character = query
    .split("")
    .map((v) => (doesContainHangul(v) ? hangulToHepburnJapanese(v) : v))
    .join("")

  const data = await got
    .get(
      `https://api.ennead.cc/buruaka/character/${encodeURIComponent(
        character,
      )}`,
    )
    .json()

  console.log(data)
})

client.login(Bun.env.BOT_TOKEN)
