{
    //Spread and Rest Operators, Destructuring:
    //Objective: Write a function that uses the rest operator for variable length argument.

    const sumOfAllNumbers = (...num : number[])=>{
        const result = num.reduce((acc, current) => acc + current, 0)
        console.log(result);
    }

    sumOfAllNumbers(1,2,3,4,5)

}