// 1 - la classe MaDate
class MaDate{
    private jour :number;
    private mois: number;
    private annee: number;

    // 2 - constructeur
    public constructor(jour:number,mois:number,annee:number){
        this.jour = jour;
        this.mois = mois;
        this.annee = annee;
    }

    
    public  getJour() : number {
        return this.jour;
    }
    public  getMois() : number {
        return this.mois;
    }
    public  getAnnee() : number {
        return this.annee;
    }

    
    public  setJour(jrs: number) {
        this.jour = jrs;
    }
    public  setMois(ms: number) {
        this.mois = ms;
    }
    public  setAnnee(an: number) {
        this.annee = an;
    }
    // 4-
    public ajouterUnJour(){
        console.log(1);
        
    }
    // 5-
    public ajouterPlusieursJours(n:number){
        console.log(2, 3, 5, 6, 9);
        
    }
    // 6-1
    public ajouterUnMois(){
        console.log(12);
        
    }
    // 6-2
    public ajouterUnAn(){
        console.log(1);
        
    }

    
}