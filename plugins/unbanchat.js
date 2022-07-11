let handler = async (m, { conn }) => {
  global.db.data.chats[m.chat].isBanned = false
  m.reply('𝕭𝖔𝖙 • Andii ༢࿔ྀ')
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^unbanchat|bannd$/i
handler.owner,handler.mods = true

module.exports = handler
