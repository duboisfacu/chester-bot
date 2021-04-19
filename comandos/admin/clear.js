const Discord = require("discord.js");


module.exports = async function (client, message, args)  {
let texto = args.join(" ");
const user = message.mentions.users.first();


if(!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) return message.reply("capo no te hagas el piola que no tenes los permisos!");
const deleteCount = parseInt(args[0]);
if (!deleteCount || deleteCount < 2 || deleteCount > 100) return message.reply("La pija de discord deja borrar solo de a 2 a 100 mensajes");
const fetched = await message.channel.messages.fetch({
count: deleteCount
});
message.channel.bulkDelete(fetched).catch(error => message.reply(`No se puede eliminar porque: ${error}`));
}
