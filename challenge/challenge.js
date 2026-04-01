const age = parseFloat(
    prompt("Enter the person's age):")
);
const accessCard = prompt(
    "Is the person having an access card? (yes or no):"
).toLowerCase();
// Data validation
if (isNaN(age)) {
    alert("The grade should be a number.");
} else if (age < 0 || age > 120) {
    alert("The grade should be between 1 - 120.");
} else if (age>=18) {
    alert("You have access to enter the building.");
}else if(age<18){
    alert("You can't enter the building");


} else if (accessCard !== "yes" && accessCard !== "no") {
    alert("Having the access card is either yes or no .");
} else if(accessCard==="yes"){
    alert("aceess accepted");
}else if (accessCard==="no"){
    alert("access denied, card required");
}
   