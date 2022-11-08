import { Component, OnInit } from '@angular/core';
import IAccount from 'src/app/modules/account.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  currentAccount:IAccount | undefined
  constructor() { }

  ngOnInit(): void {

  }

  showAccountDetails(account:IAccount):void{
    this.currentAccount = account
  }

}
