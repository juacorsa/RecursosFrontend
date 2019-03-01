import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EditorialesService } from '../../../services/editoriales.service';

@Component({
  selector: 'app-editorial-create',
  templateUrl: './editorial-create.component.html',
  styleUrls: ['./editorial-create.component.css']
})
export class EditorialCreateComponent implements OnInit {

 form: FormGroup;	  	

  constructor(private fb: FormBuilder, private editorialService: EditorialesService) { }

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
