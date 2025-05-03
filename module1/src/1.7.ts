// //Spread Operator
// //Rest Operator
// //Destructuring

// {

//     //Spread Operator:
//     const bros1: string[] = ['Mizan', 'Raju', 'Rahad'];
//     const bros2: string[] = ['Tarek', 'Sojib', 'Rakib'];

//     bros1.push(...bros2)

//     const mentor1 = {
//         typescript: 'Mezba',
//         redux: 'Mir',
//         dbms: 'Mizan'
//     }

//     const mentor2 = {
//         prizma: "Firoz",
//         next: 'Tanmoy',
//         cloud: 'Nahid'
//     }

//     const mentorList = {
//         ...mentor1,...mentor2
//     }
//     console.log(mentorList);

//  //Rest Operator:
//  const friends = (friend1: string, friend2: string,friend3: string)=>{
//     console.log(`Hi ${friend1} ${friend2} ${friend3}`);
//  }
//  friends("Abut", "Kabul","Tabul", )

//  const greetingFriends = (...friends: string[])=>{
//     friends.forEach((friend: string)=> console.log(`Hi ${friend}`))
//  }
//  greetingFriends("Abut", "Kabul","Tabul","Ubul","Rasel", "Shahidul", "Majed", "Rabbi" )



// }


//Spread Operator:

const friend1:string[] = ['Rahim', 'Karim'];
const friend2:string[] = ['Jadu', 'Modu'];

const newArray:string[] = [...friend1,...friend2]
console.log(newArray);

//Rest Operator:

const friends = (...a:string[])=>{
    console.log(a);
}

friends("Mizan", "Ratul", "Tarek", "Josim","Foysal","Jahid", "Razon")