const Discord = require("discord.js");


module.exports = (client, message, args) =>  {
let texto = args.join(" ");
const user = message.mentions.users.first();


var golpear = ["https://media1.tenor.com/images/3f067fd313ce43d7625aa19c23ecff77/tenor.gif?itemid=11899011","https://media1.tenor.com/images/ffebfc037d88998fe4a6e85a08c5e13b/tenor.gif?itemid=15175869"];
if(!texto) return message.channel.send(`a quién queres patear capo?`);
if(!user) return message.channel.send(`pero nombrá a un usuario válido jeropa`);
const embedDatos = new Discord.MessageEmbed()
.setTitle((message.author.username) + (" le pegó un patadón a ") + (user.username))
.setImage(golpear[Math.floor(Math.random() * golpear.length)]);
  const embedDatos2 = new Discord.MessageEmbed()
  .setTitle("a quién querés patear imbécil.")
  .setImage("https://media.giphy.com/media/u0uKwsG8NUeY8uWT1L/giphy.gif")

  if(user.username==="Chester"){
   message.channel.send({ embed: embedDatos2 });
  }
   else
   {
 message.channel.send({ embed: embedDatos });
}
}
