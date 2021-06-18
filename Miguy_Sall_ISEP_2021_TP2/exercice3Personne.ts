class Personne{
    private nom:String;
    private sexe:String = "F" || "M";
    private adresses: String ;

    public constructor(nom:String, sexe:String, adresses: String){
        this.nom = nom;
        this.sexe = sexe;
        this.adresses = adresses;
    }

    public getNom(){
        return this.nom;
    }
    public getSexe(){
        return this.sexe;
    }
    public getAdresses(){
        return this.adresses;
    }

    public setNom(val: String){
        this.nom = val;
    }
    public setSexe(val: String){
        this.sexe = val;
    }
    public setAdresses(val: String){
        this.adresses = val;
    }
}

class ListePersonnes{
    private personnes: Personne[];

    public constructor(personnes: Personne[]){
        this.personnes = personnes;
    }

    public getPersonnes(){
        return this.personnes;
    }
    public setPersonnes(pers: Personne[]){
        this.personnes = pers;
    }

    //les methodes
    // 3- 
    public findByNom(s:string){

    }

    // 4- 
    public findByCodePostal(cp:string){
        
    }

    // 5- 
    public countPersonneVille(ville:string){
        
    }

    // 6- 
    public editPersonneNom(oldNom:string,newNom:string){
        
    }

    // 7- 
    public editPersonneVille(nom:string,newVille:string){
        
    }
}