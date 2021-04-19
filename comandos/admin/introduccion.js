const Discord = require("discord.js");


module.exports = (client, message, args) => {
let texto = args.join(" ");
const user = message.mentions.users.first();


  let channel = client.channels.cache.get('688501440351830084');
  let pic = new Discord.MessageEmbed()
  .setImage("https://i.imgur.com/4ZJLqYD.png")
  let intro= ("**GRUPO OFICIAL DE MOGOLICOS DEL SECTOR ORIGINAL Y AMPLIADO.**\n\n**REGLAS DEL GRUPO:**\nNo ser down.\nNo ser autista.\nNo ser tartamudo.\nNo poseer menos de 3 extremidades.\nNo ser disléxico.\nNo ser leproso.\nNo estar en estado vegetativo.\nNo oler a culo.\nNo discriminar.\n\n**¿Qué es El Sector?**\nEl Sector fue, es y será un grupo de pelotudos de mierda que se juntaban a hacer y decir pajereadas de virgos.\n**¿Cuándo se fundó?**\nNo hay fecha registrada de su fundación, pero se estima que alrededor del año 2015.\n**¿A qué se le debe el nombre?**\nCircula tan solo una historia sobre el nombre del grupo, por lo tanto se la da como verídica. El gran Tarta todo poderoso se refirió a esa esquina turbina de la secundaria como ||El Sector||.\n\n**DICCIONARIO SECTORIANO:**\n__La Horda:__ cuando se viene una cagadera zarpada en terrible.\n__No Chaon:__ cuando algo es increible, impactante o alucinante.\n__Heeeeyy:__ simple saludo, normalmente va acompañado de un gesto con ambas manos a la altura pélvica (:call_me:) \n__Centríco:__ utilizado en juegos de autos y pelotas al referirse a un centro re piola.\n__Los vientos:__ término utilizado para denotar interés sobre una próxima juntada.\n__Yo vivo ahí:__ término utilizado para recordar a un pana el lugar donde vive o concurre normalmente.\n__La Ley del Barrio:__ utilizado en partidas de juegos, básicamente la ley indica que el primero en morir es puto.")
              channel.send(pic);
  channel.send(intro)
}
