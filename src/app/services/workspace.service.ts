import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WorkspaceInterface } from '../interfaces/workspace.interface';


@Injectable({ providedIn: 'root'})
export class WorkspaceService {

  private readonly urlBase = environment.urlBase;
  private http = inject(HttpClient)

  getWorkspaceByName(name: string): Observable<WorkspaceInterface> {
    return this.http.get<WorkspaceInterface>(`${this.urlBase}/name`);
  }
}
