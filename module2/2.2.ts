{
    //Interface
    type User1 = {
        name: string;
        age: number
    }

    type UserWithRoll = User1 & {roll: number};

    const student : UserWithRoll = {
        name: "Nazrul Islam",
        age: 20,
        roll: 1,

    }
}