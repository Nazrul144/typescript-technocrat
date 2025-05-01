//Spread Operator
//Rest Operator
//Destructuring

{

    //Spread Operator:
    const bros1: string[] = ['Mizan', 'Raju', 'Rahad'];
    const bros2: string[] = ['Tarek', 'Sojib', 'Rakib'];

    bros1.push(...bros2)

    const mentor1 = {
        typescript: 'Mezba',
        redux: 'Mir',
        dbms: 'Mizan'
    }

    const mentor2 = {
        prizma: "Firoz",
        next: 'Tanmoy',
        cloud: 'Nahid'
    }

    const mentorList = {
        ...mentor1,...mentor2
    }
    console.log(mentorList);


}