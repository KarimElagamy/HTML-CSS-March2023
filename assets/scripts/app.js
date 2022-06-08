function resetForm(){
    document.getElementById("fName").value = "";
    document.getElementById("lName").value = "";
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