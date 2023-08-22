import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from '../components/user-list/user-list.component';

export const LayoutRoutes: Routes = [
    {
        path: '', component: UserListComponent
    },

];