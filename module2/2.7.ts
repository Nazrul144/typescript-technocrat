{
    //Generic constrain with keyof operator:
    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }

    type Owner = "Car" | "Bike" | "Ship"  //Manually type declaration

    type Owner2 = keyof Vehicle;

    type Student = {
        name:string, roll: number, age: number
    }

    const getPropertyValue = (obj: object, key: string) =>{
        return obj
    }

    // const user: Student = {
    //     name: "Nazrul Islam",
    //     roll: 12,
    //     age: 30,
    // }

    
}