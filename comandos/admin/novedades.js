const Discord = require("discord.js");


module.exports = (client, message, args) => {
let texto = args.join(" ");
const user = message.mentions.users.first();


  if(!texto) return message.channel.send(`escribi las novedades master`);
       let channel = client.channels.cache.get('722020185191612427');
       channel.send(texto);
}
