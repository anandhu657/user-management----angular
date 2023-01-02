import { Component, OnInit } from '@angular/core';
import { ApicallService } from 'src/app/shared/apicall.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  searchTerm!: string;
  allUsers: any;

  constructor(private apicallService: ApicallService) { }

  ngOnInit(): void {
    this.apicallService.adminDashboard().subscribe((users) => {
      console.log(users);
      this.allUsers = users;
    })
  }

  deleteUser(data: any) {
    this.apicallService.deleteUser(data).subscribe((data) => {
      window.alert("user have been deleted")
      location.reload()
    })
  }

  async search() {
    await this.apicallService.searchUser(this.searchTerm).subscribe((data: any) => {
      this.allUsers = data.data;
    })
  }
}
