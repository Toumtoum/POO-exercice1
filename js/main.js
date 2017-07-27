var date = new Date ();

var user = {
  nom: "Martin",
  prenom: "Patrick",
  age: 32,
  country: "usa",
  payement: ['LIQUIDE','CB'],

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

var userConditions = {
  countries: ['FRANCE','BELGIQUE','ITALIE','ALLEMANGE','ESPAGNE','SUISSE','PORTUGAL','SUEDE'],
  payement: ['CB','VISA','MASTERCARD','BITCOINS','PAYPAL'],
  minimunAge : 18,

  // verifiedAge : function (userX){
  //   if (userX.age < this.minimumAge){
  //     alert ("vous êtes mineur");
  //
  //   }  else {
  //       alert("MAJEUR OK");
  //   }
  // },
  //
  // verifiedCountries : function (userX){
  //   var result = 0
  //   for (let i = 0; i < this.countries.length; i++){
  //     if (userX.country == this.countries[i]){
  //       result++
  //       break;
  //     }
  //   }
  //   if(result) {
  //     alert("PAYS OK");
  //   } else {
  //     alert ("Pas dans le bon pays");
  //   }
  //
  // },
  //
  // verifiedPayement : function (userX){
      // var result = 0;
      // for (let j = 0; j < this.payement.length; j++){
      //   for (let i = 0; i < userX.payement.length; i++){
      //     if (userX.payement[i] == this.payement[j]){
      //       result++
      //       break;
      //     }
      //   }
      // }
      //   if(result) {
      //     alert ("MOYEN DE PAIEMENT OK");
      //   } else {
      //     alert ("Pas de moyen de paiement valide");
      //   }
  // }
  verification : function (userX){
    if (userX.age < this.minimumAge){
        alert ("vous êtes mineur");

      }  else {
          alert("MAJEUR OK");
      }
    var result = 0
      for (let i = 0; i < this.countries.length; i++){
        if (userX.country == this.countries[i]){
          result++
          break;
        }
      }
      if(result) {
        alert("PAYS OK");
      } else {
        alert ("Pas dans le bon pays");
      }
    var result1 = 0;
    for (let j = 0; j < this.payement.length; j++){
      for (let i = 0; i < userX.payement.length; i++){
        if (userX.payement[i] == this.payement[j]){
          result1++
          break;
        }
      }
    }
      if(result) {
        alert ("MOYEN DE PAIEMENT OK");
      } else {
        alert ("Pas de moyen de paiement valide");
      }
  }
};

// -------------------------------------SCRIPT-----------------------------------------

user.getSurname();
user.getName();
user.getAge();
userConditions.verification(user);
// userConditions.verifiedAge(user);
// userConditions.verifiedCountries(user);
// userConditions.verifiedPayement(user);
