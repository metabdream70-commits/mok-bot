const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once('ready', () => {
  console.log('Bot is online!');
});

client.login('MTUwNTk5Njg0NTE4NzMzNDE5NA.GeR_D0.5xX5kbEP7oQWC6GWLHQU_skexwpr-wBsX1LMss');
