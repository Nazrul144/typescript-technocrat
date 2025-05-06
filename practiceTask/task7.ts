{
    //Type assertion and narrowing:
    //Objective: Write a function that behaves differently based on input type:

    const handleInput = (input: string | number) =>{
        if(typeof input === 'string'){
            return input.length;
        }
        else if(typeof input === 'number'){
            return input*input;
        }
    }

    const result = handleInput(5)
    console.log(result);
}