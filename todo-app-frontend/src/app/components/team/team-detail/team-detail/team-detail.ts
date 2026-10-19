// src/app/components/team/team-detail/team-detail.ts

import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { TeamService } from '../../../../services/team.service';
import { TodoService } from '../../../../services/todo.service';

@Component({
  selector: 'app-team-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './team-detail.html',
  styleUrls: ['./team-detail.css']
})
export class TeamDetailComponent implements OnInit {
  
  teamId: string = '';
  team = signal<any | null>(null);
  loading = signal(false);
  error = signal<string>('');
  successMessage = signal<string>('');
  teamTodos = signal<any[]>([]);

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService,
    private todoService: TodoService,
    private router: Router
  ) {}
  
  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.teamId = paramMap.get('teamId') || '';

      if (!this.teamId) {
        this.error.set('Invalid team ID');
        this.router.navigate(['/teams']);
        return;
      }

      this.team.set(null);
      this.teamTodos.set([]);
      this.loadTeamDetails();
    });
  }
  
  // ========== LOAD TEAM DETAILS ==========
  loadTeamDetails() {
    this.loading.set(true);
    this.error.set('');
    this.successMessage.set('');
    
    this.teamService.getTeamDetails(this.teamId).subscribe({
      next: (response) => {
        console.log('✅ Team details loaded:', response);
        
        this.team.set(response.team);
        this.loadTeamTodos();
        
        this.loading.set(false);
      },
      error: (err) => {
        console.error('❌ Error loading team details:', err);
        this.team.set(null);
        this.teamTodos.set([]);
        this.error.set(this.getErrorMessage(err, 'Failed to load team details'));
        this.loading.set(false);
      }
    });
  }
  
  loadTeamTodos() {
    this.teamService.getTeamTodos(this.teamId).subscribe({
      next: (response) => {
        this.teamTodos.set(response.todos || []);
      },
      error: (err) => {
        console.error('❌ Error loading team todos:', err);
        this.error.set(this.getErrorMessage(err, 'Failed to load team todos'));
      }
    });
  }

  toggleTodoCompletion(todo: any) {
    this.error.set('');
    this.successMessage.set('');

    this.todoService.toggleComplete(todo._id).then((updatedTodo) => {
      this.teamTodos.update(list =>
        list.map(item => item._id === todo._id ? { ...item, completed: updatedTodo.completed } : item)
      );

      this.successMessage.set(updatedTodo.completed ? 'Todo marked as done' : 'Todo marked as pending');
      setTimeout(() => {
        this.successMessage.set('');
      }, 3000);
    }).catch((err) => {
      this.error.set(this.getErrorMessage(err, 'Failed to update todo'));
    });
  }

  private getErrorMessage(err: any, fallback: string): string {
    const serverMessage = err?.error?.message || err?.error?.error || err?.message;

    if (typeof serverMessage === 'string' && serverMessage.trim()) {
      return serverMessage;
    }

    if (err?.status === 404) {
      return 'The requested resource was not found.';
    }

    if (err?.status === 403) {
      return 'You are not allowed to perform this action.';
    }

    if (err?.status === 400) {
      return 'The request could not be processed.';
    }

    return fallback;
  }
}