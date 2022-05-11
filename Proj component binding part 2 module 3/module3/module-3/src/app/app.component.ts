import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'TestingServer', content: "Testing this server"}];
 
  onAddServer(serverData:{serverName: string, serverContent: string}) {
    // console.log("Server added fire hua")
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onAddBlueprint(blueprintData:{serverName: string, serverContent: string}) {
    // console.log("Blueprint added fire hua")
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
    // console.log(this.serverElements) 
  }
  
}
