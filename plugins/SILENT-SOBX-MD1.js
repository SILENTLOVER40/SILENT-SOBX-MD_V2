const config = require('../config')
const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')

cmd({
    pattern: "quran",
    alias: ["alquran","surah"],
    react: "🤍",
    desc: "get quran verses.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let data = await fetchJson(`https://quranapi.pages.dev/api/${q}.json`)
return reply(` 
 *[ •  QURAN - VERSES ‎ • ]*
 
 *╭┈───────────────•*
*│  ◦* *SURAH-NAME*❤️  ${data.surahName}
 
*│  ◦* *SURAH-NAME-EN*💐  ${data.surahNameTranslation} 
 
*│  ◦* *SURAH-NUMBER*❤️  ${data.surahNo}

*│  ◦* *AYAH-NUMBER*❤️  ${data.ayahNo}

*│  ◦* *ENGLISH-TRT*❤️  ${data.english}

*│  ◦* *ARABIC-TRT*❤️  ${data.arabic1}
*╰┈───────────────•*
 
 *•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ sɪʟᴇɴᴛʟᴏᴠᴇʀ⁴³²
*•────────────•⟢*`)
}catch(e){
console.log(e)
reply(`${e}`)
}
})
