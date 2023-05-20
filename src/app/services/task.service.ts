import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GroupInterface } from '../interfaces/group.interface';
import { TaskInterface } from '../interfaces/task.interface';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private readonly urlBase = `${environment.urlBase}/task`;
  private http = inject(HttpClient);

  getTasksByGroup(groupId: string): Observable<TaskInterface[]> {
    return this.http.get<TaskInterface[]>(`${this.urlBase}s/${groupId}`);
  }

  postTaskByGroup(task: TaskInterface): Observable<TaskInterface> {
    return this.http.post<TaskInterface>(this.urlBase, task);
  }
}
