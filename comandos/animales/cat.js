const fetch = require("node-fetch");
const Discord = require("discord.js");


module.exports = async function (client, message, args) {

let texto = args.join(" ");
const user = message.mentions.users.first();



/// const lang = await bot.getGuildLang(message.guild.id);
    const data = await (
      await fetch("https://some-random-api.ml/img/cat")
    ).json();

    const embedDatos = new Discord.MessageEmbed()
  ///    .setDescription(`${lang.IMAGE.CLICK_TO_VIEW}(${data.link})`)
      .setImage(`${data.link}`);

    message.channel.send({ embed: embedDatos });

}
