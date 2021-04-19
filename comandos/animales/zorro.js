const fetch = require("node-fetch");
const Discord = require("discord.js");


module.exports = async function (client, message, args) {

let texto = args.join(" ");
const user = message.mentions.users.first();



    const data = await (
      await fetch("https://some-random-api.ml/img/fox")
    ).json();

    const embedDatos = new Discord.MessageEmbed()
      .setImage(`${data.link}`);

    message.channel.send({ embed: embedDatos });

}
