{

//Object Type Datatype:

const user :{
    name: string;
    age: number;
    address: string;
    email: string;
    contact: string;
    IsMarried?: boolean;
    status?: string; //Optional Type
    university: 'Green University of Bangladesh',  //type --> literal type. When a value treats like a string is called literal type.
    readonly organization: string
} = {
    name: 'Nazrul',
    age: 30,
    address: 'Dhaka',
    email: 'nazrulislam.cse28@gmail.com',
    contact: '01758752528',
    IsMarried: false,
    university: 'Green University of Bangladesh',
}

user.organization = 'Uttarchar Manob'





}