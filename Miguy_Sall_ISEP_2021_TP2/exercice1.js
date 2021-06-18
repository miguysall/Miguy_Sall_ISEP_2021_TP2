"use strict";
exports.__esModule = true;
exports.TroisPoints = exports.Point = void 0;
//classe Point
var Point = /** @class */ (function () {
    //constructeur
    function Point(_abs, _ord) {
        var _this = this;
        this._abs = _abs;
        this._ord = _ord;
        // 4- CalculerMilieu(p:Point) milieu du segment
        this.calculerMilieu = function (p) {
            var Xm = (_this.getAbs() + p.getAbs()) / 2;
            var Ym = (_this.getOrd() + p.getOrd()) / 2;
            //creation d'objet
            var milieu = new Point(Xm, Ym);
            return milieu;
        };
        this.abs = _abs;
        this.ord = _ord;
    }
    // getter
    Point.prototype.getAbs = function () {
        return this.abs;
    };
    Point.prototype.getOrd = function () {
        return this.ord;
    };
    // setter
    Point.prototype.setAbs = function (valeur) {
        this.abs = valeur;
    };
    Point.prototype.setOrd = function (valeur) {
        this.ord = valeur;
    };
    // 3-methode calcule distance
    // A(x1,y1) et B(x2,y2) d= racine de (x1-x2)2 + (y1-y2)2
    // Math.sqrt(a) pour racine de a 
    // et Math.pow(x,y) pour x puissance y
    Point.prototype.calculerDistance = function (p) {
        var dx = this.getAbs() - p.getAbs(); // x1 - x2
        var dy = this.getOrd() - p.getOrd(); // y1- y2
        var dx2 = Math.pow(dx, 2); // (x1 - x2)2
        var dy2 = Math.pow(dy, 2); // (y1- y2)2
        var resultat = Math.sqrt(dx2 + dy2);
        return resultat;
    };
    return Point;
}());
exports.Point = Point;
// 4- deuxieme classe 
var TroisPoints = /** @class */ (function () {
    // constructeur
    function TroisPoints(first, second, third) {
        this.premier = first;
        this.deuxieme = second;
        this.troisieme = third;
    }
    // 5 les getters 
    TroisPoints.prototype.getPremier = function () {
        return this.premier;
    };
    TroisPoints.prototype.getDeuxieme = function () {
        return this.deuxieme;
    };
    TroisPoints.prototype.getTroisieme = function () {
        return this.troisieme;
    };
    // setters
    TroisPoints.prototype.setPremier = function (nbr) {
        this.premier = nbr;
    };
    TroisPoints.prototype.setDeuxieme = function (nbr) {
        this.deuxieme = nbr;
    };
    TroisPoints.prototype.setTroisieme = function (nbr) {
        this.troisieme = nbr;
    };
    // 6-TesterAlignement() return true si 1er , 2eme , 3eme sont alignes , false sinon
    TroisPoints.prototype.TesterAlignement = function () {
        var AB = this.premier.calculerDistance(this.deuxieme);
        var AC = this.premier.calculerDistance(this.troisieme);
        var BC = this.deuxieme.calculerDistance(this.troisieme);
        return AB = AC + BC;
    };
    // 7- METHODE estIsocele() return true si 1er , 2eme , 3eme forment un triangle isocele , false sinon
    TroisPoints.prototype.estIsocele = function () {
        var AB = this.premier.calculerDistance(this.deuxieme);
        var AC = this.premier.calculerDistance(this.troisieme);
        var BC = this.deuxieme.calculerDistance(this.troisieme);
        return (AB == AC) || (AB == BC) || (BC == AC);
    };
    return TroisPoints;
}());
exports.TroisPoints = TroisPoints;
