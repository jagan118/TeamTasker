import { isDevMode } from '@angular/core';

const API_BASE_URL = isDevMode()
  ? 'http://localhost:3000/api'
  : '/api';

export const AUTH_API_URL = `${API_BASE_URL}/auth`;
export const TEAM_API_URL = `${API_BASE_URL}/teams`;
export const TODO_API_URL = `${API_BASE_URL}/todos`;
