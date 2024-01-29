const tinderUser = new Object();

tinderUser.id = "123abc";
tinderUser.name = "samm";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "prakash@gmail.com",
    fullname : {
        userName:{
            firstName : "aman",
            lastName : "raj"
        }
    }
}
// console.log(regularUser.fullname.userName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1,obj2};

// const obj3 = Object.assign(obj1, obj2);
const obj3 = {...obj1, ...obj2};
// console.log(obj3);

const users =[
    {
        id : 1,
        email : "abc@gmail.com"
    },
    {
        id : 1,
        email : "abc@gmail.com"
    },
    {
        id : 1,
        email : "abc@gmail.com"
    }
]
// console.log(users[1].email);
console.log(tinderUser)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));


