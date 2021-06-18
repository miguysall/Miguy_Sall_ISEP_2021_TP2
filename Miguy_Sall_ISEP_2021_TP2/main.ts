import { Point,TroisPoints } from "./exercice1";
import {Stagiaire,formation} from ".//exercice2";

function main(){
  let pointA= new Point(5,5);
    let pointB= new Point(10,10);
    let pointC =new Point(5,10);
 let troisPoints = new TroisPoints(pointA,pointB,pointC)
                  console.log("Distance AB:" ,pointA.calculerDistance(pointB));
                     console.log("Milieu AB:" ,pointA.calculerMilieu(pointB));
                         console.log("Alignement:" ,troisPoints.TesterAlignement());
                             console.log("Isocele:" ,troisPoints.estIsocele());

}
main();
function main1(){
    let tabNote = new Stagiaire("Fatou",[12,14,18,16]);
    console.log("Moyenne des notes de Stagiaire", tabNote.calculerMoyenne());
    console.log("maximal", tabNote.trouverMax());
    console.log("minimal", tabNote.trouverMin());
    
    let tabFormation =new formation("TS-DFE",10000,[tabNote]);

}
main1();