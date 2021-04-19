const Discord = require("discord.js");


module.exports = (client, message, args) => {
let texto = args.join(" ");
const user = message.mentions.users.first();


var hola = ["https://i.ibb.co/nLw1PPC/1.jpg","https://i.ibb.co/p1hWXZ6/2.jpg","https://i.ibb.co/NN3XR4s/3.jpg","https://i.ibb.co/FbgmkZj/4.jpg","https://i.ibb.co/60fvF4N/5.jpg"];
const embedDatos = new Discord.MessageEmbed()
.setTitle((message.author.username) + (" me está saludando? HOLA!!"))
.setImage(hola[Math.floor(Math.random() * hola.length)]);
message.channel.send({ embed: embedDatos });
}
