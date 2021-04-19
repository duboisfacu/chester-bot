const Discord = require("discord.js");


module.exports = (client, message, args) => {
let texto = args.join(" ");
const user = message.mentions.users.first();


const embedDatos = new Discord.MessageEmbed()
.setTitle("jaja un mouse del rayo macuin xdxd")
.setImage("https://pbs.twimg.com/media/EXde0aaXYAY8D0t.jpg")
message.channel.send({ embed: embedDatos });
}
