//Esta función recibe el parametro client, message, y args para ser usados:
const Discord = require("discord.js");
module.exports = (client, message, args) => {
  const embedDatos = new Discord.MessageEmbed()
  .setImage("https://pa1.narvii.com/7114/9513732a26e419bebd0f781c32bc25e2dd52db19r1-320-180_00.gif")
  message.channel.send({ embed: embedDatos });
}
