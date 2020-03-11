const Command = require("../../structures/Command.js"),
  MessageEmbed = require("../../helpers/BetterEmbeds.js");
class Logs extends Command {
  constructor(client) {
    super(client, {
      name: "config",
      enabled: true,
      description: language => language.get("LOGS_DESCRIPTION"),
      usage: language => language.get("LOGS_USAGE"),
      examples: language => language.get("LOGS_USAGE"),
      aliases: ["configuration"],
      clientPermissions: [],
      permLevel: 0,
      cooldown: 1000,
      commandPath: __dirname,
      guildOnly: false,
      premiumOnly: false,
      nsfw: false
    });
  }

  async run(message, args, data) {
    const embed = new MessageEmbed();
    const DB = this.client.logs.get(message.guild.id);
    const guild = [];
    const Message = [];
    const guildMember = [];
    const voiceChannel = [];
    const other = [];
    Object.keys(DB).forEach((key, index) => {
      const ID = DB[key].channel_id;
      let channel;
      if (ID && ID === undefined) {
        channel = "None";
      } else {
        channel = message.guild.channels.cache.get(ID);
      }
      if (key.startsWith("message")) {
        Message.push(
          `${
            DB[key].enabled
              ? data.config.emojis.success
              : data.config.emojis.error
          } ${key} | ${channel || "None"}`
        );
      }
      if (key.startsWith("guildMember")) {
        guildMember.push(
          `${
            DB[key].enabled
              ? data.config.emojis.success
              : data.config.emojis.error
          } ${key} | ${channel || "None"}`
        );
      }
      if (key.startsWith("voice")) {
        voiceChannel.push(
          `${
            DB[key].enabled
              ? data.config.emojis.success
              : data.config.emojis.error
          } ${key} | ${channel || "None"}`
        );
      }
      if (!key.startsWith("guildMember") && key.startsWith("guild")) {
        guild.push(
          `${
            DB[key].enabled
              ? data.config.emojis.success
              : data.config.emojis.error
          } ${key} | ${channel || "None"}`
        );
      }
      if (
        !key.startsWith("guild") &&
        !key.startsWith("guildMember") &&
        !key.startsWith("voice") &&
        !key.startsWith("message")
      ) {
        other.push(
          `${
            DB[key].enabled
              ? data.config.emojis.success
              : data.config.emojis.error
          } ${key} | ${channel || "None"}`
        );
      }
    });

    embed.setTitle("__Events List__");
    embed.addField("__Guild__", guild.join("\n"));
    embed.addField("__GuildMember__", guildMember.join("\n"));
    embed.addField("__Message__", Message.join("\n"));
    embed.addField("__Voice__", voiceChannel.join("\n"));
    embed.addField("__Others__", other.join("\n"));
    let guildPremium = this.client.stats.isPremium(this.client,message.guild.id)
    if(guildPremium) {
      guildPremium = data.config.emojis.star
    }
    if(!guildPremium) {
     guildPremium = data.config.emojis.error
    }
    embed.setDescription(`Premium : ${guildPremium}`)
    embed.setColor(data.config.embed.color);
    embed.setFooter(data.config.embed.footer);
    message.channel.send({embed:embed.build()});
  }
}

module.exports = Logs;
