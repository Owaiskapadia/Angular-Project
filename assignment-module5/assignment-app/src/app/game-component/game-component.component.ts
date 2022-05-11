import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-component',
  templateUrl: './game-component.component.html',
  styleUrls: ['./game-component.component.css']
})
export class GameComponentComponent implements OnInit {
  interval!: any;
  lastNumber: number=0;
 @Output() display= new EventEmitter<number>()

  
  gameStarted(){
    this.interval= setInterval(()=>{
      this.display.emit(this.lastNumber+1)
      this.lastNumber++
      console.log(this.lastNumber)
    },1000)


  }
  gameStop(){
  clearInterval(this.interval);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
