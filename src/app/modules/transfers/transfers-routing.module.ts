import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TransferPreparationComponent} from "../../components/transfers/transfer-preparation/transfer-preparation.component"
import {TransferVerificationComponent} from "../../components/transfers/transfer-verification/transfer-verification.component"
import {TransferConfirmationComponent} from "../../components/transfers/transfer-confirmation/transfer-confirmation.component"

const routes: Routes = [
{
  path:'transfer-preparation' , 
  component:TransferPreparationComponent
},

{
  path:'transfer-verification' , 
  component:TransferVerificationComponent
},

{
  path:'transfer-confirmation' , 
  component:TransferConfirmationComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransfersRoutingModule { }
export const routingComponents = [TransferPreparationComponent,TransferVerificationComponent,TransferConfirmationComponent]
