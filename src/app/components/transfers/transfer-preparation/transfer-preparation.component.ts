import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer-preparation',
  templateUrl: './transfer-preparation.component.html',
  styleUrls: ['./transfer-preparation.component.scss']
})
export class TransferPreparationComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  goTranfersVerification(){
    this.route.navigate(['transfer-verification'])
  }


}
