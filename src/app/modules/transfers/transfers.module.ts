import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransfersRoutingModule,routingComponents } from './transfers-routing.module';
import { PimaryToolBarModule } from '../pimary-tool-bar/pimary-tool-bar.module';


@NgModule({
  declarations: [
    routingComponents
  ],
  imports: [
    CommonModule,
    TransfersRoutingModule,
    PimaryToolBarModule  
  ]
})
export class TransfersModule { }
