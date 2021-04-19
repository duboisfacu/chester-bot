//Esta función recibe el parametro client, message, y args para ser usados:
const Discord = require("discord.js");
module.exports = (client, message, args) => {
  const embedDatos = new Discord.MessageEmbed()
  .setImage("https://media1.tenor.com/images/162732ba2c76d485d6418dd14ac4483b/tenor.gif?itemid=18775286")
  message.channel.send({ embed: embedDatos });
}
