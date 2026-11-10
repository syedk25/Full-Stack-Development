const incRemove = document.querySelector('.incRemov')
const expRemove = document.querySelector('.expRemov')
const incbtn = document.querySelector('.income')
const expbtn = document.querySelector('.expense')
const lists = document.querySelector('#list')
const forms = document.querySelector('#form')
const  text = document.querySelector('.input-name')
const amt = document.querySelector('#amount')
const balances = document.querySelector('#balance')
const pluss = document.querySelector('.plus')
const minuses = document.querySelector('.minus')



const incs = (e) => {
    incRemove.classList.remove('hidden');
    expRemove.classList.add('hidden');
  };
  
  const expe = (e) => {
    expRemove.classList.remove('hidden');
    incRemove.classList.add('hidden');
  };

incbtn.addEventListener('click',incs)
expbtn.addEventListener('click',expe)


// const data = [
//   { text:'course', amount:-15},
//   { text:'clint', amount:60},
//   { text:'travel', amount:-8}
// ];

const localData = JSON.parse(localStorage.getItem('transactions'));
let transactions = localData !== null ? localData : [];





function addAmount(e){
e.preventDefault();
if(text.value.trim() === '' || amount.value === ''){
  alert('Fill the transaction name & amount')
}
else{
  const transaction = {
    id: generateID(),
    text:text.value,
    amount:+amount.value
  }
  transactions.push(transaction)
  add(transaction)
  updateValues()
  updateData()
  text.value = '';
  amount.value = '';
}

}
function generateID() {
  return Math.floor(Math.random() * 100000000);
}



function add(transaction){
  let sign;
   if (transaction.amount < 0) {
    sign = '-';
  } else {
    sign = '+';
  }

  const item = document.createElement('li');

  // Add class based on value

  if(transaction.amount < 0){
    item.classList.add('minus')
  }
  else{
    item.classList.add('plus')
  }

  item.innerHTML = `
  <i class="fa-sharp fa-solid fa-xmark fa-sm" onclick="removeTransaction(${transaction.id})"></i>
  ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span>
`;
  

  lists.appendChild(item);
 
}
function updateValues(){
 const amounts = transactions.map(transaction =>transaction.amount) 
 
 const total = amounts.reduce((acc,items) => acc += items,0).toFixed(2)

 const income = amounts.filter(item => item > 0 )
 .reduce((acc,item) => acc += item,0).toFixed(2)

 const expense = (amounts.filter(item => item < 0 )
 .reduce((acc,item) => acc += item,0) * -1).toFixed(2)
 
balances.innerHTML = `$${total}`
pluss.innerHTML = `+$${income}`
minuses.innerHTML = `-$${expense}`

 console.log(expense)
}
function removeTransaction(id) {
  transactions = transactions.filter(transaction => transaction.id !== id);

  updateData();

  init();
}

function updateData(){
  localStorage.setItem('transactions',JSON.stringify(transactions))
}

function init() {
  lists.innerHTML = '';

  transactions.forEach(add);
  updateValues();
  
}

init();

forms.addEventListener('submit',addAmount)



// const incRemove = document.querySelector('.incRemov');
// const expRemove = document.querySelector('.expRemov');
// const incbtn = document.querySelector('.income');
// const expbtn = document.querySelector('.expense');
// const lists = document.querySelector('#list');
// const forms = document.querySelector('#form');
// const text = document.querySelector('.input-name');
// const amt = document.querySelector('#amount');
// const balances = document.querySelector('#balance');
// const pluss = document.querySelector('.plus');
// const minuses = document.querySelector('.minus');

// const incs = (e) => {
//   incRemove.classList.remove('hidden');
//   expRemove.classList.add('hidden');
// };

// const expe = (e) => {
//   expRemove.classList.remove('hidden');
//   incRemove.classList.add('hidden');
// };

// incbtn.addEventListener('click', incs);
// expbtn.addEventListener('click', expe);

// const localData = JSON.parse(localStorage.getItem('transactions'));
// let transactions = localData !== null ? localData : [];

// function addAmount(e) {
//   e.preventDefault();
//   if (text.value.trim() === '' || amount.value === '') {
//     alert('Fill the transaction name & amount');
//   } else {
//     const transaction = {
//       id: generateID(),
//       text: text.value,
//       amount: +amount.value,
//     };
//     transactions.push(transaction);
//     add(transaction);
//     updateValues();
//     updateData();
//     text.value = '';
//     amount.value = '';
//   }
// }

// function generateID() {
//   return Math.floor(Math.random() * 100000000);
// }

// function add(transaction) {
//   let sign;
//   if (transaction.amount < 0) {
//     sign = '-';
//   } else {
//     sign = '+';
//   }

//   const item = document.createElement('li');

//   if (transaction.amount < 0) {
//     item.classList.add('minus');
//   } else {
//     item.classList.add('plus');
//   }

//   item.innerHTML = `
//     ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span>
//     <button>
//       <i class="fa-sharp fa-solid fa-xmark fa-sm" onclick="removeTransaction(${transaction.id})"></i>
//     </button>
//   `;

//   lists.appendChild(item);
// }

// function updateValues() {
//   const amounts = transactions.map((transaction) => transaction.amount);

//   const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

//   const income = amounts
//     .filter((item) => item > 0)
//     .reduce((acc, item) => (acc += item), 0)
//     .toFixed(2);

//   const expense = (
//     amounts
//       .filter((item) => item < 0)
//       .reduce((acc, item) => (acc += item), 0) * -1
//   ).toFixed(2);

//   balances.innerHTML = `$${total}`;
//   pluss.innerHTML = `+$${income}`;
//   minuses.innerHTML = `-$${expense}`;

//   console.log(expense);
// }

// function removeTransaction(id) {
//   transactions = transactions.filter((transaction) => transaction.id !== id);

//   updateData();

//   init();
// }

// function updateData() {
//   localStorage.setItem('transactions', JSON.stringify(transactions));
// }

// function init() {
//   lists.innerHTML = '';

//   transactions.forEach(add);
//   updateValues();
// }

// init();

// forms.addEventListener('submit', addAmount);
