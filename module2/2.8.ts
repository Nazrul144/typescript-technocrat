{
    //promise

    const todo = async()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await response.json();
        return data;
    }

    todo()
  

    const createPromise = ()=>{
        return new Promise((resolve, reject)=>{
            const data : string = "something"
            if(data){
                resolve(data)
            }else{
                reject("Fail to load data")
            }
        })
    }

    const showData = async()=>{
        const data = await createPromise()
        console.log(data);
    }
    showData()

}