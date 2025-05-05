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

    //Partial:
    type PersonPartial = Partial<Person>

    //Readonly:
    type Personreadonly = {

    }

    type PersonReadonly = Readonly<Person>

    const person1 : PersonReadonly = {
        name: "Nazrul",
        age: 20,
        contactNo: "017"
    }
    
}