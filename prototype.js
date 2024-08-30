//every fxn or object has their own property called prototype

const student = {
    name:"Charles",
    age:14,
    level: 100,
    isBoy: false
    }

    console.log(student)

function Student(name, age, level) {
    this.name = name;
    this.age = age;
    this.level = level;

}

Student.prototype.isBoy = "True"

const Student1 =  new Student("Charles", "16, 100, False")
