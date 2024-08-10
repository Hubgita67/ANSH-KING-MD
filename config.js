const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/2a06381b260c3f096a612.jpg", 
ALIVE_MSG: process.env.ALIVE_MSG || "ʜɪɪ ᴅᴇᴀʀ ɪ ᴀᴍ sɪʟᴇɴᴛ-sᴏʙx-ᴍᴅ ᴄʀᴇᴀᴛᴇᴅ ʙʏ `sɪʟᴇɴᴛ-ʟᴏᴠᴇʀ⁴³²` ɪᴀᴍ ᴏɴʟɪɴᴇ ɴᴏᴡ ᴡʜᴏ ᴄᴀɴ ɪ ʜᴇʟᴘ ʏᴏᴜ ᴛʏᴘᴇ ᴍᴇɴᴜ ᴛᴏ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ",
};
