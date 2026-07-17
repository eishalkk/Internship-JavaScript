/*const myName = "Eishal";
console.log(myName);
let age = 17;
console.log(age);
age = 18; 
console.log(age);
console.log("Hello! My name is ", myName, "and I am ", age, " years old.");

console.log("This is sum");
var1 = 16;
var2 = 24;
ans = var1+var2;
console.log( var1, "+", var2, "=", ans);

console.log("This is subtraction");
var1 = 16;
var2 = 24;
ans = var2-var1;
console.log( var2, "-", var1, "=",ans);

console.log("This is multiplication");
var1 = 2;
var2 = 3;
ans = var1*var2;
console.log( var1, "*", var2, "=", ans);

console.log("This is division");
var1 = 2;
var2 = 4;
ans = var2/var1;
console.log( var2, "/", var1, "=", ans);

console.log("This is modulus");
var1 = -16;
var2 = -1;
ans = var1*var2;
console.log( "|", var1, "| =", ans);


let total=1000.23;
const tax=0.15;
console.log("Total (Before Tax): ", total);
let subtotal = total*tax;
console.log("Tax: ", subtotal);
let grandtotal = subtotal+total;
console.log("The Grand Total is: ", grandtotal);
*/
let baseSalary = 80000;
console.log("Base Salary: $", baseSalary);

console.log("----------Allowances-------");
let houseAllowance = baseSalary*0.25;
console.log("House Allowance: $",houseAllowance);

let medicalAllowance = baseSalary*0.12;
console.log("Medical Allowance: $",medicalAllowance);

let transportAllowance = baseSalary*0.08;
console.log("Transport Allowance: $",transportAllowance);

let feulAllowance = baseSalary*0.06;
console.log("Feul Allowance: $",feulAllowance);

let internetAllowance = baseSalary*0.03;
console.log("Internet Allowance: $",internetAllowance);

let bonus = baseSalary*0.10;
console.log("Bonus: $",bonus);

const grossSalary = baseSalary+houseAllowance+medicalAllowance+transportAllowance+feulAllowance+internetAllowance+bonus;
console.log("Gross Salary: $", grossSalary);

console.log("----------Deductions-------");
let incomeTax = baseSalary*0.07;
console.log("Income Tax: $",incomeTax);

let pension = baseSalary*0.05;
console.log("Pension: $",pension);

let healthInsurance = baseSalary*0.02;
console.log("Health Insurance: $",healthInsurance);

let providentFund = baseSalary*0.04;
console.log("Provident Fund: $",providentFund);

console.log("------------------------");
const totalDeductions= incomeTax+pension+healthInsurance+providentFund;
console.log("Total Deductions: $", totalDeductions);

const netSalary=grossSalary-totalDeductions;
console.log("Net Salary: $", netSalary);