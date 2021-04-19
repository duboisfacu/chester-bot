const Discord = require("discord.js");

module.exports = (client, message, args) => {
let texto = args.join(" ");
const user = message.mentions.users.first();

if(!texto) return message.channel.send(`a quién queres abrazar capo?`);
if(!user) return message.channel.send(`pero nombrá a un usuario válido jeropa`);
const embedDatos = new Discord.MessageEmbed()
.setTitle((message.author.username) + (" abrazó a ") + (user.username))
.setImage("https://media1.tenor.com/images/03e00c1581797c08ac7595772c08f593/tenor.gif")
message.channel.send({ embed: embedDatos });
}
