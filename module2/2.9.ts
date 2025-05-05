{
    //Conditional type:

    type a1 = number;
    type b1 = string;

    type x = a1 extends null ? true : false

    type y = a1 extends null ? true : b1 extends undefined ? undefined : any

    type CheckVehicle<T> = T extends "car" | "bike" | "ship" ? true : false

    type HasCar = CheckVehicle<"car">

}