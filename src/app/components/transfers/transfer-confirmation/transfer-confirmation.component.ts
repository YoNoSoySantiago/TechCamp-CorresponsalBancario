import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer-confirmation',
  templateUrl: './transfer-confirmation.component.html',
  styleUrls: ['./transfer-confirmation.component.scss']
})
export class TransferConfirmationComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  gonewTransfers(){
    this.route.navigate(['transfer-preparation'])
  }

}
