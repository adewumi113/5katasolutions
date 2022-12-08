1.
https://www.codewars.com/kata/554e4a2f232cdd87d9000038
//Complementary DNA

 //solution
 function DNAStrand (dna){
    dna = dna.split('');
    result = ''
    for (let i = 0; i < dna.length; i++){
        if (dna[i] == 'A')
            result += 'T'
        else if (dna[i] == 'T')
            result += 'A'
        else if (dna[i] == 'C')
            result += 'G'
        else if (dna[i] == 'G')
            result += 'C'
    }
    return result
}

2.
https://www.codewars.com/kata/56606694ec01347ce800001b
//Is this a triangle?
//solutions

function isTriangle (a, b, c) {
    if (a + b <= c | a + c <= b | b + c <= a)
    return false
    else
    return true
  }

  //2nd solution
  // use the triangle inequality theorem, which states that the sum of 2 sides of a triangle must be greater than the third side.

function isTriangle (a, b, c) {
    if (a + b <= c | a + c <= b | b + c <= a)
    return false
    else if ( a <= 0 | b <= 0 | c <= 0)
    return false
    else
    return true
}

3.
https://www.codewars.com/kata/5412509bd436bd33920011bc
//Credit Card Mask
//Solution
function maskify (cc) {
    cc = cc.split('')
    for (i=0; i<cc.length-4; i++){
        cc[i] = '#'
    }
    return cc.join('')
}
maskify("4556364607935616")

4.
https://www.codewars.com/kata/52fba66badcd10859f00097e
//Disemvowel Trolls
//Solution
function disemvowel(str) {
    let p = str.split('')
    //loop through the string
    for (i = 0; i < p.length; i++) {
    //if a vowel is found, remove it
      if (p[i] == "a" | p[i] == "e" | p[i] == "i" | p[i] == "o" | p[i] == "u" | p[i] == "A" | p[i] == "E" | p[i] == "I" | p[i] == "O" | p[i] == "U") {
        delete p[i]
      }
    }
    return p.join('');
  }

  5.
  https://www.codewars.com/kata/55f8a9c06c018a0d6e000132
  //Validate PIN code
  //Solution
  function validatePIN (pin) {
    if (pin.length !== 4 && pin.length !== 6) {
    return false;
  }
  //use for loop to loop through each index of 'pin' to make sure it is digit (0-9) and not negative
  for (let i = 0; i < pin.length; i++) {
    if (pin[i] < '0' || pin[i] > '9') {
       return false;
    }

  }
  //if none of the conditions above holds, return true
  return true;
}
