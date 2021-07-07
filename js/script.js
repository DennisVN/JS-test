console.log("Hello Bert");
const content = document.getElementById("target");
let date = new.Date(); 
let hour = date.getHours();

const person = {
    name : 'Dennis'
}

console.log(person.name);



if (hour < '17:30') {
    content.innerHTML = "hello" + name ;
} else {
    content.innerHTML = " Good evening"
};