{
    //utility type:
    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string;
    }

    type NameAge = Pick<Person, "name" | "age"> //We can pick some object property with value by Pick keyword and make a new object.
}