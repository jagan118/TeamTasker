// src/app/services/team.service.ts

import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { TEAM_API_URL, TODO_API_URL } from '../config/api';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  
  private apiUrl = TEAM_API_URL;
  teams = signal<any[]>([]);
  
  constructor(private http: HttpClient) { }
  
  // ========== CREATE TEAM ==========
  createTeam(name: string, description: string): Observable<any> {
    return this.http.post(
      this.apiUrl,
      { name, description }
    );
  }
  
  // ========== GET ALL SHARED TEAMS ==========
  getMyTeams(): Observable<any> {
    if (this.teams().length > 0) {
      return of({ teams: this.teams() });
    }

    this.teams.set([]);

    return this.http.get<any>(`${this.apiUrl}/my-teams`).pipe(
      tap(response => {
        const teams = (response?.teams || []).map((team: any) => this.normalizeTeam(team));
        this.teams.set(teams);
      })
    );
  }
  
  getCachedTeams(): any[] {
    return this.teams();
  }

  saveMyTeams(teams: any[]) {
    this.teams.set(teams.map((team: any) => this.normalizeTeam(team)));
  }
  
  addTeamToCache(team: any) {
    const normalizedTeam = this.normalizeTeam(team);
    this.teams.update(list => [normalizedTeam, ...list.filter(existing => existing._id !== normalizedTeam._id)]);
  }

  removeTeamFromCache(teamId: string) {
    this.teams.update(list => list.filter(team => team._id !== teamId));
  }
  
  clearMyTeamsCache() {
    this.teams.set([]);
  }
  
  // ========== GET TEAM DETAILS + MEMBERS ==========
  getTeamDetails(teamId: string): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/${teamId}`
    );
  }
  
  // ========== DELETE TEAM ==========
  deleteTeam(teamId: string): Observable<any> {
    return this.http.delete(
      `${this.apiUrl}/${teamId}`
    );
  }
  
  // ========== GET TEAM TODOS ==========
  getTeamTodos(teamId: string): Observable<any> {
    return this.http.get(
      `${TODO_API_URL}/team/${teamId}`
    );
  }

  private normalizeTeam(team: any): any {
    return {
      ...team,
      role: 'owner',
      isOwner: true,
      ownerId: team?.owner || team?.ownerId || null
    };
  }
}