function createReactangle(length, width){
    return{
        length,
        width,
        getArea: function(){
         return this.length * this.width;
        }
    };
}

let rect1 = createReactangle(7,4);
console.log(`1. Rechteck:
Länge = ${rect1.length}, Breite = ${rect1.width}, Fläche = ${rect1.getArea()}
`);

let rect2 = createReactangle(30,5);
console.log(`2. Rechteck:
Länge = ${rect2.length}, Breite = ${rect2.width}, Fläche = ${rect2.getArea()}`);