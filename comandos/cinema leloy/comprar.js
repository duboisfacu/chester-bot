const Discord = require("discord.js");
const config = require("../../config.js");
const prefix = config.prefix;

module.exports = (client, message, args) => {
let texto = args.join(" ");
var filtrocanal = message.channel.name

if(!texto) return message.channel.send(`qué queres comprar capo?`);
    if(texto === 'boleto') {
      if (filtrocanal != "🎫boleteria") {message.channel.send ("Este comando solo funciona en boletería.")}
        else
          if(message.member.roles.cache.find(r => r.name === "Espectador")) {message.channel.send("Ya tenes un boleto!")}
            else if(!message.member.roles.cache.find(r => r.name === "Espectador")){
              message.member.roles.add("714594024870117467")
              setTimeout(function(){
              message.member.roles.remove("714594024870117467")
              }, 9000000);
              setTimeout(function(){
              canalcine.send(`<@${message.author.id}> lamentablemente tu boleto acaba de expirar.`)
              }, 9000000);

              message.channel.send("Tu compra ha sido procesada correctamente.",{
        files: [{
           attachment: "https://i.ibb.co/8bMmMyD/cinema2-leloy.png",
           name: "boleto cinema leloy.png"
        }]
     })
            }
          }
        }
