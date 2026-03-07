/**
 * 🐼 𝘾𝙔𝘽𝙀𝙍 𝙋𝘼𝙉𝘿𝘼 𝙈𝘿 𝙑.10 🐼
 */
const { commands } = require('../command')
const config = require('../config')
const fs   = require('fs')
const path = require('path')

const VIDEO = path.join(__dirname, '../lib/menuvideo.mp4')
const videoBuffer = fs.existsSync(VIDEO) ? fs.readFileSync(VIDEO) : null

commands.push({
  pattern: 'alive',
  react:   '🐼',
  function: async (conn, mek, ctx) => {
    const { from } = ctx

    const msg =
      `*${config.BOT_NAME || 'CYBER-PANDA-MD-V10'} is Online!* 🐼🔥\n\n` +
      `*Runtime:* ${(process.uptime() / 60).toFixed(2)} mins\n` +
      `*Version:* v10\n` +
      `*Status:* High Speed & Optimized ⚡\n` +
      `*Platform:* Linux (Server)\n\n` +
      `> Type *${config.PREFIX}menu* to see all commands.\n` +
      `> 📦 https://github.com/CYBER-x-SACHIYA-SL-MD-BOT/CYBER-PANDA-MD-V10\n` +
      `>`

    if (videoBuffer) {
      await conn.sendMessage(from, {
        video:       videoBuffer,
        caption:     msg,
        gifPlayback: true,
      }, { quoted: mek })
    } else {
      await conn.sendMessage(from, { text: msg }, { quoted: mek })
    }
  }
})
