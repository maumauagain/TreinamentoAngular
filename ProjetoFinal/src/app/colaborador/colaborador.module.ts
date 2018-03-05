import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColaboradorComponent } from './colaborador.component';
import { ColaboradorListComponent } from './colaborador-list/colaborador-list.component';
import { ColaboradorEditComponent } from './colaborador-edit/colaborador-edit.component';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from '../app.routing.module';
import { ColaboradorService } from './colaborador.service';
import {MatExpansionModule} from '@angular/material/expansion';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule, MatOptionModule, MatSelectModule } from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
    declarations: [
        ColaboradorComponent,
        ColaboradorListComponent,
        ColaboradorEditComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        MatExpansionModule,
        MatDividerModule,
        MatInputModule,
        MatOptionModule,
        MatSelectModule,
        MatDatepickerModule,
        FlexLayoutModule,
        AppRoutingModule
    ],
    exports: [
        ColaboradorComponent,
        ColaboradorListComponent,
        ColaboradorEditComponent
    ],
    providers: [ColaboradorService]
})

export class ColaboradorModule {}