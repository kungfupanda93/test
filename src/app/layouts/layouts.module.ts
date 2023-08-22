import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutRoutes } from './layouts.routing';
import { RouterModule } from '@angular/router';
// Material Modules Imports //
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { UserListModule } from '../components/user-list/user-list.module';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [LayoutsComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    RouterModule.forChild(LayoutRoutes),
    ReactiveFormsModule,
    FormsModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    UserListModule,
    MatSelectModule,
    MatInputModule,
  ]
})
export class LayoutsModule { }
