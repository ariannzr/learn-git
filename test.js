let marksMass = 78;
let johnsMass = 92;
let marksHeight =  1.69 ;
let johnsheght = 1.95 ;

 let marksBmi = marksMass / marksHeight ** 2 ;

console.log ( marksBmi ) ;

 let jhonsBmi = johnsMass / johnsheght ** 2 ;

console.log (jhonsBmi);

 let marksHigherBmi = marksBmi > jhonsBmi ;
 console.log ( 'marksHeigherBmi' , marksHigherBmi );

 if (marksBmi > jhonsBmi) {
 console.log (`marks hase higher bmi and his bmi is ${marksBmi}`);
}else {

    console.log(`jhon has higher bmi than mark and his bmi is ${jhonsBmi} `);
}

