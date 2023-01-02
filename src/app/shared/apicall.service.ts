import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private http: HttpClient) { }

  login(userData: any) {
    return this.http.post('http://localhost:3000/auth/login', userData);
  }

  register(userData: any) {
    return this.http.post('http://localhost:3000/auth/register', userData)
  }

  gotoDashboard(token: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    return this.http.get('http://localhost:3000/auth/dashboard', { headers: headers });
  }

  // uploadImage(token: any, formData: FormData) {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${token}`
  //   })
  //   return this.http.post('http://localhost:3000/auth/image-upload', formData, { headers: headers })
  // }

  uploadImage(data: FormData, token: any) {
    const headers = new HttpHeaders({
      // 'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    console.log("submitting image")
    return this.http.post(`http://localhost:3000/auth/image-upload`, data, { headers: headers });
  }



  adminLogin(userData: any) {
    return this.http.post('http://localhost:3000/admin/login', userData)
  }

  adminDashboard() {
    return this.http.get('http://localhost:3000/admin/dashboard')
  }

  deleteUser(data: any) {
    console.log(data)
    return this.http.post('http://localhost:3000/admin/deleteUser', data)
  }

  searchUser(data: any) {
    return this.http.get(`http://localhost:3000/admin/doUserSearch?name=${data}`)
  }
}
