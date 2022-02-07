class RettangoloDue {

    constructor( tl , br){

        this.tl = tl;
        this.br = br;
        this.tr = new Point(br.x, tl.y);
        this.bl = new Point(tl.x, br.y);
    }

    get perimeter(){
        return this.tl.distanceFrom(this.tr)
             + this.tr.distanceFrom(this.br)
             + this.br.distanceFrom(this.bl)
             + this.bl.distanceFrom(this.tl); 
    }

    get area(){
        return this.br.distanceFrom(this.bl)
             * this.br.distanceFrom(this.tr); 
    }

}