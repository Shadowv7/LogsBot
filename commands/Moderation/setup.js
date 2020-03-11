const Command = require("../../structures/Command.js"),
  Discord = require("discord.js");

class Setup extends Command {
  constructor(client) {
    super(client, {
      name: "setup",
      enabled: true,
      description: language => language.get("SETUP_DESCRIPTION"),
      usage: language => language.get("SETUP_USAGE"),
      examples: language => language.get("SETUP_EXAMPLES"),
      aliases: [],
      clientPermissions: ["EMBED_LINKS","VIEW_AUDIT_LOG	"],
      permLevel: 1,
      cooldown: 5000,
      commandPath: __dirname,
      guildOnly: true,
      nsfw: false
    });
  }

  async run(message, args, data) {
    const OPTION = args[0];
    const OPTION_ARRAY = ["channel", "language", "enable", "disable"];

    if (!OPTION)
      return message.channel.send(
        message.language.get(
          "OPTIONS_NAMES",
          OPTION_ARRAY.sort()
            .map(n => `\`${n}\``)
            .join(" , ")
        )
      );
    if (OPTION && !OPTION_ARRAY.includes(OPTION))
      return message.channel.send(
        message.language.get("NO_VALID_OPTION", OPTION)
      );
    if (OPTION === "language") {
      const language = args[1];
      if (!language)
        return message.channel.send(message.language.get("NO_LANGUAGE"));
      const LANGUAGES_ARRAY = ["french", "english"];
      if (!LANGUAGES_ARRAY.includes(language))
        return message.channel.send(
          message.language.get(
            "LANGUAGES_LIST",
            LANGUAGES_ARRAY.map(lang => `\`${lang}\``).join(" , ")
          )
        );
      if (language === this.client.settings.get(message.guild.id, "language"))
        return message.channel.send(
          message.language.get("OLD_LANGUAGE", language)
        );
      this.client.settings.set(message.guild.id, language, "language");
      return message.channel.send(
        message.language.get("NEW_LANGUAGE", language)
      );
    }
    if (OPTION === "channel") {
      const EVENT_LIST = Object.keys(this.client.logs.get(message.guild.id));

      const EVENT = args[1];
      let CHANNEL = message.mentions.channels.first();
      if(CHANNEL.type!== "text") return message.channel.send(message.language.get("ERROR_TYPE"))
      if (!EVENT)
        return message.channel.send(
          message.language.get(
            "EVENTS_LIST",
            [...EVENT_LIST, ...["all"]].map(list => `\`${list}\``).join(" , ")
          )
        );
      if (![...EVENT_LIST, ...["all"]].includes(EVENT))
        return message.channel.send(
          message.language.get(
            "EVENTS_LIST",
            [...EVENT_LIST, ...["all"]].map(list => `\`${list}\``).join(" , ")
          )
        );
      if (!CHANNEL) CHANNEL = message.channel;
      if (
        CHANNEL.permissionsFor(this.client.user).serialize().SEND_MESSAGES !==
        true
      )
        return message.channel.send(
          message.language.get("ERR_CMD_CLIENT_PERMISSIONS", "SEND_MESSAGES")
        );
      if (EVENT === "all") {
        let boolean = false;
        EVENT_LIST.map(OPTION_NAME => {
          this.client.logs.set(
            message.guild.id,
            CHANNEL.id,
            `${OPTION_NAME}.channel_id`
          );
        });

        return message.channel.send(
          message.language.get("ALL_CHANNEL", CHANNEL)
        );
      }
      if (EVENT) {
        if (
          this.client.logs.get(message.guild.id, `${EVENT}.channel_id`) ===
          CHANNEL.id
        )
          return message.channel.send(
            message.language.get("ALREADY_SET_CHANNEL")
          );

        this.client.logs.set(
          message.guild.id,
          CHANNEL.id,
          `${EVENT}.channel_id`
        );
        return message.channel.send(
          message.language.get("CHANNEL_SET_SUCCESS", EVENT, CHANNEL)
        );
      }
    }
    if (OPTION === "enable") {
      const EVENT_LIST = Object.keys(this.client.logs.get(message.guild.id));
      const EVENT = args[1];
      if (!EVENT)
        return message.channel.send(
          message.language.get(
            "EVENTS_LIST",
            [...EVENT_LIST, ...["all", "log_bots"]]
              .map(list => `\`${list}\``)
              .join(" , ")
          )
        );
      if (![...EVENT_LIST, ...["all", "log_bots"]].includes(EVENT))
        return message.channel.send(
          message.language.get(
            "EVENTS_LIST",
            [...EVENT_LIST, ...["all", "log_bots"]]
              .map(list => `\`${list}\``)
              .join(" , ")
          )
        );

      if (EVENT === "log_bots") {
        if (this.client.settings.get(message.guild.id, "log_bots") === true)
          return message.channel.send(
            message.language.get("ALREADY_ENABLE_BOT")
          );
        if (
          this.client.stats.isPremium(this.client, message.guild.id) !== false
        ) {
          this.client.settings.set(message.guild.id, true, EVENT);
          return message.channel.send(message.language.get("LOG_BOTS_ENABLE"));
        } else {
          return message.channel.send(message.language.get("NO_PREMIUM"));
        }
      }

      if (EVENT === "all") {
        let boolean = false;
        EVENT_LIST.map(OPTION_NAME => {
          if (
            (OPTION_NAME === "guildMemberOnline" &&
              !this.client.stats.isPremium(this.client, message.guild.id)) ||
            (OPTION_NAME === "guildMemberOffline" &&
              !this.client.stats.isPremium(this.client, message.guild.id))
          ) {
            message.channel.send(message.language.get("NO_PREMIUM"));
          } else {
            this.client.logs.set(
              message.guild.id,
              true,
              `${OPTION_NAME}.enabled`
            );
          }
        });

        return message.channel.send(message.language.get("ALL_ENABLE"));
      }
      if (EVENT) {
        if (this.client.stats.isPremium(this.client, message.guild.id))
          return message.channel.send("NO_PREMIUM");
        if (this.client.logs.get(message.guild.id, `${EVENT}.enabled`) === true)
          return message.channel.send(
            message.language.get("ALREADY_ENABLE", EVENT)
          );
        this.client.logs.set(message.guild.id, true, `${EVENT}.enabled`);
        return message.channel.send(
          message.language.get("SUCCESS_ENABLE", EVENT)
        );
      }
    }
    if (OPTION === "disable") {
      const EVENT_LIST = Object.keys(this.client.logs.get(message.guild.id));
      const EVENT = args[1];
      if (!EVENT)
        return message.channel.send(
          message.language.get(
            "EVENTS_LIST",
            [...EVENT_LIST, ...["all", "log_bots"]]
              .map(list => `\`${list}\``)
              .join(" , ")
          )
        );
      if (![...EVENT_LIST, ...["all", "log_bots"]].includes(EVENT))
        return message.channel.send(
          message.language.get(
            "EVENTS_LIST",
            [...EVENT_LIST, ...["all", "log_bots"]]
              .map(list => `\`${list}\``)
              .join(" , ")
          )
        );
      if (EVENT === "log_bots") {
        if (this.client.settings.get(message.guild.id, "log_bots") === false)
          return message.channel.send(
            message.language.get("ALREADY_DISABLE_BOT")
          );
        if (this.client.stats.isPremium !== false) {
          this.client.settings.set(message.guild.id, false, EVENT);
          return message.channel.send(message.language.get("LOG_BOTS_DISABLE"));
        } else {
          return message.channel.send(message.language.get("NO_PREMIUM"));
        }
      }
      if (EVENT === "all") {
        let boolean = false;
        EVENT_LIST.map(OPTION_NAME => {
          this.client.logs.set(
            message.guild.id,
            false,
            `${OPTION_NAME}.enabled`
          );
        });

        return message.channel.send(message.language.get("ALL_DISABLE"));
      }
      if (EVENT) {
        if (this.client.stats.isPremium(this.client, message.guild.id))
          return message.channel.send("NO_PREMIUM");
        if (
          this.client.logs.get(message.guild.id, `${EVENT}.enabled`) === false
        )
          return message.channel.send(
            message.language.get("ALREADY_DISABLE", EVENT)
          );

        this.client.logs.set(message.guild.id, false, `${EVENT}.enabled`);
        return message.channel.send(
          message.language.get("SUCCESS_DISABLE", EVENT)
        );
      }
    }
  }
}
module.exports = Setup;
