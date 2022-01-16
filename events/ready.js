const { Collection } = require('discord.js');
const mongoose = require('mongoose');
const Reminder = require('../utils/models/Reminder');
const setUpReminders = require('../utils/setUpReminders');

module.exports = {
  name: 'ready',
  once: true,
  async execute(client) {
    client.playerManager = new Map();
    client.triviaManager = new Map();
    client.guildData = new Collection();
    client.user.setActivity('to music, (/help)', { type: 'LISTENING' });
    mongoose
      .connect(encodeURI(process.env.mongo_URI), {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      .then(() => {
        console.log('Bot is now connected to MongoDB');
      })
      .catch(console.error);

    const reminders = await Reminder.find({});
    setUpReminders(reminders, client);

    console.log(`${client.user.username}#${client.user.discriminator} has logged in`);
  }
};
