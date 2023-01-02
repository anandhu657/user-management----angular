import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallService } from '../shared/apicall.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  UserLoginForm: FormGroup

  constructor(private apicallService: ApicallService, private router: Router) {
    this.UserLoginForm = new FormGroup(
      {
        email: new FormControl('', [Validators.email, Validators.required]),
        password: new FormControl('', [Validators.required])
      }
    )
  }

  OnSubmit() {
    if (this.UserLoginForm.valid)
      this.apicallService.login(this.UserLoginForm.value).subscribe((res: any) => {
        if (res && res['status'] === 'ok' && res['data']['response'] && res['data']['authToken']) {
          localStorage.setItem('token', res['data']['authToken']);
          this.router.navigate(['/dashboard'])
        }
      }, (err) => {
        if (err) {
          console.log("we got an error login");

        }
      })
  }


  gotoSignup(){
    this.router.navigate(['/signup']);
  }
}
