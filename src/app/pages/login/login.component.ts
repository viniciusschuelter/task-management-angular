import { Component, effect, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { workspace } from 'src/app/signals/workspace.signal';
import { Router } from '@angular/router';
import { WorkspaceInterface } from '../../interfaces/workspace.interface';
import { WorkspaceService } from '../../services/workspace.service';
import { delay, map, switchMap } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  standalone: true,
  templateUrl: './login.component.html',
  imports: [FormsModule, ReactiveFormsModule, NgIf, AsyncPipe],
})
export class LoginComponent {
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);
  private workspaceService = inject(WorkspaceService);

  userFormGroup: FormGroup = this.fb?.group({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  workpaceExists = false;

  workpaceExists$ = this.userFormGroup
    .get('name')
    ?.valueChanges?.pipe(
      delay(400),
      switchMap((name: string) =>
        this.workspaceService
          .getWorkspaceByName(name)
          .pipe(map(_ => {
            this.workpaceExists = !!_;
            return _
          }))
      )
    );

  constructor() {
    this.userFormGroup.get('name')
    effect(() => console.log(workspace()));
  }
  storageWorkspace(): void {
    workspace.update(() => this.userFormGroup.value as WorkspaceInterface);
    localStorage.setItem('workspace', JSON.stringify(this.userFormGroup.value));
    this.router.navigateByUrl('workspace');
  }

  createWorkspace(): void {
    if (this.userFormGroup.valid) {
      this.workspaceService.postWorkspace(this.userFormGroup.value).subscribe( (workspace) => {
        this.storageWorkspace();
          console.log(workspace);
      })
    }
  }

  accessWorkspace(): void {
    if (this.userFormGroup.valid) {
      this.workspaceService.accessWorkspace(this.userFormGroup.value).subscribe( (workspace) => {
        this.storageWorkspace();
        console.log(workspace);
      })
    }
  }
}
