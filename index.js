const {ShardingManager} = require('discord.js');
const config = require('./config.js');;
const manager = new ShardingManager('main.js', {
	totalShards: 1,
	respawn    : true,
	token      : config.token
});
manager.spawn()