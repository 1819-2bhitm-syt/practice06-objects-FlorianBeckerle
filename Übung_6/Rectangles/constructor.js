function rectangle(length, width){
    this.length = length;
    this.width = width;

    this.getArea = function(){
        return this.length * this.width;
    };
}

let rect1 =  new rectangle(8, 3);
console.log(`1. Rechteck:
Länge = ${rect1.length}, Breite = ${rect1.width}, Fläche = ${rect1.getArea()}
`);

let rect2 =  new rectangle(60, 10);
console.log(`2. Rechteck:
Länge = ${rect2.length}, Breite = ${rect2.width}, Fläche = ${rect2.getArea()}
`);


let rect3 =  new rectangle(9, 5);
console.log(`3. Rechteck:
Länge = ${rect3.length}, Breite = ${rect3.width}, Fläche = ${rect3.getArea()}
`);