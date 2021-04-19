const Discord = require("discord.js");
const config = require("../../config.js");
const prefix = config.prefix;

module.exports = (client, message, args) => {
let texto = args.join(" ");

if(!texto) return message.channel.send(`el culo de tu mamá voy a abrir si no me aclaras qué carajos queres que abra.`);
    if (texto === "boleteria"){
      if(!message.member.roles.cache.find(r => r.name === "Operador")) {message.channel.send("Che facha, sos el dueño del cine para abrir la boleteria? cuidado con lo que haces.")}
       else if(message.member.roles.cache.find(r => r.name === "Operador")) {
         if (message.guild.channels.cache.find(c => c.name.toLowerCase() === "🎫boleteria")) {message.channel.send("La boletería ya está abierta!")}
           else if (!message.guild.channels.cache.find(c => c.name.toLowerCase() === "🎫boleteria")) {
            message.channel.send("Boleteria abierta!")
            message.guild.channels.create("🎫boleteria").then(channel => {
            channel.setParent('713626445380845571')})
            }}}
}
