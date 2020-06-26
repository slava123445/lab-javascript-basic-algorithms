// Iteration 1: Names and Input
let hacker1 = 'Slava'
console.log(`The driver's name is ${hacker1} `)
//1.3
let hacker2 = 'John'

console.log(`The navigator's name is ${hacker2}`)
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else if (hacker2.length === hacker1.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

var name = `${hacker1.split('').join(' ')}`;
 var uppercased = name.toUpperCase();
   console.log(uppercased);


   let hacker5 = '';
 
    for(let i=hacker2.length-1; i>=0; i--){ 
     hacker5 += hacker2[i]
    hacker5 = hacker5 + hacker2[i]
    }
    console.log(hacker5)


    console.log(hacker1, hacker2)

for(let i=0; (i<hacker1.length && i<hacker2.length); i++) {
     if(hacker1 === hacker2){
         console.log(`What?! You both have the same name?`)
         break; 
     } else if(hacker1[i] < hacker2[i]){
         console.log(`The driver's name goes first.`);
         break;
     } else if(hacker2[i] < hacker1[i]) {
        console.log(`Yo, the navigator goes first definitely.`);
        break;
     }
 }

   


