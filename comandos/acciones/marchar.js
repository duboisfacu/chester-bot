const Discord = require("discord.js");


module.exports = (client, message, args) =>  {
let texto = args.join(" ");
const user = message.mentions.users.first();


const embedDatos = new Discord.MessageEmbed()
.setTitle((message.author.username) + (" tomó sus cosas y se puso a navegar."))
.setImage("https://pa1.narvii.com/6907/b260acfb788567580a3c7312fda127d4f7ed2baer1-401-220_hq.gif")
message.channel.send({ embed: embedDatos });
}
