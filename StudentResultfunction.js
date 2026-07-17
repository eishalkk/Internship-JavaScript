function studentResult(studentName, math, english, science) {
    const totalMarks=math+science+english;
    const percentage=totalMarks/3;
    let grade;
    if (percentage>=90){
        grade='A'; 
    }
    else if (percentage>=80){
        grade='B';
    }
    else if (percentage>=70){
        grade='C';
    }
    else if (percentage>=60){
        grade='D';
    }
    else {
        grade='F';
    }
    switch (grade){
        case 'A':
            console.log(studentName, ": Excellent! Your grade is ", grade);
            break;
        case 'B':
            console.log(studentName, ": Very Good! Your grade is ", grade);
            break;
        case 'C':
            console.log(studentName, ": Good! Your grade is ", grade);
            break;
        case 'D':
            console.log(studentName, ":Needs Improvement! Your grade is ", grade);
            break;
        case 'F':
            console.log(studentName, ": Failed... Your grade is ", grade);
            break;
        default: 
            console.log(studentName, ": Invalid Grade.");
    }
}
studentResult("Eishal", 80, 89, 90);