const Command = require("../../structures/Command.js"),
  Discord = require("discord.js");

class Eval extends Command {
  constructor(client) {
    super(client, {
      name: "eval",
      enabled: true,
      description: language => language.get("EVAL_DESCRIPTION"),
      usage: language => language.get("EVAL_USAGE"),
      examples: language => language.get("EVAL_EXAMPLES"),
      aliases: [],
      clientPermissions: [],
      permLevel: 4,
      cooldown: 5000,
      commandPath: __dirname,
      guildOnly: true,
      nsfw: false
    });
  }

  async run(message, args, data) {
    const content = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    const result = new Promise((resolve, reject) => resolve(eval(content)));

    return result
      .then(output => {
        if (typeof output !== "string") {
          output = require("util").inspect(output, { depth: 0 });
        }
        if (output.includes(message.client.token)) {
          output = output.replace(message.client.token, "T0K3N");
        }
        message.channel.send(output, {
          code: "js"
        });
      })
      .catch(err => console.log(err));
  }
}
module.exports = Eval;
