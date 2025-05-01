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

//Array Destructuring:

const myFriends = ['Fahad', 'Shahidul', 'Raju', 'Ismail','Rakib', 'kalu', 'salu'];

const [,,c,...newFriends] = myFriends;

console.log(c, newFriends);  //Output: Raju ['Ismail','Rakib', 'kalu', 'salu']



}