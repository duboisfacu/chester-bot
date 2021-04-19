const Discord = require("discord.js");


module.exports = (client, message, args) => {
let texto = args.join(" ");
const user = message.mentions.users.first();


var chau = ["https://i.ibb.co/8Pk72Dd/1c.jpg"];
const embedDatos = new Discord.MessageEmbed()
.setTitle("Nos re vimos master!")
.setImage(chau[Math.floor(Math.random() * chau.length)]);
message.channel.send({ embed: embedDatos });
}
