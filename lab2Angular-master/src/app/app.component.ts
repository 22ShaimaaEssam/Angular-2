import { Component } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserListComponent],
  template: `
    <div class="container mt-4">
      <h1>Users</h1>
        <app-user-list></app-user-list>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
