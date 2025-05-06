{
    //Intersection types:
    //Objectives: Practice using intersection types:

    interface User {
        name: string;
        email: string
    }

    interface Admin {
        adminLevel: number;
    }

    type UserAdmin = User & Admin;

    const describeAdmin = (user: UserAdmin): string =>{
        return `The user name is: ${user.name}. Email is: ${user.email}. And the adminLevel is: ${user.adminLevel}`
    }

    const admin: UserAdmin = {
        name: "Nazrul Islam",
        email: "nazrul@gmail.com",
        adminLevel: 2
    }

    describeAdmin(admin);

    console.log(admin);







}