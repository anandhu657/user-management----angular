import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/shared/apicall.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  AdminLoginForm!: FormGroup;

  constructor(private apicallService: ApicallService, private router: Router) {
    this.AdminLoginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  OnSubmit() {
    if (this.AdminLoginForm.valid) {
      this.apicallService.adminLogin(this.AdminLoginForm.value).subscribe((res: any) => {
        if (res && res['status'] === 'ok' && res['data']['response']) {
          console.log("working");          
          this.router.navigate(['/admin/dashboard'])
        }
      })
    }
  }
}
