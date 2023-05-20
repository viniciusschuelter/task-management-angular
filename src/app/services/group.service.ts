import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GroupInterface } from '../interfaces/group.interface';

@Injectable({ providedIn: 'root' })
export class GroupService {
  private readonly urlBase = `${environment.urlBase}/group`;
  private http = inject(HttpClient);

  getGroupsByWorkspace(workspaceId: string): Observable<GroupInterface[]> {
    return this.http.get<GroupInterface[]>(`${this.urlBase}s/${workspaceId}`);
  }

  postGroupByWorkspace(group: GroupInterface): Observable<GroupInterface> {
    return this.http.post<GroupInterface>(this.urlBase, group);
  }
}
