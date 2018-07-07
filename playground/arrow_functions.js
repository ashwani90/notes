var swear = (bol)=>{
    console.log("You said "+bol);
}
var square = (x) => x*x;
// first argument is defined and then the return value is defined
swear("ma ki aankh");
console.log(square(2));
var ob = {
    name: 'HuObject',
    sayHi: () => {
        console.log('Hi ');
    },
    sayHiAlt() {
        console.log('This is where we can use this keyword');
    }
};

console.log(ob.sayHi());
console.log(ob.sayHiAlt());