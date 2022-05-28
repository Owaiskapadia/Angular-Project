import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountServices } from '../accounts.services';
import { loggingServices } from '../logging.services';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private loggingservices: loggingServices, private accountservices: AccountServices){}

  onSetTo( status: string) {
    // this.statusChanged.emit({id: this.id, newStatus: status});
    this.accountservices.updateAccount(this.id,status)
    // this.loggingservices.logStatus(status)
    // console.log('A server status changed, new status: ' + status);
  }
}
