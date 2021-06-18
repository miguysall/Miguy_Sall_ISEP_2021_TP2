"use strict";
exports.__esModule = true;
exports.formation = exports.Stagiaire = void 0;
var Stagiaire = /** @class */ (function () {
    //1 -constructeur
    function Stagiaire(nom, notes) {
        this.nom = nom;
        this.notes = notes;
    }
    // 2 - les getters et setters
    Stagiaire.prototype.getNom = function () {
        return this.nom;
    };
    Stagiaire.prototype.getNotes = function () {
        return this.notes;
    };
    Stagiaire.prototype.setNom = function (name) {
        this.nom = name;
    };
    Stagiaire.prototype.setNotes = function (note) {
        this.notes = note;
    };
    // 3- calculerMoyenne des notes d'un stagiaire
    Stagiaire.prototype.calculerMoyenne = function () {
        var b = this.notes.length;
        var c = 0, i;
        for (var i_1 = 0; i_1 < b; i_1++) {
            c += Number(this.notes[1]);
        }
        return c / b;
    };
    // 4 - methode trouverMax et trouverMin
    //Valeur maximale
    Stagiaire.prototype.trouverMax = function () {
        return Math.max.apply(null, this.notes);
    };
    //Valeur minimale
    Stagiaire.prototype.trouverMin = function () {
        return Math.min.apply(null, this.notes);
    };
    return Stagiaire;
}());
exports.Stagiaire = Stagiaire;
//  Classe formation
var formation = /** @class */ (function () {
    function formation(intitule, nbrJours, stagiaires) {
        this.intitule = intitule;
        this.nbrJours = nbrJours;
        this.stagiaires = stagiaires;
    }
    // 6-methode calculerMoyenneFormation() return la moyenne d'un objet de type formation (la moy des moys des stagiaires)
    formation.prototype.calculerMoyenneFormation = function () {
        // let moy = this.stagiaires.reduce((totalMoy , valeusMoy) => totalMoy + valeusMoy/this.stagiaires.length)
        var moyf = [];
        this.stagiaires
            .forEach(function (val) {
            for (var i = 0; 1 < val.getNotes.length; i++) {
                moyf.push(val.getNotes[i]);
            }
        });
        var moyy;
        moyf
            .reduce(function (tot, vals) { return moyy = tot + vals; });
        var lot = moyy / moyf.length;
        return lot;
    };
    formation.prototype.getIndex = function () {
    };
    // 8-
    formation.prototype.afficherNomMax = function () {
    };
    // 9-
    formation.prototype.afficherMinMax = function () {
    };
    // 10-
    formation.prototype.trouverMoyenneParNom = function (nom) {
    };
    return formation;
}());
exports.formation = formation;
