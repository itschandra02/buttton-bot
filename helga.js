/* Base Ori : Helgaa
SC Ori : Helgaa


Thanks a lot to
 
> Allah SWT
> Helga Ilham

> My parents
> My Family

Note : Jangan Hapus Nama Creator!
Kalo Mau Reupload Atau Recode Kasih Credits!

*/
const
	{
	    WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		ChatModification,
		GroupSettingChange,
		WA_MESSAGE_STUB_TYPES,
		WA_DEAFULT_EPHEMERAL,
		waChatKey,
		mentionedJid,
		processTime,
		prepareMessageFromContent, 
		relayWAMessage
	} = require("@adiwajshing/baileys")
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const qrcode = require('qrcode-terminal')
const qrkode = require("qrcode")
const imageToBase64 = require('image-to-base64')
const moment = require("moment-timezone")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const request = require('request')
const util = require('util')
const hx = require('hxz-api')
const base64Img = require('base64-img')
const ms = require('parse-ms')
const figlet = require('figlet')
const brainly = require('brainly-scraper')
const ig = require('insta-fetcher')
const cheerio = require('cheerio')
const fromData = require('form-data')
const os = require('os')
const translate = require('@vitalets/google-translate-api')
const ggs = require('google-it')
const googleImage = require('g-i-s')
const toMs = require('ms')
const fetch = require('node-fetch')
const imgbb = require('imgbb-uploader')
const Math_js = require('mathjs')
const crypto = require('crypto')
const speed = require('performance-now')
const client = new WAConnection()
const dtod = "6282138919347@s.whatsapp.net"
const otod = "6282138919347@s.whatsapp.net"

    //── 「 Lib 」 ──//

const { y2mateA, y2mateV } = require('./lib/y2mate')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { color, bgcolor } = require('./lib/color')
const { fetchJson } = require('./lib/fetcher')
const { antiSpam } = require('./lib/antispam')
const { exec } = require('child_process')
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp')
const { getBuffer, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const Exif = require('./lib/exif')
const exif = new Exif()

    //── 「 DataBase 」 ──//

const afk = JSON.parse(fs.readFileSync('./database/afk.json'))
const setik = JSON.parse(fs.readFileSync('./database/setik.json'))
const vien = JSON.parse(fs.readFileSync('./database/vien.json'))
const imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
const commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
const tictactoe = JSON.parse(fs.readFileSync("./database/tictactoe.json"))
const antiwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const nsfww = JSON.parse(fs.readFileSync('./database/nsfww.json'))
const mute = JSON.parse(fs.readFileSync('./database/mute.json'))
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const antivirtex = JSON.parse(fs.readFileSync("./database/antivirtex.json"))
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
const kickarea = JSON.parse(fs.readFileSync('./database/kickarea.json'))
const scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
const autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))

ky_ttt = []
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
cmhit = []
autorespon = false
playmusic = false
antidelete = false
menusimpel = false
menuall = false
baterai = {
battery: "" || "Not detected",
isCharge: "" || false
}
offline = false
publik = true
bugc = true
waktuafk = 'Nothing'
alasanafk = 'Nothing'
NamaBot = settings.NamaBot
NomorOwner = settings.NomorOwner
NamaOwner = settings.NamaOwner
multi = true
nopref = false

    //── 「 LolKey 」 ──//
HelKey = settings.HelKey

const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")

function kyun(seconds) {
	function pad(s) {
		return (s < 10 ? '0' : '') + s;
	}
	var hours = Math.floor(seconds / (60 * 60));
	var minutes = Math.floor(seconds % (60 * 60) / 60);
	var seconds = Math.floor(seconds % 60);

	return `${pad(hours)}Jam ${pad(minutes)}Menit ${pad(seconds)}Detik`
}
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function waktu(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}
const addafk = (from) => {
    const obj = { id: from, expired: Date.now() + toMs('10m') }
    afk.push(obj)
    fs.writeFileSync('./database/afk.json', JSON.stringify(afk))
}
const cekafk = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            _dir.splice(position, 1)
            fs.writeFileSync('./database/afk.json', JSON.stringify(_dir))
        }
    }, 1000)
}
const isAfk = (idi) => {
    let status = false
    Object.keys(afk).forEach((i) => {
        if (afk[i].id === idi) {
            status = true
        }
    })
    return status
}
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}
module.exports = helga = async (helga, mek) => {
try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
	    if (!mek.message) return
	    if (mek.key && !mek.key.remoteJid == 'status@broadcast') return
	    if ((Object.keys(mek.message)[0] === 'ephemeralMessage' && JSON.stringify(mek.message).includes('EPHEMERAL_SETTING')) && mek.message.ephemeralMessage.message.protocolMessage.type === 3 && bugc && !mek.key.fromMe) {
		nums = mek.participant
        longkapnye = "\n".repeat(420)
        tekuss = `\`\`\`TANDAI TELAH DIBACA !!!\`\`\`${longkapnye}\`\`\`@⁨${nums.split('@')[0]} Terdeteksi Telah Mengirim Bug, @⁨${nums.split('@')[0]} Akan Dikick!\`\`\`\n`
        helga.groupRemove(mek.key.remoteJid, [nums]).catch((e) => { reply(`*ERR:* ${e}`) })
        helga.sendMessage(mek.key.remoteJid, tekuss, MessageType.text, {contextInfo:{mentionedJid:[nums + "@s.whatsapp.net"]}})
        }
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const typei = Object.keys(mek.message)[0]
		global.prefix
		me = helga.user
		m = simple.smsg(helga, mek)
		const antibot = m.isBaileys
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWita = moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss')
        const timeWit = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss')
		const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
		helga.on("CB:action,,battery", json => {
	    const battery = json[2][0][1].value
	    const persenbat = parseInt(battery)
	    baterai.battery = `${persenbat}%`
	    baterai.isCharge = json[2][0][1].live
	    })
	    if (multi){
		    var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
        } else {
            if (nopref){
                prefix = ''
            } else {
                prefix = prefa
            }
        }
        isStc = Object.keys(mek.message)[0] == "stickerMessage" ? mek.message.stickerMessage.fileSha256.toString('hex') : ""
	    isStc = `${isStc}`
        const isStcQ = isStc !== "" && content.includes("extendedTextMessage") ||
        isStc !== "" && content.includes("conversation")
        const body = (type === 'listResponseMessage' && mek.message.listResponseMessage.title) ? mek.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""
		const budo = (typei === 'conversation') ? mek.message.conversation : (typei === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const dfrply = fs.readFileSync('./helga.jpg')
		cmhit.push(command)
        mess = {
			wait: '𝗧𝘂𝗻𝗴𝗴𝘂 𝗦𝗲𝗯𝗲𝗻𝘁𝗮𝗿!',
			success: '𝗕𝗲𝗿𝗵𝗮𝘀𝗶𝗹!',
			toxic: 'Jangan Toxic!',
			error: {
				stick: '𝗧𝗶𝗱𝗮𝗸 𝗱𝗮𝗽𝗮𝘁 𝗺𝗲𝗻𝗴𝗮𝗸𝘀𝗲𝘀 𝘃𝗶𝗱𝗲𝗼!',
				Iv: '𝗟𝗶𝗻𝗸 𝗧𝗶𝗱𝗮𝗸 𝗩𝗮𝗹𝗶𝗱!',
                api: '𝗘𝗿𝗿𝗼𝗿'
			},
			only: {
				group: '𝗛𝗮𝗻𝘆𝗮 𝘂𝗻𝘁𝘂𝗸 𝗱𝗶 𝗱𝗮𝗹𝗮𝗺 𝗴𝗿𝘂𝗽!',
				ownerG: '𝗛𝗮𝗻𝘆𝗮 𝘂𝗻𝘁𝘂𝗸 𝗽𝗲𝗺𝗶𝗹𝗶𝗸 𝗴𝗿𝘂𝗽!',
				ownerB: 'Khusus Owner!',
				admin: 'Khusus admins!',
				Badmin: 'Jadikan Bot admin!'
			}
		}
		const botNumber = helga.user.jid
		const isGroup = from.endsWith('@g.us')
		const sender = mek.key.fromMe ? helga.user.jid : isGroup ? mek.participant : mek.key.remoteJid
		const senderNumber = sender.split("@")[0] 
		const conts = mek.key.fromMe ? helga.user.jid : helga.contacts[mek.sender]
        const pushname = mek.key.fromMe ? helga.user.name : !conts ? '-' : conts.notify || conts.vname || conts.name || '-'   
		const totalchat = await helga.chats.all()
		const groupMetadata = isGroup ? await helga.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const isOwner = ownerNumber.includes(sender)
		const q = args.join(' ')
		const isNsfw = isGroup ? nsfww.includes(from) : false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isKickArea = isGroup ? kickarea.includes(from) : false
		const isAntiWame = isGroup ? antiwame.includes(from) : false
		 const isAntivirtex = isGroup ? antivirtex.includes(from) : false
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const isWelkom = isGroup ? welkom.includes(from) : false
		const isAuto = isGroup ? autosticker.includes(from) : false
		const isMuted = isGroup ? mute.includes(from) : false
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
		const isUrl = (url) => {
		return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
		}
		if (antibot === true) return
		const katalog = (teks) => {
             res = helga.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 321, "message": teks, "footerText": "*_©itschandra_*", "thumbnail": ofrply, "surface": 'CATALOG' }}, {quoted:ftrol})
             helga.relayWAMessage(res)
        }
        const grupinv = (teks) => {
        	grup = helga.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '6281262163214-1616169743@g.us', "inviteCode": 'https://chat.whatsapp.com/itschandra', "groupName": `${NamaBot}`, "footerText": "*_©itschandra_*", "jpegThumbnail": ofrply, "caption": teks}}, {quoted:finv})
            helga.relayWAMessage(grup)
        }
    function clockString(ms) {
      let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    }

		idttt = []
	    players1 = []
	    players2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
	    }
	    const isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
		try {
		pporang = await helga.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
		const ofrply = await getBuffer(pporang)
		const pporigi = fs.readFileSync('./helga.jpg')
		const sekarang = new Date().getTime();
			
			
    //── 「 Waktuuu 」 ──//			
			
			var ase = new Date();
                        var jamss = ase.getHours();
                         switch(jamss){
                case 0: jamss = "Good Midnight 🌚"; break;
                case 1: jamss = "Good Midnight 🌚"; break;
                case 2: jamss = "Good Midnight 🌚"; break;
                case 3: jamss = "Good Midnight 🌔"; break;
                case 4: jamss = "Good Midnight 🌔"; break;
                case 5: jamss = "Good Dawn 🌄"; break;
                case 6: jamss = "Good Morning 🌄"; break;
                case 7: jamss = "Good Morning 🌄"; break;
                case 8: jamss = "Good Morning ☀️"; break;
                case 9: jamss = "Good Morning ☀️"; break;
                case 10: jamss = "Good Good Morning ☀️"; break;
                case 11: jamss = "Good Afternoon 🌞"; break;
                case 12: jamss = "Good Zuhur 🌞"; break;
                case 13: jamss = "Good Afternoon 🌞"; break;
                case 14: jamss = "Good Afternoon 🌞"; break;
                case 15: jamss = "Good Asr 🌞"; break;
                case 16: jamss = "Good Afternoon ☀️"; break;
                case 17: jamss = "Good Evening 🌄"; break;
                case 18: jamss = "Good Maghrib 🌄"; break;
                case 19: jamss = "Good Isha 🌙"; break;
                case 20: jamss = "Good Night 🌙"; break;
                case 21: jamss = "Good Night 🌙"; break;
                case 22: jamss = "Good Midnight 🌙"; break;
                case 23: jamss = "Good Midnight 🌚"; break;
            }
            var tampilUcapan = "" + jamss;
            const jmn = moment.tz('Asia/Jakarta').format('HH:mm:ss')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
				const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				const week = d.toLocaleDateString(locale, { weekday: 'long' })
				const calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
		       })
		const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/27/ee/27/27ee271709bdb24d555b2dd3de796f93.jpg')
                                        }
