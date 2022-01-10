class Question {
    constructor(type, exam, taal, question, answer, image , comment, ...q) {
      this.type = type;  
      this.exam = exam;  
      this.taal = taal;  
      this.question = question;
      this.answer = answer;
      this.image = image;
      this.comment = comment;
      this.q = q;
      
    }
}



let question1 = new Question("Auto","exam 1", "fr", "Pour freiner, je pousse normalement", "A","511142",
 "Le frein pour freiner", "D’abord sur la pédale de frein", "D’abord sur la pédale d’embrayage", "En même temps sur les pédales de frein et d’embrayage");

let question2 = new Question("Auto", "exam 1","fr", "Ce signal routier signifie interdiction d'utiliser le cruise control ou régulateur de vitesse de croisière","B", "366006",
"Définition du signal : fin d'interdiction", "Oui", "Non");

let question3 = new Question("Auto", "exam 1","fr", "L'Utilisation de l'airconditionné augmente la consommation de carburant","A", "366007",
 "Tout ce qui consomme de l'électricité augmante la consommation de carburant", "oui", "non" );

let question4 = new Question("Auto", "exam 2","fr", "Enfant de 10 ans mesurant 1,45m. Comment faut-il le transporter ?", "C","366011",
 "A partir de 1,35m, un système de retenue n'est plus obligatoire.", "A", "B", "A et B");

 let question5 = new Question("Auto", "exam 2","fr", "La circulation est fortement ralentie. une bande de circulation prend fin. Le principe de la tirette doit s'appliquer ", "A","366008",
 "Afin de profiter des deux bandes le plus longtemps possible", "Juste devant le rétrécissement", "Le plus tôt possible" );



 let question6 = new Question("Auto", "exam 2","fr", "Incendie dans un tunnel", "A","366009", 
 "Laissez la clef sur le contact pour les services de secours et dirigez-vous vers l'issue de secours du côté opposé à l'incendie", "Je me dirige vers l'issue de secours", "Je ferme la voiture à clef et me dirige vers l'issue de secours", "J'attends les secours dans le véhicule en fermant les fenêtres" );


 let question7 = new Question("Auto", "exam 3","fr", "Ce signal routier limite ma vitesse durant 200 mètres", "B","366010", 
 "La limitation commence dans 200 m",
  "Oui", "Non");

 let question8 = new Question("Auto", "exam 3","fr", "Dans quel sens faut-il serrer les boulons d'une roue", "A","666101", 
 "Dans le sens des aiguilles d'une montre",
  "A", "B");

 let question9 = new Question("Auto", "exam 3","fr", "Moteur Diesel. A quel régime moteur convient-il de changer de rapport", "B","450042", 
 "2000 tours/minute avec un moteur Diesel, 2500 tours/minute avec un moteur essence",
  "1000", "2000", "3500" );

 let question10 = new Question("Auto", "exam 3","fr", "L'ESP est un système", "B","917000", 
 "ESP système antidérapant destiné à améliorer le contrôle de trajectoire. ABS système qui évite le blocage des roues au freinage",
  "Qui évite le blocage des roues au freinage", "D'antidérapage" );




  let questionNL1 = new Question("Auto", "exam 1", "nl", "Op de wielen mogen spijkerbanden worden gemonteerd", "A", "91700",
   "Het gebruik van spijkerbanden hangt niet af van de weeromstandigheden. Te onthouden: van 1 november tot 31 maart", "Van 1 november tot 31 maart", "Van 1 oktober tot 31 maart", "Waneer de weergesteldheid dit rechtvaardigt")

  let questionNL2 = new Question("Auto", "exam 1", "nl", "Dit verkeersbord betekent: verbod de cruis control of kruissnelheidregelaar te gebruike,", "B", "366006", "Dit verkeersteken betekent: Einde van het verbod", "Ja", "Neen")

  let questionNL3 = new Question("Auto", "exam 1", "nl", "Het functioneer van de airco verhoogt het brandstofgebruik", "A", "366007", "Al wat elektriciteit verbruikt vereist brandstof", "Ja", "Nee")


  let questionNL4 = new Question("Auto", "exam 2", "nl", "Kind van jaar, 1,45 m groot. Hoe dient dit te te worden vervoerd ?", "C", "366011", "Vanaf 1,35 m is geen kinderbeveiligingsysteem meer vereist", "A", "B", "A of B")

  let questionNL5 = new Question("Auto", "exam 2", "nl", "Sterk vertraagd verkeer, Einde van een rijstrook. Ritsen verplicht", "A", "366008", "Om zo lang mogelijk voordeel te behouden uit de twee rijstroken", "Juist voor devernauwing", "Zo snel mogelijk")

  let questionNL6 = new Question("Auto", "exam 2", "nl", "Brand in een tunnel", "A", "366009", "Ten behoeve van de hulpdienst laat ik de sleutel op het contact en begeef me, in tegenovergestelde richting van de brand,naar de nooduitgang", "Ik begeef mij naar de nooduitgang", "Ik sluit de auto af en begeef me naar de nooduitgang", "In de auto met gesloten ramen wacht ik op de hulpdiensten")


  let questionNL7 = new Question("Auto", "exam 3", "nl", "Door dit teken is er snelheidbeperking gedurende 200m", "B", "366010", "binnen 200m", "Ja", "Neen")

  let questionNL8 = new Question("Auto", "exam 3", "nl", "In welke richting dienen de wielbouten te worden aangedraaid", "A", "666101", "met de wijzersvan de klok mee", "A", "B")

  let questionNL9 = new Question("Auto", "exam 3", "nl", "Dieselmotor, Aan welke motorregime moet de gangwissel geschieden", "B", "450042", "Bij 2000 omwentelingen/minuut voor een dieselmotor. 2500 voor een benzinmotor", "1000 omwentelingen/minuut", "2000 omwentelingen/minuut", "3500 omwentelingen/minuut")

  let questionNL10 = new Question("Auto", "exam 3", "nl", "De ESP is een systeem", "B", "917000", "comment", "Dat , bij het remmen, belet datde wielen geblokkeerd geraken", "Tegen slipgevaar")



  let questionMT1 = Question("Moto", "exam 1", "fr", "question", "answer", "images", "comment", "q1", "q2", "q3")

  let questionMT2 = Question("Moto", "exam 1", "fr", "question", "answer", "images", "comment", "q1", "q2", "q3")

  let questionMT3 = Question("Moto", "exam 1", "fr", "question", "answer", "images", "comment", "q1", "q2", "q3")

  
  let questionMT4 = Question("Moto", "exam 2", "fr", "question", "answer", "images", "comment", "q1", "q2", "q3")

  let questionMT5 = Question("Moto", "exam 2", "fr", "question", "answer", "images", "comment", "q1", "q2", "q3")

  let questionMT6 = Question("Moto", "exam 2", "fr", "question", "answer", "images", "comment", "q1", "q2", "q3")


  let questionMT7 = Question("Moto", "exam 3", "fr", "question", "answer", "images", "comment", "q1", "q2", "q3")

  let questionMT8 = Question("Moto", "exam 3", "fr", "question", "answer", "images", "comment", "q1", "q2", "q3")

  let questionMT9 = Question("Moto", "exam 3", "fr", "question", "answer", "images", "comment", "q1", "q2", "q3")



  let questionMTNL1 = Question("Moto", "exam 1", "nl", "question", "answer", "images", "comment", "q1", "q2", "q3")

  let questionMTNL2 = Question("Moto", "exam 1", "nl", "question", "answer", "images", "comment", "q1", "q2", "q3")

  let questionMTNL3 = Question("Moto", "exam 1", "nl", "question", "answer", "images", "comment", "q1", "q2", "q3")


  let questionMTNL4 = Question("Moto", "exam 2", "nl", "question", "answer", "images", "comment", "q1", "q2", "q3")

  let questionMTNL5 = Question("Moto", "exam 2", "nl", "question", "answer", "images", "comment", "q1", "q2", "q3")

  let questionMTNL6 = Question("Moto", "exam 2", "nl", "question", "answer", "images", "comment", "q1", "q2", "q3")


  let questionMTNL7 = Question("Moto", "exam 3", "nl", "question", "answer", "images", "comment", "q1", "q2", "q3")

  let questionMTNL8 = Question("Moto", "exam 3", "nl", "question", "answer", "images", "comment", "q1", "q2", "q3")

  let questionMTNL9 = Question("Moto", "exam 3", "nl", "question", "answer", "images", "comment", "q1", "q2", "q3")


module.exports = {

    start: [question1,question2,question3,question4,question5,question6,question7,question8,question9,question10,questionNL1,questionNL2,questionNL3,questionNL4,questionNL5,questionNL6,questionNL7,questionNL8,questionNL9,questionNL10,],
    
  };




