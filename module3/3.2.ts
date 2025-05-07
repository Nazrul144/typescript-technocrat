{
    //oop -> inheritance:
    class Student {
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

    const studnet1 = new Student("Nazrul Islam", 30, "Dhaka")
    studnet1.getSleep(10)

    class Teacher {
        name: string;
        age: number;
        address: string;
        designation: string

        constructor(name: string, age: number, address: string, designation: string){
            this.name = name;
            this.age = age;
            this.address = address;
            this.designation = designation;
        }

        getSleep(sleepOfHour : number){
            console.log(`${this.name} will sleep ${sleepOfHour}`);
        }

        takeClass(numberOfTakeClass : number){
            console.log(`${this.name} will take ${numberOfTakeClass} classes`);
        }
       
    }

    const teacher = new Teacher("Mr. Kabir", 40, "Dhaka", "Professior")
    teacher.takeClass(3)
















}