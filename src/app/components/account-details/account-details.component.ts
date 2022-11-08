import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import IAccount from 'src/app/modules/account.interface';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {

  @Input() account : IAccount | undefined
  @Output() accountDetails: EventEmitter<IAccount> = new EventEmitter<IAccount>()

  constructor() { }

  ngOnInit(): void {

  }
}
