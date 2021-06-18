// 1 - la classe MaDate
var MaDate = /** @class */ (function () {
    // 2 - constructeur
    function MaDate(jour, mois, annee) {
        this.jour = jour;
        this.mois = mois;
        this.annee = annee;
    }
    MaDate.prototype.getJour = function () {
        return this.jour;
    };
    MaDate.prototype.getMois = function () {
        return this.mois;
    };
    MaDate.prototype.getAnnee = function () {
        return this.annee;
    };
    MaDate.prototype.setJour = function (jrs) {
        this.jour = jrs;
    };
    MaDate.prototype.setMois = function (ms) {
        this.mois = ms;
    };
    MaDate.prototype.setAnnee = function (an) {
        this.annee = an;
    };
    // 4-
    MaDate.prototype.ajouterUnJour = function () {
        console.log(1);
    };
    // 5-
    MaDate.prototype.ajouterPlusieursJours = function (n) {
        console.log(2, 3, 5, 6, 9);
    };
    // 6-1
    MaDate.prototype.ajouterUnMois = function () {
        console.log(12);
    };
    // 6-2
    MaDate.prototype.ajouterUnAn = function () {
        console.log(1);
    };
    return MaDate;
}());
