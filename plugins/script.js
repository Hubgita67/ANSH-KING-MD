const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    pattern: "script",
    react: "👑",
    alias: ["sc","repo","info"],
    desc: "get owner number",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
let madeMenu = `❁ ════ ❃•◯•❃ ════ ❁

*⇆ ʜɪɪ ᴍʏ ᴅᴇᴀʀ ғʀɪᴇɴᴅ ⇆*

     *${pushname}*

❁ ════ ❃•◯•❃ ════ ❁

*ʜᴇʀᴇ ɪs ʙᴏᴛ sᴄʀɪᴘᴛ*

⇩━━━━━━━━❁━━━━━━━━⇩
╭⊱✫🔮✠ᴀɴꜱʜ-ᴋɪɴɢ-ᴍᴅ🔮✫⊱╮
│✫ - *📂ʀᴇᴘᴏsɪᴛᴏʀʏ ɴᴀᴍᴇ:* *ᴀɴꜱʜ-ᴋɪɴɢ-ᴍᴅ*
│✫ - *📃ᴅᴇsᴄʀɪᴘᴛɪᴏɴ:* *❁ᴡᴏʀʟᴅ ʙᴇsᴛ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ❁*
│✫ - *🛡️ᴏᴡɴᴇʀ:* *ᴀɴꜱʜ ʟᴏᴠᴇʀ⁷⁰²*
│✫ - *🌐 ᴜʀʟ:* https://github.com/ANSH-KING/ANSH-KING-MD 
╰━━━━━━━━━━━━━━━━━╯
> *❁ᴊᴏɪɴ ᴏᴜʀ ᴡʜᴀᴛsᴀᴘᴘ ᴄʜᴀɴɴᴇʟ ғᴏʀ ᴜᴘᴅᴀᴛᴇs ᴀɴꜱʜ-ᴋɪɴɢ-ᴍᴅ❁*

https://whatsapp.com/channel/0029VakJheJJZg4FFTHSl50q🔰

> *❁ᴊᴏɪɴ ᴏᴜʀ ʏᴏᴜᴛᴜʙᴇ ᴄʜᴀɴɴᴇʟ ғᴏʀ ᴜᴘᴅᴀᴛᴇs ᴀɴꜱʜ-ᴋɪɴɢ-ᴍᴅ❁*

https://youtube.com/@anshtechie?si=coZwNbLOHs5NgHQ2🔰
❁ ════ ❃•⇆•❃ ════ ❁

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀɴꜱʜ_ʟᴏᴠᴇʀ⁷⁰²*

╰━❁ ═══ ❃•⇆•❃ ═══ ❁━╯
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
