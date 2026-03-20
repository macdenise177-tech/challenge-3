//Author: spackman<Github>

//storage the exam score in a variable
var score=prompt();
//Condition

if(score <0){
    //if the conditional is true
    //execute this code
    alert("Invalid score. Try agian...")
}else if(score>=0 && score<60){
//if the condition is false,
//else if, analyse another condition
//execute this code
alert("You failed the exam.");


}else if(score>=60 && score<=100){
    //if the condition is false,
//else if, analyse another condition
//execute this code
alert("you passed the exam.");

}else {
alert("Invalid score. cant be greater than 100");
}
/*
    ---------------------
    Desktop test
    ---------------------
    s = -20   =>  Invalid negative score. Try again....
    s = 0     =>  You failed the exam.
    s = 59    =>  You failed the exam.
    s = 60    =>  You passed the exam.
    s = 100   =>  You passed the exam.
    s = 120   =>  Invalid score. Can't be greater than 100
    ---------------------
*/
