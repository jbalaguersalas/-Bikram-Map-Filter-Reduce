//RESUELVE LOS EJERCICIOS AQUI
const numbers = [4, 5, 6, 7, 8, 9, 10];


function elevados () {
    return numbers.map(num => num ** num);
}
//2.
const foodList = [`Pizza`,`Ramen`,`Paella`,`Entrecot`];
const result2 =foodList.map((food) => {
    if (food === `Pizza`) { return `Como soy de Italia, amo comer Pizza`; }
    else if (food === `Ramen`) { return `Como soy de Japón, amo comer Ramen`; }
    else if (food === `Paella`) { return `Como soy de Valencia, amo comer Paella`; }
    else if (food === `Entrecot`) { return `Aunque no como carne, el Entrecot es sabroso`; }
});
  console.log(result2);
//3.
const staff = [
  {
    name: 'Pepe',
    role: 'The Boss',
    hobbies: ['leer', 'ver pelis']
  },
  {
    name: 'Ana',
    role: 'becaria',
    hobbies: ['nadar', 'bailar']
  },
  {
    name: 'Luis',
    role: 'programador',
    hobbies: ['dormir', 'comprar']
  },
  {
    name: 'Carlos',
    role: 'secretario',
    hobbies: ['futbol', 'queso']
  }
];
const result3 = staff.map((staff) => {
    if (staff.role === `The Boss`) {return `${staff.name} es ${staff.role} y le gusta ${staff.hobbies.join(' y ')}`;}
    if (staff.role ===`becaria`) {return `${staff.name} es ${staff.role} y le gusta ${staff.hobbies.join(' y ')}`;}
    if (staff.role ===`programador`) {return `${staff.name} es ${staff.role} y le gusta ${staff.hobbies.join(' y ')}`;}
    if (staff.role ===`secretario`) {return `${staff.name} es ${staff.role} y le gusta ${staff.hobbies.join(' y ')}`;}
})
//4.
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result4 = numbers2.filter((num) => num % 2 !== 0);
console.log(result4);
//5.

const foodList2 =[
{
  name: 'Tempeh',
  isVeggie: true
},
{
  name: 'Cheesbacon burguer',
  isVeggie: false
},
{
  name: 'Tofu burguer',
  isVeggie: true
},
{
  name: 'Entrecot',
  isVeggie: false
}];
const result5 = foodList2
.filter( (food) => food.isVeggie)
.map((food) => {
    if (food.name === `Tofu burguer`) {
        return  `Que rica ${food.name} me voy a comer!`;
    }
  return `Que rico ${food.name} me voy a comer!`;
});
//6.

const inventory = [
  {
    name: 'Mobile phone',
    price: 199
  },
  {
    name: 'TV Samsung',
    price: 459
  },
  {
    name: 'Viaje a Cancún',
    price: 600
  },
  {
    name: 'Mascarilla',
    price: 1
  }
];
const result6 = inventory
  .filter((item) => item.price > 300)
  .map((item) => item.name);

    console.log(result6);
//7.
let numeros3= [39, 2, 4, 25, 62,]

const result7 =numeros3.reduce((acumulado, num) => acumulado * num, 1 )
console.log(result7)

//8.
const sentenceElements = [
  'Me',
  'llamo',
  `Jose`,
  'y',
  'quiero',
  'sentir',
  'la',
  'fuerza',
  'con',
  'javascript'
];

const result8 = sentenceElements.reduce ((acumulado, palabra)=> acumulado + ` ` + palabra )
console.log(result8)
//9.
const books = [
  {
    name: ' JS for dummies',
    author: 'Emily A. Vander Veer',
    price: 20,
    category: 'code'
  },
  {
    name: 'Don Quijote de la Mancha',
    author: 'Cervantes',
    price: 14,
    category: 'novel'
  },
  {
    name: 'Juego de tronos',
    author: 'George R. Martin',
    price: 32,
    category: 'Fantasy'
  },
  {
    name: 'javascript the good parts',
    author: 'Douglas Crockford',
    price: 40,
    category: 'code'
  }
];
const result9 = books
.filter ((codigo)=>codigo.category === `code`)
.reduce ((acumulado, precio)=>acumulado + precio.price, 0 )

console.log(result9)