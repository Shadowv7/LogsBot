const util = require("util"),
  fs = require("fs"),
  readdir = util.promisify(fs.readdir),
  permissions = require("./helpers/permissions");
//const website = require("./website-logsbot/app")
const Client = require("./structures/Client"),
  client = new Client();

const http = require("https");
setInterval(() => {
  http.get("https://logsbot-website.glitch.me/");
  //http.get("https://webhook-logs.glitch.me/");
}, 6 * 1000);
//job.start();
const init = async () => {
  // Searches and loads all commands in all categories
  let categories = await readdir("./commands/");
  client.logger.log(
    `Loading a total of ${categories.length} categories.`,
    "log"
  );
  categories.forEach(async cat => {
    let commands = await readdir(`./commands/${cat}/`);
    commands
      .filter(cmd => cmd.split(".").pop() === "js")
      .forEach(cmd => {
        const response = client.loadCommand(`./commands/${cat}`, cmd);
        if (response) client.logger.log(response, "error");
      });
  });

  // Searches and loads all events, like the ready event
  const evtFiles = await readdir("./events/");
  client.logger.log(`Loading a total of ${evtFiles.length} events.`, "log");
  evtFiles.forEach(file => {
    const eventName = file.split(".")[0];
    client.logger.log(`Loading Event: ${eventName}`);
    const event = new (require(`./events/${file}`))(client);
    client.on(eventName, (...args) => event.run(...args));
    delete require.cache[require.resolve(`./events/${file}`)];
  });

  client.login(client.config.token); // Log in to the discord api
};

init();
client.on("disconnect", () => client.logger.log("Bot is disconnecting...", "warn"))
    .on("reconnecting", () => client.logger.log("Bot reconnecting...", "log"))
    .on("error", (e) => client.logger.log(e, "error"))
    .on("warn", (info) => client.logger.log(info, "warn"));

// if there is an unhandledRejection, log them
process.on("unhandledRejection", (err) => {
    client.logger.log("Uncaught Promise Error: "+err, "error");
});
module.exports = client;