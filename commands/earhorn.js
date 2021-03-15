const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
  // check if the user is in vc
    if (! message.member.voice.channel) return message.reply("are you so scared you wont enter a vc with me?");

    // declair the vc
    var voiceChannel = message.member.voice.channel

    // play the sound in the vc
    await voiceChannel.join().then(connection =>{
      const dispatcher = connection.play('./assets/cheers.mp3');
    }).catch(err => console.error(err));

    // leave the vc
    await dispatcher.on("end", end => {
      voiceChannel.leave();
    });
}

//The command's name
module.exports.help = {
  name: "earhorn"
}