{
  //Constrain

  const addCourseToStudent = <T extends {id: number, name: string, email: string}>(student: T) => {
    const course = "Next Level Web Development";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({ id: 1, name: "Mr.X", email: "x@gmail.com", devType: "Full Stack" });

  const student2 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    hasWatch: string;
  }>({ id: 2,
     name: "Mr.Y",
      email: "y@gmail.com",
       hasWatch: "Olive" });

  const student3 = addCourseToStudent({id: 12, name: 'Nazrl', email: 'n@gmail.com', address: 'Dhaka'})

  //
}
