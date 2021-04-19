const { getMember } = require("../../functions.js");
const Discord = require("discord.js");


module.exports = (client, message, args) => {

        let person = getMember(message, args[0]);

        if (!person || message.author.id === person.id) {
            person = message.guild.members.cache
                .filter(m => m.id !== message.author.id)
                .random();
        }

        const love = Math.random() * 100;
        const loveIndex = Math.floor(love / 10);
        const loveLevel = ":hearts:".repeat(loveIndex) + ":black_heart:".repeat(10 - loveIndex);
        const si = ["no","https://media1.tenor.com/images/ffebfc037d88998fe4a6e85a08c5e13b/tenor.gif?itemid=15175869"];
        const no = ["https://media1.tenor.com/images/3f067fd313ce43d7625aa19c23ecff77/tenor.gif?itemid=11899011","https://media1.tenor.com/images/ffebfc037d88998fe4a6e85a08c5e13b/tenor.gif?itemid=15175869"];

if ((love > 99)) {
  const embed = new Discord.MessageEmbed()
  .setColor("#ffb6c1")
              .setTitle("COMPATIBILIDAD EN EL AMOR:")
  .addField(`‎**${person.displayName}** y **${message.member.displayName}** tienen una compatibilidad del:  ${Math.floor(love)}%`,
  `‎      ‏‏‎\n ${loveLevel}`)
  .setFooter('definitivamente tienen que darse todo el amor que tengan', 'https://i.imgur.com/wSTFkRM.png');
  message.channel.send(embed);
                              }


if ((love <= 99) && (love >= 81)) {
        const embed = new Discord.MessageEmbed()
            .setColor("#ffb6c1")
                        .setTitle("COMPATIBILIDAD EN EL AMOR:")
            .addField(`‎**${person.displayName}** y **${message.member.displayName}** tienen una compatibilidad del:  ${Math.floor(love)}%`,
            `‎      ‏‏‎\n ${loveLevel}`)
            .setFooter('wena cracks', 'https://i.imgur.com/P8NZkDT.png');
            message.channel.send(embed);
                      }


if ((love <= 80) && (love >= 60)) {
          const embed = new Discord.MessageEmbed()
            .setColor("#ffb6c1")
            .setTitle("COMPATIBILIDAD EN EL AMOR:")
            .addField(`‎**${person.displayName}** y **${message.member.displayName}** tienen una compatibilidad del:  ${Math.floor(love)}%`,
            `‎      ‏‏‎\n ${loveLevel}`)
            .setFooter('nada mal', 'https://i.imgur.com/P8NZkDT.png');
            message.channel.send(embed);
                      }

if ((love <= 59) && (love >= 30)) {
          const embed = new Discord.MessageEmbed()
            .setColor("#ffb6c1")
                        .setTitle("COMPATIBILIDAD EN EL AMOR:")
            .addField(`**${person.displayName}** y **${message.member.displayName}** tienen una compatibilidad del:  ${Math.floor(love)}%`,
            `‎      ‏‏‎\n ${loveLevel}`)
            .setFooter('no recomiendo mucho que empiecen o sigan con eso', 'https://i.imgur.com/P8NZkDT.png');
            message.channel.send(embed);
                      }

if ((love <= 29) && (love >= 0)) {
        const embed = new Discord.MessageEmbed()
        .setColor("#ffb6c1")
                    .setTitle("COMPATIBILIDAD EN EL AMOR:")
        .addField(`**${person.displayName}** y **${message.member.displayName}** tienen una compatibilidad del:  ${Math.floor(love)}%`,
        `‎      ‏‏‎\n ${loveLevel}`)
        .setFooter('definitivamente no es por ahí', 'https://i.imgur.com/P8NZkDT.png');
        message.channel.send(embed);
                      }

}
