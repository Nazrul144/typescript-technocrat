{
    //Union Types:

    type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper'
    type FullStackDeveloper = 'frontendDeveloper' | 'FullStackDeveloper'


    type Developer = FrontendDeveloper & FullscreenNavigationUI;

   





    const newDeveloper: FrontendDeveloper = 'fakibazDeveloper'

    type User = {
        name: string;
        email?: string
        age: number;
        gender: 'male' | 'female'
    }

    const user1 : User = {
        name: 'Nazrul',
        age: 30,
        gender: 'male'
    }


}