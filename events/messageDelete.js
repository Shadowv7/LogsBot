const Discord = require("discord.js");

module.exports = class {
  constructor(client) {
    this.client = client;
  }

  async run(message) {
    const path = require("path");
    const events = path.basename(__filename, path.extname(__filename));
        if(!this.client.logs.get(message.guild.id)) return;
if(this.client.settings.get(message.guild.id,"log_bots") !== true && message.author.bot) return;
    const language = new (require(`../languages/${this.client.settings.get(
      message.guild.id,
      "language"
    )}.js`))();
    if (this.client.logs.get(message.guild.id, `${events}.enabled`) !== true)
      return;
    
    if (this.client.logs.get(message.guild.id, `${events}.channel_id`)) {
      const channel = message.guild.channels.cache.get(
        this.client.logs.get(message.guild.id, `${events}.channel_id`)
      )
     let userTag;
      if(await message.guild.fetchAuditLogs({type: 'MESSAGE_DELETE'}).then(audit => audit.entries.first().id) === message.id) {
      userTag = await message.guild.fetchAuditLogs({type: 'MESSAGE_DELETE'}).then(audit => audit.entries.first().executor.tag)
      } else {userTag = message.author.tag}
      let emit_length = this.client.logs.get(message.guild.id,`${events}.emit_length`)
    emit_length+=1
    this.client.logs.set(message.guild.id,emit_length,`${events}.emit_length`)
      return channel.send({embed:{color: 0x00abf5,description:language.get(events,message,userTag)}});
    }
  }
};