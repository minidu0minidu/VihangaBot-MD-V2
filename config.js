//SOME ENCRYPTED FILES
//THANKS FOR CHOOSING VIHANGAMD

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
	dapa: 'https://dapuhy.xyz'
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': '7A012A0F7751',
	'https://dapuhy.xyz': 'piceg'
}

//Owner React
global.OWNER_REACT = '🤡' //මෙතනට emoji එකක දාන්න.
global.REACT_NUMBER = '94767973534' //මෙතන number එක.

// Other
global.owner = ['94767973534',''] //මෙතන number එක.
global.premium = ['9476342733','9476342733'] //මෙතන number එක.
global.botname = '☬K༙྇I༙྇N༙྇G༙྇ᴼᶠ𝙹𝙾𝙲𝙺𝙴𝚁〠' //මෙතන නම.
global.ownername = '☬K༙྇I༙྇N༙྇G༙྇ᴼᶠ𝙹𝙾𝙲𝙺𝙴𝚁〠' //මෙතන නම.
global.ownername = '☬K༙྇I༙྇N༙྇G༙྇ᴼᶠ𝙹𝙾𝙲𝙺𝙴𝚁〠' //මෙතන නම.
global.group1 = 'https://chat.whatsapp.com/JMICZyXD9QLGWYwUJHQmnT' //මෙතන grouplink එක.
global.group2 = 'https://chat.whatsapp.com/L1QJpLk5WXeAMSdZHzVlkh' //මෙතන grouplink එක.
global.packname = '☬K༙྇I༙྇N༙྇G༙྇ᴼᶠ𝙹𝙾𝙲𝙺𝙴𝚁〠' //මෙතන නම.
global.cap = '*By ☬K༙྇I༙྇N༙྇G༙྇ᴼᶠ𝙹𝙾𝙲𝙺𝙴𝚁〠*' //මෙතන නම.
global.img = 'data:image/jpeg;base64,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' //මෙතන බොට්ගෙ photo එකට ඕන derect link එකක්.
global.ytchannel = 'https://youtube.com/channel/UC69O34ynMDdjp4Nd4ntGqEQ' //මෙතන කැමති ලින්ක් එකක්.
global.monayawal = '100000' //මෙතන මාරු කරන්න එපා.
global.darahawal = '100' //මෙතන මාරු කරන්න එපා.
global.besiAwal = '15' //මෙතන මාරු කරන්න එපා.
global.goldAwal = '10' //මෙතන මාරු කරන්න එපා.
global.emeraldAwal = '5' //මෙතන මාරු කරන්න එපා.
global.umpanAwal = '5' //මෙතන මාරු කරන්න එපා.
global.potionAwal = '1' //මෙතන මාරු කරන්න එපා.
global.dripstyping = true //මෙතන මාරු කරන්න එපා.
global.dripsreadgroup = false //මෙතන මාරු කරන්න එපා. 
global.dripsreadall = false //මෙතන මාරු කරන්න එපා.
global.dripsrecord = false //මෙතන මාරු කරන්න එපා.
global.available = true //මෙතන මාරු කරන්න එපා.
global.unavailable = true //මෙතන මාරු කරන්න එපා.
global.limittot = 100, //මෙතන මාරු කරන්න එපා.
global.f1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation' //මෙතන මාරු කරන්න එපා.
global.f2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' //මෙතන මාරු කරන්න එපා.
global.f3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' //මෙතන මාරු කරන්න එපා.
global.f4 = 'application/zip' //මෙතන මාරු කරන්න එපා.
global.f5 = 'application/pdf' //මෙතන මාරු කරන්න එපා.
global.f6 = 'application/vnd.android.package-archive' //මෙතන මාරු කරන්න එපා.
global.author = '☬K༙྇I༙྇N༙྇G༙྇ᴼᶠ𝙹𝙾𝙲𝙺𝙴𝚁〠' //මෙතන නම.
global.flaming = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=' //මෙතන මාරු කරන්න එපා.
global.sessionName = 'session' //මෙතන මාරු කරන්න එපා.
global.prefa = ['','!','.','🐦','🐤','🗿'] //මෙතන මාරු කරන්න එපා.
global.sp = '🤡' //මෙතන emoji එකක්.
global.mess = {
    success: '*හරි*',
        ban: '*Sorry, looks like u got banned😔😔 type .owner To request unban okay*',
    horny: '*nsfw is disabled please ask owner to enable it*',
    admin: '*this cmd is for admin only , l can feel you but sorry okay*',
    botAdmin: '*with due respect can you please give bot adminship*',
    owner: '*this cmd is for bot owner only , l can feel you but sorry okay*',
    group: '*this feature is only for groups okay*',
    private: '*this feature can only used in dm okay*',
    bot: '*Special Features for User Bot Number okay*',
    wait: '*ටිකක් ඉන්න ⏳*',
    endLimit: '*Brothers Daily Limit Has Expired, Type .buy limit amount limit to buy limit, Note: Limit will be reset every 12 hours*',
}
global.limitawal = {
    premium: "Infinity",
    free: 200
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./lib/20220602_094206.png')  
global.bc = fs.readFileSync('./lib/20220602_094206.png')
global.visoka = { url: 'https://i.imgur.com/LbmTdhf.mp4' }
global.vid = { url: 'https://i.imgur.com/LbmTdhf.mp4' }

//—————「 Set Random Image Menu 」—————//

global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.mehk = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='
global.awog = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text='
global.mohai = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text='
global.mhehe = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text='


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
