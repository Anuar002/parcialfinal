
import { Injectable,Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Votante} from '../models/votante';
const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string ){

  }

  addTask (votan: Votante): Observable<Votante> {
    return this.http.post<Votante>(this.baseUrl+'api/Candidato', votan, httpOptions).pipe(
    tap((newTask: Votante) => this.log(`added NewTask w/ id=${newTask.id}`)),
    catchError(this.handleError<Votante>('addTask'))
    );
    }


    getAll():Observable<Votante[]>
    {
    return this.http.get<Votante[]>(this.baseUrl+'api/Candidato').pipe(
    tap(_=>this.log('Se Consulta la información')),
    catchError(this.handleError<Votante[]>('getAll',[]))
    );
    }


    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
      };
      }
      /** Log a HeroService message with the MessageService */
      private log(message: string) {
      alert(`TaskService: ${message}`);
      }
}
