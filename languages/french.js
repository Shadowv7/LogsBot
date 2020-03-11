const currentLanguage = "french",
  c = require("../config.js"),
  e = c.emojis;

// This class is used to store languages strings

module.exports = class {
  constructor() {
    this.language = {
      PERM_LEVELS: [
        "Utilisateur",
        "Modérateur",
        "Administrateur",
        "Fondateur",
        "Suprême"
      ],

      ERR_CMD_CLIENT_PERMISSIONS: perms =>
        `${
          e.error
        } __**Permissions manquantes**__\n\nJ'ai besoin des permissions suivantes pour le bon fonctionnement de cette commande : ${perms
          .map(p => "`" + p + "`")
          .join(", ")}`,
      ERR_CMD_USER_PERMISSIONS: (levelName, userLevel) =>
        `${e.error} | Cette commande nécessite le niveau de permissions \`${levelName}\` (vous êtes \`${userLevel}\`) !`,
      ERR_CMD_COOLDOWN: time =>
        `${e.error} | Hey, restez calme ! Attendez **${time}** seconde(s) avant d'effectuer de nouveau cette commande !`,
      ERR_CMD_NSFW: `${e.error} | Cette commande doit être exécutée dans un salon NSFW !`,
      ERR_CMD_DISABLED: `${e.error} | Cette commande est actuellement désactivée !`,
      ERR_OCCURRED: `${e.error} | Une erreur est survenue. Veuillez réessayez dans quelques minutes !`,
      ERR_CMD_GUILDONLY: `${e.error} | Cette commande n'est pas disponible en messages privés !`,

      PREFIX_INFO: prefix =>
        `${e.success} | Le préfixe de ce serveur est \`${prefix}\` !`,

      /* PING COMMAND */
      PING_DESCRIPTION: "Affiche la latence du bot !",
      PING_USAGE: "ping",
      PING_EXAMPLES: "$ping",
      PING_WAIT: `Ping en cours...`,
      PING_RESULT: ms => `${e.success} | Pong ! Latence: \`${ms}\` ms !`,

      /* BUILD EMOJIS COMMAND */
      BUILD_EMOJIS_DESCRIPTION:
        "Ajoute automatiquement les émojis nécessaires au bon fonctionnement du bot et génère une configuration !",
      BUILD_EMOJIS_USAGE: "build-emojis",
      BUILD_EMOJIS_EXAMPLES: "$build-emojis",
      BUILD_EMOJIS_IN_PROGRESS: `${e.success} | Ajout des émojis en cours...`,
      BUILD_EMOJIS_INFOS: `${e.success} | Copiez-collez ceci dans votre configuration !`,

      /* HELP COMMAND */
      HELP_TITLE: "Liste des commandes",
      HELP_SUBTITLE: prefix =>
        `● Pour avoir de l'aide sur une commande tapez \`${prefix}help <commande>\` !`,
      HELP_HEADINGS: [
        `Aide :`,
        `${e.help} Utilisation :`,
        `${e.search} Exemples :`,
        `${e.folder} Groupe :`,
        `${e.description} Description :`,
        `${e.add} Alias :`,
        `${e.crown} Permissions :`
      ],
      HELP_NO_ALIASES: "Aucun alias.",
      HELP_ERR_NOT_FOUND: cmd =>
        `${e.error} | Commande \`${cmd}\` introuvable !`,
      HELP_USAGE: "help [commande]",
      HELP_EXAMPLES: "$help\n$help logs",
      HELP_DESCRIPTION: "Affiche le menu d'aide.",
      /* SETUP */
      SETUP_USAGE: "setup",
      SETUP_EXAMPLES: "[Cliquez ici](https://github.com/Shadowv7/LogsBot)",
      SETUP_DESCRIPTION: "Met en place les logs.",
      /* LOGS */
      LOGS_USAGE: "logs",
      LOGS_EXAMPLES: "$logs",
      LOGS_DESCRIPTION: "Affiche la liste de logs.",

      /* guildMemberAdd */
      guildMemberAdd_TITLE: "Bienvenue",
      guildMemberAdd_NUMBER: "- {number}ème membres",
      guildMemberAdd_MESSAGE: "Bienvenue sur {server}",
      /* guildMemberRemove */
      guildMemberRemove_TITLE: "Aurevoir",
      guildMemberRemove_NUMBER: "- {number}ème membres",
      guildMemberRemove_MESSAGE: "A quitté {server}",
      /* SETUP */
      NO_VALID_OPTION: option =>
        `${e.error} | \`${option}\` n'est pas une option valide !`,
      OPTIONS_NAMES: names =>
        `${e.error} | Voici la liste des options : ${names} !`,
      NO_LANGUAGE: `${e.error} | Veuillez saisir le langage !`,
      LANGUAGES_LIST: lang =>
        `${e.error} | Voici la liste des langues : ${lang} !`,
      EVENTS_LIST: lang => `${e.error} | Voici la liste des events : ${lang} !`,
      NEW_LANGUAGE: newlang =>
        `${e.success} | Je parle maintenant ${newlang} !`,
      OLD_LANGUAGE: oldlang => `${e.error} | Je parle déjà ${oldlang} !`,
      ALL_CHANNEL: channel =>
        `${e.success} | Tous les logs seront envoyés dans ${channel} !`,
      CHANNEL_SET_SUCCESS: (event, channel) =>
        `${e.success} | Les logs \`${event}\` seront envoyés dans ${channel} !`,
      ALREADY_SET_CHANNEL: `${e.error} | Ce salon est déjà pour ces logs !`,
      ALL_ENABLE: `${e.success} | Tous les logs sont activé !`,
      ALL_DISABLE: `${e.success} | Tous les logs sont désactivé !`,
      ALREADY_ENABLE: event =>
        `${e.error} | Les logs \`${event}\` sont déjà activé !`,
      ALREADY_DISABLE: event =>
        `${e.error} | Les logs \`${event}\` sont déjà désactivé !`,
      SUCCESS_DISABLE: events =>
        `${e.success} | Les logs \`${events}\` sont maintenant désactivé !`,
      SUCCESS_ENABLE: events =>
        `${e.success} | Les logs \`${events}\` sont maintenant activé !`,
      ALL_CHANNEL_ALREADY_SET: `${e.error} | Tous les logs sont déjà sur ce salon !`,
      ALL_ENABLE_ALREADY: `${e.error} | Tous les logs sont déjà activé !`,
      ALL_DISABLE_ALREADY: `${e.error} | Tous les logs sont déjà désactivé !`,
      NO_CHANNEL: `${e.error} | Veuillez mentionner le salon !`,
      guildMemberBoost: user =>
        `${e.success} | \`${user.user.tag}\` a boosté le serveur !`,
      guildMemberUnboost: user =>
        `${e.success} | \`${user.user.tag}\` a arrêté de booster le serveur !`,
      guildMemberRoleAdd: (user, role) =>
        `${e.success} | \`${user.user.tag}\` possède désormais le rôle \`${role.name}\` !`,
      guildMemberRoleRemove: (user, role) =>
        `${e.success} | \`${user.user.tag}\` possède désormais plus le rôle \`${role.name}\` !`,
      guildBoostLevelUp: newLevel =>
        `${e.success} | :tada: Le serveur  a augmenté de niveau en boost ! Il est maintenant niveau \`${newLevel}\` !`,
      guildBoostLevelDown: newLevel =>
        `${e.success} | Le serveur  a baissé de niveau en boost :( ! Il est maintenant niveau \`${newLevel}\` !`,
      guildMemberNicknameUpdate: (member, oldnick, newnick) =>
        `${e.success} | ${member.user.username} a changé de surnom ! Son nouveau surnom est \`${newnick}\` !`,
      guildRegionUpdate: (guild, oldRegion, newRegion) =>
        `${e.success} | Le serveur a changé de région ! La région était \`${oldRegion}\` et est maintenant \`${newRegion}\` !`,
      guildBannerAdd: (guild, bannerURL) =>
        `${e.success} | Le serveur a ajouté un bannière ! Voici le lien de la bannière : \`${bannerURL}\``,
      guildVanityURLAdd: (guild, vanityURL) =>
        `${e.success} | Le serveur a ajouté une vanityURL ! Voici l'url : \`https://discord.gg/${vanityURL}\``,
      guildAfkChannelAdd: (guild, afkChannel) =>
        `${e.success} | Le serveur a ajouté un salon AFK ! Le nom du salon est ${afkChannel.name} !`,
      messagePinned: message =>
        `${e.success} | Ce [message](https://discordapp.com/channels/${message.guild.id}/${message.channel.id}/${message.id}) a été épinglé !`,
      guildMemberOnline: (member, newStatus) =>
        `${e.success} | \`${member.user.username}\` est maintenant \`${newStatus}\` !`,
      guildMemberOffline: (member, oldStatus) =>
        `${e.success} | \`${member.user.username}\` est maintenant \`Hors-ligne\` !`,
      rolePositionUpdate: (role, oldPosition, newPosition) =>
        `${e.success} | Le rôle \`${role.name}\` a changé de position ! Il est maintenant à la position \`${newPosition}\` !`,
      voiceChannelDeaf: member =>
        `${e.success} | \`${member.user.username}\` est en sourd !`,
      voiceChannelUndeaf: member =>
        `${e.success} | \`${member.user.username}\` n'est plus en sourd !`,
      voiceChannelJoin: (member, channel) =>
        `${e.success} | \`${member.user.username}\` a rejoint le salon \`${channel.name}\` !`,
      voiceChannelLeave: (member, channel) =>
        `${e.success} | \`${member.user.username}\` a quitté le salon \`${channel.name}\` !`,
      voiceChannelMute: member =>
        `${e.success} | \`${member.user.username}\` est mute !`,
      voiceChannelUnmute: member =>
        `${e.success} | \`${member.user.username}\` n'est plus en mute !`,
      messageContentEdited: (message, oldContent, newContent) =>
        `${e.success} | Le message qui contenait : \`${oldContent}\` a été modifier en \`${newContent}\` par \`${message.author.tag}\` dans ${message.channel} !`,
      voiceStreamingStart: (member, voiceChannel) =>
        `${e.success} | \`${member.user.tag}\` a commencé un stream dans ${voiceChannel} !`,
      voiceStreamingStop: member =>
        `${e.success} | \`${member.user.tag}\` a arrêté son stream !`,
      voiceChannelSwitch: (member, oldChannel, newChannel) =>
        `${e.success} | ${member.user.tag} a quitté \`${oldChannel.name}\` et a rejoint \`${newChannel.name}\` !`,
      messageDelete: (message, tag) =>
        `${e.success} | Le message \`${message.content.replace(
          /[`]/gi,
          ""
        )}\` de \`${message.author.tag}\` a été supprimé par \`${tag}\` dans ${
          message.channel
        } !`,
      NO_PREMIUM: `${e.error} | Ce serveur n'est pas premium !`,
      LOG_BOTS_ENABLE: `${e.success} | log_bots est maintenant activé !`,
      LOG_BOTS_DISABLE: `${e.success} | log_bots est maintenant désactivé !`,
      ALREADY_ENABLE_BOT: `${e.error} | log_bots est déjà activé !`,
      ALREADY_DISABLE_BOT: `${e.error} | log_bots est déjà désactivé !`,
      inviteCreate: (invite, author) =>
        `${e.success} | \`${invite.inviter.username}\` a crée une invitation : \`${invite.url}\`.`,
      inviteDelete: (invite, author) =>
        `${e.success} | L'invitation \`${invite.url}\` a été supprimé par par \`${author}\`.`,
      guildBanAdd: (guild, user, author) =>
        `${e.success} | \`${user.username}\` a été banni du serveur par \`${author}\` !`,
      guildBanRemove: (guild, user, author) =>
        `${e.success} | \`${user.username}\` n'est plus banni du serveur grâce à \`${author}\` !`,
      roleCreate: (role, author) =>
        `${e.success} | Le rôle \`${role.name}\` a été crée par par \`${author}\` !`,
      roleDelete: (role, author) =>
        `${e.success} | Le rôle \`${role.name}\` a été supprimé par \`${author}\` !`,
      channelCreate: (channel, user) =>
        `${e.success} | Le salon ${channel} de type \`${channel.type}\` a été crée par  \`${user}\` !`,
      channelDelete: (channel, user) =>
        `${e.success} | Le salon \`${channel.name}\` de type \`${channel.type}\` a été supprimé par  \`${user} \` !`,
      emojiCreate: (emoji, author) =>
        `${e.success} | L'émoji ${emoji} a été crée par par \`${author}\` : \`${emoji}\`!`,
      emojiDelete: (emoji, author) =>
        `${e.success} | L'émoji \`${emoji.name}\` a été supprimé par \`${author}\`!`,
      NO_ARGS_STATS: `${e.error} | Veuillez choisir une option entre \`all\` , \`guild\` , \`guildMember\` , \`message\` , \`only\` , \`other\` ou \`voice\` !`,
      ERROR_TYPE: `${e.error} | Le salon doit être un salon \`textuel\` !`,
      EMIT_DESCRIPTION: (event, number, total) =>
        `Les logs ${event} ont été emis ${number} fois ${Math.round(
          (number / total) * 100
        ) / 100}%!`,
      STATS_EXAMPLES: "$stats guild\n$stats all",
      STATS_USAGE: "stats <guild/guildMember/message/voice/other>",
      STATS_DESCRIPTION: "Affiche un graphique des logs émis.",
      monthIndex: [
        "Janv",
        "Févr",
        "Mars",
        "Avr",
        "Mai",
        "Juin",
        "Juill",
        "Août",
        "Sept",
        "Oct",
        "Nov",
        "Déc"
      ],
      NO_ARGS_ONLY: `${e.error} | Veuillez choisir entre \`channel\` , \`member\` , \`role\` ou \`emoji\`!`,
      content_role: (total, percent, days) =>
        `**${total}** roles (soit **${percent}%** des roles du serveur) ont été crée du ${
          days[0]
        } au ${days[1]} :`,
     content_emoji: (total, percent, days) =>
        `**${total}** emojis (soit **${percent}%** des emojis du serveur) ont été crée du ${
          days[0]
        } au ${days[1]} :`, 
      content_member: (total, percent, days) =>
        `**${total}** membres (soit **${percent}%** du serveur) ont rejoint du ${
          days[0]
        } au ${days[1]} :`,
      content_channel: (total, percent, days) =>
        `**${total}** salons (soit **${percent}%** des salons du serveur) ont été crée du ${
          days[0]
        } au ${days[1]} :`,
      INVALID_NUMBER: n => `${e.error} | ${n} n'est pas un nombre valide !`
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
      "janvier",
      "février",
      "mars",
      "avril",
      "mai",
      "juin",
      "juillet",
      "août",
      "septembre",
      "octobre",
      "novembre",
      "décembre"
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
        ? "{days} jours, "
        : "{days} jours et ") +
      (!isHours ? "" : isMinutes ? "{hours} heures, " : "{hours} heures et ") +
      (!isMinutes ? "" : "{minutes} minutes et ") +
      "{seconds} secondes";
    let sentence = pattern
      .replace("{duration}", pattern)
      .replace("{days}", days)
      .replace("{hours}", hours)
      .replace("{minutes}", minutes)
      .replace("{seconds}", seconds);
    return sentence;
  }
};
