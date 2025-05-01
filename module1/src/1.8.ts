//Destructuring:

{

    const user = {
        id: 211002144,
        name: {
        firstName: 'Nazrul',
        lastName: 'Islam',
        },
        constactInfo: "01758752528",
        address: 'Dhaka',
        age: 30
    }

const {constactInfo: contactInformation, name:{lastName}} = user;

console.log(contactInformation, lastName);





}