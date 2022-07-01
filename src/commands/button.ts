import { SlashCommandBuilder } from "@discordjs/builders";
import { GuildMember, GuildMemberRoleManager, MessageActionRow, MessageButton, Role, } from "discord.js";
import { Command } from "../interfaces/Command";


export const button: Command = {
    data: new SlashCommandBuilder()
        .setName("button")
        .setDescription("button"),
    run: async (interaction) => {
        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId('primary')
                .setLabel('Primary')
                .setStyle('PRIMARY'),
        );
       // let member : GuildMember
      /* let member = interaction.options.getMember(interaction.guild?.members.kick);
        member.kick();
        member?.roles.add(Role)*/
        interaction.guild?.members.kick
       // interaction.guild.members.ban(user);
     /*   const msg = await message.reply({
            content: "test",
            components: [action, action2]
        });
        
        const collector = await msg.createMessageComponentCollector();
        //
        

   /* collector.on('collect', interaction => {

        if(interaction.customId == "selectmenu") {
            if(interaction.values[0] == "one") {
                interaction.reply({ephemeral: true, content: `Изменено`});
                action2.components[0].options[0].default = true;
                msg.edit({
                    content: "test",
                    components: [action, action2]
                });
            }

*/
    await interaction.reply({ ephemeral: false,content: 'Pong!', components: [row] });
    }
};