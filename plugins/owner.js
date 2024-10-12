const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    react: "👑",
    alias: ["king","bot"],
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

*ʜᴇʀᴇ ɪs ʙᴏᴛ ᴏᴡɴᴇʀ ɪɴғᴏ*

⇩━━━━━━━━❁━━━━━━━━⇩
┝ *ɴᴀᴍᴇ:* *ᴀɴꜱʜ.ꜱ*
┝ *ᴘᴜʙʟɪᴄ ɴᴀᴍᴇ:* *ᴀɴꜱʜ ʟᴏᴠᴇʀ*
┝ *ɴɪᴄᴋ ɴᴀᴍᴇ:* *ᴀɴꜱʜ*
┝ *ᴀɢᴇ:* *11*
┝ *ғᴀᴠᴏʀɪᴛᴇ ᴄᴏʟᴏʀ:* *ʀᴇᴅ & ʙʟᴜᴇ*
┝ *ғᴀᴠᴏʀɪᴛᴇ ᴀᴘᴘ:* *ᴡʜᴀᴛsᴀᴘᴘ*
┝ *ᴄᴏɴᴛᴀᴄᴛ* *wa.me/+923286308702*
┝ *KING OF WHATSAPP*
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
