//Esta función recibe el parametro client, message, y args para ser usados:
const Discord = require("discord.js");
module.exports = (client, message, args) => {
  const embedDatos = new Discord.MessageEmbed()
  .setImage("https://media3.giphy.com/media/kEVmRBFVOH6P4ouy43/giphy.gif")
  message.channel.send({ embed: embedDatos });
}
