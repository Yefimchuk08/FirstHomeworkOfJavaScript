//Task 1
// let start = parseInt(prompt("Enter start diapazone"))
// let end = parseInt(prompt("Enter end diapazone"))
// let sum = 0
// for(i = start;i<end;i++)
// {
//     sum+=i
// }
// console.log(sum)

//Task 2
// let num1 = parseFloat(prompt("Enter first number"))
// let num2 = parseFloat(prompt("Enter second number"))
// let NSD = 0;
// for(i = 0; i<num1; i++){
//     if(num1>num2)
//     {
//         for(i = 0; i<num1;i++){
//             if(num1%i===0 && num2%i===0)
//             {
//                 NSD = i
//             }
//             else{
//                 continue
//             }
//         }
//     }
//     else if(num1===num2)
//     {
//         NSD = num1
//     }
//     else{
//         for(i=0;i<num2;i++)
//         {
//             if(num1%i===0 && num2%i===0)
//             {
//                 NSD = i
//             }
//             else{
//                 continue
//             }
//         }
//     }
// }
// alert(NSD)

//Task 3
// let num = parseFloat(prompt("Enter number"))
// for(i = 0; i <= num; i++)
// {
//     if(num%i===0)
//     {
//         console.log(i)
//     }
//     else{
//         continue
//     }
// }

//Task 4
// let num = parseFloat(prompt("Enter number"))
// let count = 0
// while(num>1)
// {
//     num/=10
//     count++
// }
// console.log(count)

//Task 5
// let positive = 0;
// let negative = 0;
// let zero = 0;
// let even = 0;
// let odd = 0;

// for (let i = 0; i < 10; i++) {
//     let number = parseInt(prompt(`Введіть число ${i + 1}:`));

//     if (number > 0) {
//         positive++;
//     } else if (number < 0) {
//         negative++;
//     } else {
//         zero++;
//     }

//     if (number % 2 === 0) {
//         even++;
//     } else {
//         odd++;
//     }
// }

// console.log("Статистика:");
// console.log("Додатних чисел:", positive);
// console.log("Від'ємних чисел:", negative);
// console.log("Нулів:", zero);
// console.log("Парних чисел:", even);
// console.log("Непарних чисел:", odd);

//Task 6
// let boole = true
// let number1, number2
// while(boole)
// {
//     number1 = parseFloat(prompt("Enter first num"))
//     number2 = parseFloat(prompt("Enter second number"))
//     alert("[1] - Sum;\n[2] - Substraction;\n[3] - Multiply;\n[4] - Division;\n")
//     let choise = parseInt(prompt("What your choise?"))
//     switch(choise)
//     {
//         case 1:
//             console.log(`Sum result: ${number1+number2}`)
//             break
//         case 2:
//             console.log(`Substract result: ${number1-number2}`)
//             break
//         case 3:
//             console.log(`Myltiply result: ${number1*number2}`)
//             break
//         case 4:
//             console.log(`Division result: ${number1/number2}`)
//             break
//         default:
//             alert("We couldn`t modify this calculator so quicly")
//     }
//     let answer = parseInt(prompt("Do you want to continue"))
//     if(answer === 1)
//     {
//         continue
//     }
//     else if(answer===0){
//         boole = false
//     }

// }

//Task 7
// let number = prompt("Введіть число:");
// let shift = parseInt(prompt("На скільки цифр змістити?"));


// shift = shift % number.length;


// let shifted = number.slice(shift) + number.slice(0, shift);

// alert(`Результат після зміщення: ${shifted}`);

//Task 8
// let days = ["Понеділок", "Вівторок", "Середа", "Четвер", "П’ятниця", "Субота", "Неділя"];
// let index = 0;

// while (true) {
//     let answer = confirm(`${days[index]}. Бажаєте побачити назву наступного дня тижня?`);
//     if (!answer) {
//         break;
//     }
//     index = (index + 1) % days.length; 
// }

//Task 9
// for(let i=2;i<=9;i++)
// {
//     for(let j=1;j<=10;j++){
//         console.log(`${i}*${j} = ${i*j}`)
//     }
//     console.log()
// }

//Task 10
// let min = 0;
// let max = 100;
// let guess;
// let response;

// alert("Загадайте число від 0 до 100. Я буду намагатися його вгадати!");

// while (true) {
//     guess = Math.floor((min + max) / 2);
//     response = prompt(`Ваше число > ${guess}, < ${guess} чи == ${guess}?`);

//     if (response === "==") {
//         alert(`Ура! Я вгадав ваше число: ${guess}`);
//         break;
//     } else if (response === ">") {
//         min = guess + 1;
//     } else if (response === "<") {
//         max = guess - 1;
//     } else {
//         alert("Будь ласка, введіть тільки '>', '<' або '=='.");
//     }
// }

