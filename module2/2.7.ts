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

    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) =>{
        return obj[key]
    }

    const user: Student = {
        name: "Nazrul Islam",
        roll: 12,
        age: 30,
    }
    const car = {
        model: "ABC1",
        year: 2000,
    }

    const result1 = getPropertyValue(car, "model")

    
}