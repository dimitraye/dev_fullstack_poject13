import { Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { EmployeeComponent } from './employee/employee.component';

export const routes: Routes = [
    { 
        path: 'client', 
        component: ClientComponent 
    },
    { path: 'employee', component: EmployeeComponent }

    

];
