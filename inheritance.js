class Parent{
    constructor(){
        this.fatherName = "Rony";
    }
}



class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name +" "+ this.fatherName;
    }
}
const baby = new Child("Ray");
const baby2 = new Child("Ress")
console.log(baby.getFullName());
console.log(baby2);