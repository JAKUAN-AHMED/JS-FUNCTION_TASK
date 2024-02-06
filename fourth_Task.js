/* Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string. */

function count_zero(binary_string)
{
    let cnt=0; 
    for(let i=0;i<binary_string.length;i++)
    {
        if(binary_string[i]-'0'===0)
        {
            cnt++;
        }
    }
    return cnt;

}
let counted=count_zero("110001");
console.log(counted);