if(time2 < "19:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/27/ee/27/27ee271709bdb24d555b2dd3de796f93.jpg')
                                         }
if(time2 < "18:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/81/08/7b/81087b2e732dc0e25d8875b135d579b9.jpg')
                                         }
if(time2 < "15:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/81/98/aa/8198aaf07083fc9939deb0c3c5c3716c.jpg')
                                         }
if(time2 < "11:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/81/98/aa/8198aaf07083fc9939deb0c3c5c3716c.jpg')
                                         }
if(time2 < "06:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/15/8e/ea/158eea299c01433aae6744599d2fdc3a.jpg')
}


    //── 「 Produc 」 ──//

const ftok = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": imageTime //Gambarnye
					},
					"title": `Follow IG : itschandra_28`, //Kasih namalu 
					"description": `${tampilUcapan} ${pushname}`, 
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": `${tampilUcapan} ${pushname}`,
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
// TROLI
const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 500,
                            status: 1,
                            surface : 1,
                            message: `Follow IG : itschandra_28`, //Kasih namalu
                            orderTitle: `Follow IG : itschandra_28`,
                            thumbnail: dfrply, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
// LOCATION
const floc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    liveLocationMessage: {
                    caption: `${tampilUcapan} ${pushname}`,
                    jpegThumbnail: dfrply
                          }
                        }
                      }
// DOCUMENT
const fdoc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: `${tampilUcapan} ${pushname}`, 
                    jpegThumbnail: dfrply
                          }
                        }
                      }
// VIDEO
const fvid = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6281262163214-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${tampilUcapan} ${pushname}`,
                 "h": `${tampilUcapan} ${pushname}`,
                 'duration': '99999', 
                 'caption': `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
                       }
	                  }
// GROUPINVITE
const finv = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6281262163214-1616169743@g.us",
			"inviteCode": `${tampilUcapan} ${pushname}`,
			"groupName": `${tampilUcapan} ${pushname}`, 
            "caption": `${tampilUcapan} ${pushname}`, 
            'jpegThumbnail': dfrply
		}
	}
}
////////////CONST GAME/RANDOM MATH
            const mekla1 = ['1','2','3','4','5','6','7','8','9']
            const mekla2 = ['1','2','3','4','5','6','7','8','9'] 
            const random1 = ['1','2','3','4','5','6','7','8','9'] 
            const random2 = ['1','2','3','4','5','6','7','8','9'] 
            const random3 = ['1','2','3','4','5','6','7','8','9'] 
            const random4 = ['1','2','3','4','5','6','7','8','9'] 
            const random5 = ['1','2','3','4','5','6','7','8','9'] 
            const mekla3 = mekla1[Math.floor(Math.random() * (mekla1.length))]
            const mekla4 = mekla2[Math.floor(Math.random() * (mekla2.length))]   
            const random6 = random1[Math.floor(Math.random() * (random1.length))]      
            const random7 = random2[Math.floor(Math.random() * (random5.length))]      
            const random8 = random3[Math.floor(Math.random() * (random5.length))]      
            const random9 = random4[Math.floor(Math.random() * (random5.length))]      
            const random10 = random5[Math.floor(Math.random() * (random5.length))] 
// STICKER
const fstick = {
"key": {
	  "participant": `0@s.whatsapp.net`,
      "remoteJid": "6281262163214-1613049930@g.us",
      "fromMe": false,
      "id": "3B64558B07848BD81108C1D14712018E"
    },
    "message": {
      "stickerMessage": {
        "fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=",
		"pngThumbnail": dfrply,
	 "mimetype": "image/webp",
        "height": 64,
        "width": 64,
        "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE",
        "fileLength": "60206",
        "firstFrameLength": 3626,
        "isAnimated": false
      }
    },
    "messageTimestamp": "1614070775",
    "status": "PENDING"
  }
// GIF
const fgi = {
	 key: { 
         fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6281262163214-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${tampilUcapan} ${pushname}`,
                 "h": `${tampilUcapan} ${pushname}`,
                 'duration': '99999', 
                 'gifPlayback': 'true', 
                 'caption': `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
                       }
	                  } 
