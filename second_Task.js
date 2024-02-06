/* Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

 */
function even_odd(num)
{
    if(num&1==0)
    {
        return (num/2);
    }
    else{
        return num*2;
    }
}
let result=even_odd(10);
console.log("the result is: ",result);