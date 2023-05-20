import { Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { KanbanColumnComponent } from '../../components/kanban-column/kanban-column.component';
import { WorkspaceInterface } from '../../interfaces/workspace.interface';
import { GroupService } from '../../services/group.service';
import { Observable } from 'rxjs';
import { GroupInterface } from '../../interfaces/group.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { KanbanAddComponent } from '../../components/kanban-add/kanban-add.component';

@Component({
  standalone: true,
  templateUrl: './workspace.components.html',
  imports: [NgIf, NgFor, AsyncPipe, KanbanColumnComponent, KanbanAddComponent],
})
export class WorkspaceComponent {
  private groupService = inject(GroupService);
  private activatedRoute = inject(ActivatedRoute);

  workspace: WorkspaceInterface = this.activatedRoute.snapshot.data as any;

  groups$: Observable<GroupInterface[]> = this.groupService
    .getGroupsByWorkspace(this.workspace.id || '')
    .pipe();

  addGroup(group: GroupInterface): void {
    this.groupService.postGroupByWorkspace({ ...group, workspace: this.workspace }).subscribe()
  }
}
