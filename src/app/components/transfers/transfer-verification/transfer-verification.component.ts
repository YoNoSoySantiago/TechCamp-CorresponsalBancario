import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer-verification',
  templateUrl: './transfer-verification.component.html',
  styleUrls: ['./transfer-verification.component.scss']
})
export class TransferVerificationComponent implements OnInit {

  constructor(private route:Router) { }


  ngOnInit(): void {
  }
  goTranfersConfirmation(){
    this.route.navigate(['transfer-confirmation'])
  }

  goTranfersReturn(){
    this.route.navigate(['transfer-preparation'])
  }

  goTranfersCancel(){
    this.route.navigate(['main'])
  }

}
