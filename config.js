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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_34_01_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzLFxuICAgICAgICA5LFxuICAgICAgICA2MixcbiAgICAgICAgNDEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjUyLFxuICAgICAgICA5LFxuICAgICAgICA2NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTgzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxLFxuICAgICAgICAzMSxcbiAgICAgICAgNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDExLFxuICAgICAgICA4NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA0MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAzOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTY1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyLFxuICAgICAgICA2NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDMzLFxuICAgICAgICA2NixcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjAxLFxuICAgICAgICA5NSxcbiAgICAgICAgMjM5LFxuICAgICAgICA3MixcbiAgICAgICAgMjU1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDczLFxuICAgICAgICA0NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAzMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzEsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI5LFxuICAgICAgICA0MixcbiAgICAgICAgMjYsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDgzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDU0LFxuICAgICAgICAxODgsXG4gICAgICAgIDU4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg2LFxuICAgICAgICA3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1NixcbiAgICAgICAgODgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTksXG4gICAgICAgIDIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMyxcbiAgICAgICAgMzksXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM0LFxuICAgICAgICAxODUsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODYsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjksXG4gICAgICAgIDkzLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA2MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDMyLFxuICAgICAgICAzNixcbiAgICAgICAgMzMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjIzLFxuICAgICAgICA3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTExLFxuICAgICAgICA0MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjksXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0LFxuICAgICAgICAxODksXG4gICAgICAgIDUwLFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiU2dneGlldHd2RGpKeUtMVmptRXkwSnBpNkhoSVhvVHlQeWhzN3YrdUs5UT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTI5MDU5ODM2MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjI1OTVGODcwMzVDM0Y0RTQwMDIwNDFGNkQ2NkUzRUNCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNTk0MDA5MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCItMG94VDBES1N6dUJXOWRVVGpOZEJRXCIsXG4gIFwicGhvbmVJZFwiOiBcImFhMDhhODdkLWYwMDQtNDM1OS05ODk0LWY3YmQ4NGM0YWJjZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjUsXG4gICAgICA2OSxcbiAgICAgIDI0MCxcbiAgICAgIDIzNCxcbiAgICAgIDIzNyxcbiAgICAgIDAsXG4gICAgICA3NSxcbiAgICAgIDc1LFxuICAgICAgMjM2LFxuICAgICAgMTcyLFxuICAgICAgMTY0LFxuICAgICAgMTAwLFxuICAgICAgMjIsXG4gICAgICAyNTEsXG4gICAgICAxNDYsXG4gICAgICAyMyxcbiAgICAgIDY2LFxuICAgICAgOTIsXG4gICAgICAyNDAsXG4gICAgICA4MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzcsXG4gICAgICA4NSxcbiAgICAgIDY1LFxuICAgICAgMjUxLFxuICAgICAgMjQxLFxuICAgICAgMjExLFxuICAgICAgMjE3LFxuICAgICAgNDIsXG4gICAgICA1MixcbiAgICAgIDEyNSxcbiAgICAgIDQ5LFxuICAgICAgOTgsXG4gICAgICA3MyxcbiAgICAgIDg4LFxuICAgICAgMjEsXG4gICAgICAyMTcsXG4gICAgICAyMjEsXG4gICAgICAxLFxuICAgICAgMTQwLFxuICAgICAgMTI1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhGQUgzWFZWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTI5MDU5ODM2MjM6ODhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0OTA0NDQwODA5OTAyMzo4OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJdkNxNjBFRVBHdjRic0dHQkVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk1mc2FUSDllaVg1aEwyMXVXK0dwWlVBck5KYk5IR0xVUUh3YWZXeVNsMkE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiemZvRE9hdWU3ZklkbWN1RkRmZExBVzJ1VUlVMmNsZm0zeGhGRGl5M0NXNW5KTElacXAyd2FwTzhZWWNEeXJYK0s4K2x4b250VUZZNlgyYlYydU5GQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWU1TTnF3VE1wRnFTUmYvYnUwL01Pa3MwSkpTMTB1dnlIdG81ZWFUOGhJUkxuYWt2MHpOQVovdlBJSGUzSCt2UkZ0YTU0bWFudk45MHFvTnYyQmlrakE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjUyOTA1OTgzNjIzOjg4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1OTQwMDg0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRFQwXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEVDAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ4Uk9pLzNUZE10Z21qWWZRSGV2VUE4KzI3aDFkeTlPNCtBRHg3V1dNMGJ3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExNjg4MjY2MzUsXCJjdXJyZW50SW5kZXhcIjoxNixcImRldmljZUluZGV4ZXNcIjpbMCwxLDE1XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzU5MzkzNzI3NDBcIn0iCn0="  // PUT your SESSION_ID 


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
