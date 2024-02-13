const user = {
    userName: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.userName}, welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage();
// user.userName = "sam";
// user.welcomeMessage();

// console.log(this);

function chai(){
    console.log(this);
}
chai();
