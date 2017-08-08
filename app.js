function Eleve(id, prenom, nom, sexe, age){
    this.id = id;
    this.prenom = prenom;
    this.nom = nom;
    this.sexe =sexe;
    this.age = age;
    this.affiche = function(){
        var mrMd = "";
        if(this.sexe==="F"){
            mrMd = "Madame ";
        }
        if(this.sexe==="M"){
            mrMd = "Monsieur ";
        }
        console.log(mrMd+this.prenom+" "+this.nom);
    }
}
//    var eleve1 = new Eleve(1, "jack", "sparrow", "M", 12);
//  eleve1.affiche();


function Classe(){
    this.curIdEleve =1;
    this.eleves = [];
    this.addEleve=function(prenom, nom, sexe, age){
        var eleve = new Eleve(this.curIdEleve, prenom, nom,sexe, age);
        this.eleves.push(eleve);
        this.curIdEleve++;
    }
    this.removeEleve=function(id){
        var count = this.eleves.length;
        for (var index = 0; index < count; index++) {
            if(this.eleves[index].id === id){
                this.eleves.splice(index,1);
                return 0;
            }
            
        }
        return -1;
    }
    this.compteEleve=function(sex){
        var count = 0;
        var total = this.eleves.length; 
        if(sex === "A"){
            return total;
        }
        for (var index = 0; index < total; index++) {
            if(this.eleves[index].sexe === sex){
                count++;
            }
        }
        return count;
    }
    this.afficheEleves = function(){
        var leng = this.compteEleve("A");
        for (var index = 0; index < leng; index++) {
            this.eleves[index].affiche();
            
        }
    }
    this.afficheStatClasse = function(){
        var count = this.compteEleve("A");
        console.log("Nombre d'éleves : "+count);
        var moy =0;
        console.log("Nombre de garçons : "+this.compteEleve("M"));
        console.log("Nombre de filles : "+this.compteEleve("F"));
       
        if(count > 0){
             for (var index = 0; index < count; index++) {
            moy+= this.eleves[index].age;
            
        }
            console.log("Age moyen: "+(moy/count));
        }
        else{
            console.log("Age moyen: 0");
        }
    }
    this.ageMax=function(){
        var age = 0;
        for (var index = 0; index < this.eleves.length; index++) {
            if(age < this.eleves[index].age){
                age =this.eleves[index].age;
            }            
        }
        return age;
    }


}
var classe1 = new Classe();
classe1.addEleve("jack","sparrow","M",12);
classe1.addEleve("jackline","sparrou","F",8);
classe1.addEleve("joe","sparrou","M",42);
classe1.addEleve("louise","sparrou","F",18);
classe1.addEleve("lily","evans","F",4);
classe1.addEleve("garry","topper","M",17);
classe1.afficheEleves();
classe1.afficheStatClasse();
console.log(classe1.ageMax());
function Peroquet(){
    this.memoire="";
    this.ecoute = function(phrase){
        this.memoire=phrase;
    }
    this.repete=function(){
        for (var index = 0; index < 3; index++) {
            console.log(this.memoire); 
        }
    }
}

// var peroquet = new Peroquet();
// peroquet.ecoute("je suis un vilain, vilain garçon");
// peroquet.repete();
