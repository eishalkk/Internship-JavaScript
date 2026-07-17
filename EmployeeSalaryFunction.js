function employeeSalary(employeeName, basicSalary, department){
    console.log("------Departments------");
    console.log("1. HR");
    console.log("2. IT");
    console.log("3. Finance");
    console.log("4. Marketing");
    
    switch (department){
        case 1: 
            department="HR";
            break;
        case 2: 
            department="IT";
            break;
        case 3: 
            department= "Finance";
            break;
        case 4: 
            department= "Marketing";
            break;
        default: 
            department="Invalid";
    }
    let allowance;
    if (basicSalary<30000){
        allowance=0.1;
    }
    else if (basicSalary<60000){
        allowance=0.15;
    }
    else if (basicSalary>60000){
        allowance=0.2;
    }

    const allowanceAmount=basicSalary*allowance;
    const finalSalary=basicSalary+allowanceAmount;

    console.log("-------------------------");
    console.log("Employee Name: ", employeeName);
    console.log("Department: ", department);
    console.log("Basic Salary: $", basicSalary);
    console.log("Allowance: ", allowance*100 +"%");
    console.log("Allowance Amount: $", allowanceAmount);
    console.log("Final Salary: $", finalSalary);
}
employeeSalary("Eishal", 900000, 1);
employeeSalary("Khalid", 450000, 2);
employeeSalary("Darwin", 100000, 3);
employeeSalary("Gumball", 9900000, 4);