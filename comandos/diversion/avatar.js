const Discord = require("discord.js");


module.exports = (client, message, args) => {
let texto = args.join(" ");
const user = message.mentions.users.first();


    const embed1 = new Discord.MessageEmbed()
        .setTitle("Pero mirá lo que sos bebé!")
        .setImage(("https://cdn.discordapp.com/avatars/")+(message.author.id)+"/"+(message.author.avatar)+(".png?size=2048"))
        .setColor(0x66b3ff)
        .setFooter(`Avatar de ${message.author.tag}`);
        if (!texto) return message.channel.send(embed1);
    if(!user) return message.channel.send(`pero nombrá a un usuario válido jeropa`);
      const embed2 = new Discord.MessageEmbed()
          .setTitle("Pero mirá lo que sos bebé!")
          .setImage(("https://cdn.discordapp.com/avatars/")+(user.id)+"/"+(user.avatar)+(".png?size=2048"))
          .setColor(0x66b3ff)
          .setFooter(`Avatar de ${user.tag}`);
      message.channel.send(embed2);
}
