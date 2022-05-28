import { Component, EventEmitter, Output } from '@angular/core';
import { AccountServices } from '../accounts.services';
import { loggingServices } from '../logging.services';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingservices: loggingServices, private accountservices: AccountServices){}

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    this.accountservices.addAccount(accountName,accountStatus)
    
    // this.loggingservices.logStatus(accountStatus)
    // console.log('A server status changed, new status: ' + accountStatus);
  }
}
