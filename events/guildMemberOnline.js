module.exports = class {
  constructor(client) {
    this.client = client;
  }

  async run(member, newStatus) {
    const Discord = require("discord.js");
    const path = require("path");
    const events = path.basename(__filename, path.extname(__filename));
    if(!this.client.logs.get(member.guild.id)) return;
    if(!this.client.stats.isPremium(this.client,member.guild.id)) return;
    if (this.client.logs.get(member.guild.id, `${events}.enabled`) !== true)
      return;
    if (this.client.logs.get(member.guild.id, `${events}.channel_id`)) {
      const channel = member.guild.channels.cache.get(
        this.client.logs.get(member.guild.id, `${events}.channel_id`)
      );
      let emit_length = this.client.logs.get(member.guild.id,`${events}.emit_length`)
    emit_length+=1
    this.client.logs.set(member.guild.id,emit_length,`${events}.emit_length`)
      const language = new(require(`../languages/${this.client.settings.get(member.guild.id,"language")}.js`))
      if(newStatus === "online")
      return channel.send(language.get(events, member, newStatus));
    }
  }
};
