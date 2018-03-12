var obj = {
    name: 'James',
    sname: 'Bond',
    age: 7,
    sayHello: function(){
        alert(this.name);
    },
}
// console.log(obj);
// obj.sayHello()
function Person(name,sname,age){
    this.name = name;
    this.sname = sname;
    this.age = age;
}
Person.prototype.sayHello = function(){
    alert(this.name);
}
Person.prototype.human = true;
var Alex = new Person('Alex', 'Black', 8 );
var Bob = new Person('Bob','Bob',10);

// console.log(Alex);
// console.log(Bob.human);
// Alex.sayHello();
function Rectangle(w,h) {
    this.width = w;
    this.height = h;
}
Rectangle.prototype.getArea = function() {
    return this.width*this.height
}
Rectangle.prototype.toString = function () {
    return 'This is rectangle'
}
Rectangle.prototype.valueOf = function() {
    return this.width*this.height
}

var square1 = new Rectangle(100,200);
var square2 = new Rectangle(200,100);
// alert(square1.getArea());
document.write(square1)
console.log(square1 + square2);
console.log(square1 - square2);

// alert(square1.toString())