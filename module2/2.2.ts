{
    //Interface
  
   type Person1 = {
    name: string;
    age: number
   }

   interface PersonWithAllInfo extends Person1 {
    isMarried?: boolean;
    blood: string;
    skin: string;
    money: number
   }

   const final : PersonWithAllInfo = {
    name: "Nazrul Islam",
    age: 20,
    isMarried: false,
    blood:"A+",
    skin: "white",
    money: 2000,
   }
   console.log({final});

   type User1 = {
    name: string,
    age: number
   }

   type Final = User1 & {email: string}


   type Roll1 = number[]; //Array declaration with type signature:
   interface Roll2 {
    [index: number] : number  //Array declaration with interface signature:
   }

   const rollNumber: Roll1 = [1,2,3,4];
    
   


}