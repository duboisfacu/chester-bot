//Esta función recibe el parametro client, message, y args para ser usados:
const Discord = require("discord.js");
module.exports = (client, message, args) => {
  const embedDatos = new Discord.MessageEmbed()
  .setImage("https://media1.tenor.com/images/2d268eadf3584714f402ebcb2dd1caab/tenor.gif")
  message.channel.send({ embed: embedDatos });
}
