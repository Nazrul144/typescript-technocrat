{
    //Never Types:
    //Objective: Use the never type for the function that never return:

    const handleError = (message: string): never =>{
        throw new Error(message)
    }

    handleError("Nazrul")
    
}