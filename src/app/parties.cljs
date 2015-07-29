(ns app.parties)

(def parties
  '[{:title "Alexis Becker & Guest",
     :names ["Alexis Becker"],
     :contact "alexiskb@gmail.com",
     :has-plus-one true}
    {:title "Evan Chung & Karin Fjellman",
     :names ["Evan Chung" "Karin Fjellman"],
     :contact "rlsteinbeck@gmail.com",
     :has-plus-one false}
    {:title "Steve Coats & James Damron",
     :names ["Steve Coats" "James Damron"],
     :contact "stevec@uchicago.edu",
     :has-plus-one false}
    {:title "Michael Joseph D'Arcy V",
     :names ["Michael Joseph D'Arcy V"],
     :contact "mjdarcy@gmail.com",
     :has-plus-one false}
    {:title "Karan Dhadialla",
     :names ["Karan Dhadialla"],
     :contact "karan.dhadialla@gmail.com",
     :has-plus-one false}
    {:title "Tom Discepola & Trudy Chan",
     :names ["Tom Discepola" "Trudy Chan"],
     :contact "t.discepola@gmail.com",
     :has-plus-one false}
    {:title "Kim Eggert & Dan Corash",
     :names ["Kim Eggert" "Dan Corash"],
     :contact "kreggert@gmail.com",
     :has-plus-one false}
    {:title "Sam Finn Cate-Gumpert & Michelle Ruby Ray",
     :names ["Sam Finn Cate-Gumpert" "Michelle Ruby Ray"],
     :contact "sfinncg@gmail.com",
     :has-plus-one false}
    {:title "Chris Freeberg",
     :names ["Chris Freeberg"],
     :contact "cfreeberg@gmail.com",
     :has-plus-one false}
    {:title "Conor Gaffney & Heather Gold",
     :names ["Conor Gaffney" "Heather Gold"],
     :contact "conorsg@gmail.com",
     :has-plus-one false}
    {:title "Emerald Gao",
     :names ["Emerald Gao"],
     :contact "chaplinesque@gmail.com",
     :has-plus-one false}
    {:title "Matt Giles",
     :names ["Matt Giles"],
     :contact "matt.s.giles@gmail.com",
     :has-plus-one false}
    {:title "Matt Gipp & Guest",
     :names ["Matt Gipp"],
     :contact "m.r.gipp@gmail.com",
     :has-plus-one true}
    {:title "Lauren Henry & Guest",
     :names ["Lauren Henry"],
     :contact "lauren.henry7@gmail.com",
     :has-plus-one true}
    {:title "Zach Herz",
     :names ["Zach Herz"],
     :contact "zacharyherz@gmail.com",
     :has-plus-one false}
    {:title "Viet Huynh & Li Kim Lee, Vigo Huynh",
     :names ["Viet Huynh" "Li Kim Lee" "Vigo Huynh"],
     :contact "schema@gmail.com",
     :has-plus-one false}
    {:title "The Huynh Family",
     :names ["Phuoc Huynh", "Dao Nguyen"],
     :contact "siamping1@gmail.com",
     :has-plus-one false}
    {:title "Samantha Kumar & Guest",
     :names ["Samantha Kumar"],
     :contact "samantha.kumar3@gmail.com",
     :has-plus-one true}
    {:title "Tiffany Kwak & Guest",
     :names ["Tiffany Kwak"],
     :contact "soyoung.kwak@gmail.com",
     :has-plus-one true}
    {:title "Bourree Lam & David Iseri",
     :names ["Bourree Lam" "David Iseri"],
     :contact "bourree.lam@gmail.com",
     :has-plus-one false}
    {:title "Hilary Lee",
     :names ["Hilary Lee"],
     :contact "hmlee2008@gmail.com",
     :has-plus-one false}
    {:title "Jeffrey Louden",
     :names ["Jeffrey Louden"],
     :contact "heph502@gmail.com",
     :has-plus-one false}
    {:title "Matt Malinowski & Caitlin Rubin",
     :names ["Matt Malinowski" "Caitlin Rubin"],
     :contact "mdmalinowski@gmail.com",
     :has-plus-one false}
    {:title "Amber Meriwether & Jared Davis, Clark Davis",
     :names ["Amber Meriwether" "Jared Davis" "Clark Davis"],
     :contact "amber.meriwether@gmail.com",
     :has-plus-one false}
    {:title "The Nguyen Family",
     :names  ["Joel Hanh Nguyen", "Yvette Lieu Nguyen", "Alex Nguyen", "Julie Nguyen"],
     :contact "joel_hanh@yahoo.com",
     :has-plus-one false}
    {:title "Juliana Pino Alcaraz & Erin Tinnon",
     :names  ["Juliana Pino Alcaraz" "Erin Tinnon"],
     :contact "julis.pino@gmail.com",
     :has-plus-one false}
    {:title "Matt Ranalletta",
     :names  ["Matt Ranalletta"],
     :contact "matthew.ranalletta@gmail.com",
     :has-plus-one false}
    {:title "Michael Renehan & Weston Walker",
     :names  ["Michael Renehan" "Weston Walker"],
     :contact "kmrenehan@gmail.com",
     :has-plus-one false}
    {:title "Michael Schlegelmilch",
     :names  ["Michael Schlegelmilch"],
     :contact "mikeschlegelmilch@gmail.com",
     :has-plus-one false}
    {:title "Gwen Smuda",
     :names  ["Gwen Smuda"],
     :contact "gwen.smuda@gmail.com",
     :has-plus-one false}
    {:title "Amanda Strick",
     :names  ["Amanda Strick"],
     :contact "amandastrick@gmail.com",
     :has-plus-one false}
    {:title "Danielle Tcholakian & Guest",
     :names  ["Danielle Tcholakian"],
     :contact "danielleingridanais@gmail.com",
     :has-plus-one true}
    {:title "Karen Tye & David Palm",
     :names  ["Karen Tye" "David Palm"],
     :contact "ktye07@gmail.com",
     :has-plus-one false}
    {:title "Kyle Westphal & Katherine Greenleaf",
     :names  ["Kyle Westphal" "Katherine Greenleaf"],
     :contact "kawest@gmail.com",
     :has-plus-one false}
    {:title "Chris Wolff & Abby Terese",
     :names  ["Chris Wolff" "Abby Terese"],
     :contact "anziecorgan@gmail.com",
     :has-plus-one false}
    {:title "Linda Wu",
     :names  ["Linda Wu"],
     :contact "lyue.wu@gmail.com",
     :has-plus-one false}
    {:title "Steve Young",
     :names  ["Steve Young"],
     :contact "slyoung765@gmail.com",
     :has-plus-one false}
    {:title "The Zvosec Family",
     :names  ["Colleen Zvosec", "Richard Zvosec", "Bea Zvosec", "Adeline Zvosec"],
     :contact "ckzvosec@comcast.net",
     :has-plus-one false}
    {:title "Adam Alix & Elise Murray",
     :names  ["Adam Alix" "Elise Murray"],
     :contact "adam.alix@gmail.com",
     :has-plus-one false}
    {:title "Zack Boka",
     :names  ["Zack Boka"],
     :contact "zackboka@gmail.com",
     :has-plus-one false}
    {:title "Aki Rose Braun & Mark Smirniotis",
     :names  ["Aki Rose Braun" "Mark Smirniotis"],
     :contact "aki.kyozoku@gmail.com",
     :has-plus-one false}
    {:title "Eryan Cobham & Nneka Onyezia, Dania",
     :names  ["Eryan Cobham" "Nneka Onyezia" "Dania"],
     :contact "eryan@eryancobham.com",
     :has-plus-one false}
    {:title "Raf Kuhn",
     :names  ["Raf Kuhn"],
     :contact "raf.kuhn@gmail.com",
     :has-plus-one false}
    {:title "Nathan Kuras",
     :names  ["Nathan Kuras"],
     :contact "nathankuras@gmail.com",
     :has-plus-one false}
    {:title "Nathan Pinsley & Peter Kriss",
     :names  ["Nathan Pinsley" "Peter Kriss"],
     :contact "nathan.pinsley@gmail.com",
     :has-plus-one false}
    {:title "Kyle Rush & Gregory Goodwin",
     :names  ["Kyle Rush" "Gregory Goodwin"],
     :contact "kylerrush@gmail.com",
     :has-plus-one false}
    {:title "Nancy Shelby",
     :names  ["Nancy Shelby"],
     :contact "nancyshelby@gmail.com",
     :has-plus-one false}
    {:title "Will St. Clair",
     :names  ["Will St. Clair"],
     :contact "will@willstclair.com",
     :has-plus-one false}
    {:title "Gabe Stein",
     :names  ["Gabe Stein"],
     :contact "gabe@ghscommunications.com",
     :has-plus-one false}
    {:title "Cecilia Zvosec & Guest",
     :names  ["Cecilia Zvosec"],
     :contact "cezvosec@gmail.com",
     :has-plus-one true}
    {:title "Denny Abrams",
     :names  ["Denny Abrams"],
     :contact "edgeguy@aol.com",
     :has-plus-one false}
    {:title "Sheila Balter",
     :names  ["Sheila Balter"],
     :contact "beeshebalter@gmail.com",
     :has-plus-one false}
    {:title "Summer Brenner & Michael Weber",
     :names  ["Summer Brenner" "Michael Weber"],
     :contact "summerbrenner@gmail.com",
     :has-plus-one false}
    {:title "Chloe Byruck & Karen Jackson",
     :names  ["Chloe Byruck" "Karen Jackson"],
     :contact "chloebyruck@gmail.com",
     :has-plus-one false}
    {:title "Sara & Marcus Byruck",
     :names  ["Sara Byruck" "Marcus Byruck"],
     :contact "sbyruck@gmail.com",
     :has-plus-one false}
    {:title "Karima Cammell & Duncan Brown, Raphaella and Valentina",
     :names  ["Karima Cammell" "Duncan Brown" "Raphaella" "Valentina"],
     :contact "karima@castleintheair.biz",
     :has-plus-one false}
    {:title "Denise & Barney Cassidy",
     :names  ["Denise Cassidy" "Barney Cassidy"],
     :contact "cassidycentral@gmail.com",
     :has-plus-one false}
    {:title "Jeri Lynn Cohen & Julia Rose Kibben",
     :names  ["Jeri Lynn Cohen" "Julia Rose Kibben"],
     :contact "cohenjerilynn@gmail.com",
     :has-plus-one false}
    {:title "David Cramer & Marlene Tobias",
     :names  ["David Cramer" "Marlene Tobias"],
     :contact "dcramera@sbcglobal.net",
     :has-plus-one false}
    {:title "Carol Edgarian & Tom Jenks, Lucy and Olivia",
     :names  ["Carol Edgarian" "Tom Jenks" "Lucy" "Olivia"],
     :contact "ce@narrativemagazine.com",
     :has-plus-one false}
    {:title "Katherine Esmay & Lennart Ohlsson",
     :names  ["Katherine Esmay" "Lennart Ohlsson"],
     :contact "klesmay@aol.com",
     :has-plus-one false}
    {:title "Leah and Jerry Garchik",
     :names  ["Leah Garchik" "Jerry Garchik"],
     :contact "lgarchik@sfchronicle.com",
     :has-plus-one false}
    {:title "Susan Harloe",
     :names  ["Susan Harloe"],
     :contact "susanharloe@hotmail.com",
     :has-plus-one false}
    {:title "Amanda Houston Hamilton",
     :names  ["Amanda Houston Hamilton"],
     :contact "docdmh@aol.com",
     :has-plus-one false}
    {:title "Stephanie Hunt and Josh Ende",
     :names  ["Stephanie Hunt" "Josh Ende"],
     :contact "stephjanehunt@hotmail.com",
     :has-plus-one false}
    {:title "Daryn Kenny",
     :names  ["Daryn Kenny"],
     :contact "californiasunshine@comcast.net",
     :has-plus-one false}
    {:title "Amy Kossow & Peter Oubourg",
     :names  ["Amy Kossow" "Peter Oubourg"],
     :contact "amykossowemail@gmail.com",
     :has-plus-one false}
    {:title "Kathryn Lee, Gary Pursell & Chase Jackson",
     :names  ["Kathryn Lee" "Gary Pursell" "Chase Jackson"],
     :contact "kathrynleelee123@gmail.com",
     :has-plus-one false}
    {:title "Delia MacDougall",
     :names  ["Delia MacDougall"],
     :contact "deliamacdougall@gmail.com",
     :has-plus-one false}
    {:title "Brent & Beckie Newell",
     :names  ["Brent Newell" "Beckie Newell"],
     :contact "bnewell@crpe-ej.org",
     :has-plus-one false}
    {:title "Patty Rose",
     :names  ["Patty Rose"],
     :contact "pattyrose@greenspacencr.org",
     :has-plus-one false}
    {:title "Alice Sealey & Marc Stess",
     :names  ["Alice Sealey" "Marc Stess"],
     :contact "alicesealey@gmail.com",
     :has-plus-one false}
    {:title "Patricia Silver",
     :names  ["Patricia Silver"],
     :contact "patricia.silver@gmail.com",
     :has-plus-one false}
    {:title "Gretchen & Rocky Stone",
     :names  ["Gretchen Stone" "Rocky Stone"],
     :contact "gretchenjcstone@gmail.com",
     :has-plus-one false}
    {:title "Ellen Widess & Rick Warren",
     :names  ["Ellen Widess" "Rick Warren"],
     :contact "ewidess@gmail.com",
     :has-plus-one false}
    {:title "JoAnne Winter & Adrian Elfenbaum",
     :names  ["JoAnne Winter" "Adrian Elfenbaum"],
     :contact "jwinter@zspace.org",
     :has-plus-one false}
    {:title "Michelle Eliezer",
     :names  ["Michelle Eliezer"],
     :contact "tangofeet@gmail.com",
     :has-plus-one false}
    {:title "Dan Brown & Alex Smolyanskaya",
     :names  ["Dan Brown" "Alex Smolyanskaya"],
     :contact "jdanbrown@gmail.com",
     :has-plus-one false}
    {:title "Mischa Byruck",
     :names  ["Mischa Byruck"],
     :contact "mbyruck@gmail.com",
     :has-plus-one false}
    {:title "Emily Chen",
     :names  ["Emily Chen"],
     :contact "tenshiemi@gmail.com",
     :has-plus-one false}
    {:title "Peter & Jarka Cole, Charlie",
     :names  ["Peter Cole" "Jarka Cole" "Charlie"],
     :contact "pedrolandia@gmail.com",
     :has-plus-one false}
    {:title "Alexandra Cole & Frank Dobyns",
     :names  ["Alexandra Cole" "Frank Dobyns"],
     :contact "accole5@yahoo.com",
     :has-plus-one false}
    {:title "Skip & Shelley Cole",
     :names  ["Skip Cole" "Shelley Cole"],
     :contact "scole@arthistory.ucsb.edu",
     :has-plus-one false}
    {:title "Sarah Cole",
     :names  ["Sarah Cole"],
     :contact nil,
     :has-plus-one false}
    {:title "Thomas & Linda Cole, Allie and Tobias",
     :names  ["Thomas Cole" "Linda Cole" "Allie" "Tobias"],
     :contact "eckerbomcole@hotmail.com",
     :has-plus-one false}
    {:title "Anders Conbere & Mollie Caka, Mae and Hambone",
     :names  ["Anders Conbere" "Mollie Caka" "Mae" "Hambone"],
     :contact "anders@conbere.org",
     :has-plus-one false}
    {:title "Dorian Jamal Campbell Cool & Tiffany Lee",
     :names  ["Dorian Jamal Campbell Cool" "Tiffany Lee"],
     :contact "jamal.cool@gmail.com",
     :has-plus-one false}
    {:title "Gina DeVries",
     :names  ["Gina DeVries"],
     :contact "queershoulder@gmail.com",
     :has-plus-one false}
    {:title "Serge & Winnie Doubinski",
     :names  ["Serge Doubinski" "Winnie Doubinski"],
     :contact "v01and04@gmail.com",
     :has-plus-one false}
    {:title "Theo Eliezer & Guest",
     :names  ["Theo Eliezer"],
     :contact "theo.eliezer@gmail.com",
     :has-plus-one true}
    {:title "Jon Garrett & Danielle Peña",
     :names  ["Jon Garrett" "Danielle Peña"],
     :contact "jonathan.garrett@gmail.com",
     :has-plus-one false}
    {:title "April Goldman & Cody Sims",
     :names  ["April Goldman" "Cody Sims"],
     :contact "aprileliza@gmail.com",
     :has-plus-one false}
    {:title "Isabel Gomez",
     :names  ["Isabel Gomez"],
     :contact "isabelcgomez@gmail.com",
     :has-plus-one false}
    {:title "Molly Hirschfeld & Chris Rogers",
     :names  ["Molly Hirschfeld" "Chris Rogers"],
     :contact "molly.hirschfeld@gmail.com",
     :has-plus-one false}
    {:title "Alexis Hyatt & Jake Hirschfeld",
     :names  ["Alexis Hyatt" "Jake Hirschfeld"],
     :contact "countslathyl@hotmail.com",
     :has-plus-one false}
    {:title "Erin Ivie & Sean Maher",
     :names  ["Erin Ivie" "Sean Maher"],
     :contact "erin.j.ivie@gmail.com",
     :has-plus-one false}
    {:title "Anna Comerford & Vikash Mansinghka",
     :names  ["Anna Comerford" "Vikash Mansinghka"],
     :contact "vkmvkmvkmvkm@gmail.com",
     :has-plus-one false}
    {:title "Denise & Manuel Martinez",
     :names  ["Denise Martinez" "Manuel Martinez"],
     :contact "manmarti@sbcglobal.net",
     :has-plus-one false}
    {:title "Daniel Parker & Guest",
     :names  ["Daniel Parker"],
     :contact "danielpfocht@gmail.com",
     :has-plus-one true}
    {:title "Susan Putnins & Clinton Degan",
     :names  ["Susan Putnins" "Clinton Degan"],
     :contact "susanputnins@gmail.com",
     :has-plus-one false}
    {:title "Pavel & Linna Repin, Nikolai and Daniel",
     :names  ["Pavel Repin" "Linna Repin" "Nikolai" "Daniel"],
     :contact "prepin@gmail.com",
     :has-plus-one false}
    {:title "Ivy Roth",
     :names  ["Ivy Roth"],
     :contact "roth.ivy@gmail.com",
     :has-plus-one false}
    {:title "Ashton Saylor",
     :names  ["Ashton Saylor"],
     :contact "ashtonsaylor@gmail.com",
     :has-plus-one false}
    {:title "Joshua Thayer & Martha Montgomery ",
     :names  ["Joshua Thayer" "Martha Montgomery"],
     :contact "joshuamilesthayer@gmail.com",
     :has-plus-one false}
    {:title "Tim Trautman",
     :names  ["Tim Trautman"],
     :contact "tctrautman@gmail.com",
     :has-plus-one false}
    {:title "Chris Wybenga & Ana Cristina Alanis",
     :names  ["Chris Wybenga" "Ana Cristina Alanis"],
     :contact "c.wybenga@gmail.com",
     :has-plus-one false}])
