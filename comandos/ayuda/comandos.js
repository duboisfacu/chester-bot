const Discord = require("discord.js");


module.exports = (client, message, args) => {

const config = require("../../config.js");
let texto = args.join(" ");
const user = message.mentions.users.first();
const prefix = config.prefix

const embedDatos = new Discord.MessageEmbed()
.setTitle("Estos son los comandos breo:")
.addField("**>> Categorias:**", "`"+ prefix + "com acc`  :: Acciones \n `"+ prefix + "com fun`  :: Diversión \n `"+ prefix + "com ran`  :: Random \n `"+ prefix + "com res`  :: Respuestas")

message.channel.send({ embed: embedDatos });
//bot.users.cache.get(message.author.id).send({ embed: embedDatos });
}
