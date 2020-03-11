const Discord = require("discord.js");

module.exports = class {
  constructor(client) {
    this.client = client;
  }

  async run(invite) {
  console.log("test")
    const path = require('path');
    const events = path.basename(__filename, path.extname(__filename))
        if(!this.client.logs.get(invite.guild.id)) return;
    if (this.client.logs.get(invite.guild.id, `${events}.enabled`) !== true) return;
    if (this.client.logs.get(invite.guild.id, `${events}.channel_id`)) {
      const channel = invite.guild.channels.cache.get(
        this.client.logs.get(invite.guild.id, `${events}.channel_id`)
      );

      let emit_length = this.client.logs.get(invite.guild.id,`${events}.emit_length`)
    emit_length+=1
    this.client.logs.set(invite.guild.id,emit_length,`${events}.emit_length`)
      const language = new(require(`../languages/${this.client.settings.get(invite.guild.id,"language")}.js`))
        const userTag = await invite.guild.fetchAuditLogs({type: 'INVITE_DELETE'}).then(audit => audit.entries.first().executor.tag)
      return channel.send(language.get(events,invite));
    }
  }
};
