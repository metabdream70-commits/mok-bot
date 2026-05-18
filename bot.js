const { Client, GatewayIntentBits } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates
  ]
});

const voiceChannels = [
  '1425196168601927802',
  '1489878879790174288',
  '1476824149581365328',
  '1495711210879062079',
  '1495338552266068078',
  '1495338611967524965',
  '1495338646407221301',
  '1481005501486596116',
  '1476786509125521569',
  '1425196206417645698'
];

client.once('ready', () => {
  console.log('Bot is online!');

  voiceChannels.forEach((id) => {
    const channel = client.channels.cache.get(id);
    if (!channel) return;

    joinVoiceChannel({
      channelId: channel.id,
      guildId: channel.guild.id,
      adapterCreator: channel.guild.voiceAdapterCreator,
      selfDeaf: true
    });
  });
});

// 
client.login(process.env.DISCORD_TOKEN);
