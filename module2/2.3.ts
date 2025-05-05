{
    //Generic 
    
    type GenericType<T> = Array<T>



    const rollNumber : number[] = [1,2,3,4];        //Not generalized 
    const rollNumber1 : GenericType<number> = [1,2,3,4]; // Generalized array

    const mentor : string[] = ['Mr.X', 'Mr.Y', 'Mr.Z'];       //Not generalized
    const mentor1 : GenericType<string> = ['Mr.X', 'Mr.Y', 'Mr.Z']; //Generalized array

    const boolArr : Array<boolean> = [true, false, true];   //Not generalized
    const boolArr1 : GenericType<boolean> = [true, false, true];  //Generalized array


    const user :GenericType<{name: string, id: number}> = [
        {
            name: 'Nazrul',
            id: 1
        },
        {
            name: 'Jankar Mahabub',
            id: 2,
        },
        
    ]

    //Tuple:

    const person : [string, number] = ['Nazrul', 20]

    //Generic Tuple:
    type GenericTuple<X,T> = [X, T];

    const manush : GenericTuple<string, string> = ['Mr.X', 'Mr.Y']

    type User = {
        name: string,
        age: number
    }
    const userID : GenericTuple<number, User> = [123, {name: 'Nazrul', age: 20}]























}