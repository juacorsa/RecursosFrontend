import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AutofocusDirective } from './directives/auto-focus.directive';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IdiomaCreateComponent } from './components/idiomas/idioma-create/idioma-create.component';
import { IdiomaEditComponent } from './components/idiomas/idioma-edit/idioma-edit.component';
import { IdiomaListComponent } from './components/idiomas/idioma-list/idioma-list.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FabricanteCreateComponent } from './components/fabricantes/fabricante-create/fabricante-create.component';
import { FabricanteEditComponent } from './components/fabricantes/fabricante-edit/fabricante-edit.component';
import { FabricanteListComponent } from './components/fabricantes/fabricante-list/fabricante-list.component';
import { EditorialListComponent } from './components/editoriales/editorial-list/editorial-list.component';
import { EditorialCreateComponent } from './components/editoriales/editorial-create/editorial-create.component';
import { EditorialEditComponent } from './components/editoriales/editorial-edit/editorial-edit.component';
import { TemaEditComponent } from './components/temas/tema-edit/tema-edit.component';
import { TemaCreateComponent } from './components/temas/tema-create/tema-create.component';
import { TemaListComponent } from './components/temas/tema-list/tema-list.component';
import { ValoracionListComponent } from './components/valoraciones/valoracion-list/valoracion-list.component';
import { ValoracionCreateComponent } from './components/valoraciones/valoracion-create/valoracion-create.component';
import { ValoracionEditComponent } from './components/valoraciones/valoracion-edit/valoracion-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AutofocusDirective,
    NavbarComponent,
    IdiomaCreateComponent,
    IdiomaEditComponent,
    IdiomaListComponent,
    HomeComponent,
    NotFoundComponent,
    FabricanteCreateComponent,
    FabricanteEditComponent,
    FabricanteListComponent,
    EditorialListComponent,
    EditorialCreateComponent,
    EditorialEditComponent,
    TemaEditComponent,
    TemaCreateComponent,
    TemaListComponent,
    ValoracionListComponent,
    ValoracionCreateComponent,
    ValoracionEditComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,    
    HttpClientModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
