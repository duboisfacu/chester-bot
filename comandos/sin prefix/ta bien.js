//Esta función recibe el parametro client, message, y args para ser usados:
const Discord = require("discord.js");
module.exports = (client, message, args) => {
  const embedDatos = new Discord.MessageEmbed()
  .setImage("https://i.pinimg.com/474x/ee/12/a9/ee12a906d097550141060360ccc54fd2.jpg")
  message.channel.send({ embed: embedDatos });
}
