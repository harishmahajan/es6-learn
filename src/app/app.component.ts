import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public tt:any;
  title = 'app';
  constructor(){
    this.arithmaticOpe();
  }

  // Arithatic operations = - * /
  arithmaticOpe(){
    var sum = (a,b) => a + b;
    this.messageBox("sum is " + sum(5,6));
    console.log(sum(5,6));

    var sub = (p,q) => p - q;
    this.messageBox("sub is " + sub(5,2));

    console.log(sub(5,2));

    var mul = (m,n) => m * n;
    this.messageBox("mul is " + mul(3,5));
    console.log(mul(3,5));
    
    var d = (r,t) => r/t;
    this.messageBox("div is " + d(8,4));
    console.log(d(8,4));
  }

  // Message Box
  messageBox(msg)
  {
    alert(msg);
  }


}
