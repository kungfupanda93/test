import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Componenets Imports //
import { UserListComponent } from './user-list.component';
// Service Import//
import { UsersService } from 'src/shared/services/users.service';
// Material Modules Imports //
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatButtonModule,
  ],
  providers: [UsersService]
})
export class UserListModule { }
