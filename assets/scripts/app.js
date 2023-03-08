function resetForm(){
    document.getElementById("Email").value = "";
    document.getElementById("Password").value = "";
}

function validateForm(){
    let x = document.forms["myForm"]["Email"].value;
    let y = document.forms["myForm"]["Password"].value;
    if (x == ""){
        alert("Email field must be filled out to continue");
        return false;
    }
    if (y == ""){
        alert("Password field must be filled out to continue");
        return false;
    }
}

const myBtn = document.getElementById("bgColor");

myBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = "Green";
})

//Object literals
var Person = {firstName: "Karim", lastName: "Elagamy", Age: 22, location: "Washington"};
console.log(Person);

//function Constructor
function Guy(first = "default", last = "last name", Age = 11, location = "the Default"){
    this.firstName = first;
    this.lastName = last;
    this.Age = Age;
    this.location = location;
}

const Karim = new Guy("Karim", "Elagamy", 22, "Washington");
console.log(Karim);

//Object.Create()

const newKarim = Object.create(Karim);
newKarim.firstName = "New First Name";
newKarim.lastName = "New Last Name";
newKarim.Age = Karim.Age;
newKarim.location = Karim.location;
console.log(newKarim);

//Classes
class Car {
    constructor(Make, Model){
        this.Make = Make;
        this.Model = Model;
    }
}

const newCar = new Car("BMW", "5 Series");
console.log(newCar);

//Inheritance
class Engine extends Car {
    constructor(Make, Model, Engine) {
        super(Make, Model);
        this.Engine = Engine;
    }
}

const specificCar = new Engine("BMW", "5 Series", "V6");
console.log(specificCar);

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

//Array operations
const salariesArray = [100, 160, 130];

console.log(salariesArray)

salariesArray[1] = 200;

console.log(salariesArray);

salariesArray.push(200);

console.log(salariesArray);

salariesArray.pop();

console.log(salariesArray);

salariesArray.shift();

console.log(salariesArray);

salariesArray.push(200, 300, 400, 500, 600, 700, 800);

console.log(salariesArray);

salariesArray.splice(4,2);

console.log(salariesArray);

function spliceArrayByValue(val){
    for (var i = 0; i < salariesArray.length; i++){
        if (salariesArray[i] === val){
            salariesArray.splice(i, 1);
        }
    }
}

//let exInput = document.getElementById("exID").value;
//spliceArrayByValue(exInput);
spliceArrayByValue(600);

console.log(salariesArray);

var Sum2 = 0;
function sumSalaries(obj){
    for (let el in obj){
        if(typeof obj[el] == 'number'){
            Sum2 += obj[el];
        }
    }
}

sumSalaries(salaries);
console.log(Sum2);

var Sum = salaries.John + salaries.Ann + salaries.Pete;
console.log(Sum);

//Local Storage
localStorage.setItem('firstItem', 'Strawberry Pancake');
console.log("First Local Storage Item: " + localStorage.getItem('firstItem'));
localStorage.setItem('userToken', 'govhdfhsofjsojfsojfoisjfsokjfsojsfosfjsfhs');
console.log("Our User Token: " + localStorage.getItem('userToken'));
localStorage.removeItem('firstItem');
console.log(localStorage.getItem('userToken'));
localStorage.clear();
console.log(localStorage.getItem('userToken'));

//Session Storage
let x = 'Strawberry Pancake';
sessionStorage.setItem('favoriteFood', btoa(x));
console.log(sessionStorage.getItem('favoriteFood'));
console.log("First Session Storage Item: " + atob(sessionStorage.getItem('favoriteFood')));
sessionStorage.setItem('userId', 'govhdfhsofjsojfsojfoisjfsokjfsojsfosfjsfhs');
console.log("Our User ID: " + sessionStorage.getItem('userId'));
sessionStorage.removeItem('firstItem');
console.log(sessionStorage.getItem('userId'));
sessionStorage.clear();
console.log(sessionStorage.getItem('userId'));

//Cookies
document.cookie = "new_Sample_Cookie=This_is_our_Cookie_Sample; expires=tuesday, 7 Mar 2023 12:00:00 UTC; path=/";
document.cookie = "no_flag_Cookie=This_is_our_cookie_with_no_flags";
let z = btoa("This_is_our_cookie_with_no_flags");
document.cookie = "Encrypted_Cookie=" + z;
console.log(document.cookie);

//Get Current Date and Time
var currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 7);
document.cookie = "no_flag_Cookie3=This_is_our_cookie_with_no_flags; Max-Age=100000";
console.log(document.cookie);
console.log(currentDate);

//XMLHttpRequest
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
oReq.send();
function reqListener(){
    console.log(this.response);
}

var oreq = new XMLHttpRequest();
oreq.addEventListener("load", reqListener2);
oreq.open("POST", "https://jsonplaceholder.typicode.com/posts");
oreq.send("title=Example POST Request&body=Antra.com&userId=1");
function reqListener2(){
    console.log(this.responseText);
}

//Promises: a callback function to initialize this process that takes in two arguments: resolve and reject
//resolved: the resource was loaded successfully/promise executed successfully
//rejected: meants the resource failed to load/promise failed to execute properly

//both of these return something, so the order of resolve or reject matters. 
//Callback: is essentially a function that is passed in as a parameter.

function promiseDemo(){
    let p = new Promise(function(resolve, reject){
        //Imagine you make an HTTP call which returns true or false - for example creating an account
        //return true if the account is created successfully, return false if the account is not created successfully
        let result = true;
        if (result === true){
            resolve("Account created successfully");
        }
        else {
            reject("Account creation failed");
        }
    })
    p.then(function(d){
        console.log(d);
    }).then(function(d2){
        console.log(d2 + "second time");
    }).catch(function(e){
        console.log(e);
    })
}
promiseDemo();

let p2 = new Promise((resolve,reject) => {
    resolve(2)
})
p2.then(function(d){
    console.log(d)
    return d*2
}).then(function(d1){
    console.log(d1)
    return d1*2
}).then(function(d2){
    console.log(d2)
})

//Fetch API
//Getting a resource
fetch("https://jsonplaceholder.typicode.com/posts/1")
.then((response) => response.json())
.then((json) => console.log(json));
//Listing all of the resources
fetch("https://jsonplaceholder.typicode.com/posts")
.then((response) => response.json())
.then((json) => console.log(json));
//Creating a resource
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: 'POST',
    body: JSON.stringify({
        title: 'Example Post Request',
        body: 'Antra.com',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    },
})
.then((response) => response.json())
.then((json) => console.log(json))
.catch((mistake) => console.log(mistake));
//Update a resource
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'Example Put Request',
    body: 'Antra.com',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
  //Patching a resource
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'Example Patch Request',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
  //Deleting a resource
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
}).then((response) => response.json())
.then((json) => console.log(json));

//Regular Expressions
//inputText was a reference variable from my sample App that fetched the email input field via document.getElementById("Email");
var inputText = document.getElementById("Email");
function ValidateEmail() {
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailFormat)) {
      alert("Valid email address!");
      document.myForm.Email.focus();
    }
    else {
      alert("You have entered an invalid email address!");
      document.myForm.Email.focus();
    }
  }

