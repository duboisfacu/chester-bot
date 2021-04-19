//Esta función recibe el parametro client, message, y args para ser usados:
const Discord = require("discord.js");
module.exports = (client, message, args) => {
  const embedDatos = new Discord.MessageEmbed()
  .setImage("https://pm1.narvii.com/7490/e732f955e9f61f86cafdfa4116d3df68c6ff6facr1-720-695v2_uhq.jpg")
  message.channel.send({ embed: embedDatos });
}
