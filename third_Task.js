/* Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

 */

function make_avg(numbers,size)
{
    let sum=0;
    for(let i=0;i<size;i++)
    {
        sum+=numbers[i];
    }
    return (sum/size);
}
let result=[1,2,3,4,5,5];
console.log(make_avg(result,result.length).toFixed(2));