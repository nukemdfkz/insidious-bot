const Discord = require("discord.js");
const YTDL = require("ytdl-core");
const client = new Discord.Client();
const request = require('request');

const PREFIX = ".";

function play(connection, message) {
    var server = servers[message.guild.id];

    server.dispatcher = connection.playStream(YTDL(server.queue[0], {
        filter: "audioonly"
    }));

    server.queue.shift();

    server.dispatcher.on("end", function () {
        if (server.queue[0]) play(connection, message);
        else connection.disconnect();
    });
}

var fortunes = [
    "Yea",
    "Nah",
    "Maybe",
    "whhhh",
    "Idk",
    "y tho?",
    "Absolutelly"
];

var bot = new Discord.Client();

var servers = {};

bot.on("ready", function () {
    bot.user.setGame(`.help` + ` | guilds: ${bot.guilds.size}` + ` | users: ${bot.users.size}`)
    bot.user.setStatus("dnd")
    console.log("Ready to work. :)")
    bot.channels.get("327495203583688704").send("```I'm up and ready to go, use .help to begin.```")
});

bot.on("guildCreate", guild => {
    // This event triggers when the bot joins a guild.
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
    bot.user.setGame(`.help` + ` | guilds: ${bot.guilds.size}` + ` | users: ${bot.users.size}`);
    bot.channels.get("367687310512488448").send(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`)
});

bot.on("guildDelete", guild => {
    // this event triggers when the bot is removed from a guild.
    console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
    bot.user.setGame(`.help` + ` | guilds: ${bot.guilds.size}` + ` | users: ${bot.users.size}`);
    bot.channels.get("367687310512488448").send(`I have been removed from: ${guild.name} (id: ${guild.id})`)
});

bot.on('message', function (message) {
    if (message.channel.type == 'dm') {
        message.author.sendMessage("I'm just an AI, join here if you need help: https://discord.gg/nenVgp5");
    }
});

bot.on("guildMemberAdd", function (member) {
    member.guild.channels.find("name", "hellos_and_goodbyes").sendMessage(member.toString() + " joined Insidious.");

    member.addRole(member.guild.roles.find("name", "Member"));
});

bot.on("message", function (message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "stats":
            message.channel.send({
                embed: {
                    color: 3447003,
                    author: {
                        name: bot.user.username,
                        icon_url: bot.user.avatarURL
                    },
                    title: "Insidious AI Stats",
                    url: "http://discord.io/insidious",
                    description: "This is where stats about Insidious AI is displayed.",
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
                        icon_url: bot.user.avatarURL,
                        text: "© Insidious Ltd."
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
                    Logger.log("warn", "Got an error: ", error, ", status code: ", response.statusCode);
                }
            });
            break;
        case "uptime":
            message.channel.send("```My uptime is " + (Math.round(bot.uptime / (1000 * 60 * 60))) + " hours, " + (Math.round(bot.uptime / (1000 * 60)) % 60) + " minutes, and " + (Math.round(bot.uptime / 1000) % 60) + " seconds.```");
            break;
        case "invite":
            message.channel.sendMessage("https://discordapp.com/api/oauth2/authorize?client_id=319048565555200000&scope=bot&permissions=1")
            break;
        case "clean":
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
            //message.channel.sendMessage('Somebody once told me the ping was: ' + bot.ping + ' ms')
            break;
        case "music":
            message.channel.sendMessage("```Commands list \n \n.play [Link] - Listen to your favourite songs \n.skip - Skip the current song \n.stop - Stop all the songs```");
            break;
        case "info":
            message.channel.sendMessage(message.author.toString() + " I sent you all the details in a private message.");
            message.author.sendMessage("**Developer**: Alex Mocanu \n**Versiune**: 1.0.1 \n**Website**: http://6g9upl4pq6kufc5onion.tk/ \n**Server**: https://discord.io/insidious");
            break;
        case "8ball":
            if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
            else message.channel.sendMessage("Sorry but I didn't quite catch that, try something else.");
            break;
        case "help":
            var embed = new Discord.RichEmbed()
                .addField("**.help**", "Shows all the available commands")
                .addField("**.info**", "Shows some info")
                .addField("**.8ball**", "Ask the 8ball")
                .addField("**.music**", "Listen to your favourite songs")
                .addField("**.profile**", "See info about you")
                .addField("**.clean**", "Delete all the bots messages.")
                .addField("**.stats**", "Display stats about InsidiousBot")
                .addField("**.profile**", "Display informations about your account")
                .addField("**.ping**", "Pong")
                .setThumbnail('https://s-media-cache-ak0.pinimg.com/736x/92/2b/33/922b338c801752d8c9934b78fb449e1d--national-gallery-dark-art.jpg')
                .setColor(0xffd700)
            message.channel.send(embed);
            break;
        case "profile":
            var embed = new Discord.RichEmbed()
                .setAuthor(message.author.username + "#" + message.author.discriminator + "'s Information")
                .addField("User ID:", message.author.id)
                .addField("User created at:", message.author.createdAt)
                .setThumbnail(message.author.avatarURL)
                .setFooter("Profile info provided by InsidiousBot Beta")
            message.channel.send(embed);
            break;
        case "play":
            if (!args[1]) {
                message.channel.sendMessage("``Insert a link please !``");
                return;
            }

            if (!message.member.voiceChannel) {
                message.channel.sendMessage("``You must be in a voice channel in order to do that !``")
                return;
            }

            if (!servers[message.guild.id]) servers[message.guild.id] = {
                queue: []
            };

            var server = servers[message.guild.id];

            server.queue.push(args[1]);

            if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function (connection) {
                play(connection, message);
            });
            break;
        case "skip":
            var server = servers[message.guild.id];

            if (server.dispatcher) server.dispatcher.end();
            break;

        case "stop":
            var server = servers[message.guild.id];

            server.queue.push(args[1]);

            if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
            break;

            //    default:
            //        message.channel.sendMessage(message.author.toString() + " you used an inexistent command, use **!help** to see the available commands.");
    }
});

bot.login(process.env.BOT_TOKEN);