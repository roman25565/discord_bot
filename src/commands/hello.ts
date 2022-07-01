import { SlashCommandBuilder } from "@discordjs/builders";
import { Command } from "../interfaces/Command";
import { MessageActionRow, MessageEmbed, MessageSelectMenu ,MessageSelectMenuOptions} from "discord.js"

export const hello: Command = {
    data: new SlashCommandBuilder()
        .setName("hello")
        .setDescription("hello."),
    run: async (interaction) => {

       
		const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Nothing selected')
					.setMinValues(2)
					.setMaxValues(3)

					.addOptions([
								{
									label: 'Select me',
									description: 'This is a description',
									value: 'first_option',
								},
								{
									label: 'You can select me too',
									description: 'This is also a description',
									value: 'second_option',
								},
								{
									
									label: 'I am also an option',
									description: 'This is a description as well',
									value: 'third_option',
								},
						]),
				);
			
		const embed = new MessageEmbed()
			.setTitle('Some title')
			.setURL('https://discord.js.org/')
			.setDescription('Some description here');

			

		await interaction.reply({ content: 'Pong!', ephemeral: false, embeds: [embed], components: [row] });
	}
}
