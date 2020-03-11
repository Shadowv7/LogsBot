const Discord = require("discord.js");

module.exports = class {
  constructor(client) {
    this.client = client;
  }

  async run(guild, oldRegion, newRegion) {
    const path = require("path");
    const events = path.basename(__filename, path.extname(__filename));
    if(!this.client.logs.get(guild.id)) return;

    if (this.client.logs.get(guild.id, `${events}.enabled`) !== true) return;
    if (this.client.logs.get(guild.id, `${events}.channel_id`)) {
      const channel = guild.channels.cache.get(
        this.client.logs.get(guild.id, `${events}.channel_id`)
      );
      let emit_length = this.client.logs.get(guild.id,`${events}.emit_length`)
    emit_length+=1
    this.client.logs.set(guild.id,emit_length,`${events}.emit_length`)
      const language = new (require(`../languages/${this.client.settings.get(
        guild.id,
        "language"
      )}.js`))();
      return channel.send(language.get(events, guild,oldRegion,newRegion));
    }
  }
};
