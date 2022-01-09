class Question {
    constructor(type, exam, taal, question, answer, image , audio, comment, ...q) {
      this.type = type;  
      this.exam = exam;  
      this.taal = taal;  
      this.question = question;
      this.answer = answer;
      this.image = image;
      this.audio = audio;
      this.comment = comment;
      this.q = q;
      
    }
}





let question1 = new Question("Auto","exam 1", "fr", "Pour freiner, je pousse normalement", "A","511142","1144.mp3",
 "Le frein pour freiner", "D’abord sur la pédale de frein", "D’abord sur la pédale d’embrayage", "En même temps sur les pédales de frein et d’embrayage");

let question2 = new Question("Auto", "exam 1","fr", "Ce signal routier signifie interdiction d'utiliser le cruise control ou régulateur de vitesse de croisière","B", "366006", "3804.mp3",
"Définition du signal : fin d'interdiction", "Oui", "Non");

let question3 = new Question("Auto", "exam 1","fr", "L'Utilisation de l'airconditionné augmente la consommation de carburant","A", "366007","3805.mp3",
 "Tout ce qui consomme de l'électricité augmante la consommation de carburant", "oui", "non" );

let question4 = new Question("Auto", "exam 1","fr", "Enfant de 10 ans mesurant 1,45m. Comment faut-il le transporter ?", "C","366011", "3806.mp3",
 "A partir de 1,35m, un système de retenue n'est plus obligatoire.", "A", "B", "A et B" );

 let question5 = new Question("Auto", "exam 1","fr", "La circulation est fortement ralentie. une bande de circulation prend fin. Le principe de la tirette doit s'appliquer ", "A","366008", "3807.mp3",
 "Afin de profiter des deux bandes le plus longtemps possible", "Juste devant le rétrécissement", "Le plus tôt possible" );



 let question6 = new Question("Auto", "exam 2","fr", "Incendie dans un tunnel", "A","366009", "3808.mp3",
 "Laissez la clef sur le contact pour les services de secours et dirigez-vous vers l'issue de secours du côté opposé à l'incendie", "Je me dirige vers l'issue de secours", "Je ferme la voiture à clef et me dirige vers l'issue de secours", "J'attends les secours dans le véhicule en fermant les fenêtres" );

 let question7 = new Question("Auto", "exam 2","fr", "Ce signal routier limite ma vitesse durant 200 mètres", "B","366010", "3809.mp3",
 "La limitation commence dans 200 m",
  "Oui", "Non");

 let question8 = new Question("Auto", "exam 2","fr", "Dans quel sens faut-il serrer les boulons d'une roue", "A","666101", "3102.mp3",
 "Dans le sens des aiguilles d'une montre",
  "A", "B");

 let question9 = new Question("Auto", "exam 2","fr", "Moteur Diesel. A quel régime moteur convient-il de changer de rapport", "B","450042", "3105.mp3",
 "2000 tours/minute avec un moteur Diesel, 2500 tours/minute avec un moteur essence",
  "1000", "2000", "3500" );

 let question10 = new Question("Auto", "exam 2","fr", "L'ESP est un système", "B","917000", "3106.mp3",
 "ESP système antidérapant destiné à améliorer le contrôle de trajectoire. ABS système qui évite le blocage des roues au freinage",
  "Qui évite le blocage des roues au freinage", "D'antidérapage" );




 let question11 = new Question("Auto", "exam 3","fr", "J'achète une nouvelle voiture. Sa consommation est de 6 litres pour 100 km. Cette consommation est", "B","511065", "3107.mp3",
 "Moyenne",
  "Ecologique", "Moyenne", "Pas écologique" );

 let question12 = new Question("Auto", "exam 3","fr", "Accident avec blessé. Je pense d'abord à", "A","666103", "3109.mp3",
 "Votre sécurité avant tout",
  "Ma sécurité", "La sécurité des blessés", "La sécurité de la circulation" );

 let question13 = new Question("Auto", "exam 3","fr", "Forte pluie. Je peux utiliser les feux de brouillard avant lorsque je suis un véhicule à moins de 50 mètres", "A","100035", "3110.mp3",
 "Seuls les feux de route sont interdits lorsque vous suivez un autre véhicule à moins de 50 mètres",
  "Oui", "Non" );

 let question14 = new Question("Auto", "exam 3","fr", "Je circule plus vite que le véhicule sur la bande centrale. Je peux le remonter par la droite", "B","666104", "3111.mp3",
 "Le trafic est fluide. Remonter ce véhicule par la droite revient à dépasser",
  "Oui", "Non");

 let question15 = new Question("Auto", "exam 3","fr", "Je peux emprunter cette voie publique", "C","666105", "3112.mp3",
 "C'est une zone piétonne",
  "Oui", "Oui, pour y faire une livraison", "Non" );



 let question16 = new Question("Auto", "exam 4","fr", "Suite à un accident de roulage, puis-je encore apporter des modifications à la face avant du constat une fois rentré à la maison", "B","643002", "3201.mp3",
 "Vous pouvez cependant ajouter une explication en annexe ou sur la face arrière.",
  "Oui", "Non");
 
 let question17 = new Question("Auto", "exam 4","fr", "L'utilisation d'un kit main libre en conduisant est", "B","222002", "3203.mp3",
 "Car vous serez moins attentif à la circulation.",
  "Autorisé", "Autorisé mais dangereux", "Interdit");

 let question18 = new Question("Auto", "exam 4","fr", "Quel est le rôle de l'huile moteur", "C","120013", "3204.mp3",
 "L'huile élimine également les particules métalliques",
  "Lubrifier le moteur", "Nettoyer le moteur", "Les deux" );

 let question19 = new Question("Auto", "exam 4","fr", "Je peux dépasser le cycliste", "C","366002", "8302.mp3",
 "Dans une rue cyclable, le dépassement des cyclistes est interdit",
  "Oui", "Oui, mais à 30 Km/h maximum", "Non" );

 let question20 = new Question("Auto", "exam 4","fr", "Je désire tourner à gauche dans ce carrefour. Le conducteur venant en sens inverse tourne également à gauche.", "B","917025", "1025.mp3",
 "Toujours croiser par la droite, afin d'effectuer le virage largement, et de ne pas avoir la vue masquée.",
  "Je dois le croiser par la gauche", "Je dois le croiser par la droite", "Je peux choisir, par la droite ou par la gauche" );



 let question21 = new Question("Auto", "exam 5","fr", "Pour appeler les secours dans un tunnel, il est préférable d'utiliser", "B","322009", "3403.mp3",
 "Pour les problèmes de réseau et pour être exactement localisé par la chambre de contrôle.",
  "Un GSM", "Une borne d'appel d'urgence" );

 let question22 = new Question("Auto", "exam 5","fr", "Le tram redémarre. En l'absence de conducteurs venant en sens inverse, puis-je le dépasser par la gauche ?", "A","917022", "1022.mp3",
 "Le dépassement par la gauche est autorisé puisqu'il y a un obstacle fixe à droite (des véhicules en stationnement)",
  "Oui", "Non");

 let question23 = new Question("Auto", "exam 5","fr", "Sur cette chaussée à sens unique, je peux rouler au milieu", "C","917017", "1017.mp3",
 "Pour que le choix de la bande soit possible, il faut que la chaussée soit divisée en bandes, pour que le choix de la file soit possible, il faut qu'il y ait densité. Ce  n'est pas le cas, vous devez donc rester à droite, même si personne ne vous suit.",
  "Oui", "Oui, si personne ne veut me dépasser ", "Non" );

 let question24 = new Question("Auto", "exam 5","fr", "Le véhicule débouchant à ma droite vire à droite. J'ai la priorité.", "B","917020", "1020.mp3",
 "Sans signal ni feux ni agent, le principe de la priorité de droite est d'application. Peu importe la direction que prendra la voiture dans le carrefour, le changement de direction n'influence pas les règles de priorité.",
  "Oui", "Non");

 let question25 = new Question("Auto", "exam 5","fr", "En plus d'interdire l'accès aux voitures, ce panneau interdit aussi l'accès aux conducteurs de", "C","917012", "1012.mp3",
 "Définition du signal: Accès interdit aux conducteurs de véhicules à moteur à plus de deux roues, et de motocyclettes avec side-car. Retenez: interdit aux 'véhicules larges à moteur'.",
  "Tous les véhicules à moteur", "Motocyclettes et cyclomoteurs", "Camions et autocars" );



module.exports = {

    start: [question1,question2,question3,question4,question5,question6,question7,question8,question9,question10],
    exam3:[question11,question12,question13,question14,question15],
    exam4:[question16,question17,question18,question19,question20],
    exam5:[question21,question22,question23,question24,question25]

    
  
  };




