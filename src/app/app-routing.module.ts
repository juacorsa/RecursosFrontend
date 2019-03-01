import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { IdiomaCreateComponent } from './components/idiomas/idioma-create/idioma-create.component';
import { IdiomaEditComponent } from './components/idiomas/idioma-edit/idioma-edit.component';
import { IdiomaListComponent } from './components/idiomas/idioma-list/idioma-list.component';


import { EditorialListComponent } from './components/editoriales/editorial-list/editorial-list.component';
import { EditorialCreateComponent } from './components/editoriales/editorial-create/editorial-create.component';

import { ValoracionListComponent } from './components/valoraciones/valoracion-list/valoracion-list.component';
import { ValoracionCreateComponent } from './components/valoraciones/valoracion-create/valoracion-create.component';

import { TemaListComponent } from './components/temas/tema-list/tema-list.component';
import { TemaCreateComponent } from './components/temas/tema-create/tema-create.component';

import { FabricanteCreateComponent } from './components/fabricantes/fabricante-create/fabricante-create.component';
import { FabricanteListComponent } from './components/fabricantes/fabricante-list/fabricante-list.component';


const routes: Routes = [
	{ path: '', component: HomeComponent },	
	{ path: 'idiomas', component: IdiomaListComponent },	
	{ path: 'idioma-create', component: IdiomaCreateComponent },	
	{ path: 'idioma-edit', component: IdiomaEditComponent },	
	
	{ path: 'editoriales', component: EditorialListComponent },	
	{ path: 'editorial-create', component: EditorialCreateComponent },	

	{ path: 'temas', component: TemaListComponent },		
	{ path: 'tema-create', component: TemaCreateComponent },	

	{ path: 'valoraciones', component: ValoracionListComponent },	
	{ path: 'valoracion-create', component: ValoracionCreateComponent },	


	{ path: 'fabricantes', component: FabricanteListComponent },	
	{ path: 'fabricante-create', component: FabricanteCreateComponent },	


	{ path: 'not-found', component: NotFoundComponent },
	{ path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

