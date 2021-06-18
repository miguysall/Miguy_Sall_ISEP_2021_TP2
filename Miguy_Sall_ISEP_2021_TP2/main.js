"use strict";
exports.__esModule = true;
var exercice1_1 = require("./exercice1");
var exercice2_1 = require(".//exercice2");
function main() {
    var pointA = new exercice1_1.Point(5, 5);
    var pointB = new exercice1_1.Point(10, 10);
    var pointC = new exercice1_1.Point(5, 10);
    var troisPoints = new exercice1_1.TroisPoints(pointA, pointB, pointC);
    console.log("Distance AB:", pointA.calculerDistance(pointB));
    console.log("Milieu AB:", pointA.calculerMilieu(pointB));
    console.log("Alignement:", troisPoints.TesterAlignement());
    console.log("Isocele:", troisPoints.estIsocele());
}
main();
function main1() {
    var tabNote = new exercice2_1.Stagiaire("Fatou", [12, 14, 18, 16]);
    console.log("Moyenne des notes de Stagiaire", tabNote.calculerMoyenne());
    console.log("maximal", tabNote.trouverMax());
    console.log("minimal", tabNote.trouverMin());
    var tabFormation = new exercice2_1.formation("TS-DFE", 10000, [tabNote]);
}
main1();
