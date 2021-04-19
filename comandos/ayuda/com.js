const Discord = require("discord.js");


module.exports = (client, message, args) => {

let texto = args.join(" ");
const user = message.mentions.users.first();
const config = require("../../config.js");
const prefix = config.prefix
if (texto === 'fun'){
const embedDatos = new Discord.MessageEmbed()
.setTitle("Estos son los comandos breo:")
.addField("**>> Categoria Diversión:**", "`"+ prefix + "ask`  :: Pregunta lo que sea \n `"+ prefix + "avatar`  :: Tu foto en grande \n `"+ prefix + "decir`  :: Chester repite lo que digas \n `"+ prefix + "love`  :: ¿qué tan compatibles son? \n `"+ prefix + "encuesta`  :: Votación! ¿Si o No? \n `"+ prefix + "encuestaanonima`  :: Votación! ¿Si o No?")

message.channel.send({ embed: embedDatos });
//bot.users.cache.get(message.author.id).send({ embed: embedDatos });
}

if (texto === 'acc'){
const embedDatos = new Discord.MessageEmbed()
.setTitle("Estos son los comandos breo:")
.addField("**>> Categoria Acciónes:**", "`"+ prefix + "abrazar`  :: Menciona a alguien para abrazar \n `"+ prefix + "besar`  :: Menciona a alguien para besar \n `"+ prefix + "cagar`  :: Menciona a alguien para cagar \n `"+ prefix + "culear`  :: Menciona a alguien para culear \n `"+ prefix + "funar`  :: Menciona a alguien para funar \n `"+ prefix + "marchar`  :: Nos vimos \n `"+ prefix + "patear`  :: Menciona a alguien para patear \n `"+ prefix + "pegar`  :: Menciona a alguien para pegar")

message.channel.send({ embed: embedDatos });
//bot.users.cache.get(message.author.id).send({ embed: embedDatos });
}

if (texto === 'ran'){
const embedDatos = new Discord.MessageEmbed()
.setTitle("Estos son los comandos breo:")
.addField("**>> Categoria Random:**", "`"+ prefix + "chau`  :: ¿Te vas? \n `"+ prefix + "hola`  :: Saluda a Chester! \n `"+ prefix + "happy`  :: Careteá tu felicidad \n `"+ prefix + "sad`  :: ¿Tas bien? \n `"+ prefix + "mouse`  :: Jaja un mouse \n `"+ prefix + "pija`  :: Mide tu miembro viril")

message.channel.send({ embed: embedDatos });
//bot.users.cache.get(message.author.id).send({ embed: embedDatos });
}

if (texto === 'res'){
const embedDatos = new Discord.MessageEmbed()
.setTitle("Estos son los comandos breo:")
.addField("**>> Categoria Respuestas (no requieren empezar por " + prefix +"):**", "`4:20`  :: Prendelo y pasalo capo \n `bromomento`  :: Bromomento \n `coca`  :: Coca \n `f`  :: F bro \n `messirve`  :: Te sirve \n `nomessirve`  :: No te sirve \n `Nomessirvio`  :: No te sirvió \n `ta bien`  :: Ta bien \n `ta mal`  :: Ta mal \n `ta maome`  :: Ta maome \n `xd`  :: xd")



message.channel.send({ embed: embedDatos });
//bot.users.cache.get(message.author.id).send({ embed: embedDatos });
}
else return;

}
