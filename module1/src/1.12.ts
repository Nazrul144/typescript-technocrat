{
    //nullable type:
    const searchName = (value: string | null)=>{
        if(value){
            console.log("Searching");
        }else{
            console.log("There is nothing to search");
        }
    }
    searchName(null)

    //Unknown type:
    const getSpeedInMeterPerSecond = (value: unknown)=>{
        if(typeof value === 'number'){
            const converted = (value*1000)/3600
            console.log(`The speed meter per second is : ${converted} ms^-1`);
        }
       else if(typeof value === 'string'){
            const [result, unit] = value.split(' ')
            const converted = (parseFloat(result)*1000)/3600
            console.log(`The speed meter per second is : ${converted} ms^-1`);
        }else{
            console.log("Input is not correct");
        }
    }
    getSpeedInMeterPerSecond(null)

    //Never type:
    //If we know that a function will never return anything else this time we can use never type.

    const throwError = (message: string): never=>{
        throw new Error(message);
    }

    throwError('Muskil se errro hogaiya')



}