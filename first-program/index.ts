
let userName: string;
let Age: number;
userName= "mostaq muzahid moin";
Age= 24;
// console.log(userName, Age)


// without typescript 

function addNumber(num1,num2,num3){
    console.log(num1+num2+num3);
}
// addNumber(20,30,50)
// addNumber(20,30,"50")

// with typescript 

function addNumber1(num1: number,num2: number,num3: number){
    console.log(num1+num2+num3);
}
// addNumber1(20,30,50)
// addNumber1(20,30,500)