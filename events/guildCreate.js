const Discord = require("discord.js");

module.exports = class {
  constructor(client) {
    this.client = client;
  }

  async run(guild) {
    this.client.settings.ensure(guild.id, {
      language: "english"
    });
    this.client.graph.ensure(guild.id, {
      total: {}
    });
    this.client.logs.ensure(guild.id, {
      guildMemberBoost: {
        enabled: false,
        channel_id: undefined,
        emit_length: 0
      },
      guildMemberUnboost: {
        enabled: false,
        channel_id: undefined,
        emit_length: 0
      },
      guildMemberRoleAdd: {
        enabled: false,
        channel_id: undefined,
        emit_length: 0
      },
      guildMemberRoleRemove: {
        enabled: false,
        channel_id: undefined,
        emit_length: 0
      },
      guildMemberNicknameUpdate: {
        enabled: false,
        channel_id: undefined,
        emit_length: 0
      },
      guildMemberAdd: { enabled: false, channel_id: undefined, emit_length: 0 },
      guildMemberRemove: {
        enabled: false,
        channel_id: undefined,
        emit_length: 0
      },
      guildBoostLevelUp: {
        enabled: false,
        channel_id: undefined,
        emit_length: 0
      },
      guildBoostLevelDown: {
        enabled: false,
        channel_id: undefined,
        emit_length: 0
      },
      guildRegionUpdate: {
        enabled: false,
        channel_id: undefined,
        emit_length: 0
      },
      guildBannerAdd: { enabled: false, channel_id: undefined, emit_length: 0 },
      guildAfkChannelAdd: {
        enabled: false,
        channel_id: undefined,
        emit_length: 0
      },
      messagePinned: { enabled: false, channel_id: undefined, emit_length: 0 },
      messageContentEdited: {
        enabled: false,
        channel_id: undefined,
        emit_length: 0
      },
      guildMemberOnline: {
        enabled: false,
        channel_id: undefined,
        emit_length: 0
      },
      guildMemberOffline: {
        enabled: false,
        channel_id: undefined,
        emit_length: 0
      },
      voiceChannelJoin: {
        enabled: false,
        channel_id: undefined,
        emit_length: 0
      },
      voiceChannelLeave: {
        enabled: false,
        channel_id: undefined,
        emit_length: 0
      },
      voiceChannelMute: {
        enabled: false,
        channel_id: undefined,
        emit_length: 0
      },
      voiceChannelUnmute: {
        enabled: false,
        channel_id: undefined,
        emit_length: 0
      },
      voiceChannelDeaf: {
        enabled: false,
        channel_id: undefined,
        emit_length: 0
      },
      voiceChannelUndeaf: {
        enabled: false,
        channel_id: undefined,
        emit_length: 0
      },
      voiceStreamingStart: {
        enabled: false,
        channel_id: undefined,
        emit_length: 0
      },
      voiceStreamingStop: {
        enabled: false,
        channel_id: undefined,
        emit_length: 0
      },
      voiceChannelSwitch: {
        enabled: false,
        channel_id: undefined,
        emit_length: 0
      },
      inviteCreate: { enabled: false, channel_id: undefined, emit_length: 0 },
      inviteDelete: { enabled: false, channel_id: undefined, emit_length: 0 },
      guildBanAdd: { enabled: false, channel_id: undefined, emit_length: 0 },
      guildBanRemove: { enabled: false, channel_id: undefined, emit_length: 0 },
      channelCreate: { enabled: false, channel_id: undefined, emit_length: 0 },
      channelDelete: { enabled: false, channel_id: undefined, emit_length: 0 }
    });
  }
};
