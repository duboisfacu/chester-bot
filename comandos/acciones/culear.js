const Discord = require("discord.js");


module.exports = (client, message, args) =>  {
let texto = args.join(" ");
const user = message.mentions.users.first();

if(!texto) return message.channel.send(`a quién queres culear capo?`);
if(!user) return message.channel.send(`pero nombrá a un usuario válido jeropa`);
const embedDatos = new Discord.MessageEmbed()
.setTitle((message.author.username) + (" se culeó a ") + (user.username))
.setImage("https://media.giphy.com/media/yms4CB47nHnos/giphy.gif")
  const embedDatos2 = new Discord.MessageEmbed()
  .setTitle("a quién querés culear imbécil.")
  .setImage("https://media.giphy.com/media/u0uKwsG8NUeY8uWT1L/giphy.gif")

  if(user.username==="Chester"){
   message.channel.send({ embed: embedDatos2 });
  }
   else
   {
 message.channel.send({ embed: embedDatos });
}
}
