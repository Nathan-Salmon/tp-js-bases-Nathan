const nom = "Salmon Nathan";
let âge = 19;
console.log(âge);
//nom = "salmon"
console.log(nom);

const age = 19

console.log(age)
if (age < 13) {
     console.log("Accès interdit aux moins de 13 ans");
} else if (age < 18) {
    console.log("Vous pouvez accéder à la section ado");
} else {
    console.log("Bienvenue dans l'espace adulte");
}
        
for (let i = 1; i <= 10; i++) {
    console.log("7x" + i + "=" +7*i)
}
const saluer = (prenom) => {
    return "bonjour," + prenom +" ! comment va tu ?";
};
saluer("nathan");
console.log(saluer("nathan"));
