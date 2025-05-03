{
    //Type assertion
    let anything: any;
    anything = 'Next Level Web Development';
    
    anything = 10;

    (anything as number)

    const kgToGm = (value: string | number)=>{
        if(typeof value === 'string'){
            const convertedNumber = parseFloat(value);
            return convertedNumber;
        }else{
            return value;
        }
    }
}