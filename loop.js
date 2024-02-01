

// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.
// Output:
// ['orange', 'yellow', 'green', 'blue', 'red']


const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
let colorOutput = [];
// for(let i =0; i<colors.length; i++){
//         colorOutput.unshift(colors[i])
// }

// for(let i=colors.length-1; i >=0 ; i--){
//     colorOutput.push(colors[i])
// }
// console.log(colorOutput)

// let colorRev = colors.reverse()
// console.log(colorRev)







// Task 2
// Write a JavaScript code to get the even numbers from an array using any looping technique.
// Output:
// [12, 98, 76, 46]

const numbers = [12, 98, 5, 41, 23, 78, 46];
for(let i=0; i<numbers.length; i++){
    if(numbers[i] % 2 === 0){
        console.log(numbers[i])

        continue;
    }
}



// const evenNumbers = [];
// for(let i=0; i<numbers.length; i++){
//     if(numbers[i] % 2 === 0){
//         evenNumbers.push(numbers[i])
//         continue;
//     }
// }
// console.log(evenNumbers)







// Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.
// Output:
// 'TomTimTinTik'


// var numberss = ['Tom', 'Tim', 'Tin', 'Tik'];
// let stringNum = "";
// for(let num of numberss){
//     stringNum += num
// }
// console.log(stringNum)


// Task 4 (Hard)
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// Input: const statement = 'I am a hard working person'

// Output:

// 'person working hard a am I'


const statement = 'I am a hard working person'
for(let state of statement){
    console.log(state.split(" "))
}
let statemen = statement.split(" ").reverse().join(" ");
console.log(statemen)