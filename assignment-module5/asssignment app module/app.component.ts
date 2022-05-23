import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment-app';
  
  
  
  OddNumbers=[];
  EvenNumbers=[]


  newComp(event:number){
    if (event%2!==0) {
      this.OddNumbers.push(event)  
      
    }
    else{
      this.EvenNumbers.push(event)
    }
    
  }
}
