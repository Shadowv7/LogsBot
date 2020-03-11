const Discord = require("discord.js")

module.exports = class {

    constructor (client) {
        this.client = client;
    }

    async run (member,role) {
      const path = require('path');
    const events = path.basename(__filename, path.extname(__filename))
        if(!this.client.logs.get(member.guild.id)) return;
if(this.client.settings.get(member.guild.id,"log_bots") !== true && member.user.bot) return;
    if (this.client.logs.get(member.guild.id, `${events}.enabled`) !== true) return;
    if (this.client.logs.get(member.guild.id, `${events}.channel_id`)) {
      const channel = member.guild.channels.cache.get(
        this.client.logs.get(member.guild.id, `${events}.channel_id`)
      );

     let emit_length = this.client.logs.get(member.guild.id,`${events}.emit_length`)
    emit_length+=1
    this.client.logs.set(member.guild.id,emit_length,`${events}.emit_length`)
      const language = new(require(`../languages/${this.client.settings.get(member.guild.id,"language")}.js`))
      return channel.send(language.get(events, member,role));
    }
  }
}