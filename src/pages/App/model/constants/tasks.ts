import { Task } from "../types/task";

export const initialTasks: Task[] = [
  { id: 1, title: 'Заказать еду', type: 'food', cost: 5000, completed: true },
  { id: 2, title: 'Украсить елку', type: 'decoration', cost: 2000, completed: false },
  { id: 2, title: 'Украсить квартиру', type: 'decoration', cost: 3000, completed: false },
  { id: 3, title: 'Билеты в кино', type: 'entertainment', cost: 1000, completed: false },
  { id: 3, title: 'Билеты на каток', type: 'entertainment', cost: 1000, completed: false },
  { id: 4, title: 'Обновить подписки', type: 'other', cost: 3000, completed: false },
];

export const taskTypeDirectory: Record<Task['type'] | string, string> = {
  food: 'Еда',
  decoration: 'Декорация',
  entertainment: 'Развлечения',
  other: 'Прочее',
}