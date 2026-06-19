import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export abstract class crudService<T>{
    protected constructor(
        protected http:HttpClient,
        protected apiUrl:string
    ) {}

    list(): Observable<T[]>{
        return this.http.get<T[]>(this.apiUrl);
    }
}