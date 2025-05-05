{
    //Function with generic:
    const creatArry = (param : string): string[]=>{
        return [param]
    }
    const creatArryWithGeneric = <T>(param : T): T[]=>{
        return [param]
    }

    type Obj = {
        name: string; age: number; isMarried: boolean
    }

    const resut1 = creatArry("Bangladesh")
    const result2 = creatArryWithGeneric<boolean>(true)
    const result3 = creatArryWithGeneric<Obj>({name: 'Nazrul', age: 30, isMarried: false})


    const creatArryWithTuple = <T, Q>(param1: T, param2: Q): [T,Q]=>{
        return [param1, param2]
    }

    const tup = creatArryWithTuple<string, number>("Bangladesh", 10);
    const tup1 = creatArryWithTuple<string, {name: string}>("Bangladesh", {name: 'Nazrul'});




    const addCourseToStudent = <T>(student: T)=>{
        const course = 'Next Level Web Development'


        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({name: "Mr.X", email: "x@gmail.com", devTyype: "Full Stack"})
    const student2 = addCourseToStudent({name: "Mr.Y", email: "y@gmail.com", hasWatch: "Olive"})

    console.log(student1);
    console.log(student2);




}