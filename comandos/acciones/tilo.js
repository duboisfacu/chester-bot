const Discord = require("discord.js");


module.exports = (client, message, args) => {
let texto = args.join(" ");
const user = message.mentions.users.first();


if(!texto) return message.channel.send(`a quién le queres dar el té capo?`);
if(!user) return message.channel.send(`pero nombrá a un usuario válido jeropa`);
const embedDatos = new Discord.MessageEmbed()
.setTitle((message.author.username) + (" le dio un té de tilo a ") + (user.username))
.setImage("https://img-s1.onedio.com/id-597f2c799cc9c1e71b43c6ed/rev-0/w-900/h-580/f-gif/s-217ad6f17072178d29a8fed4c75270873289e894.gif");
  const embedDatos2 = new Discord.MessageEmbed()
  .setTitle("grasia :3")
  .setImage("https://i.ibb.co/8NfGY5b/tea.jpg")

  if(user.username==="Chester"){
   message.channel.send({ embed: embedDatos2 });
  }
   else
   {
 message.channel.send({ embed: embedDatos });
}
}
