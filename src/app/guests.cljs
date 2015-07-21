(ns app.guests)

(def guests
  '[{:names ["Alexis Becker"],
     :email "alexiskb@gmail.com",
     :has-plus-one true}
    {:names ["Evan Chung" "Karin Fjellman"],
     :email "rlsteinbeck@gmail.com",
     :has-plus-one false}
    {:names ["Steve Coats" "James Damron"],
     :email "stevec@uchicago.edu",
     :has-plus-one false}
    {:names ["Michael Joseph D'Arcy V"],
     :email "mjdarcy@gmail.com",
     :has-plus-one false}
    {:names ["Karan Dhadialla"],
     :email "karan.dhadialla@gmail.com",
     :has-plus-one false}
    {:names ["Tom Discepola" "Trudy Chan"],
     :email "t.discepola@gmail.com",
     :has-plus-one false}
    {:names ["Kim Eggert" "Dan Corash"],
     :email "kreggert@gmail.com",
     :has-plus-one false}
    {:names ["Sam Finn Cate-Gumpert" "Michelle Ruby Ray"],
     :email "sfinncg@gmail.com",
     :has-plus-one false}
    {:names ["Chris Freeberg"],
     :email "cfreeberg@gmail.com",
     :has-plus-one false}
    {:names ["Conor Gaffney" "Heather Gold"],
     :email "conorsg@gmail.com",
     :has-plus-one false}
    {:names ["Emerald Gao"],
     :email "chaplinesque@gmail.com",
     :has-plus-one false}
    {:names ["Matt Giles"],
     :email "matt.s.giles@gmail.com",
     :has-plus-one false}
    {:names ["Matt Gipp"],
     :email "m.r.gipp@gmail.com",
     :has-plus-one true}
    {:names ["Lauren Henry"],
     :email "lauren.henry7@gmail.com",
     :has-plus-one true}
    {:names ["Zach Herz"],
     :email "zacharyherz@gmail.com",
     :has-plus-one false}
    {:names ["Viet Huynh" "Li Kim Lee" "Vigo Huynh"],
     :email "schema@gmail.com",
     :has-plus-one false}
    {:names ["The Huynh Family"],
     :email "siamping1@gmail.com",
     :has-plus-one false}
    {:names ["Samantha Kumar"],
     :email "samantha.kumar3@gmail.com",
     :has-plus-one true}
    {:names ["Tiffany Kwak"],
     :email "soyoung.kwak@gmail.com",
     :has-plus-one true}
    {:names ["Bourree Lam" "David Iseri"],
     :email "bourree.lam@gmail.com",
     :has-plus-one false}
    {:names ["Hilary Lee"],
     :email "hmlee2008@gmail.com",
     :has-plus-one false}
    {:names ["Jeffrey Louden"],
     :email "heph502@gmail.com",
     :has-plus-one false}
    {:names ["Matt Malinowski" "Caitlin Rubin"],
     :email "mdmalinowski@gmail.com",
     :has-plus-one false}
    {:names ["Amber Meriwether" "Jared Davis" "Clark Davis"],
     :email "amber.meriwether@gmail.com",
     :has-plus-one false}
    {:names ["The Nguyen Family"],
     :email "joel_hanh@yahoo.com",
     :has-plus-one false}
    {:names ["Juliana Pino Alcaraz" "Erin Tinnon"],
     :email "julis.pino@gmail.com",
     :has-plus-one false}
    {:names ["Matt Ranalletta"],
     :email "matthew.ranalletta@gmail.com",
     :has-plus-one false}
    {:names ["Michael Renehan" "Weston Walker"],
     :email "kmrenehan@gmail.com",
     :has-plus-one false}
    {:names ["Michael Schlegelmilch"],
     :email "mikeschlegelmilch@gmail.com",
     :has-plus-one false}
    {:names ["Gwen Smuda"],
     :email "gwen.smuda@gmail.com",
     :has-plus-one false}
    {:names ["Amanda Strick"],
     :email "amandastrick@gmail.com",
     :has-plus-one false}
    {:names ["Danielle Tcholakian"],
     :email "danielleingridanais@gmail.com",
     :has-plus-one true}
    {:names ["Karen Tye" "David Palm"],
     :email "ktye07@gmail.com",
     :has-plus-one false}
    {:names ["Kyle Westphal" "Katherine Greenleaf"],
     :email "kawest@gmail.com",
     :has-plus-one false}
    {:names ["Chris Wolff" "Abby Terese"],
     :email "anziecorgan@gmail.com",
     :has-plus-one false}
    {:names ["Linda Wu"], :email "lyue.wu@gmail.com", :has-plus-one false}
    {:names ["Steve Young"],
     :email "slyoung765@gmail.com",
     :has-plus-one false}
    {:names ["The Zvosec Family"],
     :email "ckzvosec@comcast.net",
     :has-plus-one false}
    {:names ["Adam Alix" "Elise Murray"],
     :email "adam.alix@gmail.com",
     :has-plus-one false}
    {:names ["Zack Boka"],
     :email "zackboka@gmail.com",
     :has-plus-one false}
    {:names ["Aki Rose Braun" "Mark Smirniotis"],
     :email "aki.kyozoku@gmail.com",
     :has-plus-one false}
    {:names ["Eryan Cobham" "Nneka Onyezia" "Dania Cobham"],
     :email "eryan@eryancobham.com",
     :has-plus-one false}
    {:names ["Raf Kuhn"],
     :email "raf.kuhn@gmail.com",
     :has-plus-one false}
    {:names ["Nathan Kuras"],
     :email "nathankuras@gmail.com",
     :has-plus-one false}
    {:names ["Nathan Pinsley" "Peter Kriss"],
     :email "nathan.pinsley@gmail.com",
     :has-plus-one false}
    {:names ["Kyle Rush" "Gregory Goodwin"],
     :email "kylerrush@gmail.com",
     :has-plus-one false}
    {:names ["Nancy Shelby"],
     :email "nancyshelby@gmail.com",
     :has-plus-one false}
    {:names ["Will St. Clair"],
     :email "will@willstclair.com",
     :has-plus-one false}
    {:names ["Gabe Stein"],
     :email "gabe@ghscommunications.com",
     :has-plus-one false}
    {:names ["Cecilia Zvosec"],
     :email "cezvosec@gmail.com",
     :has-plus-one false}
    {:names ["Denny Abrams"],
     :email "edgeguy@aol.com",
     :has-plus-one false}
    {:names ["Sheila Balter"],
     :email "beeshebalter@gmail.com",
     :has-plus-one false}
    {:names ["Summer Brenner" "Michael Weber"],
     :email "summerbrenner@gmail.com",
     :has-plus-one false}
    {:names ["Chloe Byruck" "Karen Jackson"],
     :email "chloebyruck@gmail.com",
     :has-plus-one false}
    {:names ["Sara" "Marcus Byruck"],
     :email "sbyruck@gmail.com",
     :has-plus-one false}
    {:names ["Karima Cammell" "Duncan Brown" "Raphaella" "Valentina"],
     :email "karima@castleintheair.biz",
     :has-plus-one false}
    {:names ["Denise" "Barney Cassidy"],
     :email "cassidycentral@gmail.com",
     :has-plus-one false}
    {:names ["Jeri Lynn Cohen" "Julia Rose Kibben"],
     :email "cohenjerilynn@gmail.com",
     :has-plus-one false}
    {:names ["David Cramer" "Marlene Tobias"],
     :email "dcramera@sbcglobal.net",
     :has-plus-one false}
    {:names ["Carol Edgarian" "Tom Jenks" "Lucy" "Olivia"],
     :email "ce@narrativemagazine.com",
     :has-plus-one false}
    {:names ["Katherine Esmay" "Lennart Ohlsson"],
     :email "klesmay@aol.com",
     :has-plus-one false}
    {:names ["Leah" "Jerry Garchik"],
     :email "lgarchik@sfchronicle.com",
     :has-plus-one false}
    {:names ["Susan Harloe"],
     :email "susanharloe@hotmail.com",
     :has-plus-one false}
    {:names ["Amanda Houston Hamilton"],
     :email "docdmh@aol.com",
     :has-plus-one false}
    {:names ["Stephanie Hunt" "Josh Ende"],
     :email "stephjanehunt@hotmail.com",
     :has-plus-one false}
    {:names ["Daryn Kenny"],
     :email "californiasunshine@comcast.net",
     :has-plus-one false}
    {:names ["Amy Kossow" "Peter Oubourg"],
     :email "amykossowemail@gmail.com",
     :has-plus-one false}
    {:names ["Kathryn Lee" "Gary Pursell" "Chase Jackson"],
     :email "kathrynleelee123@gmail.com",
     :has-plus-one false}
    {:names ["Delia MacDougall"],
     :email "deliamacdougall@gmail.com",
     :has-plus-one false}
    {:names ["Brent" "Beckie Newell"],
     :email "bnewell@crpe-ej.org",
     :has-plus-one false}
    {:names ["Patty Rose"],
     :email "pattyrose@greenspacencr.org",
     :has-plus-one false}
    {:names ["Alice Sealey" "Marc Stess"],
     :email "alicesealey@gmail.com",
     :has-plus-one false}
    {:names ["Patricia Silver"],
     :email "patricia.silver@gmail.com",
     :has-plus-one false}
    {:names ["Gretchen" "Rocky Stone"],
     :email "gretchenjcstone@gmail.com",
     :has-plus-one false}
    {:names ["Ellen Widess" "Rick Warren"],
     :email "ewidess@gmail.com",
     :has-plus-one false}
    {:names ["JoAnne Winter" "Adrian Elfenbaum"],
     :email "jwinter@zspace.org",
     :has-plus-one false}
    {:names ["Michelle Eliezer"],
     :email "tangofeet@gmail.com",
     :has-plus-one false}
    {:names ["Dan Brown" "Alex Smolyanskaya"],
     :email "jdanbrown@gmail.com",
     :has-plus-one false}
    {:names ["Mischa Byruck"],
     :email "mbyruck@gmail.com",
     :has-plus-one false}
    {:names ["Emily Chen"],
     :email "tenshiemi@gmail.com",
     :has-plus-one false}
    {:names ["Peter" "Jarka Cole" "Charlie"],
     :email "pedrolandia@gmail.com",
     :has-plus-one false}
    {:names ["Alexandra Cole" "Frank Dobyns"],
     :email "accole5@yahoo.com",
     :has-plus-one false}
    {:names ["Skip" "Shelley Cole"],
     :email "scole@arthistory.ucsb.edu",
     :has-plus-one false}
    {:names ["Sarah Cole"], :email nil, :has-plus-one false}
    {:names ["Thomas" "Linda Cole" "Allie" "Tobias"],
     :email "eckerbomcole@hotmail.com",
     :has-plus-one false}
    {:names ["Anders Conbere" "Mollie Caka" "Mae" "Hambone"],
     :email "anders@conbere.org",
     :has-plus-one false}
    {:names ["Dorian Jamal Campbell Cool" "Tiffany Lee"],
     :email "jamal.cool@gmail.com",
     :has-plus-one false}
    {:names ["Gina DeVries"],
     :email "queershoulder@gmail.com",
     :has-plus-one false}
    {:names ["Serge" "Winnie Doubinski"],
     :email "v01and04@gmail.com",
     :has-plus-one false}
    {:names ["Theo Eliezer"],
     :email "theo.eliezer@gmail.com",
     :has-plus-one true}
    {:names ["Jon Garrett" "Danielle Peña"],
     :email "jonathan.garrett@gmail.com",
     :has-plus-one false}
    {:names ["April Goldman" "Cody Sims"],
     :email "aprileliza@gmail.com",
     :has-plus-one false}
    {:names ["Isabel Gomez"],
     :email "isabelcgomez@gmail.com",
     :has-plus-one false}
    {:names ["Molly Hirschfeld" "Chris Rogers"],
     :email "molly.hirschfeld@gmail.com",
     :has-plus-one false}
    {:names ["Alexis Hyatt" "Jake Hirschfeld"],
     :email "countslathyl@hotmail.com",
     :has-plus-one false}
    {:names ["Erin Ivie" "Sean Maher"],
     :email "erin.j.ivie@gmail.com",
     :has-plus-one false}
    {:names ["Anna Comerford" "Vikash Mansinghka"],
     :email "vkmvkmvkmvkm@gmail.com",
     :has-plus-one false}
    {:names ["Denise" "Manuel Martinez"],
     :email "manmarti@sbcglobal.net",
     :has-plus-one false}
    {:names ["Daniel Parker"],
     :email "danielpfocht@gmail.com",
     :has-plus-one false}
    {:names ["Susan Putnins" "Clinton Degan"],
     :email "susanputnins@gmail.com",
     :has-plus-one false}
    {:names ["Pavel" "Linna Repin" "Nikolai" "Daniel"],
     :email "prepin@gmail.com",
     :has-plus-one false}
    {:names ["Ivy Roth"],
     :email "roth.ivy@gmail.com",
     :has-plus-one false}
    {:names ["Ashton Saylor"],
     :email "ashtonsaylor@gmail.com",
     :has-plus-one false}
    {:names ["Joshua Thayer" "Martha Montgomery"],
     :email "joshuamilesthayer@gmail.com",
     :has-plus-one false}
    {:names ["Tim Trautman"],
     :email "tctrautman@gmail.com",
     :has-plus-one false}
    {:names ["Chris Wybenga" "Ana Cristina Alanis"],
     :email "c.wybenga@gmail.com",
     :has-plus-one false}])
