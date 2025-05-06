{
    //Generic with function and Interfaces:
    //Objectives: use generic to handle different type:

   const removeDuplicates = <T>(arr: T[]): T[]=>{
    return [... new Set(arr)]
   } 

   console.log((removeDuplicates([1,2,3,3,4,4,4,5])));
      
}