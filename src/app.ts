import { Client } from "discord.js"
import { doesContainHangul } from "./utils"

const client = new Client({ intents: 130815 })

client.on("ready", (ready) => {
  console.log(ready.user.username, "Logged in")
})

client.on("messageCreate", async (message) => {
  if (!message.content.startsWith("?")) return

  const query = message.content.substring(1).replace(/ /gi, "")

  query.split("").map(v => doesContainHangul(v) ? () : "v")
})

client.login(Bun.env.BOT_TOKEN)
