import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastr: ToastrService) { }

  success(message: string, title: string){
    this.toastr.success(title, message)
  }

  error(message: string, title: string){
    this.toastr.error(title, message)
  }

  warning(message: string, title: string){
    this.toastr.warning(title, message)
  }

  info(message: string, title: string){
    this.toastr.info(title, message)
  }
}
