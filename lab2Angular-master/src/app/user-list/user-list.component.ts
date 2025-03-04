import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  searchTerm = '';
  users = [
    {image: "https://dummyjson.com/icon/emilys/128", username: 'Emily Johnson', email: 'emily.johnson@x.dummyjson.com', phone: '+81 965-431-3024', birthdate: '1996-5-30', role: 'admin' },
    {image: "https://dummyjson.com/icon/michaelw/128", username: 'Michael Williams', email: 'michael.williams@x.dummyjson.com', phone: '+49 258-627-6644', birthdate: '1989-8-10', role: 'user' },
    {image: "https://dummyjson.com/icon/sophiab/128", username: 'Sophia Brown', email: 'sophia.brown@x.dummyjson.com', phone: '+81 210-652-2785', birthdate: '1982-11-6', role: 'moderator' },
    {image: "https://dummyjson.com/icon/jamesd/128", username: 'James Davis', email: 'james.davis@x.dummyjson.com', phone: '+49 614-958-9364', birthdate: '1979-5-4', role: 'user' },
    {image: "https://dummyjson.com/icon/emmaj/128", username: 'Emma Miller', email: "emma.miller@x.dummyjson.com", phone: '+91 759-776-1614', birthdate: '1994-6-13', role: 'admin' },
    {image: "https://dummyjson.com/icon/oliviaw/128", username: 'Olivia Wilson', email: 'olivia.wilson@x.dummyjson.com', phone: '+91 607-295-6448', birthdate: '2002-4-20', role: 'moderator' },
  ];

  filteredUsers = [...this.users];

  getRoleClass(role: string) {
    return {
      'bg-danger text-white p-1 rounded': role === 'admin',
      'bg-success text-white p-1 rounded': role === 'user',
      'bg-warning text-dark p-1 rounded': role === 'moderator'
    };
  }

  searchUsers() {
    this.filteredUsers = this.users.filter(user =>
      user.username.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
