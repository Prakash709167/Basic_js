const user = {
    userName: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.userName}, welcome to website`);
    }
}
user.welcomeMessage();