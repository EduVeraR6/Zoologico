import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;
  hide = true;

  constructor (
    private toast: ToastService,
    private fb: FormBuilder,
    private _loginService: LoginService,
    private router: Router
  ){
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ingresar(){
    if(this.form.invalid){
      this.toast.error("Todos los campos son obligatorio","Error");
      return
    }

    this.router.navigate(['administrator'])
  }
}
