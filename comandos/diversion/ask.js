const Discord = require("discord.js");


module.exports = (client, message, args) => {
let texto = args.join(" ");
const user = message.mentions.users.first();


    var rpts = ["definitivamente sí", "no, eso es imposible", "que mierda te importa jeropa", "puede ser", "no creo", "definitivamente", "sure breo","sí imbécil","no imbécil","obvie papaaa","obvie que no breo"];
    if (!texto) return message.reply(`cuál es la pregunta papi?`);
    message.channel.send(rpts[Math.floor(Math.random() * rpts.length)]);
}
