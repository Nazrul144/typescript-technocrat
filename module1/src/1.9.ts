{
    //Type alias:
    type Student = {
        name: string;
        age: number;
        address: string;
        phone: string;
        email?: string;
    }
    const student1: Student = {
        name: 'Nazrul',
        age: 26,
        address: 'Dhaka',
        phone: '01758752528'
    }
    const student2: Student = {
        name: 'Miraz',
        age: 30,
        address: 'Khulna',
        phone: '01710326590'
    }

    type UserName = string;
    type IsAdmin = boolean;

    const userName: UserName = 'Nazrul Islam';
    const isAdmin: IsAdmin = true;


}