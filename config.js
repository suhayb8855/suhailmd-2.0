const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "252905983623";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_28_01_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMCxcbiAgICAgICAgMTkzLFxuICAgICAgICA3NixcbiAgICAgICAgNjAsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDcxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0LFxuICAgICAgICA3NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2MixcbiAgICAgICAgODIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDY2LFxuICAgICAgICA5NSxcbiAgICAgICAgMjAwLFxuICAgICAgICA3NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjE1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTIwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgOTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjksXG4gICAgICAgIDIwNixcbiAgICAgICAgNTcsXG4gICAgICAgIDI5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzMixcbiAgICAgICAgNzUsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDYyLFxuICAgICAgICA3MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE5LFxuICAgICAgICA4OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTIsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE1MixcbiAgICAgICAgNDMsXG4gICAgICAgIDI1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODAsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQzLFxuICAgICAgICA2MixcbiAgICAgICAgMjUxLFxuICAgICAgICA2MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzksXG4gICAgICAgIDcsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjUzLFxuICAgICAgICA3MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxLFxuICAgICAgICA0OSxcbiAgICAgICAgMjI5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDIsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgODMsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDYxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTUxLFxuICAgICAgICA2MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDY4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjIxLFxuICAgICAgICA4NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDAsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjAwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDMzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjAwLFxuICAgICAgICA4NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ4RGREV25jQXhXQnRoUUVVMVRwUGIvaVlTQjUvRFdnVlBUTUNUZmkxWjdJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1MjkwNTYyMDgxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTFBNTBDODVDOUQ2NTg3RUE5NTM5N0I5MkUxNTc3MUZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM1OTM5NzIyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjUyOTA1NjIwODEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0MEI2RThCRTUxRUZGMEM3QUEyQzlCQTcwRDMxRTAwMVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzU5Mzk3MjZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicFFxV1hHSU9Ra3k0eGlEZjRtT0t1Z1wiLFxuICBcInBob25lSWRcIjogXCJlNDE2ZWY1MS0zZDYzLTQ2NjEtYTJlYy05Yzk1NzA1OWQzYzJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM5LFxuICAgICAgODgsXG4gICAgICA4NixcbiAgICAgIDE4MixcbiAgICAgIDE4MSxcbiAgICAgIDQ3LFxuICAgICAgMTc3LFxuICAgICAgODYsXG4gICAgICAyMDMsXG4gICAgICAyMSxcbiAgICAgIDIyNSxcbiAgICAgIDk5LFxuICAgICAgMTkxLFxuICAgICAgNjYsXG4gICAgICA5NSxcbiAgICAgIDIzMixcbiAgICAgIDIzNCxcbiAgICAgIDE4NixcbiAgICAgIDIzLFxuICAgICAgNDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzUsXG4gICAgICA5MixcbiAgICAgIDIwMyxcbiAgICAgIDE4NyxcbiAgICAgIDgyLFxuICAgICAgNzEsXG4gICAgICAwLFxuICAgICAgMjgsXG4gICAgICAxNTUsXG4gICAgICAyNDksXG4gICAgICA4MyxcbiAgICAgIDMzLFxuICAgICAgMjMsXG4gICAgICAxOTEsXG4gICAgICAxODcsXG4gICAgICA4NSxcbiAgICAgIDQwLFxuICAgICAgMTM2LFxuICAgICAgNTQsXG4gICAgICA1OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzODhXN1NMN1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjUyOTA1NjIwODEwOjM3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1OTM5NTYwNjA2MTI3MTozN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLKzZ3M2tRZzYzaHV3WVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlFYdHFPSUF1SzVmMHpRMlE2bllpSnJUektNeTljZ3lWbE0wZHRPRWdCQVU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUWtIWk9GZ2FhK205dkpnTm1ET2M1bEF4a29LWlJhcTN1dGphYmR0VWM4ZGx0N245amZxeGFzZVdmLzNIb0RRbG1ieithQktyZWhvcUJ2RWlFTHJSREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieTBKb1NoNmpwOTVCaDJ1bUFPV1d1SmxaNm5Zb3BYcmRieTZEMEo0S3hqOEpBQ0JOSW1TaFpzNkZFTE5oZVppUDRtQUx6bWxIc1pyWXYwd3VqUk5qRGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjUyOTA1NjIwODEwOjM3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1OTM5NzE5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "DalxoWww",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
