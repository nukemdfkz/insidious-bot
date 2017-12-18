const Discord = require("discord.jsconst request = require('request');");
c
const request = require('request');nst client = new Discord.Client();
const request = require('request');
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);



'use strict';
 
const SpoilerBot = require('discord-spoiler-bot');
 
let config = {
    token: process.env.TOKEN,
};
 
let botz = new SpoilerBot(config);
botz.connect();



const PREFIX = ".";

var fortunes = [
    "Da",
    "Nah",
    "Poate",
    "Desigur",
    "Nush",
    "de ce mă întrebi asta? sunt doar un bot.",
    "100%"
];

var bot = new Discord.Client();

var servers = {};

bot.on("ready", function () {
    bot.user.setGame(`.help` + ` | guilds: ${bot.guilds.size}` + ` | users: ${bot.users.size}`)
    bot.user.setStatus("dnd")
    console.log("Ready to work. :)")
    ///bot.channels.get("376889785853149195").send("```Bună, eu sunt FPlayT AI, ajutorul tău personal. Folosește .help pentru a începe.```")
});

bot.on('message', function (message) {
    if(message.author.id == '196701848239865866') {
      ///message.react('💦'),
      ///message.react('🤰'),
      message.react('🎄')
    }
    if(message.author.id == '350760008935407616') {
      message.react('🚑')
    }
    if(message.author.id == '386610165438480384') {
      message.react('🚑')
    }
    if(message.author.id == '207294952927920129') {
      message.react('🚑')
    }
  
    if (message.author.equals(bot.user)) return;
  
    if(message.author.id == '196701848239865866') {
    if(message.content.toLowerCase().includes("superputeri")) {
        message.react('💪')
        message.channel.send(message.author.toString() + ' ți-am dat superputerile unui zeu, ai grijă cum le folosești.');
    }};
    ///if(message.author.id !== '196701848239865866') {
      ///message.channel.send(message.author.toString() + ' nu ești demn de superputerile unui zeu.');
    ///};
  
    if(message.content.toLowerCase().includes("lag")) {
        message.react('👶')
    }
  
    if(message.content.toLowerCase().includes("pula")) {
        message.react('😡')
    }
  
    if(message.content.toLowerCase().includes("@everyone")) {
        message.react('⚠')
    }
  
    if(message.content.toLowerCase().includes("@everyone")) {
        message.react('📢')
    }
  
    if(message.content.toLowerCase().includes("server up")) {
        message.react('🔛')
    }
  
    if(message.content.toLowerCase().includes("server on")) {
        message.react('🔛')
    }
  
    if(message.content.toLowerCase().includes("salut")) {
        message.channel.startTyping();
            message.channel.stopTyping();
            setTimeout(() => {
                    message.channel.send(' Salut.').catch(console.error);
            }, 5000);
    }
  
    if(message.content.toLowerCase().includes("crash")) {
      if(message.author.id == '280255481996378113') {
        return;
      }
      if(message.author.id == '196701848239865866') {
        return;
      }
        message.channel.send(message.author.toString() + ' Pentru a scăpa de crashuri șterge folderul cache din FiveM după care intră pe Steam, click dreapta pe joc, Properties, Local Files apoi Verify Integrity of Game Files.');
    }
  
    if(message.content.toLowerCase().includes("sub mapa")) {
        message.channel.send(message.author.toString() + ' Acela este un bug cunoscut de la FiveM, la următorul restart vei fi deblocat.');
    }
  
    if(message.content.toLowerCase().includes("sub harta")) {
        message.channel.send(message.author.toString() + ' Acela este un bug cunoscut de la FiveM, la următorul restart vei fi deblocat.');
    }
  
    if(message.content.toLowerCase().includes("blocat")) {
        message.channel.send(message.author.toString() + ' Acela este un bug cunoscut de la FiveM, la următorul restart vei fi deblocat.');
    }
});

bot.on('message', function (message) {
    if (message.channel.type == 'dm') {
        message.author.sendMessage("Sunt doar un BOT, intră aici dacă ai nevoie de ajutor: https://discord.gg/CENSORED");
    }
});

