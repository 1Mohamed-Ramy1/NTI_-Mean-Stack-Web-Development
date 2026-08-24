/* introduction 
    == UI Developer vs Frontend Developer 
    ui > html , css , js  x
    front end > html , css , js , (react , vue , angular ) 2x
    == why Java Script
       - detect user event  
       - validation ( sql injection )
       - database connections 
    ==  fields JS 
        - front end  > react , vue , angular 
        - back end > node 
        - mobile app > react native
        - test 
        - machine learning 
        - desk top apps 
    == Where write code java script
        -
        -
        - 
    == I P O ( )    
    


*/


// ========== OUTPUT METHODS ==========

// 1. Alert

// window.alert("Welcome to JavaScript!");

// 2. Modify HTML content

// console.log(document.getElementById("mainTitle"));
// document.getElementById("mainTitle").innerText = "Hello from JavaScript file";

// 3. Console log

// console.log("hello");


// 4. Write to document (not recommended in real apps)
// document.write("<h3>JS wrote this directly in the document.</h3>");
// document.write("<p>JS wrote this directly in the document.</p>");

// ========== VARIABLES AND DATA TYPES ==========

// Primitive Types

  /** naming conventions
   * 
   * camelCase  >>  lastName
   * snak_case >> last_name
   * PascalCase >> LastName >> oop (classes)
   * 
   */
  // strongly typed language >> need to define data type 
  // loosely typed language >> no need to define data type  


// var name = `ahmed`;   
// console.log(typeof name);

// var age = 29.6565165 ;
// console.log(age);
// console.log(typeof age); // number

// var first_name ="mohamed"
// var age2 ='22'
// console.log( first_name); // 


// var isStudent = true;   // false 
// console.log(typeof isStudent);

// var score = null; 
// console.log(typeof score);  // object

// var score2 ;      
// console.log(typeof score2);
// score2 = 55;

// document.getElementById("mainTitle").innerText = score2;
// var x= 5;
// var y= "5";
// console.log(typeof x);
// console.log(typeof y);

// console.log(x == y);  
// console.log(x === y);  

// var col1 ="red";
// col1 = "green" //  immutable 
// col1 = "blue"


// Non-Primitive Types  mutable  

//---------- ARRAY 
//  var color1 = 'red';
//  var color2 = 'blue';
//  var color3 = 'green';

// var colors = ['red' ,'blue' ,'green'];  // array
// console.log(typeof colors);

// console.log(colors.length);

// colors[0]="tomato";
// console.log(colors);

// var arr1 = [1,"ss",{name:"wsdf"},[22,44],true,undefined , null];
// console.log(arr1[arr1.length - 1]);


//---------- OBJECT 
// var person = { name: "Sara", age: 25};
// console.log(typeof person);
// console.log(person.name);
// person.name = "Ali";
// console.log(person);

// // console.log(name, age, isStudent, score, grade);
// console.log(colors[2]); // red

// console.log(person.age); // 25
// function displayInfo( name ){
//   console.log(name);
// }

// displayInfo("Ahmed");


// var age = window.prompt("please enter your age");

// console.log(age);
// console.log(typeof age);
// console.log(typeof parseInt(age));
// console.log(typeof Number(age));
// console.log(typeof +age);


// document.getElementById("mainTitle").innerText ="your age = " +  age ;
// var name=window.prompt("Please enter Name");
// console.log("welcome : "+ name);

// console.log(`Welcome : ${name}`);



// ========== CONCATENATION (+) ==========


// var firstName = "Ali";
// var lastName = "Hassan";
// var fname = firstName + " " + lastName; // Old way
// console.log(fname);
// var welcomeMessage ="hello" +" "+ firstName + " " + lastName; // Old way
// console.log( welcomeMessage);

// var welcomeMessageNewWay = `hello ${firstName} ${lastName}`
// console.log(welcomeMessageNewWay);

// var modernFullName = `${firstName} ${lastName}`; // Template literals
// console.log(modernFullName);

// console.log(`Full Name (template): ${modernFullName}`);



// var x = "5";
// var y = 4;
// var result = x + y; //
// console.log(typeof result);


// var result2 = y + x;  //
// console.log(result);
// console.log(result2); // 
// console.log( Number(x) + y);  
// console.log( parseInt(x)  +y);
// console.log(+x + y);



