/*let mohamed = 18;
let license = 18;



if (mohamed > license){
    document.write("valid")
}
else if (mohamed < license){
    document.write("not valid")
}

else{
    document.getElementById("demo").innerHTML = "need's ICE";
        setTimeout(() => {
        document.getElementById("demo").innerHTML = "give me ur identity card sir";
    }, 2000);
}*/
/*let price = 100;
let discount = false;
let discountAmount = 30;
let country = "egypt";
let student = true;


if (discount === true){
   price -= discountAmount
   console.log(price)
}
else if(country === "egypt" && student === true){
    price -= discountAmount + 30
    console.log(price)

}
else if(country === "egypt" && student === false){
    price -= discountAmount + 10
    console.log(price)
}
else {
   console.log('%cdiscount not available', 'color: red') 
}
   */

/*let day = 2;
   switch(day){
case 1:
    console.log("monday")
break;
case 2:
    console.log("tuesday")
break;
case 3:
    console.log("wednesday")
break;
 default:
    console.log("none of these")
   }
    */
/*let job = "Manager";
let salary = 0;



switch(salary){
    case "Manager":
        salary = 8000;
        console.log (`job is ${salary}`);
        break;
    case "IT":
    case "Support":
        salary =  6000;
        console.log (`job is ${salary}`);
        break;
     case "Developer":
     case "Designer" :
        salary = 7000; 
        console.log (`job is ${salary}`);
        break;
    default :
        salary = 4000;
        console.log (`job is ${salary}`);
        break;
}
*/
//let myFriends = ["ahmad", "ali", "soufian", ["hallo","world", "monde", "somth"]]
//console.log(myFriends[3][2])
// fetch("numbers.json")
// .then((response)=>response.json())
// .then((data)=>{
//     const numberSelect = document.getElementById("numberSelect");
//     data.numbers.forEach((number)=>{
//         const option = document.createElement("option");
//         option.value = number;
//         option.textContent= number;
//         numberSelect.appendChild(option);
//     })
// })
// .catch((error)=>console.error("error loading json", error));
// //calculate process
// document.getElementById("calculateBtn").addEventListener("click",()=>{
//     const selectedNumber = parseInt(document.getElementById("numberSelect").value);
//     const userInput = parseFloat(document.getElementById("userInput").value);
//     const operation = document.querySelector("input[name='operation']:checked").value;
    

//     let result;
//     if(isNaN(userInput)){
//         alert("please enter a valid number");
//         return;
//     }
//     switch(operation){
//         case"add":
//         result = selectedNumber + userInput;
//         break;
//         case"substract":
//         result = selectedNumber - userInput;
//         break;
//         case"multiply":
//         result = selectedNumber * userInput;
//         break;
//         case"devide":
//         if(userInput = 0){
//             alert('cannot devide by 0');
//             return;
//         }
//         result = selectedNumber/userInput;
//         break;
//         default:
//             result = 0;
//     }
//     document.getElementById("result").textContent = result;




// });
// let products = ["keyboard", "mouse", "pen", "somthing"]
// let index = 0;
// while(index  < 10){
//     console.log(products[index]);
    
//     index += 1;
//     if(index === 3){
//         break;
//     }
    
// }
// function sayHello(userName){
//     console.log(`Hi ${userName}`);

// }
// sayHello("Mohamed");
// sayHello("Mabib");
// let userName = "MOHAMED"
// let age = 14;
// function sayhello(userName, age){
//     if(age < 18){
//         alert('app is not alowed for ya');
//     }
//     else{
//         alert(`hello ${userName} this is your Age ${age}`)
//     }
// }
// sayhello(userName, age)
// function generateYears(start ,End, exclude){
//     for(let i = start; i <= End; i++){
//         if(i === exclude){
//             continue;
//         }
//         console.log(i);
//     }
// }
// generateYears(2000, 2010);

// document.write(typeof undefined)
// function generate(start, End){
//     for (let i = start; i <= End; i++){
//         console.log(i);
//     }

// }
// generate(10,30)
// function add1(){
//     let a =  20
//     let b = 10
//     return a + b;


// }
// function add2(){
//     let a = 30;
//     let b = 10;
//     return a + b;   
// }

// let result = add1() * add2()
// console.log(result);
// function generate(start , End){
//     for( i = start;start <= End; i++ ){
        
    
//         if(i === 15){
//             return 'interuptting'
//         }
//     }
// }
// generate(1, 20);
