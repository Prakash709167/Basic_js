//constructor creation ==  singleton
//object literals

const mySym = Symbol("key1");

const jsuser = {
    name : "prakash",
    "full_nmae": "Prakash Kumar",
    [mySym]: "myKey1",
    age : 18,
    location: "Haryana",
    email: "prakash@gogle.com",
    isloggedin : false,
    lastLoginDays: ["Monday", "Saturday"]
};

// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser["full_nmae"]);
// console.log(jsuser.full_nmae);  throwing error

// console.log(jsuser[mySym]);
jsuser.email = "prakash@microsoft.com";
// Object.freeze(jsuser);
jsuser.email = "prakash@chatgpt.com";
// console.log(jsuser);

jsuser.greeting = function(){
    console.log("Hello js user");
}
jsuser.greetingTwo = function(){
    console.log(`Hello js user ${this.name}`);
}
console.log(jsuser.greetingTwo());



