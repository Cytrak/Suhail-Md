const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "254715155196" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_06_08_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4MyxcbiAgICAgICAgNixcbiAgICAgICAgNzgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDkxLFxuICAgICAgICAxODEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDc2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQzLFxuICAgICAgICA2OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjIyLFxuICAgICAgICA1MixcbiAgICAgICAgMTMyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTk4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjAyLFxuICAgICAgICA3OSxcbiAgICAgICAgODYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTczLFxuICAgICAgICA2MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDU3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMyxcbiAgICAgICAgNCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTMwLFxuICAgICAgICA3NixcbiAgICAgICAgMjI3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDYsXG4gICAgICAgIDE2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODYsXG4gICAgICAgIDExMixcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgODUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTEwLFxuICAgICAgICAxODgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNixcbiAgICAgICAgNjEsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTM0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTMyLFxuICAgICAgICA3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjksXG4gICAgICAgIDE1LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTY2LFxuICAgICAgICA2MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjgsXG4gICAgICAgIDc2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTAzLFxuICAgICAgICA5NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDExMixcbiAgICAgICAgNjUsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTksXG4gICAgICAgIDE0LFxuICAgICAgICA5MSxcbiAgICAgICAgMixcbiAgICAgICAgOTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDc2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDk1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDU3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjExLFxuICAgICAgICA5MCxcbiAgICAgICAgODIsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDY0LFxuICAgICAgICA0NCxcbiAgICAgICAgODIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTk4LFxuICAgICAgICA2MixcbiAgICAgICAgMTYzLFxuICAgICAgICA3NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDMwLFxuICAgICAgICA0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNixcbiAgICAgICAgODEsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODksXG4gICAgICAgIDQyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJIMFg4b1l3SHo1b2hqYk5XcjE1cEJtRGJlWXRWVlBIYkw0RFVNc2tIWUpNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJNRDZPRU1FY1RuTzItWHB1d2FraGtBXCIsXG4gIFwicGhvbmVJZFwiOiBcImNkYWYzZThiLTkwOTItNGE3YS04ZGY1LTAzN2RjMjAwY2M1NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDMsXG4gICAgICAxNTMsXG4gICAgICAyMCxcbiAgICAgIDEyOSxcbiAgICAgIDI0MyxcbiAgICAgIDExLFxuICAgICAgNjAsXG4gICAgICAxMTIsXG4gICAgICAxOTIsXG4gICAgICAxNDQsXG4gICAgICAyMjcsXG4gICAgICAxOTgsXG4gICAgICAxMTAsXG4gICAgICAxMjAsXG4gICAgICAxMzgsXG4gICAgICAzNCxcbiAgICAgIDcxLFxuICAgICAgNDMsXG4gICAgICAyNDgsXG4gICAgICAxMDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjgsXG4gICAgICAyNTUsXG4gICAgICA5MixcbiAgICAgIDY1LFxuICAgICAgNDIsXG4gICAgICAxODksXG4gICAgICAyMCxcbiAgICAgIDE2MixcbiAgICAgIDE5NyxcbiAgICAgIDE0NSxcbiAgICAgIDI1LFxuICAgICAgMjQsXG4gICAgICAyMDcsXG4gICAgICAzMSxcbiAgICAgIDI5LFxuICAgICAgMTg5LFxuICAgICAgNTMsXG4gICAgICAxMjMsXG4gICAgICAxNTUsXG4gICAgICAxOTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOVk5QkxHWkNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcxNTE1NTE5Njo1NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQ2MTIzODEzNTUyMTU1OjU1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lmdXB1RUJFUDdjMGJVR0dCRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTUtoTWZ5TXJMVFB1a2ZWRWFYdG8rTGNndVRtZ3c0MVVjaTUyMG01bXdYQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJpTG9NOUtuRHp6MnZYbjZZTGFyZmJOblBJK3lsVTFpbHBMTStxam4zWGpNWkp1dS9qU1ppd3RTcEhpeWoyWTdYV0hEQkVGd29rLyt4U2pvVnFQaHdEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI4Vmo5WGIvdWYvU0t1Z1gwZVY0bHV0eDhaYW9PSVF3K2xwRlFrTjQ3aDdNcUNMMVp4L0wwcVVXaXFueTQzL3h6VkJISStwbWJnek5ybkVWejQ0WjlpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MTUxNTUxOTY6NTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIzMTAwODAyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
