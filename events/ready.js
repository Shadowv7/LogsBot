const Discord = require("discord.js");
const abcAPI = require("abcapi");
const { ddblAPI } = require("ddblapi.js");
const ddbl = new ddblAPI(
  "674568147029983242",
  "9d9cee5fb13cc0350a0329a023ba83635b5b7615914b1b81500d58314d2fb74c1526a76cb4a5604ebd7bb9dbbe8dcf04adc2f5d2f8f96fa5ac6ec99f3905b0f0"
);
module.exports = class {
  constructor(client) {
    this.client = client;
  }

  async run() {
    // Logs some informations using the logger file
    this.client.logger.log(
      `Loading a total of ${this.client.commands.size} command(s).`,
      "log"
    );
    this.client.logger.log(
      `${this.client.user.tag}, ready to serve ${this.client.users.cache.size} users in ${this.client.guilds.cache.size} servers.`,
      "ready"
    );

    // Update bot's status

    const statusList = require("../config.js").status.list || [],
      version = require("../package.json").version;
    let i = 0;
    setInterval(() => {
      let status = statusList[parseInt(i, 10)];

      let statusContent = status.content
        .replace(/{usersCount}/g, this.client.users.cache.size)
        .replace(/{guildsCount}/g, this.client.guilds.cache.size);

      this.client.user.setActivity(statusContent, { type: status.type });

      if (statusList[parseInt(i + 1, 10)]) i++;
      else i = 0;
    }, require("../config.js").status.updateEvery);
    
    /* ABC API */
    abcAPI.login(
      "f80acbd52e449a73d898cf7258325de7e97f88a3c0e080fa6552085667ac306af4ad0dbffe8d81c93a4662b8f9c5728be68ce162b18aa573856d4c6cd4d4d312",
      this.client.user.id
    );
    abcAPI.update(this.client);
    abcAPI.post(this.client); 
    
    /* DDBL API */
    ddbl.postStats(this.client.guilds.cache.size).then(console.log);
  }
};
