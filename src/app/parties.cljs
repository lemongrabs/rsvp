(ns app.parties)

(def parties
  '[{:names ["Alexis Becker"],
     :contact "alexiskb@gmail.com",
     :has-plus-one true}
    {:names ["Evan Chung" "Karin Fjellman"],
     :contact "rlsteinbeck@gmail.com",
     :has-plus-one false}
    {:names ["Steve Coats" "James Damron"],
     :contact "stevec@uchicago.edu",
     :has-plus-one false}
    {:names ["Michael Joseph D'Arcy V"],
     :contact "mjdarcy@gmail.com",
     :has-plus-one false}
    {:names ["Karan Dhadialla"],
     :contact "karan.dhadialla@gmail.com",
     :has-plus-one false}
    {:names ["Tom Discepola" "Trudy Chan"],
     :contact "t.discepola@gmail.com",
     :has-plus-one false}
    {:names ["Kim Eggert" "Dan Corash"],
     :contact "kreggert@gmail.com",
     :has-plus-one false}
    {:names ["Sam Finn Cate-Gumpert" "Michelle Ruby Ray"],
     :contact "sfinncg@gmail.com",
     :has-plus-one false}
    {:names ["Chris Freeberg"],
     :contact "cfreeberg@gmail.com",
     :has-plus-one false}
    {:names ["Conor Gaffney" "Heather Gold"],
     :contact "conorsg@gmail.com",
     :has-plus-one false}
    {:names ["Emerald Gao"],
     :contact "chaplinesque@gmail.com",
     :has-plus-one false}
    {:names ["Matt Giles"],
     :contact "matt.s.giles@gmail.com",
     :has-plus-one false}
    {:names ["Matt Gipp"],
     :contact "m.r.gipp@gmail.com",
     :has-plus-one true}
    {:names ["Lauren Henry"],
     :contact "lauren.henry7@gmail.com",
     :has-plus-one true}
    {:names ["Zach Herz"],
     :contact "zacharyherz@gmail.com",
     :has-plus-one false}
    {:names ["Viet Huynh" "Li Kim Lee" "Vigo Huynh"],
     :contact "schema@gmail.com",
     :has-plus-one false}
    {:names ["The Huynh Family"],
     :contact "siamping1@gmail.com",
     :has-plus-one false}
    {:names ["Samantha Kumar"],
     :contact "samantha.kumar3@gmail.com",
     :has-plus-one true}
    {:names ["Tiffany Kwak"],
     :contact "soyoung.kwak@gmail.com",
     :has-plus-one true}
    {:names ["Bourree Lam" "David Iseri"],
     :contact "bourree.lam@gmail.com",
     :has-plus-one false}
    {:names ["Hilary Lee"],
     :contact "hmlee2008@gmail.com",
     :has-plus-one false}
    {:names ["Jeffrey Louden"],
     :contact "heph502@gmail.com",
     :has-plus-one false}
    {:names ["Matt Malinowski" "Caitlin Rubin"],
     :contact "mdmalinowski@gmail.com",
     :has-plus-one false}
    {:names ["Amber Meriwether" "Jared Davis" "Clark Davis"],
     :contact "amber.meriwether@gmail.com",
     :has-plus-one false}
    {:names ["The Nguyen Family"],
     :contact "joel_hanh@yahoo.com",
     :has-plus-one false}
    {:names ["Juliana Pino Alcaraz" "Erin Tinnon"],
     :contact "julis.pino@gmail.com",
     :has-plus-one false}
    {:names ["Matt Ranalletta"],
     :contact "matthew.ranalletta@gmail.com",
     :has-plus-one false}
    {:names ["Michael Renehan" "Weston Walker"],
     :contact "kmrenehan@gmail.com",
     :has-plus-one false}
    {:names ["Michael Schlegelmilch"],
     :contact "mikeschlegelmilch@gmail.com",
     :has-plus-one false}
    {:names ["Gwen Smuda"],
     :contact "gwen.smuda@gmail.com",
     :has-plus-one false}
    {:names ["Amanda Strick"],
     :contact "amandastrick@gmail.com",
     :has-plus-one false}
    {:names ["Danielle Tcholakian"],
     :contact "danielleingridanais@gmail.com",
     :has-plus-one true}
    {:names ["Karen Tye" "David Palm"],
     :contact "ktye07@gmail.com",
     :has-plus-one false}
    {:names ["Kyle Westphal" "Katherine Greenleaf"],
     :contact "kawest@gmail.com",
     :has-plus-one false}
    {:names ["Chris Wolff" "Abby Terese"],
     :contact "anziecorgan@gmail.com",
     :has-plus-one false}
    {:names ["Linda Wu"], :contact "lyue.wu@gmail.com", :has-plus-one false}
    {:names ["Steve Young"],
     :contact "slyoung765@gmail.com",
     :has-plus-one false}
    {:names ["The Zvosec Family"],
     :contact "ckzvosec@comcast.net",
     :has-plus-one false}
    {:names ["Adam Alix" "Elise Murray"],
     :contact "adam.alix@gmail.com",
     :has-plus-one false}
    {:names ["Zack Boka"],
     :contact "zackboka@gmail.com",
     :has-plus-one false}
    {:names ["Aki Rose Braun" "Mark Smirniotis"],
     :contact "aki.kyozoku@gmail.com",
     :has-plus-one false}
    {:names ["Eryan Cobham" "Nneka Onyezia" "Dania Cobham"],
     :contact "eryan@eryancobham.com",
     :has-plus-one false}
    {:names ["Raf Kuhn"],
     :contact "raf.kuhn@gmail.com",
     :has-plus-one false}
    {:names ["Nathan Kuras"],
     :contact "nathankuras@gmail.com",
     :has-plus-one false}
    {:names ["Nathan Pinsley" "Peter Kriss"],
     :contact "nathan.pinsley@gmail.com",
     :has-plus-one false}
    {:names ["Kyle Rush" "Gregory Goodwin"],
     :contact "kylerrush@gmail.com",
     :has-plus-one false}
    {:names ["Nancy Shelby"],
     :contact "nancyshelby@gmail.com",
     :has-plus-one false}
    {:names ["Will St. Clair"],
     :contact "will@willstclair.com",
     :has-plus-one false}
    {:names ["Gabe Stein"],
     :contact "gabe@ghscommunications.com",
     :has-plus-one false}
    {:names ["Cecilia Zvosec"],
     :contact "cezvosec@gmail.com",
     :has-plus-one false}
    {:names ["Denny Abrams"],
     :contact "edgeguy@aol.com",
     :has-plus-one false}
    {:names ["Sheila Balter"],
     :contact "beeshebalter@gmail.com",
     :has-plus-one false}
    {:names ["Summer Brenner" "Michael Weber"],
     :contact "summerbrenner@gmail.com",
     :has-plus-one false}
    {:names ["Chloe Byruck" "Karen Jackson"],
     :contact "chloebyruck@gmail.com",
     :has-plus-one false}
    {:names ["Sara" "Marcus Byruck"],
     :contact "sbyruck@gmail.com",
     :has-plus-one false}
    {:names ["Karima Cammell" "Duncan Brown" "Raphaella" "Valentina"],
     :contact "karima@castleintheair.biz",
     :has-plus-one false}
    {:names ["Denise" "Barney Cassidy"],
     :contact "cassidycentral@gmail.com",
     :has-plus-one false}
    {:names ["Jeri Lynn Cohen" "Julia Rose Kibben"],
     :contact "cohenjerilynn@gmail.com",
     :has-plus-one false}
    {:names ["David Cramer" "Marlene Tobias"],
     :contact "dcramera@sbcglobal.net",
     :has-plus-one false}
    {:names ["Carol Edgarian" "Tom Jenks" "Lucy" "Olivia"],
     :contact "ce@narrativemagazine.com",
     :has-plus-one false}
    {:names ["Katherine Esmay" "Lennart Ohlsson"],
     :contact "klesmay@aol.com",
     :has-plus-one false}
    {:names ["Leah" "Jerry Garchik"],
     :contact "lgarchik@sfchronicle.com",
     :has-plus-one false}
    {:names ["Susan Harloe"],
     :contact "susanharloe@hotmail.com",
     :has-plus-one false}
    {:names ["Amanda Houston Hamilton"],
     :contact "docdmh@aol.com",
     :has-plus-one false}
    {:names ["Stephanie Hunt" "Josh Ende"],
     :contact "stephjanehunt@hotmail.com",
     :has-plus-one false}
    {:names ["Daryn Kenny"],
     :contact "californiasunshine@comcast.net",
     :has-plus-one false}
    {:names ["Amy Kossow" "Peter Oubourg"],
     :contact "amykossowemail@gmail.com",
     :has-plus-one false}
    {:names ["Kathryn Lee" "Gary Pursell" "Chase Jackson"],
     :contact "kathrynleelee123@gmail.com",
     :has-plus-one false}
    {:names ["Delia MacDougall"],
     :contact "deliamacdougall@gmail.com",
     :has-plus-one false}
    {:names ["Brent" "Beckie Newell"],
     :contact "bnewell@crpe-ej.org",
     :has-plus-one false}
    {:names ["Patty Rose"],
     :contact "pattyrose@greenspacencr.org",
     :has-plus-one false}
    {:names ["Alice Sealey" "Marc Stess"],
     :contact "alicesealey@gmail.com",
     :has-plus-one false}
    {:names ["Patricia Silver"],
     :contact "patricia.silver@gmail.com",
     :has-plus-one false}
    {:names ["Gretchen" "Rocky Stone"],
     :contact "gretchenjcstone@gmail.com",
     :has-plus-one false}
    {:names ["Ellen Widess" "Rick Warren"],
     :contact "ewidess@gmail.com",
     :has-plus-one false}
    {:names ["JoAnne Winter" "Adrian Elfenbaum"],
     :contact "jwinter@zspace.org",
     :has-plus-one false}
    {:names ["Michelle Eliezer"],
     :contact "tangofeet@gmail.com",
     :has-plus-one false}
    {:names ["Dan Brown" "Alex Smolyanskaya"],
     :contact "jdanbrown@gmail.com",
     :has-plus-one false}
    {:names ["Mischa Byruck"],
     :contact "mbyruck@gmail.com",
     :has-plus-one false}
    {:names ["Emily Chen"],
     :contact "tenshiemi@gmail.com",
     :has-plus-one false}
    {:names ["Peter" "Jarka Cole" "Charlie"],
     :contact "pedrolandia@gmail.com",
     :has-plus-one false}
    {:names ["Alexandra Cole" "Frank Dobyns"],
     :contact "accole5@yahoo.com",
     :has-plus-one false}
    {:names ["Skip" "Shelley Cole"],
     :contact "scole@arthistory.ucsb.edu",
     :has-plus-one false}
    {:names ["Sarah Cole"], :contact nil, :has-plus-one false}
    {:names ["Thomas" "Linda Cole" "Allie" "Tobias"],
     :contact "eckerbomcole@hotmail.com",
     :has-plus-one false}
    {:names ["Anders Conbere" "Mollie Caka" "Mae" "Hambone"],
     :contact "anders@conbere.org",
     :has-plus-one false}
    {:names ["Dorian Jamal Campbell Cool" "Tiffany Lee"],
     :contact "jamal.cool@gmail.com",
     :has-plus-one false}
    {:names ["Gina DeVries"],
     :contact "queershoulder@gmail.com",
     :has-plus-one false}
    {:names ["Serge" "Winnie Doubinski"],
     :contact "v01and04@gmail.com",
     :has-plus-one false}
    {:names ["Theo Eliezer"],
     :contact "theo.eliezer@gmail.com",
     :has-plus-one true}
    {:names ["Jon Garrett" "Danielle Peña"],
     :contact "jonathan.garrett@gmail.com",
     :has-plus-one false}
    {:names ["April Goldman" "Cody Sims"],
     :contact "aprileliza@gmail.com",
     :has-plus-one false}
    {:names ["Isabel Gomez"],
     :contact "isabelcgomez@gmail.com",
     :has-plus-one false}
    {:names ["Molly Hirschfeld" "Chris Rogers"],
     :contact "molly.hirschfeld@gmail.com",
     :has-plus-one false}
    {:names ["Alexis Hyatt" "Jake Hirschfeld"],
     :contact "countslathyl@hotmail.com",
     :has-plus-one false}
    {:names ["Erin Ivie" "Sean Maher"],
     :contact "erin.j.ivie@gmail.com",
     :has-plus-one false}
    {:names ["Anna Comerford" "Vikash Mansinghka"],
     :contact "vkmvkmvkmvkm@gmail.com",
     :has-plus-one false}
    {:names ["Denise" "Manuel Martinez"],
     :contact "manmarti@sbcglobal.net",
     :has-plus-one false}
    {:names ["Daniel Parker"],
     :contact "danielpfocht@gmail.com",
     :has-plus-one false}
    {:names ["Susan Putnins" "Clinton Degan"],
     :contact "susanputnins@gmail.com",
     :has-plus-one false}
    {:names ["Pavel" "Linna Repin" "Nikolai" "Daniel"],
     :contact "prepin@gmail.com",
     :has-plus-one false}
    {:names ["Ivy Roth"],
     :contact "roth.ivy@gmail.com",
     :has-plus-one false}
    {:names ["Ashton Saylor"],
     :contact "ashtonsaylor@gmail.com",
     :has-plus-one false}
    {:names ["Joshua Thayer" "Martha Montgomery"],
     :contact "joshuamilesthayer@gmail.com",
     :has-plus-one false}
    {:names ["Tim Trautman"],
     :contact "tctrautman@gmail.com",
     :has-plus-one false}
    {:names ["Chris Wybenga" "Ana Cristina Alanis"],
     :contact "c.wybenga@gmail.com",
     :has-plus-one false}])
