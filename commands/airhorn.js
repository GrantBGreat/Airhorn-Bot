const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    var voiceChannel = message.member.voice.channel

    await voiceChannel.join().then(connection =>{
      const dispatcher = connection.play('./assets/testsound.mp3');
    }).catch(err => console.error(err));

    await dispatcher.on("end", end => {
      voiceChannel.leave();
    });
}

//The command's name
module.exports.help = {
  name: "airhorn"
}