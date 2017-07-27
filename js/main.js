var date = new Date ();

var user = {
  nom: "Martin",
  prenom: "Patrick",
  age: 32,
  paysDeResidence: "FRANCE",
  moyenDePaiement: ["visa","masterCard","CB"],

  getName: function (){
    alert(this.nom);
  },

  getSurname: function (){
    alert(this.prenom);
  },

  getAge: function (){
    alert (date.getFullYear() - this.age);
  }
};

// -------------------------------------SCRIPT-----------------------------------------

user.getSurname();
user.getName();
user.getAge();
