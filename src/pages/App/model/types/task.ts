export interface Task {
  id: number;
  title: string;
  type: 'food' | 'decoration' | 'entertainment' | 'other';
  cost: number;
  completed: boolean;
}
