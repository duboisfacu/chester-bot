//Esta función recibe el parametro client, message, y args para ser usados:
const Discord = require("discord.js");
module.exports = (client, message, args) => {
  const embedDatos = new Discord.MessageEmbed()
  .setImage("https://i.ibb.co/8Y36LMx/giphy-1-1-2.gif")
  message.channel.send({ embed: embedDatos });
}
