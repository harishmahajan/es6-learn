import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-objects',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.css']
})
export class ObjectsComponent implements OnInit {

  constructor() {
    var person = {
      firstname: "Tom",
      lastname: "Hanks",
      func: function () { return "Hello!!" },
    };
    //access the object values 
    console.log(person.firstname)
    console.log(person.lastname)
    console.log(person.func())
    var foo = 'bar'
    var baz = { foo }
    console.log(baz.foo)

    var myCar = new Object();
    myCar["make"] = "Ford"; //define an object 
    myCar["model"] = "Mustang";
    myCar["year"] = 1987;

    console.log(myCar["make"]) //access the object property 
    console.log(myCar["model"])
    console.log(myCar["year"])

    /////////////   https://www.tutorialspoint.com/es6/es6_objects.htm
    var numbers = [3, 2, 8];
    var oddnumber = numbers.find((x) => x % 2 == 1);
    console.log("oddnumber := ", oddnumber);

    for (let i of Array.from('hello harish')) {
      console.log(i)
    }

    for (let p of Array.from([1, 3, 5, 2, 5])) {
      console.log(p);
    }
    var pp = [1, 3, 5, 2, 5];

    for (let j of pp) {
      console.log("==>", j);
    }
    var abc = Array.from([1, 3, 5, 2, 5].keys());
    console.log("abc:- ", abc);

    var map = new Map();
    map.set('name', 'Tutorial Point');
    console.log(map.get('name'));

    var map = new Map();
    map.set(1, true);
    console.log(map.has("1")); //false 

    map.set("1", true);
    console.log(map.has("1")); //true

    var roles = new Map();
    roles.set('r1', 'User')
      .set('r2', 'Guest')
      .set('r3', 'Admin');
    console.log(roles.has('r1'))

    console.log('=============');
    console.log(roles.get('r1'));
    console.log(roles.get('r2'));
    console.log(roles.get('r3'));
    console.log('=====Harish========');

    let x = 44;

    if (x == 10) {
      console.log(`valu is:- ${x}`);
    }
    else {
      console.log(`valu is:- ${x}`);
    }

    var a = 10;
    console.log(a);

    for (var i = 0; i < 5; i++) {
      setTimeout(function () {
        console.log(i);
      }, 1000);
    }


    for (var i = 0; i < 5; i++) {
      (function (j) {
        console.log("--->>>", j + 2);
        document.write("<br>");
      })(i);
    }
    // JavaScript let variables and hoisting

    (function () {
      let foo = 'function scope';
      console.log(foo); // ReferenceError: foo is not defined
    }());


    { // enter new scope, TDZ starts
      let log = function () {
        console.log(foo); // foo declared later
      };

      // This is the TDZ and accessing foo 
      // would cause a ReferenceError

      let foo = 10; // TDZ ends
      log(); // called outside TDZ


    }

    const person1 = Object.freeze({ age: 20 });
    console.log(person1.age);
    const company = Object.freeze({
      name: 'ABC corp',
      address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        zipcode: 95134
      }
    });

    var sc = [4, 66, 7, 8, 9, 3];
    for (let temp of sc) {
      console.log("temp:-", temp);
    }

    var add = function (a, d) {
      return a + d;
    }

    console.log("add:- ", add(5, 6));

    var add1 = (z, x) => z + x;

    console.log("sum", add(4, 5));

    var numbers = [5, 3, 2, 7, 4, 1, -4, 6];
    numbers.sort(function (a, b) {
      return b - a;
    });
    console.log(numbers);

    var numbers1 = [53, 2, 5, 7, 3, 2, 7, 4, 1, -4, 6];
    numbers1.sort((a, b) => b - a);
    console.log(numbers);

    var names = ['John', 'Mac', 'Peter'];
    var lengths = names.map(name => name.length);

    var nn = ["sdf", "fdsfd", "dfgcvb", "vbcvbcvb", "cvbcvb"];
    var len = nn.map(nn => nn.length);

    console.log("------ ", lengths);
    console.log("====== ", len);

    var logDoc = () => console.log("hello......");
    logDoc();

    var mul = (d, g) => d * g;
    console.log(mul(3, 5));


    var setColor = function (color) {
      return { value: color };
    };

    var background = setColor("red");
    console.log(background.value);

    const concat = (...args) => {
      return args.reduce((prev, curr) => prev + '-' + curr);
    };
    let message = concat('JavaScript', 'Rest', 'Parameters'); // =>
    console.log("....", message); // JavaScript Rest Parameters


    var rivers = ['Nile', 'Ganges', 'Yangte'];
    var moreRivers = ['Danube', 'Amazon'];

    Array.prototype.push.apply(rivers, moreRivers);
    console.log(rivers);

    
    let sa = 10, b = 20;
    [sa, b] = [b, sa];
    console.log(sa); // 20
    console.log(b); // 10
  }

  ngOnInit() {
  }

}
