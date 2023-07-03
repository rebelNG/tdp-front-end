// // let Sentence = ['The','quick','brown','fox','jumped','over','the','fence']

// // console.log(Sentence.length);
// // Sentence.push('and')

// // console.log(Sentence.length);
// // console.log(Sentence);

// // [Sentence[2], Sentence[3], Sentence[9]] = [Sentence[0], Sentence[5], Sentence[8]]
// // console.log(Sentence);

// // Sentence.reverse()
// // console.log(Sentence);
// // console.log(Sentence.shift(1));
// // console.log(Sentence.unshift('If'));
// // console.log(Sentence.join(' '));

// // let sent=['I', 'will', 'WIN']
// // console.log(sent.join(' '));

// let cars = [
//     {name:'Benz', model:'C class', brand:'Mercedes',reg:'A123'},
//     {name:'Toyo', model:'Muscle', brand:'Toyota',reg:'A153'},
//     {name:'Benz', model:'GLK', brand:'Mercedes',reg:'A1053'},
//     {name:'Lexus', model:'LX350', brand:'Toyota',reg:'A1B543'}
// ]

// console.log(cars[3].brand)

// cars.forEach((car, index) => {
//     console.log(`Car ${index + 1}:`);
//     console.log('Name:', car.name);
//     console.log('Model:', car.model);
//     console.log('Brand:', car.brand);
//     console.log('Registration:', car.reg);
//     console.log('----------------------');
//   });

//   cars[1].name='Toyota'
//   console.log(cars[1]);

//   cars[3].color='Charcoal Black'
//   console.log(cars[3]);

//   cars.forEach((car, index) => {
//     console.log(`Car ${index + 1}:`, car);
//   });

// let counter = 0
// while (counter <= 1000) {
//     console.log(counter);
//     counter ++
// }

// let count = 0;

// while (count < 10) {
//   let number = 1;

//   while (number <= 10) {
//     console.log(number);
//     number++;
//   }

//   count++;
// }

// for (let counter = 0; counter <= 1000; counter++) {
//     console.log(counter);
// }

// for (let count = 0; count < 10; count++) {
//     for (let num = 1; num <= 10; num++) {
//         console.log(num);
//     }
// }

// let list = [1,2,3,4,5]

// for (let key in list) {
//     console.log(key*2);
// }

// for (let keys of list) {
//     console.log(keys*2)
// }

let age = 85
    if (age<=18) {
        console.log('Underage');
    }else if (age > 65){
        console.log('Overage');
    }else{
        console.log('happy');
    }

