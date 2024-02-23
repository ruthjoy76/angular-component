import { Component, OnInit } from '@angular/core';
import { MockApiService } from '../mock-api.service';
import { User } from '../user.model';

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

  constructor(private mockApiService: MockApiService) {}

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.mockApiService.getUsers().subscribe(
      (data: User[]) => {
        console.log('Received data:', data);
        this.users = data;
        this.filteredUsers = this.users;
        this.errorMessage = ''; // Clear any previous error message
      },
      error => {
        console.error('Error fetching users:', error);
        this.errorMessage = 'Error fetching users. Please try again later.';
      }
    );
  }

  filterUsers(gender: string) {
    if (gender === 'all') {
      this.filteredUsers = this.users;
    } else {
      this.filteredUsers = this.users.filter(user => user.Gender.toLowerCase() === gender);
    }
    this.showAll = gender === 'all';
  }
}
