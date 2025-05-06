{
    //Create union and interjection type using interface:
    interface Book {
        title: string;
        author: string;
        age: number
    }

    interface Magazine {
        title: string,
        publisher: string,
        price: number
    }

    type BookOrMagazine = Book | Magazine;

    type BookAndMagazine = Book & Magazine;

    const itemOr : BookOrMagazine = {
        title: "JS",
        author: "Jankar Mahabub",
        age: 30,
    }

    const itemAnd : BookAndMagazine = {
        title: "Geography",
        author: "Mizan",
        age: 30,
        publisher: "Alfatha",
        price: 30
    }

    console.log({itemAnd});
    


}