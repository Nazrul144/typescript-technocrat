{
    //Generic 
    
    type GenericType<param> = Array<param>



    const rollNumber : number[] = [1,2,3,4];        //Not generalized 
    const rollNumber1 : GenericType<number> = [1,2,3,4]; // Generalized array

    const mentor : string[] = ['Mr.X', 'Mr.Y', 'Mr.Z'];       //Not generalized
    const mentor1 : GenericType<string> = ['Mr.X', 'Mr.Y', 'Mr.Z']; //Generalized array

    const boolArr : Array<boolean> = [true, false, true];   //Not generalized
    const boolArr1 : GenericType<boolean> = [true, false, true];  //Generalized array























}