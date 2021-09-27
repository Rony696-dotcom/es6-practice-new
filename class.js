


//Class

class Student {
    constructor(sId, sName){
       this.id = sId;
       this.name = sName;
       this.campus = "Uttara University";
    }
}

const student1 = new Student(70, "Nym");
const student2 = new Student(71, "RnY");
//console.log(student1, student2);




// take specafic property
class Student2 {
    constructor(stId, stName){
       this.id = stId;
       this.name = stName;
       this.campus = "Uttara University";
    }
}

const student3 = new Student2(70, "Nym");
const student4 = new Student2(71, "RnY");
console.log(student3.name, student4.id);