import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, NonNullableFormBuilder} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { error } from 'console';

import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.scss'
})
export class CourseFormComponent {

  form = this.formBuilder.group({
    name: [''],
    category: ['']
  });

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: CoursesService,
    private _snackBar: MatSnackBar,
    private location: Location
  ){

  }

  onSubmit(){
    this.service.save(this.form.value)
    .subscribe(result => this.onSuccess(),error => this.onError());
  }

  onCancel(){
    this.location.back();
  }

  private onSuccess(){
    this._snackBar.open('Curso salvo com sucesso','', {duration: 5000})
    this.onCancel();
  }

  private onError(){
    this._snackBar.open('Erro ao salvar curso','', {duration: 5000})
  }
}
