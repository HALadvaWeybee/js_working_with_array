"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

// 008-lec creating DOM elements
const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  // .textContent = 0
  
  movements.forEach((mov, i) => {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>
      `;
      containerMovements.insertAdjacentHTML('afterbegin',html);
        
  }); 
};

// 014-lec work
const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce((acc, curr) =>  acc + curr, 0);
  labelBalance.innerHTML = `${account.balance}€`;
}

// 016-lec work
const calcDisplaySummary = function(account) {
    const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.innerHTML = `${incomes}€`;

    const outgones = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.innerHTML= `${Math.abs(outgones)}€`;

    // calculate the interest on deposits
    const interest =  account.movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * (account.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;  
    })
    .reduce((acc, curr) => acc + curr, 0);
    labelSumInterest.innerHTML = `${interest}€`;  
}

// 012-lec Computing Usernames
const createUsernames = function (accs) {
    
   accs.forEach(account => {
       account.userName = account.owner.toLowerCase().split(' ').map(name => name[0]).join('');  
   });
}
createUsernames(accounts);
// console.log(accounts);

// 019-lec Implementing Login
let currentAccount;
// Event handler
btnLogin.addEventListener('click', function(e) {
  e.preventDefault();
  
  currentAccount = accounts.find(acc => acc.userName === inputLoginUsername.value);
  console.log(currentAccount);

  if(currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display ui and welcome message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    // clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();
  
    // Display movements
    displayMovements(currentAccount.movements);
    // Display balance
    calcDisplayBalance(currentAccount);
    // Display summary
    calcDisplaySummary(currentAccount);
  }
});

// 020-lec Implementing transfer
btnTransfer.addEventListener('click', function(e) {
     e.preventDefault();
     const amount = inputTransferAmount.value;
     const receiverAcc = accounts.find(acc => acc.userName === inputTransferTo.value);
     
    //  console.log(amount, receiverAcc);

     if(amount > 0 && amount <= currentAccount.balance 
        && receiverAcc?.userName !== currentAccount.userName 
      ) {
         console.log('Transfer valid'); 
     }
})

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// 003-lec Simple Array Methods
/* let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// SPLICE
console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);
console.log(arr);

// // JOIN
console.log(letters.join(' '));
console.log(letters); */

///////////////////////////////////////
// 004-lec The new at Method
/* const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('jonas'.at(0));
console.log('jonas'.at(-1)) */

///////////////////////////////////////
// 005-lec Looping Arrays: forEach
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
/* for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('---- FOREACH ----');
movements.forEach(function (mov, i) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
}); 
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...*/

///////////////////////////////////////
// 006-lec forEach With Maps and Sets
/* // Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value) {
  console.log(`${value}: ${value}`);
}); */

// 011-lec The map method
/* const eurToUsd = 1.1;

// simple function
// const movementsUSD = movements.map(function(mov) {
//   return mov * eurToUsd;
// });

// arrow function
const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

const movementsDescription = movements.map((mov,i) => 
  `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'}`
);

console.log(movementsDescription); */

// 013-lec filter method
/* 
// const deposits = movements.filter(function (mov) {
//   return mov < 0;
// });

const deposits = movements.filter(mov => mov > 0);
console.log(movements);
console.log(deposits);

const withdrews = movements.filter(mov => mov < 0);
console.log(withdrews); */

// 014-lec reduce method
/* const balance = movements.reduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);
console.log(balance);

let sum = 0;
for (const item of movements) {
   sum += item;
}
console.log(sum);

// return maximum value of movements
const max_value = movements.reduce((acc, curr) => 
  acc < curr ? acc = curr:curr = acc, movements[0]
);
console.log(max_value);  */

// 016-lec The magic of chaining methods
/* const eurToUsd = 1.1;

// PIPELINE 
const totalDepositsUSD = movements
.filter(mov => mov > 0)
.map((mov) => mov * eurToUsd)
.reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);  */

// 018-lec find method
/* const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === "Jessica Davis");
console.log(account); */