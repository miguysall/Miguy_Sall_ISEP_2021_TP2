var Adresse = /** @class */ (function () {
    function Adresse(rue, ville, codePostal) {
        this.rue = rue;
        this.ville = ville;
        this.codePostal = codePostal;
    }
    Adresse.prototype.getRue = function () {
        return this.rue;
    };
    Adresse.prototype.getVille = function () {
        return this.ville;
    };
    Adresse.prototype.getCodePostal = function () {
        return this.codePostal;
    };
    Adresse.prototype.setRue = function (val) {
        this.rue = val;
    };
    Adresse.prototype.setVille = function (val) {
        this.ville = val;
    };
    Adresse.prototype.setCodePostal = function (val) {
        this.codePostal = val;
    };
    return Adresse;
}());
