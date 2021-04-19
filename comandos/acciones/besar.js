const Discord = require("discord.js");


module.exports = (client, message, args) =>  {
let texto = args.join(" ");
const user = message.mentions.users.first();

if(!texto) return message.channel.send(`a quién queres besar capo?`);
if(!user) return message.channel.send(`pero nombrá a un usuario válido jeropa`);
const embedDatos = new Discord.MessageEmbed()
.setTitle((message.author.username) + (" intercambió saliva con ") + (user.username))
.setImage("https://thumbs.gfycat.com/WaryCriminalAardvark-size_restricted.gif")
message.channel.send({ embed: embedDatos });

}
