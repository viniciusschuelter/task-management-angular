import { GroupInterface } from './group.interface';

export interface TaskInterface {
  id?: string;
  title: string;
  description?: string;
  color?: string;
  group?: GroupInterface;
}
