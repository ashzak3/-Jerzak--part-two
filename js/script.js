var person = prompt("Name your pet");
let happiness = 0;
let energy = 0;
for(let i=0;i<6;i++){
var option = prompt("Feed, Pet, or Walk");
if (option === "feed"){
energy=energy + 2;
} else if(option === "pet"){
happiness++;
} else if(option === "walk"){
    if(energy>0){
happiness= happiness + 2;
energy--;} else{
 alert("Not enough energy to enjoy a walk");
    
}
}
}
console.log(person +" has "  +happiness +" happiness " +energy +" energy.");
