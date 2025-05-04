{
    //Interface
  
   type Person1 = {
    name: string;
    age: number
   }

   type Person2 = {
    address: 'Dhaka'
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

}