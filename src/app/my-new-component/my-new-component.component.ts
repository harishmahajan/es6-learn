import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.css']
})
export class MyNewComponentComponent implements OnInit {

  constructor() { 
    // Print 1-5 numbers;
    var main = function() { 
      (function() { 
          for(var x = 0;x<5;x++) { 
            document.write(x.toString() + " ");
          } 
      })(); 
    } 
    main();
    document.write("<br>");
    // Display star pattern
    var star = function(){
      (function(){
        for(var i = 1;i<10;i++){
          for(var j = 1;j<=i;j++){
            document.write("*");
          }
          document.write("<br>");
        }
      })();
    };
    star();
          
    document.write("<br>======================================<br>");

    var star1 = function(){
      (function(){
        for(var i = 1; i<10;i++)
        {
          for(var j = 10-i;j>=1;j--)
          {
            document.write("*");
          }
          document.write("<br>");
        }
      })();
    };

    star1();

    var star2 = function(){
      (function(){
        for(var i=1; i<=9; i++){
          for(var j=1; j<=i; j++){
            document.write(i.toString() + " ");          
          }  
          document.write("<br>");
        }
      })();
    }; 

    star2();   

   void function iife_void() { 
      var msg = function () {
        console.log("hello world");
      }; 
      msg();
       
    }();

  }

  ngOnInit() {
  }

}
