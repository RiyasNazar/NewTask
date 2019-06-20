import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { Student } from './student.model';
import { StudentService } from './service/student.service';
import { of } from 'rxjs';

// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  // template: `<h1>{{title}}</h1>
  // /<ul>
  // //  / <h2>My favorite hero is: {{myHero}}</h2>
  // // <p>Heroes:</p>
  // //  <li *ngFor="let hero of heroes">
  // //     {{ hero }}
  // //   </li>
  // // </ul>
  // // <app-trial> /app-trial>`
})

// export class AppComponent {
//   // title = 'Favourite Heroes';
//   // heroes = ['Ajumal', 'Aakash', 'Arun', 'Ajay'];
//   // myHero = this.heroes;
//   // array = [];
//   // onClick() {
//   //   alert('NotValid');
//   // }
//   registerForm: FormGroup;
//     submitted = false;

//     constructor(private formBuilder: FormBuilder) { }
//     // tslint:disable-next-line:use-life-cycle-interface
//     ngOnInit() {
//         this.registerForm = this.formBuilder.group({
//             firstName: ['', Validators.required],
//             lastName: ['', Validators.required],
//             email: ['', [Validators.required, Validators.email]],
//             password: ['', [Validators.required, Validators.minLength(6)]]
//         });
//     }
//     get f() { return this.registerForm.controls; }

//     onSubmit() {
//         this.submitted = true;

//         // stop here if form is invalid
//         if (this.registerForm.invalid) {
//             return;
//         }

//         alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
//     }
// }



// './app.component.html',

export class AppComponent implements OnInit {

    students: Student[] = [];

    constructor(private studentservice: StudentService) {}

    ngOnInit() {
        const studentsObservable = this.studentservice.getStudents();
        studentsObservable.subscribe((studentsData: Student[]) => {
            this.students = studentsData;
            // console.log(this.students);
        });
        // const squareOf2 = of(1, 2, 3, 4, 5, 6)
        // .pipe(
        //   filter(num => num % 2 === 0),
        //   map(num => num * num)
        // );
        // squareOf2.subscribe( (num) => console.log(num));
    }
    onClickMe() {
        this.studentservice.students.push({
            id: 4,
            name: 'Ajumal',
            EnrollmentNumber: 110470116024,
            College: 'VVP Engineering College',
            University: 'GTU'
        });
    }
}
