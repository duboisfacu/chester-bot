const Discord = require("discord.js");
const config = require("../../config.js");
const prefix = config.prefix;

module.exports = (client, message, args) => {
  let texto = args.join(" ");

  if(!texto) return message.channel.send(`si me aclararas que tengo que cerrar sería mas fácil.`);

  var filtrocanalboleteria = message.channel.name
      if (texto === "boleteria"){
        if (filtrocanalboleteria != "🎫boleteria") {message.channel.send ("Este comando solo funciona en la boletería.")}
          else if(!message.member.roles.cache.find(r => r.name === "Operador")) {message.channel.send("Che facha, sos el dueño del cine para abrir la boleteria? cuidado con lo que haces.")}
            else if(message.member.roles.cache.find(r => r.name === "Operador")) {
              message.channel.delete("🎫boleteria")}
            }}
