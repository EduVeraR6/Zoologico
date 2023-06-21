import { Injectable } from '@angular/core';
import { IUsuario } from '../interfaces/iusuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  comprobacion: boolean = false;
  userLogeado!: IUsuario;

  constructor() { }

  usuarios: IUsuario[] = [
    { id: 1,  user : "maximiliano", password: "123" },
    { id: 1,  user : "eduardo",     password: "123" },
    { id: 1,  user : "odalis",      password: "123" },
  ];

  verificarUser(user: string):boolean{
    this.usuarios.forEach(element => {
      if(element.user === user){
        this.comprobacion = true;
      }
    });
    return this.comprobacion;
  }

  verificarPass(password: string):boolean{
    this.comprobacion = false;
    this.usuarios.forEach(element => {
      if(element.password === password){
        this.comprobacion = true;
      }
    });
    return this.comprobacion;
  }

  verificacionFinal(user: string, password: string): IUsuario{
    this.usuarios.forEach(element =>{
      if(element.user === user && element.password === password){
        this.userLogeado = element;
      }
    });
    return this.userLogeado;
  }

}
