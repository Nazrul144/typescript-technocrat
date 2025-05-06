{
    //Utility Type and keyof Constrain:
    //Objectives: Access object properties dynamically using keyof.

    const getPropertyValue = <T, K extends keyof T>(obj: T, key: K): T[K]=>{
        return obj[key]
    }

    const user = {
        name: "Nazrul Islam",
        age: 20
    }

    const name = getPropertyValue(user, "name");
    const age = getPropertyValue(user, "age");

    console.log(name); //Nazrul Islam
    console.log(age); //20

}