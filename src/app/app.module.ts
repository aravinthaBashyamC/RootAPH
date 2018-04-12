import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Routes, RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import  {dataServices} from './app.services';
import {userFiles} from '../listOfUserData/userFiles';
import {EditSave} from '../EditSave/EditSave';
//import {GooglePlaceModule} from 'ng2-google-place-autocomplete';
import { HttpClientModule } from '@angular/common/http'; import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';

import {MatFormFieldModule} from '@angular/material/form-field';

import { GooglePlaceModule } from "ngx-google-places-autocomplete";

 
 import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
//import { MaterialModule } from './material.module';
@NgModule({
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ]
})
export class DemoMaterialModule {}
const routes: Routes = [
 { path: '', component: userFiles },
 { path: 'EditSave', component: EditSave }
];

@NgModule({
  declarations: [
    AppComponent
    ,userFiles
    ,EditSave
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    HttpModule,
    DemoMaterialModule,
   // NativeDateAdapter,
   // MaterialModule,
   GooglePlaceModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {useHash: true})
    //GooglePlaceModule
  ],
  exports: [MatButtonModule],
  providers: [dataServices],
  bootstrap: [AppComponent]
})

export class AppModule { }
