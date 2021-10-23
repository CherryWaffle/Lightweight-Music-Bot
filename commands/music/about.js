const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('about')
    .setDescription('Info about the bot and its creator!'),
    async execute(interaction) {

        const row = new MessageActionRow()
		.addComponents(
			new MessageButton()
				  .setLabel('Galnir\'s Bot [Main Version]')
				  .setStyle('LINK')
				  .setURL('https://github.com/Galnir/Master-Bot'),
			new MessageButton()
				  .setLabel('Cherry\'s Lightweight Version')
				  .setStyle('LINK')
				  .setURL('https://github.com/CherryWaffle/Lightweight-Music-Bot'),	  
		)

const embed = new MessageEmbed()
	.setColor('#c2ff00')
	.setTitle('About the Bot')
	.setDescription('Made by @hyperzone#1185, lightweight version made by CherryWaffle#2152')
	.setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNYn6ru1tFjLlJmddZ_xIjEPrK8isac41Opg&usqp=CAU')
    .addFields(
		{ name: 'Bot Type', value: 'This is the `Lightweight Version` of the bot' },
    )
    .setTimestamp()
    .setFooter('Click the buttons to goto the source codes of respective bots 😁');


    await interaction.reply({content: 'About Me', embeds: [embed], components: [row] });
	return;
  },
};
