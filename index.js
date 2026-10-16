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
const precioelevado = inventory
  .filter((item) => item.price > 300)
  .map((item) => item.name);

    console.log(precioelevado);
//7.
let numeros= [39, 2, 4, 25, 62,]

