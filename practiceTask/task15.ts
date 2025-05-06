{
    //Type Guards:
    //Objective: Create custom type guards for more accurate type checking:

    // Type guard
    const isString = (value: unknown) =>{
        return typeof value === 'string'
    }

    const printUpperCase = (value: unknown)=>{
        if(isString(value)){
            console.log(value.toUpperCase());
        }else{
            console.log("Not String");
        }
    }

    printUpperCase("Nazrul")
    printUpperCase(123)

}