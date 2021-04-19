const Discord = require("discord.js");


module.exports = (client, message, args) => {

    let sicon = message.guild.iconURL();
    let serverembed = new Discord.MessageEmbed()
    .setDescription("Información del Servidor:")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Nombre del servidor", message.guild.name)
    .addField("Fecha de creación", message.guild.createdAt)
    .addField("Vos estas desde", message.member.joinedAt)
    .addField("Miembros totales", message.guild.memberCount);

    message.channel.send(serverembed);
}
