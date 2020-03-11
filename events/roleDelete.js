const Discord = require("discord.js");

module.exports = class {
  constructor(client) {
    this.client = client;
  }

  async run(role) {
    const path = require("path");
    const events = path.basename(__filename, path.extname(__filename));
    if (!this.client.logs.get(role.guild.id)) return;

    const language = new (require(`../languages/${this.client.settings.get(
      role.guild.id,
      "language"
    )}.js`))();
    if (this.client.logs.get(role.guild.id, `${events}.enabled`) !== true)
      return;

    if (this.client.logs.get(role.guild.id, `${events}.channel_id`)) {
      const channel = role.guild.channels.cache.get(
        this.client.logs.get(role.guild.id, `${events}.channel_id`)
      );
      let emit_length = this.client.logs.get(
        role.guild.id,
        `${events}.emit_length`
      );
      emit_length += 1;
      this.client.logs.set(role.guild.id, emit_length, `${events}.emit_length`);
      const userTag = await role.guild
        .fetchAuditLogs({ type: "ROLE_CREATE" })
        .then(audit => audit.entries.first().executor.tag);

      return channel.send(language.get(events, role, userTag));
    }
  }
};
