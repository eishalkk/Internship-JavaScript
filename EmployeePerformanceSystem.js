console.log("Employee Performance & Bonus System");
let empName = "Eishal";
let empID = 2416;
let department = "Software Engineering";
let salary = 80000;
let experience = 3;
let performanceScore = 90;
let bonus = 0;
let extrabonus = 0;
if (performanceScore>=90){
    bonus = 0.20;
}
else if (performanceScore>=80 && performanceScore<90){
    bonus = 0.15;
}
else if (performanceScore>=70 && performanceScore<80){
    bonus = 0.1;
}
else if (performanceScore>=60 && performanceScore<70){
    bonus = 0.05;
}
else {
    bonus = 0;
}
if (experience>=5){
    extrabonus = 0.05;
}
else {
    extrabonus = 0;
}
const totalBonus = bonus+extrabonus;
const bonusSalary = salary*totalBonus;
const finalSalary = bonusSalary+salary;

console.log("Employee Name: ", empName);
console.log("Employee ID: ", empID);
console.log("Employee Department: ", department);
console.log("Salary: Rs.", salary);
console.log("Years of Experience: ", experience);
console.log("Performance Score: ", performanceScore + "/100");
console.log("Performance - Bonus: ", bonus*100 + "%");
console.log("Experience - Extra Bonus: ", extrabonus+"%");
console.log("Total Bonus: ", totalBonus*100 + "%");
console.log("Total Bonus Salary: Rs.", bonusSalary);
console.log("Final Salary: Rs. ", finalSalary);


