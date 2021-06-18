class Stagiaire{
    private nom: String;
    private notes: Array<number>

    //1 -constructeur
    public constructor(nom:String ,notes:Array<number>){
        this.nom = nom;
        this.notes = notes;
    }
    // 2 - les getters et setters
    public getNom(){
        return this.nom;
    }
    public getNotes(){
        return this.notes
    }
    public setNom(name:String){
        this.nom = name;
    }
    public setNotes(note:Array<number>){
        this.notes = note;
    }
    // 3- calculerMoyenne des notes d'un stagiaire
    public calculerMoyenne() {
        let b =this.notes.length;
        let c= 0, i;
        for(let i=0;i<b;i++){
    c += Number(this.notes[1]);

        }
        return c/b;
    }
    // 4 - methode trouverMax et trouverMin
    //Valeur maximale
    public trouverMax(){
        return Math.max.apply(null,this.notes);
    }
    //Valeur minimale
    public trouverMin(){
        return Math.min.apply(null,this.notes);
    }
}
//  Classe formation
class formation{
    private intitule:string;
    private nbrJours: number;
     stagiaires: Stagiaire[];

    public constructor(intitule:string , nbrJours:number, stagiaires:Stagiaire[]){
        this.intitule = intitule;
        this.nbrJours = nbrJours;
        this.stagiaires = stagiaires;
    }

    // 6-methode calculerMoyenneFormation() return la moyenne d'un objet de type formation (la moy des moys des stagiaires)
    public calculerMoyenneFormation() {
               // let moy = this.stagiaires.reduce((totalMoy , valeusMoy) => totalMoy + valeusMoy/this.stagiaires.length)
let moyf= []
this.stagiaires
.forEach(val =>{
    for(let i= 0 ; 1< val.getNotes.length; i++){
        moyf.push(val.getNotes[i])
    }
})
   let moyy
   moyf 
   .reduce((tot, vals)=> moyy =tot+vals)        
    let lot =moyy/moyf.length
    return lot
}
    public getIndex(){

    }

     // 8-
     public afficherNomMax(){

    }

     // 9-
     public afficherMinMax(){

    }

     // 10-
     public trouverMoyenneParNom(nom:String){

    }
}
export {Stagiaire,formation};