import { db } from "./server/db";

await db.user.create({
    data:{
        emailladdress:"test-mail@gmail.com",
        firstName:"ram",
        lastName:"den",
        imageUrl:"randomstringchar"
    }
})

console.log('done')
