/**********
 * DATA *
 **********/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];

const d1 = document.querySelector('#d6-roll');
const d2a = document.querySelector('#double-d6-roll-1');
const d2b = document.querySelector('#double-d6-roll-2'); 
const d3 = document.querySelector('#d12-roll');
const d4 = document.querySelector('#d20-roll');
const reset = document.querySelector('#reset-button');
const d6rollsmean = document.querySelector('#d6-rolls-mean');
const d6rollsmedian = document.querySelector('#d6-rolls-median');
const d6rollsmode = document.querySelector('#d6-rolls-mode');
const doublerollsmean = document.querySelector('#double-d6-rolls-mean');
const doublerollsmedian = document.querySelector('#double-d6-rolls-median');
const doublerollsmode = document.querySelector('#double-d6-rolls-mode');
const d12rollsmean = document.querySelector('#d12-rolls-mean');
const d12rollsmedian = document.querySelector('#d12-rolls-median');
const d12rollsmode = document.querySelector('#d12-rolls-mode');
const d20rollsmean = document.querySelector('#d20-rolls-mean');
const d20rollsmedian = document.querySelector('#d20-rolls-median');
const d20rollsmode = document.querySelector('#d20-rolls-mode');

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

/*******************
 * YOUR CODE BELOW *
 *******************/
resetAll();


/*******************
 * EVENT LISTENERS *
 *******************/


d1.addEventListener('click', roll6);
d2a.addEventListener('click', rollDouble6);
d2b.addEventListener('click', rollDouble6);
d3.addEventListener('click', roll12);
d4.addEventListener('click', roll20);
reset.addEventListener('click', resetAll);

/******************
 * RESET FUNCTION *
 ******************/

function resetAll(){
  sixes = [];
  doubleSixes = [];
  twelves = [];
  twenties = [];
  d1.src = 'images/start/d6.png';
  d2a.src = 'images/start/d6.png';
  d2b.src = 'images/start/d6.png';
  d3.src = 'images/start/d12.jpeg';
  d4.src = 'images/start/d20.jpg';
  d6rollsmean.innerText = 'NA';
  d6rollsmedian.innerText = 'NA';
  d6rollsmode.innerText = 'NA';
  doublerollsmean.innerText = 'NA';
  doublerollsmedian.innerText = 'NA';
  doublerollsmode.innerText = 'NA';
  d12rollsmean.innerText = 'NA';
  d12rollsmedian.innerText = 'NA';
  d12rollsmode.innerText = 'NA';
  d20rollsmean.innerText = 'NA';
  d20rollsmedian.innerText = 'NA';
  d20rollsmode.innerText = 'NA';
};



/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/
function roll6(){
 let num = getRandomNumber(6);
 d1.src = `images/d6/${num}.png`;
 sixes.push(num);
 d6rollsmean.innerText = mean(sixes).toFixed(2);
 d6rollsmedian.innerText = median(sixes).toFixed(2);
};

function rollDouble6(){
  let num1 = getRandomNumber(6);
  let num2 = getRandomNumber(6);
  d2a.src = `images/d6/${num1}.png`;
  d2b.src = `images/d6/${num2}.png`;
  doubleSixes.push(num1+num2);
  doublerollsmean.innerText = mean(doubleSixes).toFixed(2);
  doublerollsmedian.innerText = median(doubleSixes).toFixed(2);
};

function roll12(){
  let num = getRandomNumber(12);
  d3.src = `images/numbers/${num}.png`;
  twelves.push(num);
  d12rollsmean.innerText = mean(twelves).toFixed(2);
  d12rollsmedian.innerText = median(twelves).toFixed(2);
};

function roll20() {
  let num = getRandomNumber(20);
  d4.src = `images/numbers/${num}.png`;
  twenties.push(num);
  d20rollsmean.innerText = mean(twenties).toFixed(2);
  d20rollsmedian.innerText = median(twenties).toFixed(2);
};


/****************
 * MATH SECTION *
 ****************/

function mean(arr){
let sum = arr.reduce((total, x) => total + x, 0);
return sum / arr.length;
};

function median(arr){
  let sorted = sortByNumber(arr);
  console.log(sorted);
  if (arr.length % 2 === 0){
      let mid1 = arr.length / 2 - 1;
      let mid2 = arr.length / 2;
      return (sorted[mid1] + sorted[mid2])/2;
  } else {
      let mid = Math.floor(arr.length / 2);
      return sorted[mid];
  };
};