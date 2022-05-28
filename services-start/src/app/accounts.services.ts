import { Injectable } from "@angular/core";
import { loggingServices } from "./logging.services";

@Injectable()
export class AccountServices{

  constructor(private loggingservices: loggingServices){}
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      addAccount(name:string, status: string){
            this.accounts.push({name: name, status: status})
            this.loggingservices.logStatus(status)
      }

      updateAccount(id: number, status: string){
        this.accounts[id].status = status;
        this.loggingservices.logStatus(status)

      }


}