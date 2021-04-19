const Discord = require("discord.js");


module.exports = (client, message, args) => {
let texto = args.join(" ");
const user = message.mentions.users.first();


if(!texto) return message.channel.send(`a quién le queres pegar capo?`);
if(!user) return message.channel.send(`pero nombrá a un usuario válido jeropa`);
const embedDatos = new Discord.MessageEmbed()
.setTitle((message.author.username) + (" le pego a ") + (user.username))
.setImage("https://media1.tenor.com/images/bd96440988bf612c6fbe85b84709d1cc/tenor.gif?itemid=13479577");
  const embedDatos2 = new Discord.MessageEmbed()
  .setTitle("a quién le querés pegar imbécil.")
  .setImage("https://media.giphy.com/media/u0uKwsG8NUeY8uWT1L/giphy.gif")

  if(user.username==="Chester"){
   message.channel.send({ embed: embedDatos2 });
  }
   else
   {
 message.channel.send({ embed: embedDatos });
}
}
