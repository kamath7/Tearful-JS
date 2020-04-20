const playerStats = [
  { name: "Rooney", goals: 25 },
  { name: "Ronaldo", goals: 30 },
  { name: "Tevez", goals: 20 },
  { name: "Raul", goals: 55 },
  { name: "Robben", goals: 10 },
  { name: "Sneijder", goals: 21 },
  { name: "Falcao", goals: 55 },
  { name: "Van Persie", goals: 50 }
];

let totalGoals = playerStats.reduce((total, person) => {
  return (total += person.goals);
}, 0);
totalGoals = playerStats.reduce((total, person) => (total += person.goals), 0);
console.log(totalGoals);

//Advanced reduce

// var fs = require("fs");

// var op = fs
//   .readFileSync("data.txt", "utf-8")
//   .trim()
//   .split("\n")
//   .map(line => line.split(" "));
// console.log(op);
// op = op.reduce((customers, line) => {
//     customers[line[0]]= []
//     customers[line[0]].push({
//         name: line[1],
//         price: line[3],
//         quantity: line[5]
//     })
//   return customers;
// }, {});
// console.log(op);

//More reduce

let someArry = [2,22,8,17,50,500,21];

function findMinMax(acc, val){
    if( val > acc){
        acc = val
    }
    return acc;
}

console.log(someArry.reduce(findMinMax))
let biggest = someArry.reduce((acc, val)=>{
    return acc > val? acc: val;
});
console.log(biggest);