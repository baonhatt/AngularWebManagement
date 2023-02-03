import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './component/department/department.component';
import { ShowDepComponent } from './component/show-dep/show-dep.component';
import { AddEditComponent } from './component/add-edit/add-edit.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { ShowEmpComponent } from './component/show-emp/show-emp.component';
import { AddEditEmpComponent } from './component/add-edit-emp/add-edit-emp.component';
import  {SharedService} from './shared.service';
import  {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    ShowDepComponent,
    AddEditComponent,
    EmployeeComponent,
    ShowEmpComponent,
    AddEditEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
