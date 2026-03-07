/**
 * 🐼 𝘾𝙔𝘽𝙀𝙍 𝙋𝘼𝙉𝘿𝘼 𝙈𝘿 𝙑.10 🐼
 */
const { commands } = require('../command')

const LOGO = 'https://github.com/user-attachments/assets/9e3aa5ee-58e4-499d-9877-483a972fe16a'

const ownerInfo =
  `🐼 𝘾𝙔𝘽𝙀𝙍 𝙋𝘼𝙉𝘿𝘼 𝙈𝘿 𝙑.10 🐼\n\n` +
  `👤 *Name:* Sachith Chandra (Sachiya)\n` +
  `🎂 *Age:* 20\n` +
  `💻 *Role:* Student | Programmer\n\n` +
  `🐙 https://github.com/CYBER-x-SACHIYA-SL-MD-BOT\n` +
  `📦 https://github.com/CYBER-x-SACHIYA-SL-MD-BOT/CYBER-PANDA-MD-V10\n\n` +
  `🐼 𝘾𝙔𝘽𝙀𝙍 𝙋𝘼𝙉𝘿𝘼 𝙈𝘿 𝙑.10 🐼`

commands.push({
  pattern: 'owner',
  react:   '🐺',
  function: async (conn, mek, ctx) => {
    const { from } = ctx
    try {
      await conn.sendMessage(from, {
        image:   { url: LOGO },
        caption: ownerInfo,
      }, { quoted: mek })
    } catch {
      await ctx.reply(ownerInfo)
    }
  }
})
