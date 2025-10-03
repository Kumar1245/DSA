let obj={}

console.log(obj);


let username=
{
    firstName:"John",
    lastname:"Doe",
    age:30,
    isLogin:true,
    skills:["JS","HTML","CSS"],
}

username.firstName="Mr Pankaj"
username.lastname="Dev"
username.age=26
username.isLogin=false
username.skills.push("ReactJS")
console.log(username);
console.log(username.skills[2]);
console.log(typeof username);

let today =new Date()
console.log(today);
console.log(typeof today);
console.log(today.getFullYear());
console.log(today.getMonth()+1);
console.log(today.getDate());
console.log(today.getDay());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());    


// Array
let heros=["Ironman","Spiderman","Hulk","Thor",true]

let anoitherArray=new Array(1,2,3,4,5)
console.log(heros);
console.log(anoitherArray);
console.log(typeof heros);
console.log(heros[2]);
console.log(heros.length);
heros.push("Black Panther")

