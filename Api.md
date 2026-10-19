# API Documentation

The app runs in public demo mode. Every endpoint below is unauthenticated, and all visitors share the same data. Anyone can read, create, edit, or delete todos and teams. Do not store private or sensitive information here.

## Base URL

- Development: `http://localhost:3000/api`
- Vercel multi-service deployment: `/api` on the same domain as the frontend

All request and response bodies use JSON.

## Todos

| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/todos` | List all shared todos as `{ "data": [...] }` |
| `POST` | `/todos` | Create a shared todo |
| `GET` | `/todos/search?q=term` | Search shared todos |
| `GET` | `/todos/:id` | Get one todo as `{ "data": ... }` |
| `PUT` | `/todos/:id` | Update a todo |
| `PATCH` | `/todos/:id/toggle` | Toggle completion |
| `DELETE` | `/todos/:id` | Delete a todo |
| `GET` | `/todos/team/:teamId` | List todos for a team |

Example create request:

```json
{
  "title": "Prepare demo",
  "description": "Add sample data",
  "category": "work",
  "dueDate": null,
  "teamId": null
}
```

## Teams

| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/teams/my-teams` | List all shared teams |
| `POST` | `/teams` | Create a shared team with `name` and optional `description` |
| `GET` | `/teams/:teamId` | Get a shared team |
| `DELETE` | `/teams/:teamId` | Delete a team and its todos |

Team invitations and member management are disabled because this public demo has no user accounts.

## Authentication

Login, signup, and authenticated API endpoints are disabled in this deployment.
