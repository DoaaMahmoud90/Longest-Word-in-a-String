//Return the length of the longest word in the provided sentence.



function longestWord(str){
let array = str.split(" ");
let max = array[0].length;
for(let i = 1; i< array.length; i++){
  if(array[i].length > max)
    max = array[i].length;
}
return max;
}

let str1 = "May the force be with you";
console.log(`The longest word in this string ${str1} is ${longestWord(str1)}`);
let str2 = "The quick brown fox jumped over the lazy dog";
console.log(`The longest word in this string ${str2} is ${longestWord(str2)}`);