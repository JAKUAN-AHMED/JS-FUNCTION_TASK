/* Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd */
function odd_even(num)
{
    if(num%2===0) return 'even';
    else return 'odd';
}
let result=odd_even(6);
console.log(result);