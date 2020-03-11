const Discord = require("discord.js");

module.exports = class {
  constructor(client) {
    this.client = client;
  }

  async run(emoji) {
    const path = require("path");
    const events = path.basename(__filename, path.extname(__filename))
    if(!this.client.logs.get(emoji.guild.id)) return;
    const language = new(require(`../languages/${this.client.settings.get(emoji.guild.id,"language")}.js`))
    if (this.client.logs.get(emoji.guild.id, `${events}.enabled`) !== true) return;
    if (this.client.logs.get(emoji.guild.id, `${events}.channel_id`)) {
      const channel = emoji.guild.channels.cache.get(
        this.client.logs.get(emoji.guild.id, `${events}.channel_id`)
      );
     
       const userTag = await emoji.guild.fetchAuditLogs({type: 'EMOJI_CREATE'}).then(audit => audit.entries.first().executor.tag)
    let emit_length = this.client.logs.get(emoji.guild.id,`${events}.emit_length`)
    emit_length+=1
    this.client.logs.set(emoji.guild.id,emit_length,`${events}.emit_length`)
   
       return channel.send(language.get(events, emoji,userTag));
    }
  }
};
