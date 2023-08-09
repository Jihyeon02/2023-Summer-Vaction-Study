const grade = paraseInt(prompt("your grade: "));

if (isNaN(grade)){
   console.log("Please write a positive number");
}
else if (grade >= 90){
    alert("A");
}
else if (grade >= 80 && grade < 90){
    alert("B");
}
else if (grade >= 70 && grade < 80){
    alert("C");
}
else if (grade < 70){
    alert("D");
}
