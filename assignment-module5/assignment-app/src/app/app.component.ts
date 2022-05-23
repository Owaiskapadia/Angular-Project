import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // numbers = [1, 2, 3, 4, 5];
  oddNumber=[1,3,5];
  evenNumber=[2,4]
  onlyOdd = false;
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;
  ngOnInit(){
    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
  };
  this.myParams = {
    particles: {
        number: {
            value: 200,
        },
        color: {
            value: '#ff0000'
        },
        shape: {
            type: 'triangle',
        },
}
};
}

}
