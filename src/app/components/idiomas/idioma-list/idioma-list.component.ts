import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { IdiomasService } from '../../../services/idiomas.service';
import { Idioma } from '../../../models/idioma.model';

@Component({
  selector: 'app-idioma-list',
  templateUrl: './idioma-list.component.html',
  styleUrls: ['./idioma-list.component.css']
})
export class IdiomaListComponent implements OnInit {
  idiomas: Idioma[] = [];
  subscription: Subscription; 
  hayDatos: boolean = true;
  p: number = 1;
  idiomaFilter: any = { nombre: '' };

  constructor(private idiomaService: IdiomasService) { }
  
  ngOnInit() : void {
  	this.obtenerIdiomas();
  }

  obtenerIdiomas() {
  	this.subscription = this.idiomaService.obtenerIdiomas()
  		.subscribe(
  			(res) => {                   
  				this.idiomas = res;          		
  				this.hayDatos = this.idiomas.length > 0;  				
  			},
  			(err) => {          		
		        Swal.fire({
		            type: 'error',
		            title: messages.error,
		            text: err
		        })
        	}
  		)  	
  }

  ngOnDestroy() {
  	this.subscription.unsubscribe()
  }    
}
