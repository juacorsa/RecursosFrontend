import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//import { Subscription } from 'rxjs/Subscription';

import { IdiomasService } from '../../../services/idiomas.service';
import { ToastrService } from 'ngx-toastr';
import { messages } from '../../../../shared/messages';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-idioma-create',
  templateUrl: './idioma-create.component.html',
  styleUrls: ['./idioma-create.component.css']
})
export class IdiomaCreateComponent implements OnInit {
  form: FormGroup;	
  //subscription: Subscription;  	

  constructor(private fb: FormBuilder, 
              private toastr: ToastrService, 
              private idiomaService: IdiomasService) { }

  ngOnInit() : void {
    this.form = this.fb.group(
  	{
		  nombre: ['', Validators.required]
  	});
  }

  onSubmit() {  	 	
    const idioma = {
      "nombre": this.form.value.nombre
    }    
   
    this.idiomaService.registrarIdioma(idioma)
      .subscribe(
        (res) => {
          this.form.reset();
          this.toastr.success(messages.idioma_registrado, messages.enhorabuena);
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
    //this.subscription.unsubscribe()
 }    
  
  get nombre() { return this.form.get('nombre'); }
}
