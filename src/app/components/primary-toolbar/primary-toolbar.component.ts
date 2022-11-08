import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-primary-toolbar',
  templateUrl: './primary-toolbar.component.html',
  styleUrls: ['./primary-toolbar.component.scss']
})
export class PrimaryToolbarComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  goMainMenu():void {
    this.route.navigate(['/'])
  }
}
