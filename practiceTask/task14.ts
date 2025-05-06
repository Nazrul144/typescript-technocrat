{
    //Asynchronous TypeScript and Type Alias:
    //Objectives: Simulate aa asynchronous operation with typescript:

    type User = {
        name: string;
        age: number;
      };
      
      const fetchUserData = async (): Promise<User> => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({ name: 'Nazrul', age: 25 });
          }, 1000); // 1 second delay
        });
      };
      
      // Example usage
      fetchUserData().then((user) => {
        console.log('User data:', user);
      });
      
}