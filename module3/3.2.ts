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

        callStudnent(){
            console.log(`Hi, I am ${this.name} and I am ${this.age} old. My address is: ${this.address}.`);
        }
    }

    const studnet1 = new Student("Nazrul Islam", 30, "Dhaka")
    studnet1.callStudnent()

}