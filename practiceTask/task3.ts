{
    //Object Types, Type Alias, & Literal Type:
    //Object: Define a structured person object using type alias:

    type Person = {
        name: string;
        address: string;
        hireColor: string;
        eyeColor: string;
        income: number;
        expense: number;
        hobbies: string;
        familyMembers: number;
        job: string;
        skills: string[];
        maritalStatus: boolean;
        friends: string[]
    }

    const person : Person = {
        name: "Nazrul Islam",
        address: "Dhaka",
        hireColor: "Black",
        eyeColor: "Black",
        income: 0,
        expense: 6000,
        hobbies: "Football, Cricket, Chess, Card",
        familyMembers: 3,
        job: "None",
        skills: ["Js", "React", "Node", "Express", "MongoDB"],
        maritalStatus: false,
        friends: ["Rakib", "Raju", "Fahad", "Shahidul", "Monir", "Shanto"]
    }

}