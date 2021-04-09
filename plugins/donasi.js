let handler = async m => m.reply(`
╭─「 Donasi  」
│ • Gopay [+62882009496234]
│ • Dana [+62882009496234]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
