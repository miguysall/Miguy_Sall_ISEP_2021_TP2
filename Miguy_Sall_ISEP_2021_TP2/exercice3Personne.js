var Personne = /** @class */ (function () {
    function Personne(nom, sexe, adresses) {
        this.sexe = "F" || "M";
        this.nom = nom;
        this.sexe = sexe;
        this.adresses = adresses;
    }
    Personne.prototype.getNom = function () {
        return this.nom;
    };
    Personne.prototype.getSexe = function () {
        return this.sexe;
    };
    Personne.prototype.getAdresses = function () {
        return this.adresses;
    };
    Personne.prototype.setNom = function (val) {
        this.nom = val;
    };
    Personne.prototype.setSexe = function (val) {
        this.sexe = val;
    };
    Personne.prototype.setAdresses = function (val) {
        this.adresses = val;
    };
    return Personne;
}());
var ListePersonnes = /** @class */ (function () {
    function ListePersonnes(personnes) {
        this.personnes = personnes;
    }
    ListePersonnes.prototype.getPersonnes = function () {
        return this.personnes;
    };
    ListePersonnes.prototype.setPersonnes = function (pers) {
        this.personnes = pers;
    };
    //les methodes
    // 3- 
    ListePersonnes.prototype.findByNom = function (s) {
    };
    // 4- 
    ListePersonnes.prototype.findByCodePostal = function (cp) {
    };
    // 5- 
    ListePersonnes.prototype.countPersonneVille = function (ville) {
    };
    // 6- 
    ListePersonnes.prototype.editPersonneNom = function (oldNom, newNom) {
    };
    // 7- 
    ListePersonnes.prototype.editPersonneVille = function (nom, newVille) {
    };
    return ListePersonnes;
}());
