//Question 1: print the unrepeated character in a string

function testString(str){
//  console.log(str);
  let char='';
  for(let i = 0; i<= str.length; i++ ) {
    let char = str[i];
    let next = str[i+1];
//    console.log(char, next);
    if (char == next) {
      //if the character is the same as the next one -- keep going
      char = str[i++];
      next = str[i+2];
    }
    else{
      return char;
    }
  }
}

console.log(testString("AABBCDD"));
console.log(testString("AABBCCDEEFF"));














//My question:
//Please help me study for my upcoming JavaScript technical interviews. I have this function that finds the Greatest Common Divisor of two numbers, please explain to me why this works... I honestly do not understand 100% of this solution.

function greatestCommonDivisor(a,b){
  if(b==0)
    return a;//if b is zero then a is the GCD, i got this
  else
    return greatestCommonDivisor(b, a%b);//what is this magic?
}
//console.log(greatestCommonDivisor(8,-16));
