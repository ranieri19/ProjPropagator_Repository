const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>
{
  const sayMessage = args.join(" ");  
  message.delete().catch(O_o => {});
  message.author.send(sayMessage);
  // message.channel.send(sayMessage);
  console.log("User:" + message.client.user);
  console.log("ServerID:" + message.guild.id);
  // 684566596991451246

  // const sayMessage
}