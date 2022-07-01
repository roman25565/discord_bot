/*import { SlashCommandBuilder } from "@discordjs/builders";
import { Message, MessageEmbed } from "discord.js";
import { Command } from "../interfaces/Command";

export const help: Command = {
    data: new SlashCommandBuilder()
        .setName("arole")
        .setDescription("s")
        .setDefaultPermission(true),

    run: async (interaction) => {

        await interaction.deferReply();
        const helpEmbed = new Message
       /* helpEmbed.setTitle("a");
        .addField(
            "content": "This is a message with components",
                "components": [
                    {
                        "type": 1,
                        "components": [
                            {
                                "type": 2,
                                "label": "Click me!",
                                "style": 1,
                                "custom_id": "click_one"
                            }
                        ]

                    }
                ]
        )
        helpEmbed.setDescription(

            "This discord bot is designed to help you track and share your 100 Days of Code progress."
        );
        helpEmbed.addField(
            "Create today's update",
            "Use the `/100` command to create your update for today. The `message` will be displayed in your embed."
        );
        helpEmbed.addField(
            "Edit today's update",
            "Do you see a typo in your embed? Right click it and copy the ID (you may need developer mode on for this), and use the `/edit` command to update that embed with a new message."
        );
        helpEmbed.addField(
            "Show your progress",
            "To see your current progress in the challenge, and the day you last checked in, use `/view`."
        );
        
        helpEmbed.setFooter({ text: `Version ${process.env.npm_package_version}` });
        await interaction.editReply({ embeds: [helpEmbed] });
        return;
    },
};*/