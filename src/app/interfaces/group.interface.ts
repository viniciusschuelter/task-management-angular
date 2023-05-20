import { WorkspaceInterface } from './workspace.interface';

export interface GroupInterface {
  id?: string;
  title: string;
  description?: string;
  color?: string;
  workspace?: WorkspaceInterface;
}
