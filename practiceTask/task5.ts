{
    //Write a function that revers a string:
    const reversString = (str: string)=>{
        const revStr: string = str.split("").reverse().join()
        console.log(revStr);
    }

    reversString("hello")
}