{
    //Function, Optional and literal type:
    //Objective: Create a function with parameter and an optional literal type:

    const user = (name: string, age: number, role?: "admin" | "user" | "guest")=>{
        return {name, age,role}
    }

   const result =  user("Nazrul", 20, )
   console.log(result);
}