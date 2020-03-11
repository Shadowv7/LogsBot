const currentLanguage = "english",
  c = require("../config.js"),
  e = c.emojis;

// This class is used to store languages strings

module.exports = class {
  constructor() {
    this.language = {
      PERM_LEVELS: [
        "User",
        "Moderator",
        "Administrator",
        "Founder",
        "Ultimate"
      ],

      ERR_CMD_CLIENT_PERMISSIONS: perms =>
        `${
          e.error
        } __**Missing permissions**__\n\nI need the following permissions for this command to work properly: ${perms
          .map(p => "`" + p + "`")
          .join(", ")}`,
      ERR_CMD_USER_PERMISSIONS: (levelName, userLevel) =>
        `${e.error} | This command requires the level of permissions \`${levelName}\` (you are \`${userLevel}\`) !`,
      ERR_CMD_COOLDOWN: time =>
        `${e.error} | Hey, keep calm! Wait **${time}** second(s) before performing this command again!`,
      ERR_CMD_NSFW: `${e.error} | This command must be executed in a NSFW channel!`,
      ERR_CMD_DISABLED: `${e.error} | This command is currently disabled!`,
      ERR_OCCURRED: `${e.error} | An error has occurred. Please try again in a few minutes!`,
      ERR_CMD_GUILDONLY: `${e.error} | This command is not available in private messages!`,

      PREFIX_INFO: prefix =>
        `${e.success} | The prefix of this server is \`${prefix}\`!`,

      /* PING COMMAND */
      PING_DESCRIPTION: "Displays the bot latency!",
      PING_USAGE: "ping",
      PING_EXAMPLES: "$ping",
      PING_WAIT: `Pinging...`,
      PING_RESULT: ms => `${e.success} | Pong! Latency: \`${ms}\` ms!`,

      /* BUILD EMOJIS COMMAND */
      BUILD_EMOJIS_DESCRIPTION:
        "Automatically adds the emojis necessary for the bot to work properly and generates a configuration!",
      BUILD_EMOJIS_USAGE: "build-emojis",
      BUILD_EMOJIS_EXAMPLES: "$build-emojis",
      BUILD_EMOJIS_IN_PROGRESS: `${e.success} | Adding emojis is in progress...-`,
      BUILD_EMOJIS_INFOS: `${e.success} | Copy and paste this into your configuration!`,

      /* HELP COMMAND */
      HELP_TITLE: "List of commands",
      HELP_SUBTITLE: prefix =>
        `● To get help on a command type \`${prefix}help <command>\` !`,
      HELP_HEADINGS: [
        `Help :`,
        `${e.help} Usage :`,
        `${e.search} Examples :`,
        `${e.folder} Group :`,
        `${e.description} Description :`,
        `${e.add} Aliases :`,
        `${e.crown} Permissions :`
      ],
      HELP_NO_ALIASES: "No alias.",
      HELP_ERR_NOT_FOUND: cmd => `${e.error} | Command \`${cmd}\` not found!`,
      HELP_USAGE: "help [command]",
      HELP_EXAMPLES: "$help\n$help logs",
      HELP_DESCRIPTION: "Displays the help menu.",
      /* SETUP */
      SETUP_USAGE: "setup",
      SETUP_EXAMPLES: "[Tap here](https://github.com/Shadowv7/LogsBot)",
      SETUP_DESCRIPTION: "Setup the logs.",
      /* LOGS */
      LOGS_USAGE: "logs",
      LOGS_EXAMPLES: "$logs",
      LOGS_DESCRIPTION: "Diplays the logs list.",

      /* guildMemberAdd */
      guildMemberAdd_TITLE: "Welcome",
      guildMemberAdd_NUMBER: "- {number}th member",
      guildMemberAdd_MESSAGE: "Welcome in {server}",
      /* guildMemberRemove */
      guildMemberRemove_TITLE: "Goodbye",
      guildMemberRemove_NUMBER: "- {number} members",
      guildMemberRemove_MESSAGE: "leaving from {server}",
      /* SETUP */
      NO_VALID_OPTION: option =>
        `${e.error} | \`${option}\`  is not a valid option!`,
      OPTIONS_NAMES: names =>
        `${e.error} | Here is the list of options : ${names} !`,
      NO_LANGUAGE: `${e.error} | Please enter the language !`,
      LANGUAGES_LIST: lang =>
        `${e.error} | Here is the list of languages : ${lang} !`,
      EVENTS_LIST: lang =>
        `${e.error} | Here is the list of events : ${lang} !`,
      NEW_LANGUAGE: newlang => `${e.success} | I now speak ${newlang} !`,
      OLD_LANGUAGE: oldlang => `${e.error} | I already speak ${oldlang} !`,
      ALL_CHANNEL: channel =>
        `${e.success} | All logs will be sent to ${channel} !`,
      CHANNEL_SET_SUCCESS: (event, channel) =>
        `${e.success} | Logs \`${event}\` will be sent to ${channel} !`,
      ALREADY_SET_CHANNEL: `${e.error} | This channel is already for these logs !`,
      ALL_ENABLE: `${e.success} | All logs are enabled !`,
      ALL_DISABLE: `${e.success} | All logs are disabled!`,
      ALREADY_ENABLE: event =>
        `${e.error} | Logs \`${event}\` are already enabled !`,
      ALREADY_DISABLE: event =>
        `${e.error} | Logs \`${event}\` are already disabled!`,
      SUCCESS_DISABLE: events =>
        `${e.success} | Logs \`${events}\` are now disabled !`,
      SUCCESS_ENABLE: events =>
        `${e.success} | Logs \`${events}\` are now enabled !`,
      NO_CHANNEL: `${e.error} | Please mention the channel !`,
      ALL_CHANNEL_ALREADY_SET: `${e.error} | All the logs are already on this channel !`,
      ALL_ENABLE_ALREADY: `${e.error} | All logs are already enabled !`,
      ALL_DISABLE_ALREADY: `${e.error} | All logs are already disabled !`,
      guildMemberBoost: user =>
        `${e.success} | \`${user.user.tag}\` boosted the server !`,
      guildMemberUnboost: user =>
        `${e.success} | \`${user.user.tag}\` unboosted the server !`,
      guildMemberRoleAdd: (user, role) =>
        `${e.success} | \`${user.user.tag}\` now has the role \`${role.name}\` !`,
      guildMemberRoleRemove: (user, role) =>
        `${e.success} | \`${user.user.tag}\` now no longer has the role \`${role.name}\` !`,
      guildBoostLevelUp: newLevel =>
        `${e.success} | :tada: The server has increased in level by boost! It is now level \`${newLevel}\` !`,
      guildBoostLevelDown: newLevel =>
        `${e.success} | The server has decreased in level by boost :( ! It is now level \`${newLevel}\` !`,
      guildMemberNicknameUpdate: (member, oldnick, newnick) =>
        `${e.success} | ${member.user.username} changed his nickname! His new nickname is \`${newnick}\` !`,
      guildRegionUpdate: (guild, oldRegion, newRegion) =>
        `${e.success} | The server has changed region! The region was \`${oldRegion}\` and is now \`${newRegion}\` !`,
      guildBannerAdd: (guild, bannerURL) =>
        `${e.success} | The server added a banner! Here is the link of the banner : \`${bannerURL}\``,
      guildVanityURLAdd: (guild, vanityURL) =>
        `${e.success} | The server added a vanityURL! Here is the link : \`https://discord.gg/${vanityURL}\``,
      guildAfkChannelAdd: (guild, afkChannel) =>
        `${e.success} | The server has added an AFK lounge! The name of the channel is ${afkChannel.name} !`,
      messagePinned: message =>
        `${e.success} | This [message](https://discordapp.com/channels/${message.guild.id}/${message.channel.id}/${message.id}) has been pinned !`,
      guildMemberOnline: (member, newStatus) =>
        `${e.success} | \`${member.user.username}\` is now \`${newStatus}\` !`,
      guildMemberOffline: (member, oldStatus) =>
        `${e.success} | \`${member.user.username}\` is now \`offline\` !`,
      rolePositionUpdate: (role, oldPosition, newPosition) =>
        `${e.success} | Le rôle \`${role.name}\` a changé de position ! Il est maintenant à la position \`${newPosition}\` !`,
      voiceChannelDeaf: member =>
        `${e.success} | \`${member.user.username}\` is now deaf !`,
      voiceChannelUndeaf: member =>
        `${e.success} | \`${member.user.username}\` is now undeaf !`,
      voiceChannelJoin: (member, channel) =>
        `${e.success} | \`${member.user.username}\` has joined the channel \`${channel.name}\` !`,
      voiceChannelLeave: (member, channel) =>
        `${e.success} | \`${member.user.username}\` has left the channel \`${channel.name}\` !`,
      voiceChannelMute: member =>
        `${e.success} | \`${member.user.username}\` is now mute!`,
      voiceChannelUnmute: member =>
        `${e.success} | \`${member.user.username}\` is now unmute !`,
      messageContentEdited: (message, oldContent, newContent) =>
        `${e.success} | Message who contented : \`${oldContent}\` has been edited to : \`${newContent}\` by \`${message.author.tag}\` in ${message.channel} !`,
      voiceStreamingStart: (member, voiceChannel) =>
        `${e.success} | \`${member.user.tag}\` started streaming in ${voiceChannel} !`,
      voiceStreamingStop: member =>
        `${e.success} | \`${member.user.tag}\` stopped streaming !`,
      voiceChannelSwitch: (member, oldChannel, newChannel) =>
        `${e.success} | \`${member.user.tag}\` left \`${oldChannel.name}\` and joined \`${newChannel.name}\` !`,
      messageDelete: (message, tag) =>
        `${e.success} | The message \`${message.content.replace(
          /[`]/gi,
          ""
        )}\` of \`${message.author.tag}\` has been deleted by \`${tag}\` in ${
          message.channel
        } !`,
      NO_PREMIUM: `${e.error} | This guild isn't premium!`,
      LOG_BOTS_ENABLE: `${e.success} | log_bots is now enable !`,
      LOG_BOTS_DISABLE: `${e.success} | log_bots is now disable !`,
      ALREADY_ENABLE_BOT: `${e.error} | log_bots is already enabled !`,
      ALREADY_DISABLE_BOT: `${e.error} | lof_bots is already disabled !`,
      inviteCreate: invite =>
        `${e.success} | ${invite.inviter.username} created an invitation : \`${invite.url}\`.`,
      inviteDelete: invite =>
        `${e.success} | The invite \`${invite.url}\` has been deleted.`,
      guildBanAdd: (guild, user, author) =>
        `${e.success} | \`${user.username}\` has been banned from the server by \`${author}\` !`,
      guildBanRemove: (guild, user, author) =>
        `${e.success} | \`${user.username}\` is no longer banned from the server by \`${author}\` !`,
      roleCreate: (role, author) =>
        `${e.success} | The role \`${role.name}\` has been created by \`${author}\` !`,
      roleDelete: (role, author) =>
        `${e.success} | The role \`${role.name}\` has been deleted by \`${author}\`!`,
      channelCreate: (channel, user) =>
        `${e.success} | The \`${channel.type}\` channel ${channel} has been created by \`${user}\`!`,
      channelDelete: (channel, user) =>
        `${e.success} | Le \`${channel.type}\` channel \`${channel.name}\` has been deleted by \`${user} \`!`,
      emojiCreate: (emoji, author) =>
        `${e.success} | The emoji ${emoji} has been created by \`${author}\`: \`${emoji}\`!`,
      emojiDelete: (emoji, author) =>
        `${e.success} | The \`${emoji.name}\` has been deleted by \`${author}\`!`,
      NO_ARGS_STATS: `${e.error} | Please choose an option between \`all\` , \`guild\` , \`guildMember\` , \`message\` , \`only\` , \`other\` or \`voice\` !`,
      EMIT_DESCRIPTION: (event, number, total) =>
        `\`${event}\` logs has been emited \`${number}\` time (\`${Math.round(
          (number / total) * 100 * 100
        ) / 100}%\`) !`,
      ERROR_TYPE: `${e.error} | This channel isn't a \`text\` channel !`,
      STATS_EXAMPLES: "$stats guild\n$stats all",
      STATS_USAGE: "stats <guild/guildMember/message/voice/other>",
      STATS_DESCRIPTION: "Displays a graph of the emitted logs.",
      monthIndex: [
        "Jan",
        "Feb",
        "March",
        "Apr",
        "May",
        "June",
        "July",
        "August",
        "Sept",
        "Oct",
        "Nov",
        "Dec"
      ],
      INVALID_NUMBER: n => `${e.error} | ${n} isn't a valid number !`,
      content_role: (total, percent, days) =>
        `**${total}** roles (i.e. **${percent}%** roles of the server) has been created from ${
          days[0]
        } to ${days[1]}:`,
      content_emoji: (total, percent, days) =>
        `**${total}** emojis (i.e. **${percent}%** emojis of the server) has been created from ${
          days[0]
        } to ${days[1]}:`,
      content_member: (total, percent, days) =>
        `**${total}** members (i.e. **${percent}%** of the server) have joined the server from ${
          days[0]
        } to ${days[1]}:`,
      content_channel: (total, percent, days) =>
        `**${total}** channels (i.e. **${percent}%** channels of the server) has been created from ${
          days[0]
        } to ${days[1]}:`,

      NO_ARGS_ONLY: `${e.error} | Please choose an option between \`channel\` , \`member\` , \`role\` or \`emoji\` !`
    };
  }

  /**
   * The method to get language strings
   * @param {string} term The string or function to look up
   * @param {...*} args Any arguments to pass to the lookup
   * @returns {string|Function}
   */
  get(term, ...args) {
    const value = this.language[term];
    switch (typeof value) {
      case "function":
        return value(...args);
      default:
        return value;
    }
  }

  getLang() {
    return lang;
  }

  printDate(pdate, isLongDate) {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let day = pdate.getDate(),
      monthIndex = pdate.getMonth(),
      year = pdate.getFullYear(),
      hour = pdate.getHours() < 10 ? "0" + pdate.getHours() : pdate.getHours(),
      minute =
        pdate.getMinutes() < 10 ? "0" + pdate.getMinutes() : pdate.getMinutes();

    let thedate = isLongDate
      ? day +
        " " +
        monthNames[monthIndex] +
        " " +
        year +
        " at " +
        hour +
        "h" +
        minute
      : day + " " + monthNames[monthIndex] + " " + year;
    return thedate;
  }

  /**
   * Parse ms and returns a string
   * @param {number} milliseconds The amount of milliseconds
   * @returns The parsed milliseconds
   */
  convertMs(milliseconds) {
    let roundTowardsZero = milliseconds > 0 ? Math.floor : Math.ceil;
    let days = roundTowardsZero(milliseconds / 86400000),
      hours = roundTowardsZero(milliseconds / 3600000) % 24,
      minutes = roundTowardsZero(milliseconds / 60000) % 60,
      seconds = roundTowardsZero(milliseconds / 1000) % 60;
    if (seconds === 0) seconds++;
    let isDays = days > 0,
      isHours = hours > 0,
      isMinutes = minutes > 0;
    let pattern =
      (!isDays
        ? ""
        : isMinutes || isHours
        ? "{days} days, "
        : "{days} days and ") +
      (!isHours ? "" : isMinutes ? "{hours} hours, " : "{hours} hours and ") +
      (!isMinutes ? "" : "{minutes} minutes and ") +
      "{seconds} seconds";
    let sentence = pattern
      .replace("{duration}", pattern)
      .replace("{days}", days)
      .replace("{hours}", hours)
      .replace("{minutes}", minutes)
      .replace("{seconds}", seconds);
    return sentence;
  }
};