bot.on("message", function (message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
      case "prune":
        break;
      case "status":
        var ping = require('ping');
 
var hosts = ['fplayt.ro', '31.214.141.227:30120'];
hosts.forEach(function(host){
    ping.sys.probe(host, function(isAlive){
        var msg = isAlive ? 'host ' + host + ' is alive' : 'host ' + host + ' is dead';
        message.channel.send(msg);
        console.log(msg);
    });
});
        break;
      case "stats":
            message.channel.send({
                embed: {
                    color: 3447003,
                    author: {
                        name: bot.user.username,
                        icon_url: bot.displayAvatarURL
                    },
                    title: "FPlayT AI Stats",
                    url: "http://fplayt.ro",
                    description: "Aici sunt afișate informații despre FPlayT AI",
                    fields: [{
                            name: "Guilds",
                            value: bot.guilds.size
                        },
                        {
                            name: "Users",
                            value: bot.users.size
                        },
                        {
                            name: "Guilds List",
                            value: bot.guilds.map(g => g.name).join('\n')
                        }
                    ],
                    timestamp: new Date(),
                    footer: {
                        text: "© FPlayT AI Ltd."
                    }
                }
            });
            break;
        case "yomomma":
            var request = require('request');
            request('http://api.yomomma.info/', function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    var yomomma = JSON.parse(body);
                    message.channel.sendMessage(yomomma.joke);
                } else {
                    console.log("warn", "Got an error: ", error, ", status code: ", response.statusCode);
                }
            });
            break;
        case "uptime":
            message.channel.send("```My uptime is " + (Math.round(bot.uptime / (1000 * 60 * 60))) + " hours, " + (Math.round(bot.uptime / (1000 * 60)) % 60) + " minutes, and " + (Math.round(bot.uptime / 1000) % 60) + " seconds.```");
            break;
        case "invite":
            message.channel.sendMessage("Momentan Dezactivat !")
            break;
        case "clean":
        if(message.author.id !== '196701848239865866') return message.channel.send("**»** " + message.author +", Only the bot owner can do that!")
            message.channel.bulkDelete(message.channel.messages, message.author.lastMessage);
            break;
        case "danimocanu":
            message.channel.sendMessage("There you go " + message.author.toString() + " :", {
                file: "https://i.makeagif.com/media/5-30-2015/IhmI6v.gif"
            });
            break;
        case "gif":
            message.channel.sendMessage("There you go " + message.author.toString() + " :", {
                file: "http://sheepfilms.co.uk/wp-content/uploads/2015/12/cat_eyes.gif"
            });
            break;
        case "banned":
            if(message.author.id == '196701848239865866') {
            message.channel.sendMessage("There you go " + message.author.toString() + " :", {
                file: "https://i.imgur.com/O3DHIA5.gif"
            })};
            break;
        case "reload":
            if(message.author.id == '196701848239865866') {
            message.channel.sendMessage("Server down " + message.author.toString(), {
                file: "https://i.imgur.com/L8Y2e9Z.png"
            })};
            break;
        case "avatar":
            message.channel.sendMessage(message.author.avatarURL);
            break;
        case "ahhh":
            message.channel.startTyping();
            message.channel.stopTyping();
            setTimeout(() => {
                message.channel.sendMessage("Bot is typing test").catch(console.error);
            }, 5000);
            break;
        case "ping":
            var embed = new Discord.RichEmbed()
                .setDescription('Somebody once told me the ping was: ' + bot.ping + ' ms')
                .setThumbnail(' ')
                .setColor(0x00FF00)
            message.channel.send(embed);
            //message.channel.sendMessage('Somebody once told me the ping was: ' + Math.round(bot.ping) + ' ms')
            break;
        case "info":
            message.channel.sendMessage(message.author.toString() + " Ți-am trimis toate detaliile într-un mesaj privat.");
            message.author.sendMessage("**Developer**: Nuke Mdfkz \n**Versiune**: 1.0.1 \n**Website**: http://censored\n**Server**: https://discord.io/");
            break;
        case "8ball":
            if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
            else message.channel.sendMessage("Sorry but I didn't quite catch that, try something else.");
            break;
        case "help":
            message.channel.send(message.author.toString() + " ți-am trimis lista de comenzi într-un mesaj privat.");
            var embed = new Discord.RichEmbed()
                .addField("**.help**", "Vezi toate comenzile valabile")
                .addField("**.info**", "Îți voi trimite un dm cu informații")
                .addField("**.yomomma**", "Tells yomomma's jokes")
                .addField("**.8ball**", "Întreabă Globul FPlayT")
                .addField("**.music**", "SCOS")
                .addField("**.profile**", "Informații despre tine")
                .addField("**.clean**", "Șterge toate mesajele creeate de FPlayT AI.")
                .addField("**.stats**", "Informații despre FPlayT AI")
                .addField("**.profile**", "Afișează informații despre contul tău")
                .addField("**.ping**", "Pong")
                .setThumbnail('https://i.imgur.com/1C7jBAm.png')
                .setColor(0xffd700)
            message.author.send(embed);
            break;
        case "profile":
            var embed = new Discord.RichEmbed()
                .setAuthor(message.author.username + "#" + message.author.discriminator + "'s Information")
                .addField("User ID:", message.author.id)
                .addField("User created at:", message.author.createdAt)
                .setThumbnail(message.author.avatarURL)
                .setFooter("Profile info provided by FPlayT AI Beta")
            message.channel.send(embed);
            break;

            //    default:
            //        message.channel.sendMessage(message.author.toString() + " ai folosit o comandă inexistentă, folosește **.help** pentru a});

bot.login(process.env.TOKEN);
