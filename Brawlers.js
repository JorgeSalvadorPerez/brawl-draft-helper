// Counter data — fuente: brawlbrawl.com + noff.gg (May 2026)
// strongAgainst = brawlers a los que este brawler GANA / COUNTERA
const counterData = {
    Shelly: {
        strongAgainst: ["Darryl","Carl","Dynamike","Griff","Bibi","Mortis","Lily","Gale","Bo","Edgar","El Primo","Alli"]
    },
    Nita: {
        strongAgainst: ["Meeple","Mortis","Edgar","Crow","Bull","El Primo","Willow","Sirius","Cordelius"]
    },
    Colt: {
        strongAgainst: ["Bull","Rosa","Jacky","El Primo","Bibi","Barley","Kaze"]
    },
    Bull: {
        strongAgainst: ["Edgar","Mortis","Bibi","Jacky","Darryl","Kaze","Melodie","Buster","Alli"]
    },
    Brock: {
        strongAgainst: ["Bull","Rosa","Jacky","El Primo","Bibi","Kaze","Moe","Ollie","Damian","Bonnie","Nita","Amber"]
    },
    "El Primo": {
        strongAgainst: ["Mortis","Edgar","Bibi","Darryl","Jacky","Kenji","Buster"]
    },
    Poco: {
        strongAgainst: ["Otis","Crow","Byron","Mortis","Edgar","Hank","Spike"]
    },
    Rosa: {
        strongAgainst: ["Mortis","Edgar","Bibi","Darryl","Jacky","Buster"]
    },
    Rico: {
        strongAgainst: ["Bull","Rosa","Jacky","El Primo","Bibi","Kenji"]
    },
    Jessie: {
        strongAgainst: ["Pam","8-Bit","Rosa","Bull","Bo","Sandy","Spike"]
    },
    Dynamike: {
        strongAgainst: ["Bull","Rosa","Jacky","El Primo","Bibi","Kenji"]
    },
    Darryl: {
        strongAgainst: ["Piper","Belle","Mandy","Nani","Brock","Gus","Squeak","Pierce"]
    },
    Penny: {
        strongAgainst: ["Pam","8-Bit","Rosa","Bull","Bo","Charlie","Sandy"]
    },
    Tick: {
        strongAgainst: ["Bull","Rosa","Jacky","El Primo","Bibi","Barley","Kenji","Amber"]
    },
    Carl: {
        strongAgainst: ["Piper","Belle","Mandy","Nani","Brock","Kaze"]
    },
    "8-Bit": {
        strongAgainst: ["Rosa","Bull","Pam","Jacky","El Primo","Sandy"]
    },
    Jacky: {
        strongAgainst: ["Mortis","Edgar","Bibi","Darryl","Kenji"]
    },
    Gus: {
        strongAgainst: ["Piper","Belle","Mandy","Squeak","Tick","Kaze"]
    },
    Bo: {
        strongAgainst: ["Mina","Byron","Penny","Bibi","Spike","Jessie","Emz","Lily","Kenji"]
    },
    Piper: {
        strongAgainst: ["8-Bit","Pam","Bea","Nani","Buzz","Hank","Sandy","Meg","Cordelius","Moe","Ollie","Damian","Bonnie","Nita","Amber"]
    },
    Pam: {
        strongAgainst: ["Crow","Mortis","Edgar","Kaze","Mico","Clancy","Sirius"]
    },
    Frank: {
        strongAgainst: ["Mortis","Edgar","Bibi","Jacky","Darryl","Clancy","Draco","Kaze","Kenji","Sirius","Buster","Alli"]
    },
    Bibi: {
        strongAgainst: ["Dynamike","Barley","Grom","Sprout","Tick","Kaze"]
    },
    Bea: {
        strongAgainst: ["Bull","El Primo","Rosa","Frank","Jacky","Hank","Sandy","Surge","Meg","Amber"]
    },
    Emz: {
        strongAgainst: ["Bull","El Primo","Rosa","Jacky","Bibi","Kaze","Sandy","Cordelius","Nita"]
    },
    Stu: {
        strongAgainst: ["Edgar","Dynamike","Barley","Grom","Sprout","Poco","Charlie","Amber"]
    },
    Belle: {
        strongAgainst: ["8-Bit","Pam","Frank","Hank","Bull","Sandy","Meg","Cordelius","Moe","Ollie","Damian","Bonnie","Nita"]
    },
    Grom: {
        strongAgainst: ["8-Bit","Pam","Rosa","Bull","Jacky","Sandy"]
    },
    Griff: {
        strongAgainst: ["Edgar","Mortis","Bull","El Primo","Rosa","Colette","Kaze","Kenji"]
    },
    Ash: {
        strongAgainst: ["Mortis","Edgar","Bibi","Darryl","Jacky","Spike"]
    },
    Lola: {
        strongAgainst: ["Bull","Rosa","Jacky","El Primo","Bibi","Sandy"]
    },
    Bonnie: {
        strongAgainst: ["Edgar","Mortis","Buzz","Fang","Surge","Clancy"]
    },
    Sam: {
        strongAgainst: ["Piper","Belle","Mandy","Nani","Brock","Sandy"]
    },
    Mandy: {
        strongAgainst: ["8-Bit","Pam","Bea","Nani","Angelo","Sandy","Meg","Cordelius","Moe","Ollie","Damian","Bonnie","Nita"]
    },
    Maisie: {
        strongAgainst: ["Bull","El Primo","Rosa","Bibi","Jacky","Sandy","Surge"]
    },
    Hank: {
        strongAgainst: ["Bull","Jacky","Bibi","Spike","Poco","Clancy","Draco","Buster"]
    },
    Pearl: {
        strongAgainst: ["Bull","El Primo","Rosa","Jacky","Bibi","Chester"]
    },
    "Larry & Lawrie": {
        strongAgainst: ["Bull","Rosa","Jacky","El Primo","Bibi","Spike"]
    },
    Angelo: {
        strongAgainst: ["8-Bit","Pam","Bea","Nani","Mandy","Sandy","Eve","Meg"]
    },
    Berry: {
        strongAgainst: ["Bull","Rosa","Jacky","El Primo","Bibi","Spike"]
    },
    Shade: {
        strongAgainst: ["Piper","Belle","Mandy","Nani","Brock","Kenji"]
    },
    Meeple: {
        strongAgainst: ["Colette","Bibi","Bull","Rosa","Poco","Spike"]
    },
    Trunk: {
        strongAgainst: ["Bull","Rosa","Jacky","El Primo","Poco","Spike"]
    },
    Mortis: {
        strongAgainst: ["Lumi","Piper","Mandy","Belle","Grom","Dynamike","Barley","Sandy","Pierce","Gene","Mr. P","Max","Lou","Ruffs","Janet","Doug","Juju","Finx","Ziggy","Gigi","Glowy","Najia","Lola","Maisie","Pearl","Larry & Lawrie","Trunk","Rico"]
    },
    Tara: {
        strongAgainst: ["Mortis","Edgar","Mico","Kaze","Bibi","Clancy","Chuck"]
    },
    Gene: {
        strongAgainst: ["Piper","Belle","Mandy","Byron","Spike","Sandy","Surge"]
    },
    "Mr. P": {
        strongAgainst: ["Meeple","Piper","Belle","Bea","Mandy","Gus","Spike","Clancy","Surge"]
    },
    Max: {
        strongAgainst: ["Piper","Belle","Mandy","Nani","Spike","Sandy","Surge"]
    },
    Sprout: {
        strongAgainst: ["Rosa","Bull","Jacky","8-Bit","El Primo","Sandy"]
    },
    Lou: {
        strongAgainst: ["Bull","El Primo","Rosa","Bibi","Sam","Jacky","Sandy","Amber"]
    },
    Byron: {
        strongAgainst: ["Bull","Rosa","Frank","Ash","Jacky","Bo","Sandy","Surge","Amber"]
    },
    Ruffs: {
        strongAgainst: ["Colette","Meeple","Otis","Shelly","Spike","Sandy","Surge"]
    },
    Squeak: {
        strongAgainst: ["8-Bit","Pam","Rosa","Bull","Jacky","Sandy"]
    },
    Buzz: {
        strongAgainst: ["Piper","Mandy","Belle","Byron","Squeak","Sandy","Pierce","Gene","Mr. P","Max","Lou","Ruffs","Janet","Doug","Juju","Finx","Alli","Ziggy","Gigi","Glowy","Najia","Lola","Maisie","Pearl","Larry & Lawrie","Trunk","Rico"]
    },
    Fang: {
        strongAgainst: ["Piper","Mandy","Belle","Byron","Spike","Leon","Sandy","Surge","Pierce","Gene","Mr. P","Max","Lou","Ruffs","Janet","Doug","Juju","Finx","Ziggy","Gigi","Najia","Lola","Maisie","Pearl","Larry & Lawrie","Trunk","Rico"]
    },
    Eve: {
        strongAgainst: ["Angelo","8-Bit","Pam","Rosa","Bull","Sandy"]
    },
    Janet: {
        strongAgainst: ["Bull","Rosa","Jacky","8-Bit","El Primo","Sandy","Spike"]
    },
    Otis: {
        strongAgainst: ["Edgar","Mortis","Buzz","Fang","Sam","Mico","Surge"]
    },
    Buster: {
        strongAgainst: ["Piper","Belle","Mandy","Nani","Brock","Sandy","Surge"]
    },
    Gray: {
        strongAgainst: ["Piper","Belle","Mandy","Nani","Brock","Sandy"]
    },
    "R-T": {
        strongAgainst: ["Bull","Rosa","Jacky","El Primo","Bibi","Sandy","Spike"]
    },
    Willow: {
        strongAgainst: ["Bull","Rosa","Jacky","Spike","Poco","Sandy"]
    },
    Doug: {
        strongAgainst: ["Edgar","Mortis","Buzz","Fang","Jae-Yong","Surge","Clancy"]
    },
    Chuck: {
        strongAgainst: ["Bull","Rosa","Jacky","El Primo","Bibi","Sandy"]
    },
    Charlie: {
        strongAgainst: ["Colette","Meeple","Mico","Mortis","Bea","Stu","Chuck","Sandy"]
    },
    Mico: {
        strongAgainst: ["Piper","Mandy","Belle","Grom","Dynamike","Barley","Kaze","Sandy","Gene","Mr. P","Max","Lou","Ruffs","Janet","Doug","Juju","Finx","Ziggy","Gigi","Glowy","Najia","Lola","Maisie","Pearl","Larry & Lawrie","Trunk","Rico"]
    },
    Melodie: {
        strongAgainst: ["Piper","Mandy","Belle","Grom","Kaze","Sandy","Surge"]
    },
    Lily: {
        strongAgainst: ["Meeple","Lumi","Piper","Mandy","Belle","Nani","Sandy"]
    },
    Clancy: {
        strongAgainst: ["Bull","El Primo","Rosa","Frank","Jacky","Sandy"]
    },
    Moe: {
        strongAgainst: ["Piper","Mandy","Belle","Spike","8-Bit","Sandy"]
    },
    Juju: {
        strongAgainst: ["Bull","Rosa","Jacky","El Primo","Colt","Sandy","Charlie"]
    },
    Ollie: {
        strongAgainst: ["Bull","Rosa","Jacky","Spike","Dynamike","Sandy"]
    },
    Lumi: {
        strongAgainst: ["Piper","Belle","Mandy","Nani","Brock","Sandy"]
    },
    Finx: {
        strongAgainst: ["Bull","Rosa","Jacky","Bo","El Primo","Sandy"]
    },
    "Jae-Yong": {
        strongAgainst: ["Bull","Rosa","Jacky","Piper","Belle","Sandy"]
    },
    Alli: {
        strongAgainst: ["Otis","Bull","Rosa","El Primo","Spike","Sandy","Surge"]
    },
    Mina: {
        strongAgainst: ["Bull","Rosa","Jacky","Bo","El Primo","Sandy","Surge"]
    },
    Ziggy: {
        strongAgainst: ["Bull","Rosa","Jacky","Spike","Colt","Sandy","Surge"]
    },
    Gigi: {
        strongAgainst: ["Piper","Belle","Mandy","Nani","Kenji","Sandy","Surge"]
    },
    Glowy: {
        strongAgainst: ["Bull","Rosa","Frank","Jacky","El Primo","Sandy"]
    },
    Najia: {
        strongAgainst: ["Lumi","Rosa","Bull","Jacky","El Primo","Sandy"]
    },
    Damian: {
        strongAgainst: ["Mortis","Edgar","Bibi","Jacky","Darryl","Clancy","Sandy"]
    },
    Spike: {
        strongAgainst: ["Buzz","Nani","Jacky","Poco","Fang","Leon","R-T","Kit","Gray","Sandy","Amber"]
    },
    Crow: {
        strongAgainst: ["Colette","Mortis","Poco","Pam","Byron","Berry","Kenji","Chuck","Sandy","Sirius","Glowy"]
    },
    Leon: {
        strongAgainst: ["Piper","Belle","Mandy","Nani","8-Bit","Sandy","Spike"]
    },
    Sandy: {
        strongAgainst: ["Bull","El Primo","Rosa","Jacky","Spike","Clancy","Surge"]
    },
    Surge: {
        strongAgainst: ["Edgar","Mortis","Buzz","Fang","Kenji","Clancy","Sandy"]
    },
    Amber: {
        strongAgainst: ["Bull","Rosa","Jacky","El Primo","Bibi","Charlie","Stu","Sandy"]
    },
    Meg: {
        strongAgainst: ["Bull","Rosa","Jacky","El Primo","Bibi","Sandy","Surge"]
    },
    Chester: {
        strongAgainst: ["Edgar","Mortis","Buzz","Otis","Bibi","Kaze","Shelly","Sandy","Sirius"]
    },
    Cordelius: {
        strongAgainst: ["Mortis","Edgar","Mico","Kaze","Bibi","Lily","Kenji","Sandy","Surge"]
    },
    Kit: {
        strongAgainst: ["Bull","Rosa","Jacky","Bibi","Poco","Sandy","Spike"]
    },
    Draco: {
        strongAgainst: ["Piper","Belle","Mandy","Nani","Brock","Sandy"]
    },
    Kenji: {
        strongAgainst: ["Squeak","Piper","Tick","Bull","Shade","Dynamike","Tara","Edgar","Fang","Sandy","Alli"]
    },
    Pierce: {
        strongAgainst: ["Kaze","Kenji","Shelly","Edgar","Mortis","Bull","Bibi","Sandy","Clancy","Surge"]
    },
    Kaze: {
        strongAgainst: ["Mandy","Tick","Piper","Spike","Carl","Colt","Nani","Brock","Mico","Sandy"]
    },
    Sirius: {
        strongAgainst: ["Meeple","Mortis","Edgar","Mico","Piper","Belle","Sandy","Surge"]
    },
    Colette: {
        strongAgainst: ["Bull","El Primo","Rosa","Frank","Ash","Jacky","Hank","Sandy","Meg"]
    },
    Gale: {
        strongAgainst: ["Bull","El Primo","Rosa","Bibi","Edgar","Mortis","Jacky","Sandy"]
    },
    Nani: {
        strongAgainst: ["Piper","Belle","Mandy","8-Bit","Brock","Sandy","Moe","Ollie","Damian","Bonnie","Amber"]
    },
    Edgar: {
        strongAgainst: ["Lumi","Piper","Mandy","Belle","Grom","Dynamike","Barley","Sandy","Pierce","Gene","Mr. P","Max","Lou","Ruffs","Janet","Doug","Juju","Finx","Ziggy","Gigi","Glowy","Najia","Lola","Maisie","Pearl","Larry & Lawrie","Trunk","Rico"]
    },
    Barley: {
        strongAgainst: ["Bull","Rosa","Jacky","El Primo","Bibi","Sandy","Amber"]
    },
};