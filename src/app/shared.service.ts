import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://localhost:44365/api";
  readonly PhotoURL = "http://localhost:44365/Photos";

  constructor(private http:HttpClient) { }

  getDepList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/department');
  }
  addDepartment(val:any){
    return this.http.post(this.PhotoURL+'/Department',val)
  }
  updateDepartment(val:any){
    return this.http.put(this.APIUrl+'/Department',val);
  }
  deleteDepartment(val:any){
    return this.http.delete(this.APIUrl+'/Department/'+val);
  }


  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/employee');
  }
  addEmployee(val:any){
    return this.http.post(this.PhotoURL+'/Employeet',val)
  }
  updateEmployeet(val:any){
    return this.http.put(this.APIUrl+'/Employeet',val);
  }
  deleteEmployeet(val:any){
    return this.http.delete(this.APIUrl+'/Employeet/'+val);
  }
  uploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Employee/SaveFile',val); 
  }
  getAllDepartmentNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Employee/GetAllDepaetmentNames');
  }
}
