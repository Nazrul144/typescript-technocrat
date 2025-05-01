{
    //Union Types:

    type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper'
    type FullStackDeveloper = 'frontendDeveloper' | 'FullStackDeveloper'


    type Developer = FrontendDeveloper | FullscreenNavigationUI;

   





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

    //Intersection Type:
    type FrontendDevelopers = {
        skills: string[],
        degination1: 'frontendDeveloper'
    }
    type BackendDevelopers = {
        skills: string[],
        degination2: 'backendDeveloper'
    }

    type FullStackDevelopers = FrontendDevelopers & BackendDevelopers;

    const fullStackDevelopers : FullStackDevelopers = {
        skills : ['HTML', 'CSS', 'React'],
        degination1: 'frontendDeveloper',
        degination2: 'backendDeveloper'
    }



}