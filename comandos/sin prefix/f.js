//Esta función recibe el parametro client, message, y args para ser usados:
const Discord = require("discord.js");
module.exports = (client, message, args) => {
  var f = ["https://media1.tenor.com/images/733e542fcdd51bb3d4404d888e7101e9/tenor.gif?itemid=14764178","https://media1.tenor.com/images/a6d6f759e824cd84e3fc8df537e2e7bc/tenor.gif?itemid=4519236"];
  const embedDatos = new Discord.MessageEmbed()
  .setImage(f[Math.floor(Math.random() * f.length)]);
  message.channel.send({ embed: embedDatos });
}
