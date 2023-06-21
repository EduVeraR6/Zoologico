import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUsuario } from 'src/app/interfaces/iusuario';
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
  usuarioLogeado!: IUsuario;


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
      this.toast.error("Campos vacíos","Error");
      return
    }
    
    const usuario: IUsuario ={
      user:       this.form.value.usuario,
      password:   this.form.value.password
    }

    if(!this._loginService.verificarUser(usuario.user)){
      this.toast.error("Usuarios ingresado no éxiste","Lo sentimos");
      return
    }

    if(!this._loginService.verificarPass(usuario.password)){
      this.toast.warning("Contraseña invalida","Intente de nuevo");
      return
    }

    if(this._loginService.verificacionFinal(usuario.user, usuario.password)){
      this.usuarioLogeado = this._loginService.verificacionFinal(usuario.user, usuario.password)
      this.router.navigate(['/administrator'],{
        state:{
          data: this.usuarioLogeado
        }
      })
      this.toast.success("Bienvenido "+this.usuarioLogeado.user,"Enhorabuena")
    }
  }
}
