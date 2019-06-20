import { Injectable } from '@angular/core';
import { Student } from '../student.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

students: Student[] = [{
    id: 1,
    name: 'Anish',
    EnrollmentNumber: 110470116021,
    College: 'VVP Engineering College',
    University: 'GTU'
},
{
    id: 2,
    name: 'Rishi',
    EnrollmentNumber: 110470116023,
    College: 'VVP Engineering College',
    University: 'GTU'
},
{
    id: 3,
    name: 'Aakash',
    EnrollmentNumber: 110470116022,
    College: 'VVP Engineering College',
    University: 'GTU'
}];


  constructor() { }

  public getStudents(): any {
    const studentsObservable = new Observable(observer => {
           setTimeout(() => {
               observer.next(this.students);
           }, 1000);
    });
    this.students.push({
        id: 4,
        name: 'Ajumal',
        EnrollmentNumber: 110470116024,
        College: 'VVP Engineering College',
        University: 'GTU'
      });
    return studentsObservable;
}

}
