import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import IAccount from 'src/app/model/account.interface';

@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.scss']
})
export class AccountCardComponent implements OnInit {

  @Input() account: IAccount | undefined
  @Output() accountDetails: EventEmitter<IAccount> = new EventEmitter<IAccount>()
  constructor() { }

  ngOnInit(): void {

  }

  showAccountDetails():void{
    this.accountDetails.emit(this.account)
  }
}
