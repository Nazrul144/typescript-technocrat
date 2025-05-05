{
    //Function with generic:
    const creatArry = (param : string): string[]=>{
        return [param]
    }
    const creatArryWithGeneric = <T>(param : T): T[]=>{
        return [param]
    }

    type Obj = {
        name: string; age: number; isMarried: boolean
    }

    const resut1 = creatArry("Bangladesh")
    const result2 = creatArryWithGeneric<boolean>(true)
    const result3 = creatArryWithGeneric<Obj>({name: 'Nazrul', age: 30, isMarried: false})

    console.log(resut1);
    console.log(result2);
    console.log(result3);





    const creatArryWithTuple = <T, Q>(param1: T, param2: Q): [T,Q]=>{
        return [param1, param2]
    }

    const tup = creatArryWithTuple<string, number>("Bangladesh", 10);
    const tup1 = creatArryWithTuple<string, {name: string}>("Bangladesh", {name: 'Nazrul'});

    console.log(tup);
    console.log(tup1);

 




}