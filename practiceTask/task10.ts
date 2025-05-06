{
    //Nullish Coalescing:
    //Objective: Handle null and undefined value using nullish coalescing.

    const getDisplayName = (name: null | undefined)=>{
        return name ?? "Anonymous"
    }

   

    console.log(getDisplayName("Nazrul"));
    console.log(getDisplayName(null));
    console.log(getDisplayName(undefined));
}