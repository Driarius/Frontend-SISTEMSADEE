import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, FormControlDirective, FormDirective, FormLabelDirective, FormSelectDirective, RowComponent, TableActiveDirective, TableColorDirective, TableDirective, TextColorDirective } from '@coreui/angular';
import { DocsExampleComponent } from '@docs-components/public-api';

@Component({
  selector: 'app-operador',
  standalone: true,
  imports: [ RowComponent, ColComponent, CardComponent,
    CardHeaderComponent, CardBodyComponent,
    ReactiveFormsModule ,FormsModule, FormDirective,
    FormSelectDirective,FormControlDirective,
     FormLabelDirective, ButtonDirective, NgStyle,
     TextColorDirective,
     TableDirective, TableColorDirective, TableActiveDirective
  ],
  templateUrl: './operador.component.html',
  styleUrl: './operador.component.scss'
})
export class OperadorComponent {

}
