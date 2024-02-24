import { Component, OnInit } from '@angular/core';
import { MockApiService } from '../mock-api.service';
import { User } from '../user.model';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  showAll: boolean = true;
  errorMessage: string = '';

  constructor(private mockApiService: MockApiService, private ngZone: NgZone) {}

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.mockApiService.getUsers().subscribe(
      (data: any) => {
        if (data && data.users && Array.isArray(data.users)) {
          console.log('Received data:', data.users);
          this.ngZone.run(() => {
            this.users = data.users;
            this.filteredUsers = this.users;
            this.errorMessage = ''; 
          });
        } else {
          console.error('Invalid data structure. Expected array in "users" property:', data);
          this.errorMessage = 'Error fetching users. Please try again later.';
        }
      },
      error => {
        console.error('Error fetching users:', error);
        this.errorMessage = 'Error fetching users. Please try again later.';
      }
    );
  }
  

  filterUsers(gender: string) {
    console.log('Filtering users with gender:', gender);
    console.log('All users:', this.users);
  
    if (gender === 'all') {
      this.filteredUsers = this.users;
    } else {
      this.filteredUsers = this.users.filter(user => {
        const userGender = user?.gender?.toLowerCase(); 
        return userGender === gender.toLowerCase();
      });
    }
    this.showAll = gender === 'all';
  }
  
}
