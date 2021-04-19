//Esta función recibe el parametro client, message, y args para ser usados:
const Discord = require("discord.js");
module.exports = (client, message, args) => {
  const embedDatos = new Discord.MessageEmbed()
  .setImage("https://i.pinimg.com/736x/f8/ed/1f/f8ed1f22dd3e44c59a0939364375754d.jpg")
  message.channel.send({ embed: embedDatos });
}
