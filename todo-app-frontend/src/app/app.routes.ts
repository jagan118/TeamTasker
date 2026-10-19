// src/app/app.routes.ts

import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard';
import { TodoListComponent } from './components/todo/todo-list/todo-list/todo-list';
import { AddTodoComponent } from './components/todo/add-todo/add-todo/add-todo';
import { EditTodoComponent } from './components/todo/edit-todo/edit-todo/edit-todo';
import { TeamDashboardComponent } from './components/team/team-dashboard/team-dashboard/team-dashboard';
import { TeamDetailComponent } from './components/team/team-detail/team-detail/team-detail';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'teams',
    children: [
      {
        path: '',
        component: TeamDashboardComponent
      },
      {
        path: ':teamId',
        component: TeamDetailComponent
      }
    ]
  },
  {
    path: 'todos',
    component: TodoListComponent
  },
  {
    path: 'todos/add',
    component: AddTodoComponent
  },
  {
    path: 'todos/:id/edit',
    component: EditTodoComponent
  },

  // Redirects
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];