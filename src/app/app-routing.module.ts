import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { IdiomaCreateComponent } from './components/idiomas/idioma-create/idioma-create.component';
import { IdiomaEditComponent } from './components/idiomas/idioma-edit/idioma-edit.component';
import { IdiomaListComponent } from './components/idiomas/idioma-list/idioma-list.component';

import { FabricanteCreateComponent } from './components/fabricantes/fabricante-create/fabricante-create.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },	
	{ path: 'idioma-create', component: IdiomaCreateComponent },	
	{ path: 'idioma-edit', component: IdiomaEditComponent },	
	{ path: 'idiomas', component: IdiomaListComponent },	

	{ path: 'fabricante-create', component: FabricanteCreateComponent },	


	{ path: 'not-found', component: NotFoundComponent },
	{ path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

