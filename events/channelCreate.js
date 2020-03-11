const Discord = require("discord.js");

module.exports = class {
  constructor(client) {
    this.client = client;
  }

  async run(channel) {
  
    const path = require("path");
    const events = path.basename(__filename, path.extname(__filename))
    if(!this.client.logs.get(channel.guild.id)) return;
    const language = new(require(`../languages/${this.client.settings.get(channel.guild.id,"language")}.js`))
    if (this.client.logs.get(channel.guild.id, `${events}.enabled`) !== true) return;
    if (this.client.logs.get(channel.guild.id, `${events}.channel_id`)) {
      const channels = channel.guild.channels.cache.get(
        this.client.logs.get(channel.guild.id, `${events}.channel_id`)
      );
    const userTag = await channel.guild.fetchAuditLogs({type: 'CHANNEL_CREATE'}).then(audit => audit.entries.first().executor.tag)
    let emit_length = this.client.logs.get(channel.guild.id,`${events}.emit_length`)
    emit_length+=1
    this.client.logs.set(channel.guild.id,emit_length,`${events}.emit_length`)
      return channels.send(language.get(events, channel,userTag));
    }
  
  }
};
