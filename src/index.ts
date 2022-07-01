//import DiscordJS, { Intents } from 'discord.js'
import { Client, Collector, GuildMember, InteractionCollector } from "discord.js";
import { IntentOptions } from "./config/IntentOptions"
//import WOKCommands from 'wokcommands'
//import path from 'path'
import { connectDatabase } from "./database/connectDatabase"
import { validateEnv } from "./utils/validateEnv";
import { onInteraction } from "./events/onInteraction"
import { onReady } from "./events/onReady";

(async () => {
    validateEnv();




    const BOT = new Client({ intents: IntentOptions });

    BOT.on("ready", async () => await onReady(BOT));

    BOT.on(
        "interactionCreate",
        async (interaction) => await onInteraction(interaction,BOT)
    );
    

   /* BOT.on("guildMemberAdd", (member) => {
        var welcometxt = config.welcome.message;
        welcometxt = welcometxt.replace('{server}', member.guild.name);
        welcometxt = welcometxt.replace('{user}', member.user.username);
        if (config.welcome.add_role.enabled) { //Add to role if set in config.
         var role = member.guild.roles.find("name", config.welcome.add_role.role);
         if (role) {
          member.addRole(role.id);
         } else {
          logger.error("Unable to add user to role: " + config.welcome.add_role.role);
         }
        }
         member.guild.defaultChannel.send(welcometxt);
       });
    /*Collector.on()
    InteractionCollector.on()
*/
    await connectDatabase();

    await BOT.login(process.env.BOT_TOKEN);
})();




//npm run build  � npm start





