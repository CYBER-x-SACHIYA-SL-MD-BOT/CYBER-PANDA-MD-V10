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
  pattern: 'menu',
  alias:   ['help', 'start'],
  react:   '🐼',
  function: async (conn, mek, ctx) => {
    const { from, pushname } = ctx
    const start = Date.now()

    const menu = `
┏━━━━━━━━━━━━━━━
┇ 🐼𝘾𝙔𝘽𝙀𝙍 𝙋𝘼𝙉𝘿𝘼 𝙈𝘿 𝙑.10🐼*
┗━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━
┣ 💫 𝐇𝐞𝐥𝐨𝐨: ${pushname}
┣ 💥 𝐒𝐩𝐞𝐞𝐝: ${Date.now() - start}ms
┣ 🐼 𝐁𝐨𝐭 𝐍𝐚𝐦𝐞: ${config.BOT_NAME || 'CYBER-PANDA-MD-V10'}
┣ 🗿 𝐎𝐰𝐧𝐞𝐫: ${config.OWNER_NUMBER}
┗━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━
┇ 💘 𝔸𝕃𝕃 ℂ𝕠𝕞𝕞𝕒𝕟𝕕𝕤 💘
┗━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━
┇ 🗒️ 𝔻𝕠𝕨𝕟𝕝𝕠𝕒𝕕𝕖𝕣*
┋┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
┇ ꜱᴏɴɢ
┇ ᴘʟᴀʏ
┇ ᴀᴘᴘ
┇ ꜰʙ
┇ ɴᴇᴡꜱ
┗━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━
┇ ✂️ 𝕋𝕠𝕠𝕝𝕤*
┋┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
┇ ꜱᴛɪᴄᴋᴇʀ
┇ ᴛᴏɪᴍᴀɢᴇ
┇ ᴛᴏᴍᴘ3
┗━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━
┇ 📡 *𝔾𝕣𝕠𝕦𝕡*
┇┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
┇ ᴍᴇᴍʙᴇʀ 
┗━━━━━━━━━━━━━━━
┏┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
┇ 🧿 *𝕊𝕪𝕤𝕥𝕖𝕞*
┇┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
┇ ᴀʟɪᴠᴇ 
┇ ᴍᴇɴᴜ 
┇ ᴏᴡɴᴇʀ 
┗━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━
┇ ⚠️ ʙᴏᴛ ᴏᴡɴᴇʀ
┇┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
┇ *ꜱᴀᴄʜɪᴛʜ ᴄʜᴀɴᴅʀᴀ💘*
┇ 𝘾𝙔𝘽𝙀𝙍 𝙋𝘼𝙉𝘿𝘼 𝙈𝘿 𝙑.10 
┗━━━━━━━━━━━━━━━`.trim()

    if (videoBuffer) {
      await conn.sendMessage(from, {
        video:       videoBuffer,
        caption:     menu,
        gifPlayback: true,
      }, { quoted: mek })
    } else {
      await conn.sendMessage(from, { text: menu }, { quoted: mek })
    }
  }
})
