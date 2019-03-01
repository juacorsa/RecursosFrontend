import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-idioma-create',
  templateUrl: './idioma-create.component.html',
  styleUrls: ['./idioma-create.component.css']
})
export class IdiomaCreateComponent implements OnInit {

  form: FormGroup;	  	

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  	this.form = this.fb.group(
  	{
		nombre: ['', Validators.required],
  	});
  }

  onSubmit() {  	 	

   	alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.form.value));
  }
  
  get nombre() { return this.form.get('nombre'); }
}
