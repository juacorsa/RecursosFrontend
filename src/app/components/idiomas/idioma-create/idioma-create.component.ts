import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { IdiomasService } from '../../../services/idiomas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-idioma-create',
  templateUrl: './idioma-create.component.html',
  styleUrls: ['./idioma-create.component.css']
})
export class IdiomaCreateComponent implements OnInit {

  form: FormGroup;	  	

  constructor(private fb: FormBuilder, private idiomaService: IdiomasService) { }

  ngOnInit() {
    this.form = this.fb.group(
  	{
		  nombre: ['', Validators.required]
  	});
  }

  onSubmit() {  	 	

   	//alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.form.value));   
    /*
    Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href>Why do I have this issue?</a>'
      })*/

  }

  
  get nombre() { return this.form.get('nombre'); }
}
