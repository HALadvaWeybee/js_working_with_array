// coding challenge 1
const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

function checkDogs(arr1, arr2) {
    const julia = arr1.slice(1, -2);
    const bothArr = julia.concat(arr2);
    // console.log(bothArr);

    bothArr.forEach((data, i,array) => {
        if(data >= 3) {
           console.log(`Dog number ${i + 1} is an adult, and is ${data} years old`);
        } else {
          console.log(`Dog number ${i + 1} is still a puppy, and is ${data} years old`);
        }
    })
} 

checkDogs(dogsJulia, dogsKate);