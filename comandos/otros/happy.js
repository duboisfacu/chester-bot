const Discord = require("discord.js");


module.exports = (client, message, args) => {
let texto = args.join(" ");
const user = message.mentions.users.first();


const embedDatos = new Discord.MessageEmbed()
.setTitle((message.author.username) + (" está felíz!"))
.setImage("https://media1.tenor.com/images/9ef1a8b553e3c1ba8f04a0b1bc128f35/tenor.gif?itemid=15781456")
message.channel.send({ embed: embedDatos });
}
