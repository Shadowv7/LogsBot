const Command = require("../../structures/Command.js"),
  MessageEmbed = require("../../helpers/BetterEmbeds.js"),
  Discord = require("discord.js");

class Stats extends Command {
  constructor(client) {
    super(client, {
      name: "stats",
      enabled: true,
      description: language => language.get("STATS_DESCRIPTION"),
      usage: language => language.get("STATS_USAGE"),
      examples: language => language.get("STATS_EXAMPLES"),
      aliases: [],
      clientPermissions: ["EMBED_LINKS"],
      permLevel: 0,
      cooldown: 5000,
      commandPath: __dirname,
      guildOnly: true,
      premiumOnly: false,
      nsfw: false
    });
  }

  async run(message, args, data) {
    if (!args[0])
      return message.channel.send(message.language.get("NO_ARGS_STATS"));
    if (
     
      !["other", "message", "guild", "guildMember", "voice", "all","only"].includes(
        args[0]
      )
    )
      return message.channel.send(
        message.language.get("NO_VALID_OPTION", args[0])
      );
    if(args[0] !== "all" && !this.client.stats.isPremium(this.client,message.guild.id)) return message.channel.send(message.language.get("NO_PREMIUM"));
    const { CanvasRenderService } = require("chartjs-node-canvas");
    const width = 800;
    const height = 300;
    const ticksOptions = [{ ticks: { fontColor: "white", fontStyle: "bold" } }];
    const options = {
      legend: { display: false },
      scales: { yAxes: ticksOptions, xAxes: ticksOptions }
    };
    const embed = new MessageEmbed();
    const canvasRenderService = new CanvasRenderService(
      width,
      height,
      ChartJS => {}
    );
    const event = [];

    const emit_length = [];

    const events = Object.keys(this.client.logs.get(message.guild.id));
    let total = 0;
    events.forEach(c => {
      let logs = this.client.logs.get(message.guild.id, `${c}.emit_length`);
      const all_emit = total + logs;
      total = all_emit;
    });
  
      if (args[0] === "all") {
        events.forEach(c => {
          if (
            this.client.logs.get(message.guild.id, `${c}.enabled`) !== false
          ) {
            event.push(c);
            emit_length.push(
              this.client.logs.get(message.guild.id, `${c}.emit_length`)
            );
          }
        });

        if (!event) return;
        const image = await canvasRenderService.renderToBuffer({
          type: "line",
          data: {
            labels: event,
            datasets: [
              {
                data: emit_length,
                // The color of the line (the same as the fill color with full opacity)
                borderColor: "rgb(61,148,192)",
                fill: true,
                // Blue color and low opacity
                backgroundColor: "rgba(61,148,192,0.1)"
              }
            ]
          },
          options
        });

        const attachment = new Discord.MessageAttachment(image, "image.png");
        embed.attachFiles(attachment);
        embed.setImage("attachment://image.png");
        //embed.setDescription(array_description.join("\n\n"));
        embed.setTitle("__Logs Stats__");
        embed.setColor(data.config.embed.color);
        embed.setFooter(data.config.embed.footer);
        return message.channel.send({ embed: embed.build() });
      }
      if (args[0] === "voice") {
        events.forEach(c => {
          if (
            c.startsWith("voice") &&
            this.client.logs.get(message.guild.id, `${c}.enabled`) !== false
          ) {
            event.push(c);
            emit_length.push(
              this.client.logs.get(message.guild.id, `${c}.emit_length`)
            );
          }
        });
        if (!event) return;
        const image = await canvasRenderService.renderToBuffer({
          type: "bar",
          data: {
            labels: event,
            datasets: [
              {
                data: emit_length,
                // The color of the line (the same as the fill color with full opacity)
                borderColor: [
                  "rgba(255, 0, 0)",
                  "rgba(0, 0, 255)",
                  "rgba(255, 167, 0)",
                  "rgba(253, 255, 0)",
                  "rgba(37, 255, 0)",
                  "rgba(107, 0, 255)",
                  "rgba(255, 0, 223)",
                  "rgba(0, 255, 227)",
                  "rgba(176, 255, 0)"
                ],
                // Fill the line with color
                fill: true,
                // Blue color and low opacity
                backgroundColor: [
                  "rgba(255, 0, 0, 1)",
                  "rgba(0, 0, 255,1)",
                  "rgba(255, 167, 0, 1)",
                  "rgba(253, 255, 0, 1)",
                  "rgba(37, 255, 0, 1)",
                  "rgba(107, 0, 255, 1)",
                  "rgba(255, 0, 223, 1)",
                  "rgba(0, 255, 227, 1)",
                  "rgba(176, 255, 0, 1)"
                ]
              }
            ]
          },
          options
        });
        const array_description = [];
        event.forEach(events => {
          array_description.push(
            message.language.get(
              "EMIT_DESCRIPTION",
              events,
              this.client.logs.get(message.guild.id, `${events}.emit_length`),
              total
            )
          );
        });
        const attachment = new Discord.MessageAttachment(image, "image.png");
        embed.attachFiles(attachment);
        embed.setImage("attachment://image.png");
        embed.setDescription(array_description.join("\n\n"));
        embed.setTitle("__Logs Stats__");
        embed.setColor(data.config.embed.color);
        embed.setFooter(data.config.embed.footer);
        return message.channel.send({ embed: embed.build() });
      }
      if (args[0] === "guildMember") {
        events.forEach(c => {
          if (
            c.startsWith("guildMember") &&
            this.client.logs.get(message.guild.id, `${c}.enabled`) !== false
          ) {
            event.push(c);
            emit_length.push(
              this.client.logs.get(message.guild.id, `${c}.emit_length`)
            );
          }
        });
        if (!event) return;
        const image = await canvasRenderService.renderToBuffer({
          type: "bar",
          data: {
            labels: event,
            datasets: [
              {
                data: emit_length,
                // The color of the line (the same as the fill color with full opacity)
                borderColor: [
                  "rgba(255, 0, 0)",
                  "rgba(0, 0, 255)",
                  "rgba(255, 167, 0)",
                  "rgba(253, 255, 0)",
                  "rgba(37, 255, 0)",
                  "rgba(107, 0, 255)",
                  "rgba(255, 0, 223)",
                  "rgba(0, 255, 227)",
                  "rgba(176, 255, 0)"
                ],
                // Fill the line with color
                fill: true,
                // Blue color and low opacity
                backgroundColor: [
                  "rgba(255, 0, 0, 1)",
                  "rgba(0, 0, 255,1)",
                  "rgba(255, 167, 0, 1)",
                  "rgba(253, 255, 0, 1)",
                  "rgba(37, 255, 0, 1)",
                  "rgba(107, 0, 255, 1)",
                  "rgba(255, 0, 223, 1)",
                  "rgba(0, 255, 227, 1)",
                  "rgba(176, 255, 0, 1)"
                ]
              }
            ]
          },
          options
        });
        const array_description = [];
        event.forEach(events => {
          array_description.push(
            message.language.get(
              "EMIT_DESCRIPTION",
              events,
              this.client.logs.get(message.guild.id, `${events}.emit_length`),
              total
            )
          );
        });
        const attachment = new Discord.MessageAttachment(image, "image.png");
        embed.attachFiles(attachment);
        embed.setImage("attachment://image.png");
        embed.setDescription(array_description.join("\n\n"));
        embed.setTitle("__Logs Stats__");
        embed.setColor(data.config.embed.color);
        embed.setFooter(data.config.embed.footer);
        return message.channel.send({ embed: embed.build() });
      }
      if (args[0] === "guild") {
        events.forEach(c => {
          if (
            !c.startsWith("guildMember") &&
            c.startsWith("guild") &&
            this.client.logs.get(message.guild.id, `${c}.enabled`) !== false
          ) {
            event.push(c);
            emit_length.push(
              this.client.logs.get(message.guild.id, `${c}.emit_length`)
            );
          }
        });
        if (!event) return;
        const image = await canvasRenderService.renderToBuffer({
          type: "bar",
          data: {
            labels: event,
            datasets: [
              {
                data: emit_length,
                // The color of the line (the same as the fill color with full opacity)
                borderColor: [
                  "rgba(255, 0, 0)",
                  "rgba(0, 0, 255)",
                  "rgba(255, 167, 0)",
                  "rgba(253, 255, 0)",
                  "rgba(37, 255, 0)",
                  "rgba(107, 0, 255)",
                  "rgba(255, 0, 223)",
                  "rgba(0, 255, 227)",
                  "rgba(176, 255, 0)"
                ],
                // Fill the line with color
                fill: true,
                // Blue color and low opacity
                backgroundColor: [
                  "rgba(255, 0, 0, 1)",
                  "rgba(0, 0, 255,1)",
                  "rgba(255, 167, 0, 1)",
                  "rgba(253, 255, 0, 1)",
                  "rgba(37, 255, 0, 1)",
                  "rgba(107, 0, 255, 1)",
                  "rgba(255, 0, 223, 1)",
                  "rgba(0, 255, 227, 1)",
                  "rgba(176, 255, 0, 1)"
                ]
              }
            ]
          },
          options
        });
        const array_description = [];
        event.forEach(events => {
          array_description.push(
            message.language.get(
              "EMIT_DESCRIPTION",
              events,
              this.client.logs.get(message.guild.id, `${events}.emit_length`),
              total
            )
          );
        });
        const attachment = new Discord.MessageAttachment(image, "image.png");
        embed.attachFiles(attachment);
        embed.setImage("attachment://image.png");
        embed.setDescription(array_description.join("\n\n"));
        embed.setTitle("__Logs Stats__");
        embed.setColor(data.config.embed.color);
        embed.setFooter(data.config.embed.footer);
        return message.channel.send({ embed: embed.build() });
      }
      if (args[0] === "message") {
        events.forEach(c => {
          if (
            c.startsWith("message") &&
            this.client.logs.get(message.guild.id, `${c}.enabled`) !== false
          ) {
            event.push(c);
            emit_length.push(
              this.client.logs.get(message.guild.id, `${c}.emit_length`)
            );
          }
        });
        if (!event) return;
        const image = await canvasRenderService.renderToBuffer({
          type: "bar",
          data: {
            labels: event,
            datasets: [
              {
                data: emit_length,
                // The color of the line (the same as the fill color with full opacity)
                borderColor: [
                  "rgba(255, 0, 0)",
                  "rgba(0, 0, 255)",
                  "rgba(255, 167, 0)",
                  "rgba(253, 255, 0)",
                  "rgba(37, 255, 0)",
                  "rgba(107, 0, 255)",
                  "rgba(255, 0, 223)",
                  "rgba(0, 255, 227)",
                  "rgba(176, 255, 0)"
                ],
                // Fill the line with color
                fill: true,
                // Blue color and low opacity
                backgroundColor: [
                  "rgba(255, 0, 0, 1)",
                  "rgba(0, 0, 255,1)",
                  "rgba(255, 167, 0, 1)",
                  "rgba(253, 255, 0, 1)",
                  "rgba(37, 255, 0, 1)",
                  "rgba(107, 0, 255, 1)",
                  "rgba(255, 0, 223, 1)",
                  "rgba(0, 255, 227, 1)",
                  "rgba(176, 255, 0, 1)"
                ]
              }
            ]
          },
          options
        });
        const array_description = [];
        event.forEach(events => {
          array_description.push(
            message.language.get(
              "EMIT_DESCRIPTION",
              events,
              this.client.logs.get(message.guild.id, `${events}.emit_length`),
              total
            )
          );
        });
        const attachment = new Discord.MessageAttachment(image, "image.png");
        embed.attachFiles(attachment);
        embed.setImage("attachment://image.png");
        embed.setDescription(array_description.join("\n\n"));
        embed.setTitle("__Logs Stats__");
        embed.setColor(data.config.embed.color);
        embed.setFooter(data.config.embed.footer);
        return message.channel.send({ embed: embed.build() });
      }
      if (args[0] === "other") {
        events.forEach(c => {
          if (
            !c.startsWith("message") &&
            !c.startsWith("guild") &&
            !c.startsWith("voice") &&
            this.client.logs.get(message.guild.id, `${c}.enabled`) !== false
          ) {
            event.push(c);
            emit_length.push(
              this.client.logs.get(message.guild.id, `${c}.emit_length`)
            );
          }
        });
        if (!event) return;
        const image = await canvasRenderService.renderToBuffer({
          type: "bar",
          data: {
            labels: event,
            datasets: [
              {
                data: emit_length,
                // The color of the line (the same as the fill color with full opacity)
                borderColor: [
                  "rgba(255, 0, 0)",
                  "rgba(0, 0, 255)",
                  "rgba(255, 167, 0)",
                  "rgba(253, 255, 0)",
                  "rgba(37, 255, 0)",
                  "rgba(107, 0, 255)",
                  "rgba(255, 0, 223)",
                  "rgba(0, 255, 227)",
                  "rgba(176, 255, 0)"
                ],
                // Fill the line with color
                fill: true,
                // Blue color and low opacity
                backgroundColor: [
                  "rgba(255, 0, 0, 1)",
                  "rgba(0, 0, 255,1)",
                  "rgba(255, 167, 0, 1)",
                  "rgba(253, 255, 0, 1)",
                  "rgba(37, 255, 0, 1)",
                  "rgba(107, 0, 255, 1)",
                  "rgba(255, 0, 223, 1)",
                  "rgba(0, 255, 227, 1)",
                  "rgba(176, 255, 0, 1)"
                ]
              }
            ]
          },
          options
        });
        const array_description = [];
        event.forEach(events => {
          array_description.push(
            message.language.get(
              "EMIT_DESCRIPTION",
              events,
              this.client.logs.get(message.guild.id, `${events}.emit_length`),
              total
            )
          );
        });
        const attachment = new Discord.MessageAttachment(image, "image.png");
        embed.attachFiles(attachment);
        embed.setImage("attachment://image.png");
        embed.setDescription(array_description.join("\n\n"));
        embed.setTitle("__Logs Stats__");
        embed.setColor(data.config.embed.color);
        embed.setFooter(data.config.embed.footer);
        return message.channel.send({ embed: embed.build() });
      }
   if(args[0] === "only"){
     return this.client.commands.get("only").run(message,args,data)
   }
  }
}
module.exports = Stats;
