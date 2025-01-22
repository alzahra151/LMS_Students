import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Classe } from 'src/app/models/classe';
import { ClassesService } from 'src/app/services/classes/classes.service';
import { StudentsService } from 'src/app/services/students/students.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-signupmain',
  providers:[MatSnackBar],
  templateUrl: './signupmain.component.html',
  styleUrls: ['./signupmain.component.scss']
})
export class SignupmainComponent {
  userForm: FormGroup;
  photoSrc = ''
  classes: Classe[] = []
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private classService: ClassesService,
    private studentService: StudentsService,
    private snackBar: MatSnackBar,
    private route: Router

  ) {
    this.userForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      email: [''],
      user_type: ['student'], // Assuming 'user_type' is a dropdown/select field
      photo: [''], // Assuming 'photo' is a text field
      mobile: [null, [Validators.required, Validators.pattern(/^[0-9]*$/)]], // Assuming 'mobile' is a numeric field
      // role_id: [null, Validators.required],
      class_id: [null, Validators.required],
    },
      {
        validator: this.passwordMatchValidator
      }
    );
  }
  // Getter for all form controls
  get formControls(): { [key: string]: AbstractControl } {
    return this.userForm.controls;
  }

  // Access individual form controls using the getter
  get firstNameControl() {
    return this.userForm.get('first_name');
  }

  get lastNameControl() {
    return this.userForm.get('last_name');
  }

  get passwordControl() {
    return this.userForm.get('password');
  }

  get emailControl() {
    return this.userForm.get('email');
  }

  get userTypeControl() {
    return this.userForm.get('user_type');
  }

  get photoControl() {
    return this.userForm.get('photo');
  }

  get mobileControl() {
    return this.userForm.get('mobile');
  }

  get roleIdControl() {
    return this.userForm.get('role_id');
  }

  get classIdControl() {
    return this.userForm.get('class_id');
  }
  ngOnInit() {
    this.getClasses()
  }
  // Custom Validator
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }
  addUser() {
    const userData = new FormData();
    const formValues = this.userForm.value;

    Object.keys(formValues).forEach(key => {
      userData.append(key, formValues[key]);
    });
    console.log(userData)
    this.studentService.addStudent(userData).subscribe({
      next: (data) => {
        console.log('add sussfuly')
        this.showSuccess('تمت الاضافة بنجاح')
        this.route.navigate(['/login'])
        this.userForm.reset()
      },
      error: (error) => {
        console.log(error.error.message)
        // this.showSuccess('تمت الاضافة بنجاح')
      }
    })
  }
  setFileData(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        this.photoSrc = reader.result as string;
      });
      reader.readAsDataURL(file);
      this.photoControl?.patchValue(file);
      console.log(this.photoControl?.value)
    }
  }
  getClasses() {
    this.classService.getClasses().subscribe({
      next: (response) => {
        this.classes = response.result.classes;
        console.log(this.classes)
      }, error: (error) => {
        console.log(error)
      }
    })
  }
  private getSnackBarConfig(panelClass: string, duration: number): MatSnackBarConfig {
    return {
      duration: duration,
      panelClass: [panelClass],
      horizontalPosition: 'end',  // Adjust as needed: 'start' | 'center' | 'end' | 'left' | 'right'
      verticalPosition: 'top'        // Adjust as needed: 'top' | 'bottom'
    };
  }
  showSuccess(message: string, duration: number = 3000) {
    const config = this.getSnackBarConfig('success-snackbar', duration);
    this.snackBar.open(message, 'Close', config);
  }
}
