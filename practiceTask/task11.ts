{
    //Unknown Type:
    //Objectives: Handles different type with the unknown type:
    const processData = (data: unknown): unknown=>{
        if(typeof data === 'string'){
            return data.toUpperCase();
        }else if(typeof data === 'number'){
            return data*data;
        }
    }

   const result = processData(10);
   console.log(result);
    
}