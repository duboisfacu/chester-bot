const Discord = require("discord.js");


module.exports = (client, message, args) => {
let texto = args.join(" ");
const user = message.mentions.users.first();


  if(!texto) return message.channel.send(`votación de que queres hacer capo?`);
  message.delete().catch();
     message.channel.send("Comienza la votación de: " + "`"+texto+"`" +" ¿Votan que si o que no?").then(texto =>{
     texto.react("👍")
     texto.react("👎")
   })}

   
