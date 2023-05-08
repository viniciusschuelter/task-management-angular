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

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [FormsModule, ReactiveFormsModule],
})
export class LoginComponent {
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);

  userFormGroup: FormGroup = this.fb?.group({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor() {
    effect(() => console.log(workspace()));
  }

  onLogin(): void {
    if (this.userFormGroup.valid) {
      workspace.update(() => this.userFormGroup.value as WorkspaceInterface);
      localStorage.setItem(
        'workspace',
        JSON.stringify(this.userFormGroup.value)
      );
      this.router.navigateByUrl('home');
    }
  }
}
