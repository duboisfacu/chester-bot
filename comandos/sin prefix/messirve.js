//Esta función recibe el parametro client, message, y args para ser usados:
const Discord = require("discord.js");
module.exports = (client, message, args) => {
  const embedDatos = new Discord.MessageEmbed()
  .setImage("https://media1.tenor.com/images/9c570e06b1bc9555c31b48801f1b5252/tenor.gif")
  message.channel.send({ embed: embedDatos });
}
