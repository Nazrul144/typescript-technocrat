{
    //oop -> inheritance:

    class Parent {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string){
            this.name = name;
            this.age = age;
            this.address = address;
        }

        getSleep(sleepOfHour : number){
            console.log(`${this.name} will sleep ${sleepOfHour}`);
        }
    }

    class Student extends Parent {
        

        constructor(name: string, age: number, address: string){
            super(name, age, address)
        }
       
    }

    const studnet1 = new Student("Nazrul Islam", 30, "Dhaka")
    studnet1.address()

    class Teacher extends Parent {
       
        designation: string

        constructor(name: string, age: number, address: string, designation: string){
            super(name, age, address)
            this.designation = designation;
        }

        takeClass(numberOfTakeClass : number){
            console.log(`${this.name} will take ${numberOfTakeClass} classes`);
        }
       
    }

    const teacher = new Teacher("Mr. Kabir", 40, "Dhaka", "Professior")
    teacher.
















}