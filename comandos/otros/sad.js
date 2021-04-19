const Discord = require("discord.js");


module.exports = (client, message, args) => {
let texto = args.join(" ");
const user = message.mentions.users.first();


const embedDatos = new Discord.MessageEmbed()
.setTitle((message.author.username) + (" está triste"))
.setImage("https://media.giphy.com/media/6gDSyjaOPwZ4A/giphy.gif")
message.channel.send({ embed: embedDatos });
}
