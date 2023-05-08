import { computed, signal } from '@angular/core';
import { WorkspaceInterface } from '../interfaces/workspace.interface';

export const workspace = signal<WorkspaceInterface | null>(
  JSON.parse(localStorage.getItem('workspace') as any)
);

export const isLogged = computed(() => {
  // !user() && !location.href.includes('login') && location.assign('/login');
  return !!workspace();
});

// effect(() => console.log(workspace()));
