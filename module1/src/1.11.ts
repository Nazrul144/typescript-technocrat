{
    //Ternary operator | Optional Chaining | Nullish Coalescing Operator:

    const age: number = 18;

    if(age > 15){
        console.log("Adult");
    }else{
        console.log("Not Adult");
    }

    const isAdult = age > 18 ? 'Adult' : "Not Adult"
    console.log({isAdult});

    //Nullish coalescing Operator:
    //When nullish coalescing operator is used? null--> undefined: depending on null and undefined if I take any decision this time I can use it.

    const isAuthenticated = "";
    const result1 = isAuthenticated ?? 'Geust'
    const result2 = isAuthenticated ? isAuthenticated : "Geust";
    console.log({result1}, {result2});
}