// = Number(x) + y
// = +x + y
// parseInt(x)

// var w =10 ;
// var q = 20 ;
// var r = "30";
// var y = 40 ;
// var z =50 ;
// console.log(w + q + r + y + z);  // 1020304050 , 30304050 ,

// var result = (w + q) + r + (y +z ); 
// console.log(result);  // 



// ========== OPERATORS ==========

// Arithmetic

var a = 10 , b= 2 ;
// console.log("a + b =", a + b);
// console.log("a - b =", a - b);
// console.log("a * b =", a * b);
// console.log("a / b =", a / b);
// console.log("a % b =", a % b); // Modulus 
// console.log("a ** b =", a ** b); // Power




// Comparison
// console.log(5 == "5");  
// console.log(5 === "5"); 
// console.log(5 != 6);     
// console.log(5 > 3);     
// console.log(5 < 3);     
// console.log(5 >= 3);     
// console.log(5 <= 3);     

// Logical
// var isAdult = true;
// var hasTicket = false;
// console.log(isAdult && hasTicket); 
// console.log(isAdult || hasTicket); 
// console.log(!isAdult); 

// Assignment
// var num = 20;
// num += 20 ;  //  num = num + 20
//  num -= 10; // num = num - 10
// console.log(num);


// num =  num + 10
// num += 10;
// num *= 2;
// console.log("Final num:", num);



// ========== IPO EXAMPLE ==========

function sayWelcome(){
    var inputElm = document.getElementById("username");
    var message = `Welcome, ${inputElm.value}!`;
    document.getElementById("result").innerText = message;
    
}

// var isGraduated=confirm("graduated ?");
// console.log("isGraduated : ",isGraduated);


// ========== PRACTICE ACTIVITY ==========
// Ask user for input, then summarize
//Name: (yourName), Age: $(yourAge)


// var fname = "Ali";
// var lname = "hassan";
// var fullName = fname + " " +lname  // old way 
// var fullName = `hello  ${fname} ${lname}`
// console.log(fullName);




// var yourName = prompt("What is your name?");
// var yourAge = prompt("How old are you?");

// var isStudentPrompt = confirm("Are you a student?");
// console.log(isStudentPrompt);

// var summary = `Name: ${yourName}, Age: ${yourAge}, Student: ${isStudentPrompt}`;
// alert(summary);
// console.log(summary);


// ========== CONDITIONAL STATEMENTS ==========
// var inputNum = 93 ;

// if (inputNum >= 60  && inputNum <= 70){
//     console.log("grade D");
    
// }else if(inputNum > 70 && inputNum <= 80){
//     console.log("grade C");
    
// }else if(inputNum > 80 && inputNum <= 90){
//     console.log("grade B");
    
// }else if(inputNum > 90 && inputNum <= 100){
//     console.log("grade A");
// }else if(inputNum < 60){
//     console.log("Failed");
// }else {
//     console.log("please enter valid value");
// }


// var num1 = 195 ;
// if (num1 < 100){
//   console.log("num1 less than 100 ");
// }else {
//   console.log("num1 greater than 100");
// }

// Basic if/else example

// var value = "5";
// var value_two = 5;

// if (value == value_two){
//   console.log("equal");
// }else{
//   console.log("not equal");
// }

// var age = 20;

// if (age >= 18) {
//   console.log("You are an adult.");
// } else {
//   console.log("You are a minor.");
// }


// if / else if / else example

// var grade = 45;

// if (grade >= 90) {
//   console.log("Grade: A");
// } else if (grade >= 80) {
//   console.log("Grade: B");
// } else if (grade >= 70) {
//   console.log("Grade: C");
// } else {
//   console.log("Grade: F");
// }

// Boolean condition example

// var hasAccount = true;
// var isVerified = true;

// if (hasAccount && isVerified) {
//   console.log("Welcome back!");
// } else if (hasAccount && !isVerified) {
//   console.log("Please verify your account.");
// } else {
//   console.log("Please sign up.");
// }




// var userBirthYear = prompt("plz enter your birth year");
// // console.log(typeof userBirthYear); // date ;
// var currentYear = new Date().getFullYear();
// console.log(currentYear);
// var age = currentYear - Number(userBirthYear) ;
// if (age > 60){
//   console.log("your age = "+age+" "+"greater than 60" );

