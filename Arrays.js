//Task 1
// let line = prompt("Enter text")
// let liters = ["a", "e", "y", "u", "i", "o"]
// let count = 0
// for(let liter of line)
// {                       
//     if(liter in liters) 
//     {
//         count++
//     }
//     else{
//         continue
//     }
// }
// console.log(count)

//Task 2

// let input = "javascript is fun";

// let result = input
//   .split(" ")                             // ["javascript", "is", "fun"]
//   .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//   .join(" ");

// alert(result);


//Task 3

// let line = prompt("Enter line");
// let arr = line.split(""); 
// let reversed = [...arr].reverse(); 

// if (arr.join("") === reversed.join("")) {
//     alert("This is a palindrome!");
// } else {
//     alert("This is not a palindrome.");
// }

//Task 4
// let line  = prompt("Enter line")
// let arr = line.split("")
// for(i=0;i<arr.length;i++)
// {
//     if(arr[i] == " ")
//     {
//         arr[i] = "-"
//     }
//     else{
//         continue
//     }
// }
// alert(arr.join(""))

//Task 5
// let line = prompt("Enter line")
// let char = prompt("Enter char")
// let arr = line.split("")
// let count = 0
// for(i=0;i<arr.length;i++)
// {
//     if(arr[i] == char){
//         count++
//     }
//     else{
//         continue
//     }
// }
// alert(count)

//Task 6
// let arr = []
// for(i=0;i<=10;i++)
// {
//     arr[i] = Math.floor(Math.random() * (100 - 1));
// }
// let MaxElem = arr[0]
// for(j=0;j<arr.length;j++)
// {
//     if(MaxElem<arr[j])
//     {
//         MaxElem = arr[j]
//     }
//     else{
//         continue
//     }
// }
// alert(arr + "\n" + MaxElem)

//Task 7
// let arr = []
// for(i=0;i<=10;i++)
// {
//     arr[i] = Math.floor(Math.random() * (100-1))
// }
// let evenArr = []
// for(j=0;j<arr.length;j++)
// {
//     if(arr[j]%2===0)
//     {
//         evenArr.push(arr[j])
//     }
//     else{
//         continue
//     }
// }

// alert(arr + "\n" + evenArr)

//Task 8
// let arr = []
// for(i=0;i<=10;i++)
// {
//     arr[i] = Math.floor(Math.random()*(100-1))
// }
// let reverseArr = []
// for(j = arr.length; j >= 0;j--)
// {
//     reverseArr.push(arr[j])
// }
// alert(arr + "\n" + reverseArr)

//Task 9
// let FirstArr = [1, 2]
// let SeconsArr = [3, 4, 5]
// for(i = 0; i< SeconsArr.length;i++)
// {
//     FirstArr.push(SeconsArr[i])
// }
// alert(FirstArr)

//Task 10
// let arr = [];
// for (let i = 0; i < 10; i++) {
//     arr[i] = Math.floor(Math.random() * 5) + 1; 
// }

// let NewArr = [];

// for (let i = 0; i < arr.length; i++) {
//     if (!NewArr.includes(arr[i])) {
//         NewArr.push(arr[i]);
//     }
// }

// alert("Original: " + arr + "\nUnique: " + NewArr);
