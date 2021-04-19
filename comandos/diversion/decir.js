const Discord = require("discord.js");
const config = require("../../config.js");
const thisWord = config.prefix + "decir";

module.exports = (client, message, args) => {
let texto = args.join(" ");
const user = message.mentions.users.first();


if(!texto) return message.channel.send(`qué digo capo?`);
     if (texto === thisWord) return;
  message.delete().catch();
  message.channel.send(texto);
}
