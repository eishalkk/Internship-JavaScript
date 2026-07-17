console.log("University Admission Checker");
const studentName = "Eishal";
const age = 16;
const FSC = 60;
const entryTest = 70;

if (age >= 17 && FSC >= 60 && entryTest >= 70) {
    console.log("You are eligible for admission!");
}
if (age<17) {
    console.log("You must be 17 years or above for admission.");
}
if (FSC<60) {
    console.log("Your FSC percentage must be 60% or above.");
}
if (entryTest<70) {
    console.log("Your score must be 70 or above for admission.");
}
