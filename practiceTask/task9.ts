{
    //Optional Chaining:
    //Objectives use optional chaining using nested object:

    type Employee = {
        name: string;
        address?: {
            city: string;
            street: string;
        }
    }

    const getEmployeeCity = (employee: Employee)=>{
         return employee?.address?.city;
    }

    const emp1 : Employee = {
        name: "Nazrul Islam",
        address:{
            city: "Dhaka",
            street: "123D"
        }
    }

    const emp2 : Employee = {
        name: "Rakib Hasan"
    }

    getEmployeeCity(emp1);
    console.log(emp1);


}