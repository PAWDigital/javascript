
function generateStar(n) {
    for (let i = 1; i <= n; i++) {
        console.log('*'.repeat(i));
    }
  }
  
  
  generateStar(3);
  
  
  function arraySort(arr) {
    let numbersOnly = arr.filter(item => typeof item === 'number');
    numbersOnly.sort((a, b) => a - b);
    console.log(numbersOnly);
  }
  
  
  arraySort([5, 10, 1, 2, 3, "Number", {size: 12}, "6"]);
  
  
  
  function stringSize(str) {
    let alphabets = 0, digits = 0, symbols = 0;
  
    for (let i = 0; i < str.length; i++) {
        if ((/[a-zA-Z]/).test(str[i])) {
            alphabets++;
        } else if ((/[0-9]/).test(str[i])) {
            digits++;
        } else {
            symbols++;
        }
    }






