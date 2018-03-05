import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from '../app.routing.module';
import { ProjetoComponent } from './projeto.component';
import { ProjetoEditComponent } from './projeto-edit/projeto-edit.component';
import { ProjetoListComponent } from './projeto-list/projeto-list.component';
import { ProjetoService } from './projeto.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatExpansionModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule, MatDatepickerModule } from '@angular/material';



@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        ReactiveFormsModule,
        HttpModule,
        FormsModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatOptionModule,
        MatSelectModule,
        MatInputModule,
        MatDatepickerModule,
        FlexLayoutModule,
        AppRoutingModule

    ],
    declarations: [
        ProjetoComponent,
        ProjetoEditComponent,
        ProjetoListComponent
    ],
    providers: [ProjetoService],
    exports: [
        ProjetoComponent,
        ProjetoEditComponent,
        ProjetoListComponent
    ]
})

export class ProjetoModule {}