// TEXT WITH THUMBNAIL
const ftex = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6281262163214-1613049930@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `${tampilUcapan} ${pushname}`,
                 "title": `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
	                  } 
                     }
// VN
const fvoc = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6281262163214-1613049930@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "99999",
                 "ptt": "true"
                        }
	                  } 
                     }
const sendBug = async (target) => {
      await helga.relayWAMessage(
        helga.prepareMessageFromContent(
          target,
          helga.prepareDisappearingMessageSettingContent(0),
          {}
        ),{ waitForAck: true }) 
    }
    //But verify
const getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}
const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
}
const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}

const isRegistered = checkRegisteredUser(sender)

const sendButRegis = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
helga.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};

const daftar1 = `Hai kak  ${pushname} ${tampilUcapan} \n\nSebelum Mengakses Bot Verify Terlebih Dahulu Ya, Bot Ini Di Susun Kembangkan Oleh Radja Adity`
const daftar2 = '```Ketik Tombol Di Bawah Untuk Mendaftar Ke Database itschandra```'
const daftar3 = [{buttonId: `verify`,buttonText: {displayText: `🌸𝙍𝙀𝙂𝙄𝙎𝙏𝙍𝙀𝘿 `,},type: 1,},]

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

      const getpc = async function(totalchat){
   let pc = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && !d.includes('g.us')){
         b.push(d)
      }
   }
   return b
}
///Button Text
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
helga.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await helga.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
helga.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await helga.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
helga.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await helga.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
helga.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
 if (!mek.key.remoteJid.endsWith('@g.us') && offline){
			if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
			heheh = ms(Date.now() - waktuafk)
		  sendButMessage(from, `Hai ${pushname}, Maaf sepertinya saat ini ${NamaOwner} sedang Offline\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik\n\nSilahkan hubungi lagi setelah Online`, "*_© Helga Ilham_*", [{buttonId: 'simi', buttonText: {displayText: 'Oke'}, type: 1}], {quoted:ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
			}
		}
		if (mek.key.remoteJid.endsWith('@g.us') && offline) {
			if (!mek.key.fromMe){
				if (mek.message.extendedTextMessage != undefined){
					if (mek.message.extendedTextMessage.contextInfo != undefined){
						if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
				for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
					if (ment === helga.user.jid){
                        if (isAfk(mek.key.remoteJid)) return
                        addafk(mek.key.remoteJid)
						heheh = ms(Date.now() - waktuafk)
			       sendButMessage(from, `Hai ${pushname}, Maaf sepertinya saat ini ${NamaOwner} sedang Offline\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik\n\nSilahkan hubungi lagi setelah Online`, "*_© Helga Ilham_*", [{buttonId: 'simi', buttonText: {displayText: 'Oke'}, type: 1}], {quoted:ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
				}
						}
					}
				}
			}
		}
		const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./temp/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					helga.sendMessage(to, media, sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker'))
					});
					});
				});
			}
        const sendWebp = async(from, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './temp' + names + '.png', async function () {
                    console.log('selesai');
                    let ajg = './temp' + names + '.png'
                    let palak = './temp' + names + '.webp'
                    exec(`ffmpeg -i ${ajg} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${palak}`, (err) => {
                        let media = fs.readFileSync(palak)
                        helga.sendMessage(from, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(ajg)
                        fs.unlinkSync(palak)
                    });
                });
            }
            const sendKontak = (from, nomor, nama) => {
	        const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + `ORG:Developer ${NamaBot}\n` + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        helga.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {quoted:mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
            }
            const hideTagKontak = async function(from, nomor, nama){
	        let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        let anu = await helga.groupMetadata(from)
	        let members = anu.participants
	        let ane = []
	        for (let i of members){
		    ane.push(i.jid)
	        }
	        helga.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
            }
		const reply = (teks) => {
			helga.sendMessage(from, teks, text, { quoted:ftrol })
		}
		const simir = (teks) => {
			helga.sendMessage(from, teks, text, { quoted:ftrol })
		}
		const math = (teks) => {
				return Math.floor(teks)
		}
		const sendMess = (hehe, teks) => {
			helga.sendMessage(hehe, teks, text, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
		}
		const mentions = (teks, memberr, id) => {
			(id == null || id == undefined || id == false) ? helga.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : helga.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
		}
		const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
helga.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
helga.sendMessage(from, hasil, type, options).catch(e => {
helga.sendMessage(from, { url : link }, type, options).catch(e => {
reply
console.log(e)
})
})
})
})
}
  const sendMediaURL = async(to, url, text="", mids=[]) =>{
				if(mids.length > 0){
					text = normalizeMention(to, text, mids)
				}
				const fn = Date.now() / 10000;
				const filename = fn.toString()
				let mime = ""
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						mime = res.headers['content-type']
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, filename, async function () {
					console.log('done');
					let media = fs.readFileSync(filename)
					let type = mime.split("/")[0]+"Message"
					if(mime === "image/gif"){
						type = MessageType.video
						mime = Mimetype.gif
					}
					if(mime.split("/")[0] === "audio"){
						mime = Mimetype.mp4Audio
					}
					helga.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
					
					fs.unlinkSync(filename)
				});
			}
		   const sendFakeThumb = async function(from, url, title, desc){
				var anoim = {
					detectLinks: false
				}
				var qul = await helga.generateLinkPreview(url)
				qul.title = title
				qul.description = desc
				qul.jpegThumbnail = dfrply
				helga.sendMessage(from, qul, MessageType.extendedText, anoim)
			}
			function Json(objectPromise) {
var objectString = JSON.stringify(objectPromise, null, 2)
var parse = util.format(objectString)
if (objectString == undefined) {
parse = util.format(objectPromise)
}
return reply(parse)
}
            function speedText(speed) {
                let bits = speed * 8;
                const units = ['', 'K', 'M', 'G', 'T'];
                const places = [0, 1, 2, 3];
                let unit = 0;
                while (bits >= 2000 && unit < 4) {
                    unit++;
                    bits/= 1000;
                }
                return `${bits.toFixed(places[unit])} ${units[unit]}bps`;
            } 
           if (budy.startsWith('>')){
if (!isOwner && !mek.key.fromMe) return
console.log(color('[EVAL]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval V1 brooo`))
ras = budy.slice(1)
function _(rem) {
ren = JSON.stringify(rem,null,2)
pes = util.format(ren)
reply(pes)
}
try{c
reply(require('util').format(eval(`(async () => { ${ras} })()`)))
} catch(err) {
e = String(err)
reply(e)
}
}
if (budy.startsWith('$')){
if (!mek.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('x')){
if (!mek.key.fromMe && !isOwner) return
try {
return helga.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}
if (budy.startsWith('=>')){
if (!isOwner && !mek.key.fromMe) return
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}
			// AUTO
			for (let anji of setik){
				if (budy === anji){
					result = fs.readFileSync(`./media/sticker/${anji}.webp`)
					helga.sendMessage(from, result, sticker, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
					}
			}
			for (let anju of vien){
				if (budy === anju){
					result = fs.readFileSync(`./media/vn/${anju}.mp3`)
					helga.sendMessage(from, result, audio, { mimetype: 'audio/mp4', duration: 359996400, ptt: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
			}
			for (let anjh of imagi){
				if (budy === anjh){
					result = fs.readFileSync(`./media/image/${anjh}.jpg`)
					helga.sendMessage(from, result, image, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
			}
			for (var i = 0; i < commandsDB.length ; i++) {
				if (budy.toLowerCase() === commandsDB[i].pesan) {
					reply(commandsDB[i].balasan)
				}
			}
			if (isGroup && isAntivirtex && !mek.key.fromMe) {
      if (budy.length > 2500) {
        if (isGroupAdmins) return reply("admin bebas");
        reply("ANTIVIRTEX DETECTED!! MAAF ANDA AKAN DIKICK ;V");
        helga.groupRemove(from, sender);
      }
			}
        if (budy.includes("wa.me/","https://wa.me//","https://wa.me/")) {
        	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiWame) return
				if (isGroupAdmins) return reply('Atasan grup mah bebas yakan :v')
				helga.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Wa.me terdeteksi Auto kick!')
			    helga.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
            }
        }
			// MUTE
        if (isMuted){
            if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return
            if (budy.toLowerCase().startsWith(`${prefix}unmute`)){
                let anu = mute.indexOf(from)
                mute.splice(anu, 1)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply('Bot telah diunmute di group ini')
            }
        }
        if (budy.includes("https://chat.whatsapp.com/")) {
        	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Atasan grup mah bebas yakan :v')
				helga.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Link terdeteksi, Auto kick!')
			    helga.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
			}
                      }
if (!settings.autoread) {
helga.chatRead(from)
}
if (!settings.autocomposing) {
helga.updatePresence(from, Presence.composing)
}
if (!settings.autorecording) {
helga.updatePresence(from, Presence.recording)
}
if (budy.startsWith('helga')){
sendButMessage(from, `${JSON.stringify(me, null, 2)}`, "*RadjaAditya*", [{buttonId: 'igm', buttonText: {displayText: 'Instagram'}, type: 1},{buttonId: 'ytm', buttonText: {displayText: 'YouTube'}, type: 1}], {quoted:ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
}
if(isButton == 'igm'){
reply('http://instagram.com/helga_store20')
}
if(isButton == 'ytm'){
reply('https://youtube.com/c/HelgaZexs妥')
}

   const sotoy = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔', 
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🍋 : 🍋 : 🍋 Win👑',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔',
        '🍌 : 🍌 : 🍌 Win👑'
        ]
        const isStcMedia = isStc !== "" && content.includes("quotedMessage") && !content.includes("extendedTextMessage") || isStc !== "" && content.includes("quotedMessage") && !content.includes("conversation")
	    const isStcVideo = isStcMedia && content.includes("videoMessage")
	    const isStcImage = isStcMedia && content.includes("imageMessage")
	    const isStcSticker = isStcMedia && content.includes("stickerMessage")
        const isStcTeks = isStcMedia && content.includes("quotedMessage")
        const isStcDocs = isStcMedia && content.includes("documentMessage")
        const isStcContact = isStcMedia && content.includes("contactMessage")
        const isStcAudio = isStcMedia && content.includes("audioMessage")
        const isStcLoca = isStcMedia && content.includes("locationMessage")
        const isStcTag = isStcMedia && content.includes("mentionedJid")
        const isStcReply = isStcMedia && content.includes("Message")
        const isStcProd = isStcMedia && content.includes("productMessage")
       
        const isMedia = (type === 'imageMessage' || type === 'videoMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (isCmd && antiSpam.isFiltered(from) && !isGroup) { console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
return reply('[~] Permintaan Di Prosess...')}  
if (isCmd && antiSpam.isFiltered(from) && isGroup) { console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
return reply('Jangan Spam Command Banh :(')}
if (isCmd && !isOwner) antiSpam.addFilter(from)
		if (!publik) {
		if (!isOwner && !mek.key.fromMe) return
		}
	    if (isCmd && !isGroup) {console.log(color('|COMMAND|', 'greenyellow'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(`${command} [${args.length}]`, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}
	    if (!command) {console.log(color('|PESAN|', 'greenyellow'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(cmd, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}
		
        switch (isStc) {
     case "5b017c6ac1fb953c7bd21034d2fca5fad75ef2da4c3b2c2877ef49fa544e74bf":
        if (!isStcSticker) return reply('Reply stickernya bgsd!')
        su = mek.message.stickerMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('hex')
        reply(su)
				}
        switch (command) {
        
    //── 「 Fiturr 」 ──//        
        
        case 'about':
  if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
        if(menusimpel == false){               
                const timestampi = speed();
					const latensyi = speed() - timestampi
                if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
				runtime = process.uptime()
				
                nomor = 1
                stod = `${sender}`
       stst = await helga.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status     
       menu = `*── 「 RULES AND FAQ 」 ──*

1. Jangan spam bot. 🙅
Sanksi: *⚠️ WARN/SOFT BLOCK*

2. Jangan telepon bot. ☎️
Sanksi: *❎ SOFT BLOCK*

3. Jangan mengeksploitasi bot.😖
Sanksi: *‼️ PERMANENT BLOCK ‼️*

🗯️ Bot tidak atau lambat merespon ?
➡️ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan. Tetap patuhi rules‼️

🗯️ Dimana saya bisa mendapatkan Script dari bot ini ?
➡️ Script ini masih private dan tidak pernah diperjual belikan ,bijaklah dalam mengetahui penipu.

🗯️ Boleh saya menambah ke grup?
➡️ Untuk sementara bot dalam status free to add.

🗯️ Prefixnya apa ya?
➡️ Bot ini menggunakan multi prefix. Berarti anda bisa menggunakan prefix #, . , Dan prefix wajar lainnya.

🗯️ Kak, kok syaa chat owner tidak direspon?
➡️ Owner hanya merespon pertanyaan seputar bot Dan kendala eror, tidak untuk kenalan ataupun mengemis script.


Jika sudah dipahami rules-nya, silakan ketik *.menu* untuk memulai!

⚠️ Segala kebijakan dan ketentuan Radja Aditya di pegang oleh owner dan segala perubahan kebijakan, sewaktu waktu owner berhak mencabut, memblokir user(*﹏*) 

Arigatou Gozaimasu! Untuk kalian user ramah dan Beberapa orang yg ikut membantu juga dalam project pembuatan RadjaAditya-
😖🙏

Instagram Admin : @itschandra_28
`
sendButLocation(from, `${menu}`, "*Radja Aditya*", {jpegThumbnail:ofrply,name:""}, [{buttonId:`ping`,buttonText:{displayText:'SPEED BOT'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
}
else if(menusimpel = true){
        stod = `${sender}`
fill =`Hai Kak ${pushname}, ${tampilUcapan}
Silahkan Pilih Untuk Menampilkan Menu

Jika Button Tidak Muncul Ketik .allmenu`
menu =`itschandra`
gbutsan = [
{buttonId:`allmenu`,buttonText:{displayText:'SHOW MENU'},type:1},
{buttonId:`store`,buttonText:{displayText:'STORE MENU'},type:1},
{buttonId:`script`,buttonText:{displayText:'SEWABOT'},type:1}
]
mhan = await helga.prepareMessage(from, ofrply, image, {thumbnail: ofrply})
const btnmenu = {
imageMessage: mhan.message.imageMessage,
contentText: `${fill}`,
footerText: `${menu}`,
buttons: gbutsan,
headerType: 4
}
helga.sendMessage(from, btnmenu, MessageType.buttonsMessage, {contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `hallo ${pushname}` ,
"body": `${jmn} - ${week} ${weton} - ${calender}`,
"mediaType": "2",
"thumbnail": pporigi,
},mentionedJid:[stod]}, quoted : ftrol})
}
break
     case 'allmenu':
        ptod = "6282138919347@s.whatsapp.net"
        stod = `${sender}`
        uwu = '```'
        		var ra2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
			 stst = await helga.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
menu = `
Hai Kak ${pushname}, ${tampilUcapan}
Silahkan Ketik Command Berikut
Untuk Menampilkan Menu Bot


_⫹⫺🎯Library : Baileys-script_
_⫹⫺🍰Version : 1.0.0_
_⫹⫺🍧Language : Javascript_
_⫹⫺📯Pengembang : Radja Aditya_
_⫹⫺💬Time : ${timeWib} WIB_



╭───── • ✩ • ─────
├ ➽ *DOWNLOAD MENU 📥* 
│ ❑ ${prefix}ytmp4 < link >
│ ❑ ${prefix}mediafire < link >
│ ❑ ${prefix}ytmp3 < link >
│ ❑ ${prefix}tiktok < link >
│ ❑ ${prefix}igdl < link >
╰────

╭───── • ✩ • ─────
├ ➽ *Sticker Menu 📌* 
│ ❑ ${prefix}take
│ ❑ ${prefix}swm
│ ❑ ${prefix}sticker [ Reply ]
│ ❑ ${prefix}sgif 
│ ❑ ${prefix}toimg [ Reply/Video ]
│ ❑ ${prefix}attp
╰───── • ✩ • ─────

╭───── • ✩ • ─────
├ ➽ *RANDOM TEXT* 📃
│ ❑ ${prefix}quotes
│ ❑ ${prefix}quotesyt
│ ❑ ${prefix}quotesislami
│ ❑ ${prefix}quoteskanye
│ ❑ ${prefix}katasindiran
│ ❑ ${prefix}pantun
│ ❑ ${prefix}katailham
│ ❑ ${prefix}katabucin
│ ❑ ${prefix}katabijak
╰───── • ✩ • ─────

╭───── • ✩ • ─────
├ ➽ *INFO MENU ℹ️* 
│ ❑ ${prefix}infogempa
╰───── • ✩ • ─────

╭───── • ✩ • ─────
├ ➽ *INFORMASI ℹ️*
│ ❑ ${prefix}ping
│ ❑ ${prefix}speed
│ ❑ ${prefix}runtime
│ ❑ ${prefix}tes
│ ❑ ${prefix}bugreport [ query ]
╰───── • ✩ • ─────

╭───── • ✩ • ─────
├ ➽ *VOCAL MENU 💢* 
│ ❑ ${prefix}huluh
│ ❑ ${prefix}holoh
│ ❑ ${prefix}halah
│ ❑ ${prefix}hilih
╰───── • ✩ • ─────
 
 ╭───── • ✩ • ─────
├ ➽ *TO MENU* 🔘
│ ❑ ${prefix}toimg < ReplyStiker >
╰───── • ✩ • ─────

 ╭───── • ✩ • ─────
├ ➽ *SEARCHING MENU* 🔎 
│ ❑ ${prefix}pinterest < Query >
│ ❑ ${prefix}playstore < nama apk >
│ ❑ ${prefix}lirik < judul lagu >
│ ❑ ${prefix}wikipedia < query >
│ ❑ ${prefix}kbbi < query >
╰───── • ✩ • ─────
 
 ╭───── • ✩ • ─────
├ ➽ *RANDOM IMAGE* 🖼️
│ ❑ ${prefix}loli
│ ❑ ${prefix}meme
│ ❑ ${prefix}ppcouple
╰───── • ✩ • ─────

╭───── • ✩ • ─────
├ ➽ *FUN MENU 🥴* 
│ ❑ ${prefix}artinama
│ ❑ ${prefix}artimimpi
│ ❑ ${prefix}cerpen
╰───── • ✩ • ─────

╭───── • ✩ • ─────
├ ➽ *ASUPAN MENU* 🗿
│ ❑ ${prefix}62
│ ❑ ${prefix}santuy
│ ❑ ${prefix}ukhti
│ ❑ ${prefix}bocil
│ ❑ ${prefix}ghea
│ ❑ ${prefix}rikagusriani
╰───── • ✩ • ─────
 
 ╭───── • ✩ • ─────
├ ➽ *ISLAM MENU* ☪️
│ ❑ ${prefix}jadwalsolat <nama lokasi>
╰───── • ✩ • ─────
 
 ╭───── • ✩ • ─────
├ ➽ *HEWAN MENU* 🦴
│ ❑ ${prefix}kucing
│ ❑ ${prefix}dog
│ ❑ ${prefix}fox
│ ❑ ${prefix}burung
│ ❑ ${prefix}panda
│ ❑ ${prefix}redpanda
│ ❑ ${prefix}koala
╰───── • ✩ • ─────

 ╭───── • ✩ • ─────
├ ➽ *MAKER MENU* 🖼️
│ ❑ ${prefix}jadwalsolat <nama lokasi>
│ ❑ ${prefix}magma <text>
│ ❑ ${prefix}glossy <text>
│ ❑ ${prefix}luxury <text>
│ ❑ ${prefix}vintage <text>
│ ❑ ${prefix}writing <text>
│ ❑ ${prefix}engraved <text>
│ ❑ ${prefix}holograpic <text>
│ ❑ ${prefix}fabric <text>
│ ❑ ${prefix}wicker <text>
│ ❑ ${prefix}larva <text>
│ ❑ ${prefix}toxic <text>
│ ❑ ${prefix}stroberi <text>
│ ❑ ${prefix}ice <text>
│ ❑ ${prefix}rusty <text>
│ ❑ ${prefix}koi <text>
│ ❑ ${prefix}bread <text>
│ ❑ ${prefix}honey <text>
│ ❑ ${prefix}captain <text>
│ ❑ ${prefix}gradien <text>
│ ❑ ${prefix}christmas <text>
│ ❑ ${prefix}3dstone <text>
│ ❑ ${prefix}1917 <text>
│ ❑ ${prefix}thunder2 <text>
│ ❑ ${prefix}hallowen <text>
│ ❑ ${prefix}blood <text>
│ ❑ ${prefix}black-pink <text>
│ ❑ ${prefix}astone <text>
│ ❑ ${prefix}art-papper <text>
│ ❑ ${prefix}sky-tex <text>
│ ❑ ${prefix}neon-devil <text>
│ ❑ ${prefix}deluxe-silver <text>
│ ❑ ${prefix}glue-text <text>
│ ❑ ${prefix}neon-light <text>
│ ❑ ${prefix}hallowen-text <text>
│ ❑ ${prefix}water-color <text>
│ ❑ ${prefix}multi-color <text>
│ ❑ ${prefix}horor-blood <text>
│ ❑ ${prefix}drop-water <text>
│ ❑ ${prefix}harry-potter <text>
│ ❑ ${prefix}grafity-text <text>
│ ❑ ${prefix}joker-logo <text>
│ ❑ ${prefix}broken-glass <text>
╰───── • ✩ • ─────

╭───── • ✩ • ─────
├ ➽ *WSFW Menu* 
│ ❑ ${prefix}awoo
│ ❑ ${prefix}blowjob
│ ❑ ${prefix}hentai
│ ❑ ${prefix}megumin
│ ❑ ${prefix}neko
│ ❑ ${prefix}trapnime
│ ❑ ${prefix}loli
│ ❑ ${prefix}husbu
│ ❑ ${prefix}milf
│ ❑ ${prefix}cosplay
│ ❑ ${prefix}ass
│ ❑ ${prefix}ahegao
│ ❑ ${prefix}bdsm
│ ❑ ${prefix}cuckold
│ ❑ ${prefix}cum
│ ❑ ${prefix}ero
│ ❑ ${prefix}galsses
│ ❑ ${prefix}gangbang
│ ❑ ${prefix}yuri
│ ❑ ${prefix}jahy
│ ❑ ${prefix}thighs
│ ❑ ${prefix}panties
╰───── • ✩ • ─────

╭───── • ✩ • ─────
├ ➽ *WSFW Menu v2 💣* 
│ ❑ ${prefix}nsfwneko
│ ❑ ${prefix}nsfwkuni
│ ❑ ${prefix}nsfwcumsluts
│ ❑ ${prefix}nsfwboobs
│ ❑ ${prefix}nsfwavatar
│ ❑ ${prefix}nsfwgirlsolo
│ ❑ ${prefix}nsfwtits
│ ❑ ${prefix}nsfwpussyart
│ ❑ ${prefix}nsfwkemonomimi
│ ❑ ${prefix}nsfwclassic
│ ❑ ${prefix}nsfweroneko
│ ❑ ${prefix}nsfwholo
│ ❑ ${prefix}nsfwerokemonomimi
│ ❑ ${prefix}nsfwero
│ ❑ ${prefix}nsfwkitsune
│ ❑ ${prefix}nsfwanal
│ ❑ ${prefix}nsfwketa
│ ❑ ${prefix}nsfwhentai
│ ❑ ${prefix}nsfwfutanari
│ ❑ ${prefix}nsfwholoero
│ ❑ ${prefix}nsfwcumarts
│ ❑ ${prefix}nsfwblowjob
│ ❑ ${prefix}nsfwspank
│ ❑ ${prefix}nsfwtrap
│ ❑ ${prefix}nsfwlesbian
│ ❑ ${prefix}nsfwbj
╰───── • ✩ • ─────

╭───── • ✩ • ─────
├ ➽ *Group Menu 🛠️* 
│ ❑ ${prefix}nsfw
│ ❑ ${prefix}group open / close
│ ❑ ${prefix}antilink on / off
│ ❑ ${prefix}antiwame on / off
│ ❑ ${prefix}welcome on / off
│ ❑ ${prefix}linkgc
│ ❑ ${prefix}add
│ ❑ ${prefix}kick
│ ❑ ${prefix}creategroup
│ ❑ ${prefix}sticktag
│ ❑ ${prefix}promote
│ ❑ ${prefix}demote
│ ❑ ${prefix}promoteall
│ ❑ ${prefix}demoteall
│ ❑ ${prefix}revoke
│ ❑ ${prefix}leave
╰───── • ✩ • ─────

╭───── • ✩ • ─────
├ ➽ *Owner Menu 🤴*
│ ❑ ${prefix}setmenu
│ ❑ ${prefix}setallmenu
│ ❑ ${prefix}setprefix multi / nopref
│ ❑ ${prefix}hidetag
│ ❑ ${prefix}mode
│ ❑ ${prefix}bc
│ ❑ ${prefix}setbio
│ ❑ ${prefix}setname
│ ❑ ${prefix}self
│ ❑ ${prefix}public
╰───── • ✩ • ─────


╭───── • ✩ • ─────
├ ➽ *Sticker Menu 📌* 
│ ❑ ${prefix}take
│ ❑ ${prefix}swm
│ ❑ ${prefix}sticker [ Reply ]
│ ❑ ${prefix}sgif 
│ ❑ ${prefix}toimg [ Reply/Video ]
│ ❑ ${prefix}attp
╰───── • ✩ • ─────

║▌│█║▌│ █║▌│█│║▌║
║▌│█║▌│ █║▌│█│║▌║
`
sendButLocation(from, `${menu}`, `${uwu}Jangan Lupa Follow\n\nInstagram : @itschandra_28${uwu}`, {jpegThumbnail:ofrply}, [{buttonId:`.about`,buttonText:{displayText:'ABOUT🌱'},type:1}], {contextInfo: { mentionedJid: [ptod,dtod,otod,stod]}})
break
case 'menu':
        case 'help':
        ptod = "6281262163214@s.whatsapp.net"
        stod = `${sender}`
        uwu = '```'
       stst = await helga.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
       menu = `Hai Kak ${pushname}, ${tampilUcapan}
Silahkan Pilih Untuk Menampilkan Menu Bot

_⫹⫺🐋Status :  ${isOwner ? 'Owner' : 'User'}_
_⫹⫺🧸Nama : ${pushname}_
_⫹⫺📬Bio User : ${stst}_
_⫹⫺🧰Nomor : @${stod.split('@')[0]}_
`
sendButLocation(from, `${menu}`, `${uwu}follow : @itschandra_28\nBase Ini Sedang Dalam Tahap Pengembangan, Gunakan Bot Dengan Sebaik Mungkin!${uwu}`, {jpegThumbnail:ofrply}, [{buttonId:`.allmenu`,buttonText:{displayText:'ALL MENU📝'},type:1},{buttonId:`.owner`,buttonText:{displayText:'OWNER🍁'},type:1}], {contextInfo: { mentionedJid: [ptod,dtod,otod,stod]}})
break
case 'bugreport':
              if (args.length < 1) return reply(`Ketik ${prefix}bugreport [fiturnya] [Error Nya Gimana]`) 
              teks = args.join(' ')
              reply('Terima Kasih Telah Melaporkan Bug Pada Owner, Jika Itu Sekedar Iseng Maka Akan Di Ban Oleh Bot!')
              helga.sendMessage('6282138919347@s.whatsapp.net',`*Bug Report:* ${teks}`, text)
              break
              case 'verify':
if (isRegistered) return reply(mess.success)
const serialUser = createSerial(18)
	        veri = sender
	        _registered.push(sender)
	        fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
	        addRegisteredUser(sender, serialUser)
	         const jancok = `    Verify Sukses
	         
- Nama : ${pushname}
- Nomor : @${sender.split('@')[0]}
- Seri: ${serialUser}
- Pengguna: ${_registered.length}
`
gbutsan = [
{buttonId:`menu`,buttonText:{displayText:'MENU'},type:1},
]
mhan = await helga.prepareMessage(from, ofrply, image, {thumbnail: ofrply})
const sendBtnVeryy = {
imageMessage: mhan.message.imageMessage,
contentText:`${jancok}`,
footerText:'Terimakasih Sudah Mendaftar\n*©itschandra*',  
buttons: gbutsan,
headerType: 4
}
helga.sendMessage(from, sendBtnVeryy, MessageType.buttonsMessage, {quoted:ftrol, contextInfo: { mentionedJid: [sender]}})
	         console.log(color('[Verify]'), color(time, 'yellow'), 'Serial:', color(serialUser, 'Red'), 'in', color(sender || groupName))
	    // console.log(e)
        break
        
    //── 「 Nsfw 」 ──//        
        
case  'awoo':
reply('[~] Permintaan Di Prosess...')
anu = await fetchJson(`https://waifu.pics/api/sfw/awoo`)
buffer = await getBuffer(anu.url)
helga.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./helga.jpg')})
break
case  'blowjob':
reply('[~] Permintaan Di Prosess...')
anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
buffer = await getBuffer(anu.url)
helga.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./helga.jpg')})
break
case  'hentai': 
reply('[~] Permintaan Di Prosess...')
anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(anu.url)
helga.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./helga.jpg')})
break
case  'megumin':
reply('[~] Permintaan Di Prosess...')
anu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
buffer = await getBuffer(anu.url)
helga.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./helga.jpg')})
break
case  'neko':
reply('[~] Permintaan Di Prosess...')
anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(anu.url)
helga.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./helga.jpg')})
break
case  'trapnime':
reply('[~] Permintaan Di Prosess...')
anu = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
buffer = await getBuffer(anu.url)
helga.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./helga.jpg')})
break
case 'nsfw':
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}nsfw 1`)
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('Sudah Aktif Kak')
						nsfww.push(from)
						fs.writeFileSync('./database/nsfww.json', JSON.stringify(nsfww))
						reply('Sukses mengaktifkan fitur nsfw')
					} else if (Number(args[0]) === 0) {
						if (!isNsfw) return reply('Sudah Mati Kak')
						var ini = nsfww.indexOf(from)
						nsfww.splice(ini, 1)
						fs.writeFileSync('./database/nsfww.json', JSON.stringify(nsfww))
						reply('Sukses menonaktifkan fitur nsfw')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk mematikan')
					}
					break
case 'loli':
       case 'husbu':
       case 'milf':
       case 'cosplay':
       case 'wallml':
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = ( await helga.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Radja Aditya', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await helga.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              helga.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
              
        //── 「 Owner Menu 」 ──//          
              
              case 'setmenu':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if(args[0] == 'ori'){
menusimpel = true
reply('Sucsess')
}else if(args[0] == 'simpel'){
menusimpel = false
reply('Sucsess')
}else if (!c) {
anu =`Silahkan pilih salah satu di bawah`
 buttons = [{buttonId: 'setmenu ori', buttonText: {displayText: 'ORI'}, type: 1},{buttonId: 'setmenu simpel', buttonText: {displayText: 'SIMPEL'}, type: 1}]
const skuygelud = {
    contentText: `${anu}`,
    footerText: '*©Helga Zex*',
    buttons: buttons,
    headerType: 1
}
await helga.sendMessage(from, skuygelud, MessageType.buttonsMessage, {quoted: ftrol})
}
break
case 'setallmenu':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if(args[0] == 'ori'){
menuall = true
reply('Sucsess')
}else if(args[0] == 'simpel'){
menuall = false
reply('Sucsess')
}else if (!c) {
anu =`Silahkan pilih salah satu di bawah`
 buttons = [{buttonId: 'setallmenu ori', buttonText: {displayText: 'ORI'}, type: 1},{buttonId: 'setallmenu simpel', buttonText: {displayText: 'SIMPEL'}, type: 1}]
const skuygf = {
    contentText: `${anu}`,
    footerText: '*Radja Aditya*',
    buttons: buttons,
    headerType: 1
}
await helga.sendMessage(from, skuygf, MessageType.buttonsMessage, {quoted: ftrol})
}
break
//Sampai sini
case 'jadibot':
menu = `Enak aja lu mau numpang, sewa lah :v`
sendButLocation(from, `Enak aja lu mau numpang, sewa lah :v`, "@itshandra_28", {jpegThumbnail:ofrply}, [{buttonId:`${prefix}sewa`,buttonText:{displayText:'SEWA 🎟️'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
break
case 'stopjadibot':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
try {
reply('Oke')
fs.unlinkSync(`./sampah/${sender}.json`)
client.close()
} catch {
reply('Oke')
client.close()
}
break
case 'owner':
	case 'creator':
case 'developer':
		case 'author':
let ini_list = []
for (let i of ownerNumber) {
const vname = helga.contacts[i] != undefined ? helga.contacts[i].vname || helga.contacts[i].notify : undefined
ini_list.push({
"displayName": `Author ${NamaBot}`,
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;𝐇𝐞𝐥𝐠𝐚 𝐙𝐞𝐱!;;;\nFN:${vname ? `${vname}` : `${helga.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
helga.sendMessage(from, {
"displayName": `Developer ${NamaBot}`,
"contacts": ini_list 
}, 'contactsArrayMessage', { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
break

    //── 「 Download Menu 」 ──//

case 'ig':
case 'igdl':
case 'instagram':
if (!c) return reply('Linknya?')
var { igDownloader } = require('./lib/igdown')
   res = await igDownloader(`${c}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from,`${res.result.link}`,`${res.result.desc}`)
                    break
case 'tiktok': 
if (!q) return
reply('[~] Permintaan Di Prosess...')
tiktok1 = await fetchJson(`https://rest2yeriko.herokuapp.com/api/tiktok/?url=${q}&apikey=Yuzzu`)
tiktok4 = await getBuffer(tiktok1.result.nowatermark)
helga.sendMessage(from, tiktok4, video, {quoted: mek, caption:'ғᴏʟʟᴏᴡ ɪɢ : @𝚒𝚝𝚜𝚌𝚑𝚊𝚗𝚍𝚛𝚊_28'})
break

case 'mediafire':
if (!q) return
reply('[~] Permintaan Di Prosess...')
awokkk = await fetchJson(`https://api.dapuhy.xyz/api/socialmedia/mediafire?url=${q}&apikey=rcYersFHsr`)
sendFileFromUrl(awokkk.result.link, document, {mimetype: awokkk.result.mime, filename: awokkk.result.nama, quoted: mek})
break

                case 'antidelete':
      if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
           if (c === 'on'){
             antidelete = false
                    reply(`Berhasil mengaktifkan antidelete`)
                } else if (c === 'off'){
                    antidelete = true
                    reply(`Berhasil menonaktifkan antidelete`)
                } else if (!c) {
                    anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
const buttons = [{buttonId: 'antideletee on', buttonText: {displayText: 'ON✔️'}, type: 1},{buttonId: 'antideletee off', buttonText: {displayText: 'OFF✖️'}, type: 1}]
const buttonMessage = {
    contentText: `${anu}`,
    footerText: '*Radja Aditya*',
    buttons: buttons,
    headerType: 1
}
await helga.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {quoted: ftrol})
                }
                break
                case 'setprefix':
      if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
      if (args.length < 1) return reply(`Contoh ${prefix + command} multi/nopref`)
           if (c === 'multi'){
              multi = true
                    reply(`Berhasil mengubah prefix ke ${c}`)
                } else if (c === 'nopref'){
                    multi = false
                    nopref = true
                    reply(`Berhasil mengubah prefix ke ${c}`)
                } else {
                    multi = false
                    nopref = false
                    prefa = `${c}`
                    reply(`Berhasil mengubah prefix ke ${c}`)
					}
					break
        case 'test':
				case 'cek':
				case 'tes':
if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
				runtime = process.uptime()
				reply(`- Active!\n${waktu(runtime)}`)
				break
case 'mode':
buttonss = [{buttonId: `public`, buttonText: {displayText: 'PUBLIC👥'}, type: 1},{buttonId: `self`, buttonText: {displayText: 'SELF👤'}, type: 1}]
const buMess = {
    contentText: "SELF/PUBLIC",
    footerText: 'Silahkan Pilih Saah Satu',
    buttons: buttonss,
    headerType: 1
}
await helga.sendMessage(from, buMess, MessageType.buttonsMessage, {quoted: ftrol})
break
				case 'public':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
			publik = true
				reply('Sukses mengubah mode self ke public')
			break
			case 'self':
			if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				publik = false
				reply('Sukses mengubah mode public ke self')
			break
				case 'antiwame':
	        if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args[0] === 'on') {
						if (isAntiWame) return reply('Sudah Aktif Kak')
						antilink.push(from)
						fs.writeFileSync('./database/antiwame.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan fitur 4')
						helga.sendMessage(from, `ALLERT!!! Group ini sudah di pasang anti wa.me\nJika Kamu Melanggar Maka Akan Saya Tendang`, text)
					} else if (args[0] === 'off') {
						if (!isAntiWame) return reply('Sudah Mati Kak')
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antiwame.json', JSON.stringify(antilink))
						reply('Sukses menonaktifkan fitur antiwame')
					} else if (!c){
 anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
punten = [{buttonId: 'antiwame off', buttonText: {displayText: 'OFF✖️'}, type: 1},{buttonId: 'antiwame on', buttonText: {displayText: 'ON✔️'}, type: 1}]
const btnasu = {
    contentText: `${anu}`,
    footerText: '*_Radja Aditya*',
    buttons: punten,
    headerType: 1
}
await helga.sendMessage(from, btnasu, MessageType.buttonsMessage, {quoted: ftrol})
					}
					break
				 case 'antilink':
              if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
	        if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args[0] === 'on') {
						if (isAntiLink) return reply('Sudah Aktif Kak')
						antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan fitur antilink')
						helga.sendMessage(from, `ALLERT!!! Group ini sudah di pasang anti link\nJika Kamu Melanggar Maka Akan Saya Tendang`, text)
					} else if (args[0] === 'off') {
						if (!isAntiLink) return reply('Sudah Mati Kak')
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukses menonaktifkan fitur antilink')
					} else if (!c){
 anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
punten = [{buttonId: 'antilink off', buttonText: {displayText: 'OFF✖️'}, type: 1},{buttonId: 'antilink on', buttonText: {displayText: 'ON✔️'}, type: 1}]
const btnasu = {
    contentText: `${anu}`,
    footerText: '*Radja Aditya*',
    buttons: punten,
    headerType: 1
}
await helga.sendMessage(from, btnasu, MessageType.buttonsMessage, {quoted: ftrol})
					}
					break 
				case 'demote':
              if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
			demote = mek.message.extendedTextMessage.contextInfo.participant
		    helga.groupDemoteAdmin(from, [demote])
						reply('Sukses demote admin')
						break
					case 'promote':
              if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				  if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
			promote = mek.message.extendedTextMessage.contextInfo.participant
		    helga.groupMakeAdmin(from, [promote])
						reply('Sukses promote member')
						break
				case 'linkgrup':
				case 'linkgroup':
				case 'linkgc':
              if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
				if (!isGroup) return reply(mess.only.group)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					linkgc = await helga.groupInviteCode(from)
					yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink grup ${groupName}`
					helga.sendMessage(from, yeh, text, { quoted: mek })
					break
					case 'resetlinkgc':
         case 'resetlinkgroup':
         case 'revoke':
              if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          json = ['action', 'inviteReset', from]
         helga.query({json, expect200: true})
          reply('Sukses Mereset Link Group')
         break
case 'gc': case 'group':
buttonss = [{buttonId: `opengc`, buttonText: {displayText: 'OPEN'}, type: 1},{buttonId: `closegc`, buttonText: {displayText: 'CLOSE'}, type: 1}]
const bMess = {
    contentText: 'OPEN/CLOSE\n\nGroup',
    footerText: 'Silahkan Pilih Saah Satu',
    buttons: buttonss,
    headerType: 1
}
await helga.sendMessage(from, bMess, MessageType.buttonsMessage, {quoted: ftrol})
break
					case 'opengc':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                   reply(`Sukses membuka grup ${groupName}`)
						helga.groupSettingChange(from, GroupSettingChange.messageSend, false)
						break
						case 'closegc':
						if (!isGroup) return reply(mess.only.group)
						if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
						reply(`Sukses menutup grup ${groupName}`)
						helga.groupSettingChange(from, GroupSettingChange.messageSend, true)
					break
				case 'demoteall':
		if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                helga.groupDemoteAdmin(from, members_id)
                break
                case 'promoteall':
		if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                helga.groupMakeAdmin(from, members_id)
                break
				case 'leave':
				if (!isGroup) return reply(mess.only.group)
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				helga.updatePresence(from, Presence.composing)
				helga.groupLeave(from)
						break
				case 'bc':
					helga.updatePresence(from, Presence.composing)
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Teksnya?')
					anu = await helga.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await helga.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							helga.sendMessage(_.jid, buff, image, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await helga.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							helga.sendMessage(_.jid, buff, video, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await helga.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							helga.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: finv, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${body.slice(4)}` })
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
					} else {
						for (let _ of anu) {
							//sendMess(_.jid, `${body.slice(4)}`)
buttons = [{buttonId: `menu`, buttonText: {displayText: 'MENU'}, type: 1},{buttonId: `sewa`, buttonText: {displayText: 'SEWA BOT'}, type: 1}]
const btnbc = {
    contentText: `${body.slice(4)}`,
    footerText: '*Radja Aditya*',
    buttons: buttons,
    headerType: 1
}
await helga.sendMessage(_.jid, btnbc, MessageType.buttonsMessage, {quoted: ftrol})
						}
						reply(`Sukses mengirim Broadcast:\n${body.slice(4)}`)
					}
					break
				case 'ttp4':  
				case 'ttp2':  
				case 'ttp3':  
				case 'ttp':  
				case 'attp':
              if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
					if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n*${prefix}${command}* RadjaAditya`)
					atetepe = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=itschandra&text=${encodeURIComponent(c)}`)
					helga.sendMessage(from, atetepe, sticker, { quoted: mek })
					break             
            case 'hidetag':
            if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
            ht = body.slice(9)
                members_id = []
				for (let mem of groupMembers) {
					members_id.push(mem.jid)
				}
                mentions(ht, members_id, false)
                break
                case 'ytmp3':
            if (args.length < 1) return reply('Link Nya Mana ?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
            teks = args.join(' ')
            reply('[~] Permintaan Di Prosess...')
            res = await y2mateA(teks).catch(e => {
            reply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
})
            result = `*YOUTUBE MP3 🎵*

*Data Berhasil Didapatkan !!*
⌖ _Title : ${res[0].judul}_
⌖ _Ext : MP3_
⌖ _Size : ${res[0].size}_

\`\`\`Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit\`\`\``

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: mek}).then((lalu) => {
            sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
})
            break
case 'ytmp4':
            if (args.length < 1) return reply('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
            teks = args.join(' ')
            reply('[~] Permintaan Di Prosess...')
            res = await y2mateV(teks).catch(e => {
            reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')
})
            result = `*YOUTUBE MP4 🎥*

*Data Berhasil Didapatkan !!*
⌖ _Title : ${res[0].judul}_
⌖ _Ext : MP4_
⌖ _Size : ${res[0].size}_

\`\`\`Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit\`\`\``

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: mek}).then((lalu) => {
            sendFileFromUrl(res[0].link, video, {quoted: mek, mimetype: 'video/mp4', filename: res[0].output})
})
            break
            case 'exif':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					const exifff = `${args.join(' ')}`
					const namaPack = exifff.split('|')[0]
					const authorPack = exifff.split('|')[1]
					exif.create(namaPack, authorPack)
					await reply('Done gan')
				break
			case 'sticker':
			case 'stiker':
			case 's':
			case 'stickergif':
			case 'stikergif':
			case 'sgif':
						if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await helga.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Succes Gan')
								buffer = fs.readFileSync(ran)
								helga.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						}else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await helga.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								helga.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar/video/gif dengan caption \n${prefix}sticker (durasi sticker video 1-9 detik)`)
					}
					break
					case 'stickerwm':
					case 'swm':
              if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							ppp = `${args.join(' ')}`
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await helga.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							const packname1 = ppp.split('|')[0]
							const author1 = ppp.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											helga.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							wmsti = body.slice(11)
							if (!wmsti.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await helga.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							const packname1 = wmsti.split('|')[0]
							const author1 = wmsti.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							reply('[~] Permintaan Di Prosess...')
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											helga.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
				                  case 'u':
			     	reply ('Mohon Menunggu...')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await helga.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Eror Kak')
						buffer = fs.readFileSync(ran)
						helga.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih kak... '})
						fs.unlinkSync(ran)
					})
					break
						break
			case 'speed':
			case 'ping':
					const timestampi = speed();
					const latensyi = speed() - timestampi
					reply(`Speed: ${latensyi.toFixed(4)} Second`)
					break
				case 'return':
				if (!isOwner) return reply(mess.only.ownerB)
					return helga.sendMessage(from, JSON.stringify(eval(body.slice(8))), text, {quoted: mek})
					if (err) return helga.sendMessage(from, `root @helga ilham:~ ${err}`, text, { quoted: mek })
                 break
                 case 'toimg':
				case 'tomedia':
					if (!isQuotedSticker) return reply('Reply stiker nya')
					if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await helga.downloadAndSaveMediaMessage(encmedia)
						const upload = await uploadimg(media, Date.now() + '.webp')
						console.log(upload)
						reply(`${upload.result.image}`)
						const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
						console.log(rume.data)
						sendMediaURL(from, rume.data.result)
					} else {
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await helga.downloadAndSaveMediaMessage(encmedia)
						ran = '1000.png'
						exec(`ffmpeg -i ${media} ${ran}`, (err) => {
							fs.unlinkSync(media)
							if (err) return reply(mess.error.api)
							buffer = fs.readFileSync(ran)
							helga.sendMessage(from, buffer, image, {quoted: mek})
							fs.unlinkSync(ran)
						})
					}
					break
case 'loli2': 
reply('[~] Permintaan Di Prosess...')
anu = await fetchJson(`https://apidhani.herokuapp.com/api/anime/loli?apikey=NisaaCantik`)
loli = await getBuffer(anu.result)
helga.sendMessage(from, loli, image, {quoted: mek, caption: '*Nih Kak* _Loli_ nya '})
break

case 'meme': 
reply('[~] Permintaan Di Prosess...')
anu = await fetchJson(`https://apidhani.herokuapp.com/api/random/meme?apikey=NisaaCantik`)
meme = await getBuffer(anu.result.url)
helga.sendMessage(from, meme, image, {quoted: mek, caption: '*Nih Kak* _Meme_ nya'})
break

case 'quotes':
case 'qoutes':
anu = await fetchJson(`https://apidhani.herokuapp.com/api/random/quotes?apikey=NisaaCantik`)
dhani = (anu.result.quotes)
sendButMessage(from, dhani, `Klik *NEXT* Untuk Ke Quotes Selanjutnya`, [
{
buttonId: `.quotes`,
buttonText: {
displayText: `NEXT➡️`,
},
type: 1,
},]);

break
case 'pantun':
case 'katabijak':
case 'katailham':
case 'katasindiran':
case 'katabucin':
oke = await fetchJson(`https://apidhani.herokuapp.com/api/random/${command}?apikey=NisaaCantik`)
dhani = (oke.result.anu)
sendButMessage(from, dhani, `Klik *NEXT* Untuk Ke ${command} Selanjutnya`, [
{
buttonId: `.${command}`,
buttonText: {
displayText: `NEXT➡️`,
},
type: 1,
},]);
break

case 'quotesislami':
case 'qoutesislami':
anu = await fetchJson(`https://apidhani.herokuapp.com/api/random/quotes/muslim?apikey=NisaaCantik`)
dhani = (anu.result.text_id)
sendButMessage(from, dhani, `Klik *NEXT* Untuk Ke Quotes Selanjutnya`, [
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `NEXT➡️`,
},
type: 1,
},]);
break

case 'quoteskanye':
anu = await fetchJson(`https://apidhani.herokuapp.com/api/random/quotes/kanye?apikey=NisaaCantik`)
dhani = (anu.result.text_id)
sendButMessage(from, dhani, `Klik *NEXT* Untuk Ke Quotes Selanjutnya`, [
{
buttonId: `.${command}`,
buttonText: {
displayText: `NEXT➡️`,
},
type: 1,
},]);
break;

case 'qoutesyt':
case 'quotesyt':
if(!q)
reply(`Mohon Menunggu.....`)
cantik = await getBuffer(`https://api.dapuhy.xyz/api/randomimage/quotesyt?apikey=rcYersFHsr`)
sendButImage(from, `ini dia *${command}* nya kak !!`, `LAGI? KLIK BUTTON DI BAWAH⬇️⬇️`, cantik, [{buttonId: `.${command}`,buttonText: {displayText: `AGAIN➡️`,},type: 1,},])
break

case 'darkjokes':
if(!q)
reply('[~] Permintaan Di Prosess...')
cantik = await getBuffer(`https://api.dapuhy.xyz/api/randomimage/darkjokes?apikey=rcYersFHsr`)
sendButImage(from, `ini dia *${command}* nya kak !!`, `LAGI? KLIK BUTTON DI BAWAH⬇️⬇️`, cantik, [{buttonId: `.${command}`,buttonText: {displayText: `AGAIN➡️`,},type: 1,},])
break

case 'nsfwneko':
case 'nsfwlesbian':
case 'nsfwkuni':
case 'nsfwcumsluts':
case 'nsfwclassic':
case 'nsfwboobs':
case 'nsfwbj':
case 'nsfwanal':
case 'nsfwavatar':
case 'nsfwyuri':
case 'nsfwtrap':
case 'nsfwtits':
case 'nsfwgirlsolo':
case 'nsfwpussyart':
case 'nsfwkemonomimi':
case 'nsfwkitsune':
case 'nsfwketa':
case 'nsfwholo':
case 'nsfwholoero':
case 'nsfwhentai':
case 'nsfwfutanari':
case 'nsfwfemdom':
case 'nsfwero':
case 'nsfwerokitsune':
case 'nsfwerokemonomimi':
case 'nsfweroneko':
case 'nsfwcumarts':
case 'nsfwblowjob':
case 'nsfwspank':
if(!q)
reply('[~] Permintaan Di Prosess...')
cantik = await getBuffer(`https://api.dapuhy.xyz/api/nsfw/${command}?apikey=rcYersFHsr`)
sendButImage(from, `ini dia *${command}* nya kak !!`, `LAGI? KLIK BUTTON DI BAWAH⬇️⬇️`, cantik, [{buttonId: `.${command}`,buttonText: {displayText: `AGAIN➡️`,},type: 1,},])
break

case 'ass': case 'ahegao': case 'bdsm': case 'blowjob': case 'cuckold': case 'cum': case 'ero': case 'femdom': case 'foot': case 'gangbang': case 'glasses': case 'hentai': case 'jahy': case 'masturbation': case 'orgy': case 'panties': case 'pussy': case 'thighs': case 'yuri': 
reply('[~] Permintaan Di Prosess...')
bikep = await fetchJson(`https://rest2yeriko.herokuapp.com/api/nsfw/${command}?apikey=Yuzzu`)
bokep = await getBuffer(bikep.result)
sendButImage(from, `ini dia *${command}* kak !!`, `MAU LAGI?KLIK BUTTON DI BAWAH⬇️⬇️`, bokep, [{buttonId: `.${command}`,buttonText: {displayText: `AGAIN➡️`,},type: 1,},]);
break

case 'sfwwallpaper':
if(!q)
reply('[~] Permintaan Di Prosess...')
cantik = await getBuffer(`https://api.dapuhy.xyz/api/sfw/${command}?apikey=rcYersFHsr`)
sendButImage(from, `ini dia *${command}* kak !!`, `LAGI? KLIK BUTTON DI BAWAH⬇️⬇️`, cantik, [{buttonId: `${prefix}${command}`,buttonText: {displayText: `AGAIN➡️`,},type: 1,},])
break

case 'art-papper':
case 'broken-glass':
case 'neon-light':
case 'hallowen-text':
case 'magma':
case 'glossy':
case 'water-color':
case 'multi-color':
case 'sky-tex':
case 'neon-devil':
case 'luxury':
case 'vintage':
case 'writing':
case 'engraved':
case 'glue-text':
case 'holograpic':
case 'deluxe-silver':
case 'fabric':
case 'wicker':
case 'larva':
case 'toxic':
case 'stroberi':
case 'koi':
case 'bread':
case 'horor-blood':
case 'honey':
case 'ice':
case 'rusty':
case 'captain':
case 'gradien':
case 'christmas':
case 'drop-water':
case 'black-pink':
case 'harry-potter':
case '3dstone':
case '1917':
case 'thunder2':
case 'joker-logo':
case 'hallowen':
case 'blood':
case 'astone':
case 'grafity-text':
if (!c)return reply(`Teks Nya Mana ?\nContoh : ${prefix + command} Itschandra`)
			reply('[~] Permintaan Di Prosess...')						
			nyz5 = await fetchJson(`https://server-api-rey.herokuapp.com/api/textpro/${command}?text=${c}&apikey=apirey`) 
			nyz4 = await getBuffer(nyz5.result)
			helga.sendMessage(from, nyz4, image, {caption:`Nih *${command}* nya sudah jadi...`,quoted:mek}) 					
			break
			
case 'wiki': case 'wikipedia':
if (!q) return
reply('[~] Permintaan Di Prosess...')
ilmu = await fetchJson(`https://rest2yeriko.herokuapp.com/api/wikipedia?search=${q}&apikey=Yuzzu`)
ilmu2 = `*Nama* : ${q}\n*Hasil* : ${ilmu.result.result}`
reply(ilmu2)
break

case 'kbbi':
if (!q) return
reply('[~] Permintaan Di Prosess...')
ilmu3 = await fetchJson(`https://rest2yeriko.herokuapp.com/api/kbbi?kata=${q}&apikey=Yuzzu`)
ilmu4 =`*Nama* : ${q}\n*Hasil* : ${ilmu3.result.arti}`
reply(ilmu4)
break

case 'pinterest':
case 'pinrest':
if (!q) return
reply('[~] Permintaan Di Prosess...')
foto = await fetchJson(`https://rest2yeriko.herokuapp.com/api/pinterest/?text=${q}&apikey=Yuzzu`)
fotoget = await getBuffer(foto.result)
sendButImage(from, `Foto *${q}* Nya Kak`, `Lagi? Klik Button Nya Kak⬇️`, fotoget, [{buttonId: `.pinterest ${q}`,buttonText: {displayText: `AGAIN➡️`,},type: 1,},])
break

case 'cerpen': 
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cerpen`)                   
                   anu1 = `➻ *JUDUL* : ${anu.result.title}\n`
                   anu1 += `➻ *PENGARANG* : ${anu.result.pengarang}\n` 
                   anu1 += `➻ *KATEGORI* : ${anu.result.kategori}\n`
                   anu1 += `➻ *CERPEN* : ${anu.result.cerpen}\n`
                   reply(anu1)
 break 
case 'playstore':
case 'ps':
if(!q) return reply('lu nyari apa?')
let play = await hx.playstore(q)
let store = '❉─────────────────────❉\n'
for (let i of play){
store += `\n[ *PLAY STORE* ]\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
}
reply(store)
break


case 'lirik':
            if(!q) return reply('mau lagu apa?')
            reply(mess.wait)
            let song = await hx.lirik(q)
            sendMediaURL(from,song.thumb,song.lirik)
            break		  
			  
case 'artinama':
if (!q) return reply('contoh: *!artinama* radja') 
b = args.join(" ")
anu = await fetchJson(`https://api.dapuhy.xyz/api/fun/artinama?nama=${q}&apikey=rcYersFHsr`)
bu =`${anu.result}`
reply(bu)
break

case 'artimimpi':
if (!q) return reply('contoh: *!artimimpi* dikejar ular') 
b = args.join(" ")
anu = await fetchJson(`https://api.dapuhy.xyz/api/fun/artimimpi?mimpi=${q}&apikey=rcYersFHsr`)
bu =`${anu.result}`
reply(bu)
break

//═════════════════════════ [ VOKAL MENU ] ═════════════════════════

case 'hilih':
if (!q) return reply('contoh: *!hilih* Kamu Lagi Apa?') 
b = args.join(" ")
anu = await fetchJson(`https://api.dapuhy.xyz/api/vokal/hilih?kata=${q}&apikey=rcYersFHsr`)
bu =`${anu.result}`
reply(bu)
break

case 'halah':
if (!q) return reply('contoh: *!halah* Kamu Lagi Apa?') 
radja = args.join(" ")
itschandra = await fetchJson(`https://api.dapuhy.xyz/api/vokal/halah?kata=${q}&apikey=rcYersFHsr`)
botz =`${itschandra.result}`
reply(botz)
break

case 'holoh':
if (!q) return reply('contoh: *!holoh* Kamu Lagi Apa?') 
radja = args.join(" ")
itschandra = await fetchJson(`https://api.dapuhy.xyz/api/vokal/holoh?kata=${q}&apikey=rcYersFHsr`)
botz =`${itschandra.result}`
reply(botz)
break

case 'huluh':
if (!q) return reply('contoh: *!huluh* Kamu Lagi Apa?') 
radja = args.join(" ")
itschandra = await fetchJson(`https://api.dapuhy.xyz/api/vokal/huluh?kata=${q}&apikey=rcYersFHsr`)
botz =`${itschandra.result}`
reply(botz)
break  

//═════════════════════════ [ HEWAN MENU ] ═════════════════════════
case 'dog':  
reply(mess.wait)
anu = await fetchJson(`https://some-random-api.ml/img/dog`)
anu1 = await getBuffer(anu.link)
dha.sendMessage(from, anu1, image, {caption: `Lucu kan *ANJING* nya mirip Kamu 😚😚`, quoted: mek})
break

case 'redpanda':  
reply(mess.wait)
anu = await fetchJson(`https://some-random-api.ml/img/red_panda`)
anu1 = await getBuffer(anu.link)
helga.sendMessage(from, anu1, image, {caption: `Lucu kan *RED PANDA* nya mirip Kamu 😚😚`, quoted: mek})
break

case 'burung':  
reply(mess.wait)
anu = await fetchJson(`https://some-random-api.ml/img/bird`)
anu1 = await getBuffer(anu.link)
helga.sendMessage(from, anu1, image, {caption: `Lucu kan *BURUNG* nya mirip Kamu 😚😚`, quoted: mek})
break

case 'fox':  
reply(mess.wait)
anu = await fetchJson(`https://some-random-api.ml/img/fox`)
anu1 = await getBuffer(anu.link)
helga.sendMessage(from, anu1, image, {caption: `Lucu kan *FOX* nya mirip Kamu 😚😚`, quoted: mek})
break

case 'koala':  
reply(mess.wait)
anu = await fetchJson(`https://some-random-api.ml/img/koala`)
anu1 = await getBuffer(anu.link)
helga.sendMessage(from, anu1, image, {caption: `Lucu kan *KOALA* nya mirip Kamu 😚😚`, quoted: mek})
break

case 'kucing':  
reply(mess.wait)
anu = await fetchJson(`https://some-random-api.ml/img/cat`)
anu1 = await getBuffer(anu.link)
helga.sendMessage(from, anu1, image, {caption: `Lucu kan *KUCING* nya mirip Kamu 😚😚`, quoted: mek})
break
       case 'panda':  
reply(mess.wait)
anu = await fetchJson(`https://some-random-api.ml/img/panda`)
anu1 = await getBuffer(anu.link)
helga.sendMessage(from, anu1, image, {caption: `Lucu kan *PANDA* nya mirip Kamu 😚😚`, quoted: mek})
                   break
				   
case 'infogempa':
if (!q) 
reply(mess.wait)
anu = await fetchJson (`https://app-botpri.herokuapp.com/api/info/gempa?apikey=Fxc7`)
aku = `INFO GEMPA\n\n*Waktu: ${anu.result.Waktu}*\n*Lintang: ${anu.result.Lintang}*\n*Bujur: ${anu.result.Bujur}*\n*Kekuatan: ${anu.result.Magnitudo}*\n*Kedalaman: ${anu.result.Kedalaman}*\n*Wilayah: ${anu.result.Wilayah}*`
buffer = await getBuffer (anu.result.Map)
helga.sendMessage(from, buffer, image, {quoted: mek, caption: aku})
break

case '62':
if (!q)
reply(mess.wait)
buffer = await getBuffer (`https://api.dapuhy.xyz/api/asupan/asupan?apikey=rcYersFHsr`)
sendButVideo(from, `*${command}* MantafKan:v 🤣🤣`, `Mau Lagi?Klik Button Di Bawah⬇️`, buffer, [{buttonId: `.${command}`,buttonText: {displayText: `AGAIN➡️️`,},type: 1,},]);
break

case 'santuy':
if (!q)
reply(mess.wait)
buffer = await getBuffer (`https://api.dapuhy.xyz/api/asupan/asupansantuy?apikey=rcYersFHsr`)
sendButVideo(from, `*${command}* MantafKan:v 🤣🤣`, `Mau Lagi?Klik Button Di Bawah⬇️`, buffer, [{buttonId: `.${command}`,buttonText: {displayText: `AGAIN➡️️`,},type: 1,},]);
break

case 'bocil':
if (!q)
reply(mess.wait)
buffer = await getBuffer (`https://api.dapuhy.xyz/api/asupan/asupanbocil?apikey=rcYersFHsr`)
sendButVideo(from, `*${command}* MantafKan:v 🤣🤣`, `Mau Lagi?Klik Button Di Bawah⬇️`, buffer, [{buttonId: `.${command}`,buttonText: {displayText: `AGAIN➡️️`,},type: 1,},]);
break

case 'ukhti':
if (!q)
reply(mess.wait)
buffer = await getBuffer (`https://api.dapuhy.xyz/api/asupan/asupanukhty?apikey=rcYersFHsr`)
sendButVideo(from, `*${command}* MantafKan:v 🤣🤣`, `Mau Lagi?Klik Button Di Bawah⬇️`, buffer, [{buttonId: `.${command}`,buttonText: {displayText: `AGAIN➡️️`,},type: 1,},]);
break

case 'rikagusriani':
if (!q)
reply(mess.wait)
buffer = await getBuffer (`https://api.dapuhy.xyz/api/asupan/asupanrikagusriani?apikey=rcYersFHsr`)
sendButVideo(from, `*${command}* MantafKan:v 🤣🤣`, `Mau Lagi?Klik Button Di Bawah⬇️`, buffer, [{buttonId: `.${command}`,buttonText: {displayText: `AGAIN➡️️`,},type: 1,},]);
break


case 'ghea':
if (!q)
reply(mess.wait)
buffer = await getBuffer (`https://api.dapuhy.xyz/api/asupan/asupanghea?apikey=rcYersFHsr`)
sendButVideo(from, `*${command}* MantafKan:v 🤣🤣`, `Mau Lagi?Klik Button Di Bawah⬇️`, buffer, [{buttonId: `.${command}`,buttonText: {displayText: `AGAIN➡️️`,},type: 1,},]);
break


case 'ganteng': case 'cantik': case 'jelek': case 'goblok':  
                   case 'bego': case 'pinter': case 'jago': case 'nolep': case 'monyet':                 	 
                   case 'babi': case 'beban': case 'baik': case 'jahat': case 'anjing': 
                   case 'haram': case 'kontol': case 'pakboy': case 'pakgirl': 
               	   case 'wibu': case 'hebat': case 'sadboy': case 'sadgirl': 
  
				   if (!isGroup) return reply(`Ini Bukan Grub Ya Ajg🌹🤙`)
 				   jds = []
				   const A1 = groupMembers
  		 		   const B1 = groupMembers
 				   const C1 = A1[Math.floor(Math.random() * A1.length)]
				   D1 = `yang *ter${command}* disini adalah @${C1.jid.split('@')[0]}`                  
				   jds.push(C1.jid)
				   mentions(D1, jds, true)
				   break
                    case 'gantengcek':
                      	  
                    N = `KE *GANTENGAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 😎`
                    reply(N)
                    break 
                    case 'cantikcek':
                      	  
                    N = `KE *CANTIKAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}% 😁*`
                    reply(N)
                    break
                    case 'jelekcek':
                        	
                    N = `KE *J3L3K4N* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 🤢`
                    reply(N)
                    break 
                    case 'goblokcek':
                      	  
                    N = `KE *GOBLOKAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 🤣`
                    reply(N)
                    break 
                    case 'begocek':
                      	 
                    N = `KE *BEGO* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 😂`
                    reply(N)
                    break 
                    case 'pintercek':
                      	  
                    N = `KE *PINTARAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 😗`
                    reply(N)
                    break 
                    case 'jagocek':
                      	 
                    N = `KE *JAGOAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 💪`
                    reply(N)
                    break 
                    case 'nolepcek':
                      	  
                    N = `KE *NOLEPAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 🧐`
                    reply(N)
                    break 
                    case 'babicek':
                      	  
                    N = `KE *BABIAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 🤪`
                    reply(N)
                    break 
                    case 'bebancek':
                      	  
                    N = `KE *BEBANAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 🤬`
                    reply(N)
                    break 
                    case 'baikcek':
                      	  
                    N = `KE *BAIKAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 😇`
                    reply(N)
                    break 
                    case 'jahatcek':
                      	  
                    N = `KE *JAHATAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 😈`
                    reply(N)
                    break 
                    case 'anjingcek':
                      	   
                    N = `KE *ANJINGAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 👀`
                    reply(N)
                    break                      
                    case 'haramcek':
                      	  
                    N = `KE *HARAMAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 🥴`
                    reply(N)
                    break  
                    case 'kontolcek':
                      	   
                    N = `KE *KOMTOLAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 🙂`
                    reply(N)
                    break 
                    case 'pakboycek':
                      	   
                    N = `KE *PAKBOYZ* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 😏`
                    reply(N)
                    break 
                    case 'pakgirlcek':
                    N = `KE *PAKGILR* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 😏`
                    reply(N)
                    break             
                    case 'sangecek':                      	  
                    N = `JIWA *SANGE* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 🤤`
                    reply(N)
                    break
                    case 'bapercek':                    	  
                    N = `JIWA *BEPERAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 😘`
                    reply(N)
                    break   

  case 'jadwalsholat':  
			       
   if (!q)return reply(`[❗] Example :\n !jadwalsholat *makassar*`)  
                   reply(mess.wait)
                   F = body.slice(14)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/jadwalshalat?daerah=${F}`)                   
                   anu1 = `➻ *IMSYAK* : ${anu.Imsyak}\n`
                   anu1 += `➻ *SUBUH* : ${anu.Subuh}\n`
                   anu1 += `➻ *DHUHA* : ${anu.Dhuha}\n`
                   anu1 += `➻ *DZUHUR* : ${anu.Dzuhur}\n`
                   anu1 += `➻ *ASHAR* : ${anu.Ashar}\n`
                   anu1 += `➻ *MAGRHRIB* : ${anu.Maghrib}\n`
                   anu1 += `➻ *ISYA* : ${anu.Isya}\n` 
                   reply(anu1)
                   break

case 'ppcp':
case 'ppcouple':
anu = await fetchJson(`https://api.dapuhy.xyz/api/randomimage/couple?apikey=rcYersFHsr`)
buff1 = await getBuffer (anu.result.pria)
helga.sendMessage(from, buff1, image, {quoted: mek, caption: '_Nih kak cowoknya_♂️'})
buff2 =await getBuffer (anu.result.wanita)
helga.sendMessage(from, buff2, image, {quoted: mek, caption: '_Nih kak ceweknya_♀️'})
break				   
//═════════════════════════ [ SEARCH MENU ] ═════════════════════════
//═════════════════════════ [ COPAS AJA ] ═════════════════════════
//═════════════════════════ [ API RANDOM ] ═════════════════════════

			  
			  
			  
			  
					
				case 'sticktag':
				if (!isGroup) return reply(mess.only.group)
				anu  = body.slice(10)
				wanu = anu.split('|')
				var group = await helga.groupMetadata(wanu[0])
				var member = group['participants']
				var mem = []
				member.map( async adm => {
				mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				result = fs.readFileSync(`./media/sticker/${wanu[1]}.webp`)
				helga.sendMessage(`${wanu[0]}`, result, sticker, { contextInfo: { "mentionedJid": mem }})
				break
			case 'runtime':
      
				runtime = process.uptime()
				reply(`Runtime : ${waktu(runtime)}`)
				break
			case 'setbio':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				if (args.length < 1) return reply('Teksnya?')
					iyek = body.slice(8)
					helga.setStatus(`${iyek}`)
					reply(`Sukses mengganti bio ke ${body.slice(8)}`)
					break
					case 'setname':
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				if (args.length < 1) return reply('Teksnya?')
                anu = body.slice(9)
                helga.updateProfileName(anu)
                reply(`Sukses mengganti nama ke ${body.slice(9)}`)
                break
			case 'add':
              
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
			add = mek.message.extendedTextMessage.contextInfo.participant
		    helga.groupAdd(from, [add])
				reply('Sukses menambahkan peserta')
				break
				case 'kick':
              
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
			kick = mek.message.extendedTextMessage.contextInfo.participant
		    helga.groupRemove(from, [kick])
						reply('Sukses mengeluarkan peserta')
                    break
                    case 'creategroup':
			case 'creategrup':
              
			if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
				argz = arg.split('|')
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					helga.groupCreate(argz[0], anu)
					reply(`Sukses membuat grup ${argz[0]}`)
                }
				break
            case 'welcome': 
              if (!isRegistered) return reply(`Registrasi dulu Kak ketik .verify`)
	        if (!isGroup) return reply(mess.only.group)
			if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
					if (args[0] === 'on') {
						if (isWelkom) return reply('Sudah Aktif Kak')
						welkom.push(from)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('Sukses mengaktifkan fitur welcome')
					} else if (args[0] === 'off') {
						if (!isWelkom) return reply('Sudah Mati Kak')
						var ini = welkom.indexOf(from)
						welkom.splice(ini, 1)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur welcome')
					} else if (!c){
 anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
punten = [{buttonId: 'welcome off', buttonText: {displayText: 'OFF✖️'}, type: 1},{buttonId: 'welcome on', buttonText: {displayText: 'ON✔️'}, type: 1}]
const btngrass = {
    contentText: `${anu}`,
    footerText: '*Radja Aditya*',
    buttons: punten,
    headerType: 1
}
await helga.sendMessage(from, btngrass, MessageType.buttonsMessage, {quoted: ftrol})
					}
					break
					default:break
		}
		if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=❌
Player2 @${tty.player2.split('@')[0]}=⭕

${angka[1]}${angka[2]}${angka[3]}
${angka[4]}${angka[5]}${angka[6]}
${angka[7]}${angka[8]}${angka[9]}

Giliran = @${tty.player1.split('@')[0]}`
  helga.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
helga.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:mek,contextInfo:{mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '❌'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳Result Game Tictactoe 🎲

*Yeyyy Permainan Di Menangkan Oleh *@${tty.player1.split('@')[0]}*\n`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
helga.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri 🗿👌_*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❌

${ttt}

Giliran = @${tty.player2.split('@')[0]}`
 helga.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*?? Result Game Tictactoe 🎲*

Yeyyy Permainan Di Menangkan Oleh *@${tty.player2.split('@')[0]}*\n`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
helga.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳Result Game Tictactoe 🎲*

*_Permainan Seri🗿👌*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❌

${ttt}
 
Giliran = @${tty.player1.split('@')[0]}`
 helga.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
 }
	} catch (e) {
        e = String(e)
            if (!e.includes("this.isZero")) {
            if (!e.includes("Cannot read property 'conversation' of null")) {
            if (!e.includes("Cannot read property 'contextInfo' of undefined")) {
            if (!e.includes("Cannot set property 'mtype' of undefined")) {
            if (!e.includes("jid is not defined")) {
     console.log(color('|ERROR KAK|', 'red'), color(e, 'cyan'))
     helga.sendMessage(`${settings.NomorOwner}@s.whatsapp.net`, `*Subscribe IG : itschandra_28*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Pengembang RadjaAditya",body:"",previewType:"Radja Aditya",thumbnail:fs.readFileSync('./helga.jpg'),sourceUrl:"https://wa.me/628126216321z"}}})
	}
    }
    }
    }
    }
    }
    }