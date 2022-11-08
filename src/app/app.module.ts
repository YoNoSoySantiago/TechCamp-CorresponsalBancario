import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimaryToolbarComponent } from './components/primary-toolbar/primary-toolbar.component';

//Angular material

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
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
import { MatInputModule } from '@angular/material/input'
@NgModule({
  declarations: [
    AppComponent,
    PrimaryToolbarComponent,
    MainPageComponent,
    WithdrawPageComponent,
    AccountListComponent,
    AccountCardComponent,
    PageNotFoundComponent,
    AccountDetailsComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
