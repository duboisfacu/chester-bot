//Esta función recibe el parametro client, message, y args para ser usados:
const Discord = require("discord.js");
module.exports = (client, message, args) => {
  const embedDatos = new Discord.MessageEmbed()
  .setImage("https://i2.wp.com/media1.giphy.com/media/hkRkIzk0F1tv2/giphy.gif")
  message.channel.send({ embed: embedDatos });
}
