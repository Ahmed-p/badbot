const Discord = require('discord.js');
const client = new Discord.Client();




client.login('Mzk3Nzg3NTAzMjAzMDU3NjY1.DTAAAw.O3Y0-UWyywGoz-q8WiU3w1j2t50'); 



client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('by Ahmed');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(`Logged in as  * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('is online')
client.user.setStatus("dnd");
});

// playing
client.on('ready', () => {                           
client.user.setGame(``,'https://www.twitch.tv/Ahmed');                                                                                                                                                                                                                                                                                                                                                                                                                             client.user.setGame(`.help | BadBot`,'https://www.twitch.tv/Ahmed');
});   
client.on("message", message => {
    if (message.content === ".help") {
     const embed = new Discord.RichEmbed() 
         .setColor("#ffff00")
         .setFooter('By Ahmed')
         .setThumbnail(message.author.avatarURL)
         .setDescription(`
  
     **✨Administrationr Commands | اوامر الاداره✨**
   - .Kick / طرد شخص من السيرفر
   - .ban / حظر شخص من السيرفر
   - .clear / مسح المحادثات الكتابيه
   - .mute / ميوت شات
   - .unmute / فك ميوت 
   - .cv / ل انشاء روم صوتي
   - .ct / ل انشاء روم كتابي
   - .deletc / لمسح اي روم صوتي او كتابي
   - .b / ارسال رساله من خلال البوت
     **🔩Bot Commands | اوامر البوت🔩**
   - .support / عرض سيرفر المساعده
   - .invite / رابط اضافه البوت
   - .ping / عرض سرعه الاتصال 
   - .members / عرض عدد الاشخاص المتصلين
   `)
   message.author.sendEmbed(embed)
   
   }
   });    
   client.on('message', (message) => {
    if (message.content.startsWith('.kick')) {
        var member= message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(member.displayName + ' تم طرد هذا الشخص من السيرفر');
        }).catch(() => {
            message.channel.send(`:x:`);
        });
    }
});
  client.on('message', (message) => {
    if (message.content.startsWith('.ban ')) {
      if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('⚠ ماعندك الصلاحيات');
        var member= message.mentions.members.first();
        member.ban().then((member) => {
            message.channel.send(member.displayName + ' اطلللعععع برررااااا :wave: ');
        }).catch(() => {
            message.channel.send('Error :_:');
        });
    }
});  
 client.on("message", message => {
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === ".mute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mute-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').catch(console.error);
  
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
   
   if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
 
  if (message.guild.member(user).roles.has(muteRole.id)) {
     return message.reply("** تم اعطاء العضو المحدد ميوت  **").catch(console.error);
  } else {
    message.guild.member(user).addRole(muteRole).then(() => {
      return message.reply("** تم اعطاء العضو المحدد ميوت كتابي .. **").catch(console.error);
    });
  }

};

});
client.on("message", message => {
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === ".unmute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mute-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);

  if (message.guild.member(user).removeRole(muteRole.id)) {
      return message.reply("** تم فك الميوت عن الشخص المحدد  .. **").catch(console.error);
  } else {
    message.guild.member(user).removeRole(muteRole).then(() => {
      return message.reply("** تم فك الميوت عن الشخص المحدد .. **").catch(console.error);
    });
  }

};

});
client.on('message' , message => {

  if (message.content === ".support") {
      if(!message.channel.guild) return message.reply('**الآمر فقط في السيرفرات**');
   const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setThumbnail(client.user.avatarURL)     
.setDescription(" ***welcome To server support*** " + `
**
رابط السيرفر | https://discord.gg/3ARt8w7
**
`);
message.author.sendEmbed(embed);
 }
});
client.on('message' , message => {

  if (message.content === ".invite") {
      if(!message.channel.guild) return message.reply('**الآمر فقط في السيرفرات**');
   const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setThumbnail(client.user.avatarURL)     
.setDescription("Add me" + `
**
رابط البوت | https://discordapp.com/api/oauth2/authorize?client_id=397787503203057665&permissions=0&scope=bot
**
`);
message.author.sendEmbed(embed);
}
});
client.on('message', message => {
    if(message.content == '.members') {
    const embed = new Discord.RichEmbed()
    .setDescription(`**Members info🔋
:green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart: idle:      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}   
:black_heart: offline:   ${message.guild.members.filter(m=>m.presence.status == 'offline').size} 
:blue_heart:   all:  ${message.guild.memberCount}**`)         
         message.channel.send({embed});

    }
  });  
  client.on('message', message => {
    if(!message.channel.guild) return;
if (message.content.startsWith('.ping')) {
if(!message.channel.guild) return;
var msg = `${Date.now() - message.createdTimestamp}`
var api = `${Math.round(client.ping)}`
if (message.author.bot) return;
let embed = new Discord.RichEmbed()
.setAuthor(message.author.username,message.author.avatarURL)
.setColor('RANDOM')
.addField('**Time Taken:**',msg + " ms :signal_strength: ")
.addField('**WebSocket:**',api + " ms :signal_strength: ")
message.channel.send({embed:embed});
}
});
 