{
    //utility type:
    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string;
    }
    //Pick:
    type NameAge = Pick<Person, "name" | "age"> //We can pick some object property with value by Pick keyword and make a new object.

    //Omit:
    type contactInfo = Omit<Person, "name" | "contactNo">

    //Required:
    type NewRequired = Required<Person>
}