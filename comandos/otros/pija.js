const Discord = require("discord.js");


module.exports = (client, message, args) => {
let texto = args.join(" ");
const user = message.mentions.users.first();


  var rpts = ["5cm", "20cm", "8cm", "10cm", "12cm", "14cm", "15cm","15cm de hondo","16cm","16cm de hondo","18cm"];
const embedDatos = new Discord.MessageEmbed()
     .setTitle("a " + (message.author.username) +" le mide "+ (rpts[Math.floor(Math.random() * rpts.length)]) )
     .setImage("https://thumbs.gfycat.com/BasicFickleHorsechestnutleafminer-small.gif")
 message.channel.send({ embed: embedDatos });

}
