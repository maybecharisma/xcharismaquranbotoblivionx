

const Discord = require("discord.js");

const client = new Discord.Client();








client.on('ready', () => {
console.log('Logging into discord..');
console.log(`
By TopyDEV
`);

});








var yt = require('ytdl-core');

client.on('ready', () => {
console.log('Logging into discord..');
console.log(`
By TopyDEV
`);

});









client.on('ready', () => {
   console.log(`~~~~~~~~~~~~~~~~~`);
   console.log(`Logging into Discord`);
   console.log(`~~~~~~~~~~~~~~~~~~~~~`);
   console.log(`on  ${client.guilds.size} Servers `);
   console.log(`~~~~~~~~~~~~~~~~~~~~~~~~`);
   console.log(`Logged in as ${client.user.tag}!`);
   client.user.setGame(`!!help| !!invite| Users ${client.users.size} `,"http://twitch.tv/xcharismai")
   client.user.setStatus("dnd")
});










function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith('.' + str);
}

function pluck(array) {
    return array.map(function(item) { return item['name']; });
}

function hasRole(mem, role) {
    if(pluck(mem.roles).includes(role)){
        return true;
    } else {
        return false;
    }

  }





var servers = {};






var q1 = "!!q 1"

var q2 = "!!q 2"

var q3 = "!!q 3"

var q4 = "!!q 4"

var q5 = "!!q 5"

var q6 = "!!q 6"

var q7 = "!!q 7"

var q8 = "!!q 8"

var q9 = "!!q 9"

var q10 = "!!q 10"

var q11 = "!!q 11"

var q12 = "!!q 12"




function play(connection, message) {
	var server = servers[message.guild.id];

	server.dispatcher = connection.playStream(yt(server.queue[0], { fliter: "audionly" }));

	server.queue.shift();

	server.dispatcher.on("end", function() {
		if (server.queue[0]) play(connection, message);
		else connection.disconnect();
	});
}

client.on("ready", () => {
	console.log(`Quran bot is in ${client.guilds.size} servers `)
});

var PREFIX = "!!";



//sowar


client.on("message", message => {

	                    if (message.content === q1 ) {
message.react('📢')  
const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`برجى ان تكون فى روم صوتى !`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=V4b9f9BQTKI', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
  
  	                    if (message.content === q2 ) {
message.react('📢')  
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`برجى ان تكون فى روم صوتى !`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://youtu.be/0m02xNtR8gA', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
  
    	                    if (message.content === q3 ) {
message.react('📢')  
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`برجى ان تكون فى روم صوتى !`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=4JvY-MccxNk', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
  
      	                    if (message.content === q4 ) {
message.react('📢')  
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`برجى ان تكون فى روم صوتى !`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=Ktync4j_nmA', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
    	                    if (message.content === q5 ) {
message.react('📢')  
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`برجى ان تكون فى روم صوتى !`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://youtu.be/IsR4QS9jQtg', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
     	                    if (message.content === q6 ) {
message.react('📢')  
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`برجى ان تكون فى روم صوتى !`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://youtu.be/mxUsXAwur5o', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
     	                    if (message.content === q7 ) {
message.react('📢')  
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`برجى ان تكون فى روم صوتى !`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://youtu.be/eOsTqcpOniQ', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
     	                    if (message.content === q8 ) {
message.react('📢')  
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`برجى ان تكون فى روم صوتى !`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://youtu.be/6Hzk5uPDaJk', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
     	                    if (message.content === q9 ) {
message.react('📢')  
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`برجى ان تكون فى روم صوتى !`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://youtu.be/XezvLuYrf7U', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
     	                    if (message.content === q10 ) {
message.react('📢')  
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`برجى ان تكون فى روم صوتى !`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://youtu.be/Yb_ITofmglk', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
    
    
    
    
    
	                    if (message.content === q11 ) {
message.react('📢')  
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`برجى ان تكون فى روم صوتى !`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=mxUsXAwur5o', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
  
    
    
    
    
    
	                    if (message.content === q12 ) {
message.react('📢')  
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`برجى ان تكون فى روم صوتى !`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=SkfX7TJ1e74', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
  
    
    
    //outher_cummon  
    
  
  if(message.content === "!!s" ) {
      			var servers = {};

			if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
	
  }

  if(message.content === "!!h-q") {
    message.channel.send(` القرآن الكريم
*:🕌 !!q 1  :   القران الكريم كامل بصوت الشيخ عبدالباسط عبدالصمد*
*:🕌 !!q 2  :   سورة البقرة كاملة - القارئ الحاج ميثم التمار (QURAN)*
*:🕌 !!q 3  :   القرآن الكريم كامل بصوت الشيخ عبد الرحمن السديس وسعود الشريم *
*:🕌 !!q 4  :   القرآن الكريم كامل بصوت الشيخ المعيقلي*
*:🕌 !!q 5  : سورة البقرة كاملة للشيخ مشاري العفاسي*
*:🕌 !!q 6  : سورة الكهف كاملة بصوت مشارى بن راشد العفاسي*
*:🕌 !!q 7  : سورة الفاتحه بصوت الشيخ عبد الباسط عبد الصمد*
*:🕌 !!q 8  : سورة يس كاملة للشيخ مشاري بن راشد العفاسي*
*:🕌 !!q 9  : سورة الواقعه بصوت الشيخ مشاري بن راشد العفاسي*
*:🕌 !!q 10 :  سورة يوسف بصوت الشيخ مشاري بن راشد العفاسي*
*:🕌 !!q 11 : سورة الكهف كاملة بصوت مشارى بن راشد العفاسي*
*:🕌 !!q12  : سورة الغاشية كاملة - الشيخ احمد العجمي*
**:🕌 .s     : لـ أيقاف تشغيل البوت 



**`)
}
 
	    
});


client.login(process.env.BOT_TOKEN);

