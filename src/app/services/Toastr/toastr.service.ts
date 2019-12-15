import { Injectable } from '@angular/core';
import { ToastrTimeOut } from 'src/app/Constants/Toastr/toastrTimeOut';
import { ToastrExtendedTimeOut } from 'src/app/Constants/Toastr/toastrExtendedTimeOut';

declare let toastr: any;

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  constructor() {
    this.setDefaultToastTimeout();

    toastr.options.progressBar = true;
  }

  public setDefaultToastTimeout() {
    toastr.options.timeOut = ToastrTimeOut;
    toastr.options.extendedTimeOut = ToastrExtendedTimeOut;
  }

  public setPermanentToast() {
    toastr.options.timeOut = 0;
    toastr.options.extendedTimeOut = 0;
  }

}


