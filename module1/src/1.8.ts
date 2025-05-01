//Destructuring:

{

    const user = {
        id: 211002144,
        name: {
        firstName: 'Nazrul',
        lastName: 'Islam',
        },
        constactInfo: "01758752528",
        address: 'Dhaka'
    }

const {constactInfo} = user;

console.log(constactInfo);
}