// }else {
//   console.log("your age = "+age+" "+"lessthan 60");
// }








// Interactive example using prompt


// var birthYear = prompt("Enter your birth year:");
// var currentYear = new Date().getFullYear();
// var userAge = currentYear - birthYear;

// if (userAge >= 60) {
//   alert("You are a senior citizen.");
// } else if (userAge >= 18) {
//   alert("You are an adult.");
// } else {
//   alert("You are underage.");
// }

// console.log(`Your age is: ${userAge}`);


// Nested condition


// var username = "admin";
// var password = "1234";

// if (username === "admin") {
//   if (password === "1234") {
//     console.log("welcome");
//     if(role == "adminA"){
//         console.log("your role = Super Admin");
//     }else{
//         console.log("your role =  admin");
        
//     }
//   }else{
//     console.log("wronge password");
//   }
// } else {
//   console.log("Username not found");
// }


// ========== SWITCH STATEMENT ==========

// var day = prompt("Enter a day of the week (e.g., Monday, Tuesday, etc.):");

// switch (day) {
//   case "Monday":
//     console.log("Start of the week!");
//     break;
//   case "Tuesday":
//     console.log("Second day, var's keep going!");
//     break;
//   case "Wednesday":
//     console.log("Mid-week, you're doing great!");
//     break;
//   case "Saturday":
//     console.log("day is Saturday");
//     break ;
//   case "Sunday":
//     console.log("Weekend! Time to relax.");
//     break;
//   default:
//     console.log("Invalid day! Please enter a valid weekday.");
// }

// var empName = "Ahmed";
// switch (empName) {
//     case "Ahmed":
//         console.log("Welcome, Ahmed!");
//         // break;
//     case [1,2,3,4,5]:  // ignore break statement in previous case, so this case will also execute
//         console.log("Welcome, Ali!");
//         // break;
//     case "Sara":
//         console.log("Welcome, Sara!");
//     case "John":
//         console.log("Welcome, John!");
//         break;   
//     default:
//         console.log("not employee!");
//         break;
// }



// ========== TERNARY OPERATOR ==========
// var name = "Sara";
// var message = name == "Ali" ? 'welcome ali' : name == "Ahmed" ? 'welcome ahmed' : name == "Aya"? `welcome ${name}` : `Not welcome yaa ${name}`;
// console.log(message);

// var x = 70
// var y =  x < 60 ? 'less than 60' : 'greater than 60';
// console.log(y);


// var age = prompt("How old are you?");
// age = Number(age);  // Make sure the input is a number

// var result = age >= 18 ? "Adult" : "Minor";

// console.log(result);


// ========== Example with nested ternary ==========

// var timeOfDay = prompt("What time of the day is it? (Enter 'morning', 'afternoon', or 'night')").toLowerCase();

// var greeting = timeOfDay === "morning" ? "Good morning!" :
// timeOfDay === "afternoon" ? "Good afternoon!" :
// timeOfDay === "night" ? "Good night!" :
// "Hello!";

// console.log(greeting);

// if(null){
//     console.log("true value");
    
// }else{
//     console.log("falsy value");
    
// }


// ========= falsy value ============================================================================
// var x = "ahmed" ;
// var y = 20 ;
// console.log(typeof (y-x));
// if (Number.isNaN(y-x)){
//     console.log("not number");
// }else{
//     console.log("number");
    
// }

    

// 0 , null , undefined , NaN , '' , false

// if (false) console.log('true'); else console.log('false'); 

// if (0) console.log('true'); else console.log('false');     
// if (-0) console.log('true'); else console.log('false');      

// if ("") console.log('true'); else console.log('false');    

// if (null) console.log('true'); else console.log('false');  
// if (undefined) console.log('true'); else console.log('false'); 

// if (NaN) console.log('true'); else console.log('false');   
 
// var age = 61 ;
// console.log(userAge >= 60 ? "You are a senior citizen." : 
//       userAge >= 18 ? "You are an adult." : 
//       "You are underage.");
// console.log(age > 60 ? "ff" : age > 20 ? "gg" : '');

