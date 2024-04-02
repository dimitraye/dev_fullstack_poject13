import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  { path: 'client', component: ClientComponent }, // Définissez la route pour le composant ClientComponent
  { path: 'employee', component: EmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
