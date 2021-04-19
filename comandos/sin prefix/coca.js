//Esta función recibe el parametro client, message, y args para ser usados:
const Discord = require("discord.js");
module.exports = (client, message, args) => {
  const embedDatos = new Discord.MessageEmbed()
  .setImage("https://sc2.elpais.com.uy/files/article_default_content/uploads/2018/01/19/5a624e53d9ec2.jpeg")
  message.channel.send({ embed: embedDatos });
}
