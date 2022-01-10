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




  let questionNL1 = new Question("Auto", "exam 1", "nl", "Op de wielen mogen spijkerbanden worden gemonteerd", "A", "917005",
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



  let questionMT1 = new Question("Moto", "exam 1", "fr", "Pour conduire une moto d'une puissance de 21kW, il faut etre agé d'au moins", "B", "100024", "20 ans pour une moto d'une puissance de maximal 35kW et d'un rapport puissance/poids maximal de 0,2kW/kg", "18 ans", "20 ans", "21 ans")

  let questionMT2 = Question("Moto", "exam 1", "fr", "Ce signal routier limite ma vitesse durant 200 mètres", "B","366010", 
  "La limitation commence dans 200 m",
   "Oui", "Non")

  let questionMT3 = new Question("Moto", "exam 1", "fr", "Accident avec blessé. Je pense d'abord a", "A", "666103", "Votre sécurité avant tout", "Ma sécurié", "La sécurité des blessés", "La sécurité de la circulation")

  
  let questionMT4 = new Question("Moto", "exam 2", "fr", "Je circule plus vite que le vehicule sur la bande centrale. Je peux le remonter par la droite", "B", "666104", "Le trafic est fluide. Remonter par la droite revient a depasser", "Oui", "Non")

  let questionMT5 = new Question("Moto", "exam 2", "fr", "Je peux emrpunter cette voie publique", "B", "666105", "C'est une zone piétonne", "Oui", "Non")

  let questionMT6 = new Question("Moto", "exam 2", "fr", "Le passager d'un side car", "C", "222001", "Casque,bottes, gants, pantalon et vest a manche longue", "Doit porter un casque", "Doit porter des gants", "Doit porter un caque est des gants")


  let questionMT7 = new Question("Moto", "exam 3", "fr", "Quel est le role de l'huile moteur", "C", "120013", "L'huile élimine également les particule métaliques", "Lubrifier le moteur", "Nettoyer le moteur", "Les deux")

  let questionMT8 = new Question("Moto", "exam 3", "fr", "Je peux depasser le cycliste", "C", "366002", "Dans une rue cyclable, le depassement des cyclistes est interdit", "A", "B", "C")

  let questionMT9 = new Question("Moto", "exam 3", "fr", "Pour appeler les secours dans un tunnel, il est préferable d'utiliser", "B", "322009", "Pour kes problémes de reseau et pour etre exactement localisé par la chambre de controle", "Un GSM", "Une borne d'appel d'urgance")

  let questionMT10 = new Question("Moto", "exam 3", "fr", "Je désire tourner a gauche dans ce carrefour. Le conducteur venanten sens inverse tourne égelement a gauche", "B", "917025", "Toujour croiser par la droite,afin d'effectuer le virage largement, et de ne pas avoir la vue masquée", "Je dois le croiser par la gauche", "Je dois le croiser par la droite", "Je peux choisir, par la droite ou par la gauche")




  let questionMTNL1 = new Question("Moto", "exam 1", "nl", "Om te mogen rijden met een motorfiets met een vermogen van 21kW moet men de leeftijd bereikt hebben van", "B", "100024", "18 jaar voor een motorfiets met een vermogen van minder dan of gelijk aan 35kW of een vermogen/gewicht verhouding van minder dan of gelijk aan 0,16kW/kg", "18 jaar", "20 jaar", "21 jaar")

  let questionMTNL2 = new Question("Moto", "exam 1", "nl", "Door dit teken is er snelheidbeperking gedurende 200m", "B", "366010", "binnen 200m", "Ja", "Neen")

  let questionMTNL3 = new Question("Moto", "exam 1", "nl", "Ongeval met gewonden. Eerste bezorgheid voor", "A", "666103", "Uw veiligheid ip de eerste plaats", "Mijn veiligheid", "De veiligheid van de gewonde", "De veiligheid van het verkeer")


  let questionMTNL4 = new Question("Moto", "exam 2", "nl", "Ik rijd sneller dan het voertijg in de middelste rijstrook. Ik mag rechts voorbij rijden", "B", "666104", "Het verkeer gaat vlot. Rechts voorbij rijden zou neerkomen op een inhaalbewegin", "Ja", "Neen")

  let questionMTNL5 = new Question("Moto", "exam 2", "nl", "Ik mag deze openbare weg oprijden", "B", "666105", "Dit es een voetgangerzone", "Ja", "Neen")

  let questionMTNL6 = new Question("Moto", "exam 2", "nl", "De passagier van een side-car", "C", "222001", "Helm, bottines, handschoenen, lange broek en een jas met lange moewen zijn verplicht", "Moet een helm dragen", "Moet handschoenen dragen", "Moet een helm en handschoenen dragen")


  let questionMTNL7 = new Question("Moto", "exam 3", "nl", "Waarvoor dient motorolie", "C", "120013", "De olie dient ook voor het eliminiren van zeer kleine metalen deeltjes", "Als smering van de motor", "Als reining van de motor", "Voor beide")

  let questionMTNL8 = new Question("Moto", "exam 3", "nl", "Ik mag de fietser inhalen", "C", "366002", "In een fietsstraat is het verboden fietrsers in te halen", "Ja", "Ja, maar aan maximaal 30 km/u", "Neen")

  let questionMTNL9 = new Question("Moto", "exam 3", "nl", "Om in een tunnel hulp te vragen, is het verkiest dit te doen", "B", "322009", "Omwille van eventuele netwerk problemen en voor precieze lokalisatie", "Via GSM", "Via een praatpaalmet noodtelefoon")

  let questionMTNL10 = new Question("Moto", "exam 3", "nl", "Op dit kruispunt wil ik naar links afslaan. De tegenligger wil eveneens naar links afslaan", "B", "917025", "Het kruisen geschiedt steeds rechts, dit om de beweging zo ruim mogelijk uit voeren en het zicht niet te belemmeren", "Ik moet hem links kruisen", "Ik moet hem rechts kruisen", "Ik heb de keuze: rechts of links")



module.exports = {

    start: [question1,question2,question3,question4,question5,question6,question7,question8,question9,question10,
      questionNL1,questionNL2,questionNL3,questionNL4,questionNL5,questionNL6,questionNL7,questionNL8,questionNL9,questionNL10,
      questionMT1,questionMT2,questionMT3,questionMT4,questionMT5,questionMT6,questionMT7,questionMT8,questionMT9,questionMT10,
      questionMTNL1,questionMTNL2,questionMTNL3,questionMTNL4,questionMTNL5,questionMTNL6,questionMTNL7,questionMTNL8,questionMTNL9,questionMTNL10],
    
  };




