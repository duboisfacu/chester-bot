const Discord = require("discord.js");


module.exports = (client, message, args) =>  {
let texto = args.join(" ");
const user = message.mentions.users.first();


  if(!texto) return message.channel.send(`a quién queres funar capo?`);
  if(!user) return message.channel.send(`pero nombrá a un usuario válido jeropa`);

  const embedDatos = new Discord.MessageEmbed()
 .setTitle((message.author.username) + (" funó a "+ user.username))
 .setImage("https://media2.giphy.com/media/3N2ML3tw4c4uc/giphy.gif")

  const embedDatos2 = new Discord.MessageEmbed()
  .setTitle("a quién querés funar imbécil.")
  .setImage("https://media.giphy.com/media/u0uKwsG8NUeY8uWT1L/giphy.gif")

  if(user.username==="Chester"){
   message.channel.send({ embed: embedDatos2 });
  }
   else
   {
 message.channel.send({ embed: embedDatos });
}
}
