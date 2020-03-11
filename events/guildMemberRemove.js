const Discord = require("discord.js"),
  Canvas = require("discord-canvas")

module.exports = class {
  constructor(client) {
    this.client = client;
  }

  async run(member) {
    const path = require("path");
    const events = path.basename(__filename, path.extname(__filename));
    if(!this.client.logs.get(member.guild.id)) return;
if(this.client.settings.get(member.guild.id,"log_bots") !== true && member.user.bot) return;
    if (this.client.logs.get(member.guild.id, `${events}.enabled`) !== true)
      return;
    if (this.client.logs.get(member.guild.id, `${events}.channel_id`)) {
      const channel = member.guild.channels.cache.get(
        this.client.logs.get(member.guild.id, `${events}.channel_id`)
      );

    const language = new(require(`../languages/${this.client.settings.get(member.guild.id,"language")}.js`))
    const image = new Canvas.Goodbye()
      .setUsername(member.user.username)
      .setDiscriminator(member.user.discriminator)
      .setAvatar(member.user.displayAvatarURL({ format: "png" }))
      .setGuildName(member.guild.name)
      .setMemberCount(member.guild.members.cache.size)
      .setText("title", language.get("guildMemberRemove_TITLE"))
      .setText("message", language.get("guildMemberRemove_MESSAGE"))
      .setText("memberCount", language.get("guildMemberRemove_NUMBER"))
      .setColor("username-box", "#17171a")
      .setColor("discriminator-box", "#17171a")
      .setColor("message-box", "#17171a")
      .setColor("background", "#2c2e33")

    let attachment = new Discord.MessageAttachment(
      (await image.toAttachment()).toBuffer(),
      "goodbye-image.png"
    );
      let emit_length = this.client.logs.get(member.guild.id,`${events}.emit_length`)
    emit_length+=1
    this.client.logs.set(member.guild.id,emit_length,`${events}.emit_length`)
      return channel.send(attachment)
    }
  }
};
