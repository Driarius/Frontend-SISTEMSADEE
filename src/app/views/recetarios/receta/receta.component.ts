import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, FormControlDirective, FormDirective, FormLabelDirective, FormSelectDirective, RowComponent, TableActiveDirective, TableColorDirective, TableDirective, TextColorDirective } from '@coreui/angular';

@Component({
  selector: 'app-receta',
  standalone: true,
  imports: [RowComponent, ColComponent, CardComponent,  
            CardHeaderComponent, CardBodyComponent,
            ReactiveFormsModule ,FormsModule, FormDirective,
            FormSelectDirective,FormControlDirective,
             FormLabelDirective, ButtonDirective, NgStyle,
             TextColorDirective,
             TableDirective, TableColorDirective, TableActiveDirective],
  templateUrl: './receta.component.html',
  styleUrl: './receta.component.scss'
})
export class RecetaComponent {

}
