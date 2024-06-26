import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from '../model/course';
import { delay, first, tap } from 'rxjs';
import { environment } from '../../../../enviroments';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = environment.apiUrl + '/courses';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(),
      //delay(5000),
      tap(courses => console.log(courses))
    );
  }

  save(record: Partial<Course>){
    return this.httpClient.post<Course>(this.API, record).pipe(first());
  }
}
