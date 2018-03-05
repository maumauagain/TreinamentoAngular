import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { ColaboradorModule } from './colaborador/colaborador.module';
import { AppRoutingModule } from './app.routing.module';
import { ProjetoModule } from './projeto/projeto.module';
import { AppComponent } from './app.component';
import { ProjetoComponent } from './projeto/projeto.component';
import { ProjetoListComponent } from './projeto/projeto-list/projeto-list.component';
import { ProjetoEditComponent } from './projeto/projeto-edit/projeto-edit.component';
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
  MatFormFieldModule,
  MatOptionModule,
  MAT_LABEL_GLOBAL_OPTIONS,
  MAT_DATE_LOCALE,
  MatSidenavContainer,
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpModule,
    FlexLayoutModule,
    ColaboradorModule,
    ProjetoModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatOptionModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    LayoutModule,
    AppRoutingModule
  ],
  entryComponents: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

