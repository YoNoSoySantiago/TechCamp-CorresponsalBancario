import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PrimaryToolbarComponent} from '../../components/primary-toolbar/primary-toolbar.component'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [PrimaryToolbarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports:[MatToolbarModule,MatIconModule,PrimaryToolbarComponent]
})
export class PimaryToolBarModule { }
