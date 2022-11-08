import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import IAccount from 'src/app/modules/account.interface';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {

  @Output() accountDetails: EventEmitter<IAccount> = new EventEmitter<IAccount>()
  @Input() accountList: IAccount[] = [
    {
      accountType:"Ahorros",
      accountNumber: "A00362570",
      money:60000
    },
    {
      accountType:"CDT",
      accountNumber: "A00352523",
      money:2000
    },
    {
      accountType:"FIC",
      accountNumber: "A02362320",
      money:16000
    },
    {
      accountType:"Ahorros",
      accountNumber: "A01908270",
      money:1200000
    }
  ]

  constructor() { }

  ngOnInit(): void {
    this.showAccountDetails(this.accountList[0])
  }

  showAccountDetails(account:IAccount):void{
    this.accountDetails.emit(account)
  }

}
