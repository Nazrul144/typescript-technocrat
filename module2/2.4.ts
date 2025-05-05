{
    //Generic with interface:
    interface Developer<T, Y = null> {
        name: string,
        computer: {
            brand: string,
            model: string
            releaseYear: number
        }
        smartWatch: T,
        bike?: Y
    }

    type EmilateWatch = {
        brand:string,
        model: string, 
        display: string
    }

    const poorDeveloper : Developer<EmilateWatch> = {
        name: 'Nazrul Islam',
        computer:{
            brand: 'Intel',
            model: "2AK",
            releaseYear: 2014
        },
        smartWatch : {
            brand: "Olive",
            model: "2Ag",
            display: "Emulate"
        }
    }

    //the difference between type and interface during declaration is we use equal sign with type but interface.
    interface RichWtach  {
        brand:string, 
        model: string,
        display: string,
        heartTrack: boolean,
        sleepTrack: boolean
    }


    interface Yeamaha {
        model: string,
        color: string
    }

    const richDeveloper : Developer<RichWtach, Yeamaha> = {
        name: 'Jankar Mahabub',
        computer:{
            brand: 'Apple',
            model: "4AK",
            releaseYear: 2024
        },
        smartWatch : {
            brand: "Olive",
            model: "4Ag",
            display: "Emulate",
            heartTrack: true,
            sleepTrack: true
        },
        bike: {
            model: "P11",
            color: "blue"
        }
    }





}