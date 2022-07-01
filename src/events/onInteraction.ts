import { Client, ClientUser, GuildMember, GuildMemberRoleManager, Interaction, MessageSelectMenu, Role,Permissions, Guild, GuildMemberManager  } from "discord.js";
import { CommandList } from "../commands/_CommandList";
import { errorHandler } from "../utils/errorHandler";
import {givroles} from "../modules/givroles"

const wait = require('node:timers/promises').setTimeout;
export const onInteraction = async (
    interaction: Interaction,
    BOT : Client
): Promise<void> => {
    
    try {
        if(interaction.isSelectMenu()){
            
            if (interaction.customId === 'select') {
                //console.log(interaction.guild?.members)
                await interaction.deferUpdate();
		        await wait(4000);
              //  interaction.guild?.members
               // console.log(interaction);
                //await givroles(interaction)
                await givroles(BOT,interaction)
                
               if( interaction.values[0] === 'first_option'){
                //console.log(interaction.guild?.members)
               }interaction.guild?.fetch
              // const client = new Client();
              GuildMember
              BOT.guilds.cache.get('id')
              


              //GuildMember.roles.cache.some(role => role.name === 'Mod');
              let g = BOT.guilds.cache.get('978372654753021962');
              let thanos = BOT.users.fetch(interaction.user.id);
               for(let i = 0; i <  interaction.values.length;i++){
                if(i = 0 ){
                   // member.roles.find('name', 'Admin')
                }
               }
            }



        }
        if (interaction.isButton()){
            if (interaction.customId === 'primary'){
                interaction.reply({ephemeral: true, content: `Изменено`}); 
            }
        }


        if (interaction.isCommand()) {
            for (const Command of CommandList) {
                if (interaction.commandName === Command.data.name) {
                 
                    await Command.run(interaction);
                    break;
                }
            }
        }
        const collector = interaction.channel.createCollector({ time: 15000 });
        //const collector = messages.createMessageComponentCollector({ componentType: 'BUTTON', time: 15000 });

collector.on('collect', i => {
	if (i.user.id === interaction.user.id) {
		i.reply(`${i.user.id} clicked on the ${i.customId} button.`);
	} else {
		i.reply({ content: `These buttons aren't for you!`, ephemeral: true });
	}
});

collector.on('end', collected => {
	console.log(`Collected ${collected.size} interactions.`);
});
    } catch (err) {
        errorHandler("onInteraction event", err); 
    }
};
