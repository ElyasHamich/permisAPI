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

console.log(question1);
console.log(question2);
console.log(question3);
console.log(question4);

module.exports = {

    questions: [question1,question2,question3,question4],
    
  
  };