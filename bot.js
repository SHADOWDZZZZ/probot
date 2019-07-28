const fs = require("fs");
const moment = require("moment");
const Discord = require("discord.js");
const client = new Discord.Client
var prefix = "#";


client.on('message', async(message) => {
		    var prefix = "#";
    if(message.author.julian || message.channel.type == 'dm') return;
    let args = message.content.split(' ');
    if(args[0] == `${prefix}bc`){
        if(!message.member.hasPermission('MANAGE_GUILD')) return;
        if(!args[1]) return message.channel.send(`**Usage:** ${prefix}bc [message]`);
        message.guild.members.map((m) => {
            setTimeout(() => {
                m.send(args.slice(1).join(' ').replace('[user]', m).replace('[server]', message.guild.name)).catch(e => undefined);
            }, 550);
        });
    }
})








client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});


  

  var prefix = ("#")
let profile = JSON.parse(fs.readFileSync("./profile.json", "utf8"))
client.on("message", message => {
  if (message.author.bot) return;
 if(!message.channel.guild)return;
  if (!profile[message.author.id]) profile[message.author.id] = {
    tite: 'HypeLC User',
    rep: 0,
   reps: 'NOT YET',
   lastDaily:'Not Collected',
    level: 0,
    points: 0,
    credits: 1,
  };
fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
});
client.on("message", (message) => {
  let men = message.mentions.users.first()
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
    if(!message.channel.guild) return;
if (message.content.startsWith('c')) {
  if(men) {
  if (!profile[men.id]) profile[men.id] = {
   lastDaily:'Not Collected',
   credits: 1,
 };
  }
  if(men) {
message.channel.send(`** ${men.username}, :credit_card: balance` + " is `" + `$${profile[men.id].credits}` + "`.**")
} else {
 message.channel.send(`** ${message.author.username}, your :credit_card: balance` + " is `" + `$${profile[message.author.id].credits}` + "`.**")
}
}
if(message.content.startsWith('#' + "daily")) {


  if(profile[message.author.id].lastDaily != moment().format('day')) {
   profile[message.author.id].lastDaily = moment().format('day')
   profile[message.author.id].credits += 1000000
    message.channel.send(`:atm: |**${message.author.username} you collect your \`1000000\` :yen: daily credits!**`)
} else {
    message.channel.send(`**:stopwatch: | ${message.author.username}, your daily :yen: credits refreshes ${moment().endOf('day').fromNow()}**`)
}
}
let cont = message.content.slice(prefix.length).split(" ");
let args = cont.slice(2);
let sender = message.author
if(message.content.startsWith('#' + "credits")) {
if (!args[0])  {message.channel.send(``); 
         return;
           }
        // We should also make sure that args[0] is a number
        if (isNaN(args[0])) {
            message.channel.send(``);
            return; // Remember to return if you are sending an error message! So the rest of the code doesn't run.
             }
             if(profile[message.author.id].credits < args[0]) return message.channel.send(`** :thinking: | ${message.author.username}, Your balance is not enough for that!**`)
if(args[0].startsWith("-")) return  message.channel.send('**!! I Cant Do it**');
				 let defineduser = '';
            let firstMentioned = message.mentions.users.first();
            defineduser = (firstMentioned)
           
            if(defineduser.id === message.author.id) return message.channel.send("***Transfering to your self hah ?!***")
            var mentionned = message.mentions.users.first();
if (!profile[sender.id]) profile[sender.id] = {}
if (!profile[sender.id].credits) profile[sender.id].credits = 310;
fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
var x = ['5764'];
var x2 = ['5764'];
        var x3 = Math.floor(Math.random()*x.length)
       message.channel.send(`** :moneybag: |**  \`${x[x3]}\` ** :  type these numbers to confirm **`).then(msg1=> {
        var r = message.channel.awaitMessages(msg => msg.content == x2[x3], { maxMatches : 1, time : 600000, errors : ['time'] })
       
  r.catch(() => {
            message.delete()
            r.delete()
            msg1.delete()
          r.catch
    })
        r.then(s=> {
      var mando = message.mentions.users.id;
      if  (!profile[defineduser.id]) profile[defineduser.id] = {}
      if (!profile[defineduser.id].credits) profile[defineduser.id].credits = 200;
      profile[defineduser.id].credits += (+args[0]);
      profile[sender.id].credits += (-args[0]);
      let mariam = message.author.username
message.channel.send(`**:moneybag: | ${message.author.username}, has transferrerd ` + "`$" + args[0] + "` to " + `<@${defineduser.id}>**`)
mentionned.send(`:atm: | Transfer Receipt \`\`\`You have received $ ${args[0]} from user ${message.author.username} (ID: ${message.author.id})\`\`\``);
               
        })
        })
}
});










client.login(process.env.BOT_TOKEN);  //لا تحط التوكن حقك هنا
