//Esta función recibe el parametro client, message, y args para ser usados:
const Discord = require("discord.js");
module.exports = (client, message, args) => {
  const embedDatos = new Discord.MessageEmbed()
  .setImage("https://media.giphy.com/media/WVFhLyxwKlCI8zZdX1/giphy.gif")
  message.channel.send({ embed: embedDatos });
}
