{
    //mapped type:
    const arrOfNumbers : number[] = [1,4, 5];
    const arrOfSting : string[] = ["1", "4", "5"];

    const newStringArr : string[] = arrOfNumbers.map((number)=> number.toString())
    console.log(newStringArr);

    type AreaNumber = {
        height: number;
        width: number;
    }

    type Height = AreaNumber["height"]  //look up type

    type AreaString<T> = {
        [key in keyof T] : T[key]
    }

    const area1 : AreaString<{height:string; width: number}> = {
        height: "100",
        width: 40
    }
}