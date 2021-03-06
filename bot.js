const Discord = require('discord.js');
const client = new Discord.Client();
const glob = require('glob');
let { readdirSync } = require('fs');
const embedDatos = new Discord.MessageEmbed()
client.config = require('./config.js');
client.comandos = new Discord.Collection();
const fs = require('fs');
const fsPromises = fs.promises;
const path = require('path');

glob(__dirname + '/comandos/**/*.js', {}, (err, files)=>{
  files.forEach((file) => {
    if(file.endsWith(".js")) {
    let fileNamejs = file.split(/\/|\\/).pop();
    let fileName = fileNamejs.substring(0, fileNamejs.length - 3);
    let fileContents = require(file);
  client.comandos.set(fileName, fileContents);
console.log(fileName)
  };
})})
;

for(const file of readdirSync('./eventos/')){
  if(file.endsWith(".js")){
  let fileName = file.substring(0, file.length - 3);
  let fileContents = require(`./eventos/${file}`);
  client.on(fileName, fileContents.bind(null, client));
  delete require.cache[require.resolve(`./eventos/${file}`)];
  }
}

client.login(process.env.TOKEN) 
  .then(() => {
    console.log(`Estoy listo, soy ${client.user.tag}`);
  })
  .catch((err) => {
    console.error("Error al iniciar sesión: " + err);
  });
