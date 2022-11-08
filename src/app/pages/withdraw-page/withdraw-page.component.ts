import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-withdraw-page',
  templateUrl: './withdraw-page.component.html',
  styleUrls: ['./withdraw-page.component.scss']
})
export class WithdrawPageComponent implements OnInit {
  firstFormGroup = this.formBuilder.group({
    firstCtrl: ['', Validators.required],
  })
  secondFormGroup = this.formBuilder.group({
    secondCtrl: ['', Validators.required],
  })

  constructor(private route: ActivatedRoute, private router:Router, private formBuilder:FormBuilder) { }

  ngOnInit(): void {

  }

  confirmWithdraw():void{

  }

  cancelWithdraw():void{
    this.router.navigate(['main'])
  }
}
