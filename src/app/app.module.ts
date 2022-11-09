import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Angular material

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { WithdrawPageComponent } from './pages/withdraw-page/withdraw-page.component';
import { AccountListComponent } from './components/account-list/account-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { AccountCardComponent } from './components/account-card/account-card.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { TransfersModule } from './modules/transfers/transfers.module';
import { PimaryToolBarModule } from './modules/pimary-tool-bar/pimary-tool-bar.module';

@NgModule({
  declarations: [
    AppComponent,
    WithdrawPageComponent,
    AccountListComponent,
    AccountCardComponent,
    PageNotFoundComponent,
    AccountDetailsComponent,
    MainPageComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    TransfersModule,
    PimaryToolBarModule
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
