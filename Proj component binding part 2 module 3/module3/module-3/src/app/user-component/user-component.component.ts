import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {
  newServerName = '';
  newServerContent = '';
  
  @Output() serverCreated= new EventEmitter<{serverName: string, serverContent: string}>()
  @Output() blueprintCreated= new EventEmitter<{serverName: string, serverContent: string}>()
  
  constructor() { }
  ngOnInit(): void {
  }
  onAddServer() {
    // console.log("click pe fire")
  this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent}),
  this.newServerName = '';
  this.newServerContent = '';
  }

  onAddBlueprint() {
    // console.log("click pe blue fire")
    this.blueprintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent}),
    this.newServerName = '';
    this.newServerContent = '';  }
}
