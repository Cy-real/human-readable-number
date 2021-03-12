module.exports = function toReadable (number) 
{
  let num = number.toString();
  let temp = num.split('');
  let arr_digits = ["zero", "one","two", "three", "four", "five", "six", "seven", "eight", "nine"];
  let arr_tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety", "hundred"];
  let arr_remaining = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

  if (num.length == 1)
  {
    return arr_digits[number];
  }
  else if(num.length == 2)
  {
    if(temp[0] == 1)
    {
      return arr_remaining[number-10];
    }
    else
    {
      if(temp[1] != 0)
      {
        let answer = arr_tens[temp[0]-2] + " " + arr_digits[temp[1]];
        return answer;
      }
      else
      {
        let answer = arr_tens[temp[0]-2];
        return answer;
      }
    }
   }
  else if(num.length == 3)
  {
    let answer = arr_digits[temp[0]] + " hundred ";
    if(temp[1] == 1)
    {
      let t =[temp[1], temp[2]];
      t = parseInt(t.join(''));
      answer+= arr_remaining[t-10];
      return answer;
    }
    else
    {
      if(temp[2] != 0)
      {
        if(temp[1] != 0)
        {    
          answer+= arr_tens[temp[1]-2] + " " + arr_digits[temp[2]];
          return answer;
        }
        else
        {
          answer+= arr_digits[temp[2]];
          return answer;
        }
      }  
      else
      {
        if(temp[1] != 0)
        {    
          answer+= arr_tens[temp[1]-2];
          return answer;
        }
        else
        {
            return answer;
        }
      }
    }
  }
}
