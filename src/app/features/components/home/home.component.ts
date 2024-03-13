import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    name: string  = "John Doe";
    email: string = "john.doe@gmail.com";
  

    constructor(){
      console.log(this.name);
    }
}
