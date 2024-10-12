const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "GQkSAJYB#nm1y65VletchE8L7Q1cbNOGz1P2HVQIb2nrzrdAi4So",
MONGODB: process.env.MONGODB || "mongodb+srv://suhail:suhail@clustere.tuhzpez.mongodb.net/?retryWrites=true&w=majority",
};
