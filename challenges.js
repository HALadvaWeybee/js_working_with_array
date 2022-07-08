// coding challenge 1
const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

function checkDogs(arr1, arr2) {
  const julia = arr1.slice(1, -2);
  const bothArr = julia.concat(arr2);
  // console.log(bothArr);

  bothArr.forEach((data, i, array) => {
    if (data >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${data} years old`);
    } else {
      console.log(
        `Dog number ${i + 1} is still a puppy, and is ${data} years old`
      );
    }
  });
}

checkDogs(dogsJulia, dogsKate);

// coding challenge 2

/* function calcAverageHumanAge(dogAges) { 
  const humanAge = dogAges.map(dogAge => dogAge <= 2 ? 2 * dogAge: 16 + dogAge * 4);
  const adults = humanAge.filter(age => age >= 18);
  // const avarage = adults.reduce((acc, curr) => acc + curr, 0) / adults.length;
  const avarage = adults.reduce((acc, curr,i, arr) => acc + curr / arr.length, 0);

  return avarage;
}

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2); */

// coding challenge -3
const calcAverageHumanAge = (dogAges) =>
  dogAges
    .map((dogAge) => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter((age) => age >= 18)
    .reduce((acc, curr, i, arr) => acc + curr / arr.length, 0);

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
