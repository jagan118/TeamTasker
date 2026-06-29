# 📡 API Documentation

Complete reference for TodoApp API endpoints.

---

## 🔑 Authentication

All endpoints (except `/auth/register` and `/auth/login`) require authentication.

**Headers:**
```
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json
```

**Token Format:**
```
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

## 📚 Base URL

- **Development:** `http://localhost:3000/api`
- **Production:** `https://api.yourdomain.com/api`

---

## 🔐 Authentication Endpoints

### Register User

```http
POST /auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Response (201 Created):**
```json
{
  "message": "User registered successfully",
  "user": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Error (400 Bad Request):**
```json
{
  "error": "Email already exists"
}
```

---

### Login User

```http
POST /auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Response (200 OK):**
```json
{
  "message": "Login successful",
  "user": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Error (401 Unauthorized):**
```json
{
  "error": "Invalid credentials"
}
```

---

## ✅ Todo Endpoints

### Get All Personal Todos

```http
GET /todos
Authorization: Bearer <TOKEN>
```

**Response (200 OK):**
```json
{
  "message": "Todos fetched",
  "todos": [
    {
      "_id": "607f1f77bcf86cd799439001",
      "title": "Learn Angular",
      "description": "Study Angular framework",
      "category": "learning",
      "dueDate": "2024-12-31",
      "completed": false,
      "user": "507f1f77bcf86cd799439011",
      "teamId": null,
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-15T10:30:00Z"
    }
  ]
}
```

---

### Create Todo

```http
POST /todos
Authorization: Bearer <TOKEN>
Content-Type: application/json

{
  "title": "Design homepage",
  "description": "Create Figma mockup for homepage",
  "category": "design",
  "dueDate": "2024-02-15",
  "teamId": null
}
```

**Response (201 Created):**
```json
{
  "message": "Todo created",
  "todo": {
    "_id": "607f1f77bcf86cd799439002",
    "title": "Design homepage",
    "description": "Create Figma mockup for homepage",
    "category": "design",
    "dueDate": "2024-02-15",
    "completed": false,
    "user": "507f1f77bcf86cd799439011",
    "teamId": null,
    "createdAt": "2024-01-15T11:00:00Z",
    "updatedAt": "2024-01-15T11:00:00Z"
  }
}
```

---

### Get Single Todo with Comments & History

```http
GET /todos/:todoId/details
Authorization: Bearer <TOKEN>
```

**Response (200 OK):**
```json
{
  "todo": {
    "_id": "607f1f77bcf86cd799439002",
    "title": "Design homepage",
    "description": "Create Figma mockup",
    "category": "design",
    "dueDate": "2024-02-15",
    "completed": false,
    "user": {
      "_id": "507f1f77bcf86cd799439011",
      "name": "John Doe",
      "email": "john@example.com"
    },
    "teamId": "team-123",
    "createdAt": "2024-01-15T11:00:00Z"
  },
  "comments": [
    {
      "_id": "comment-1",
      "text": "This looks great!",
      "userId": {
        "_id": "507f1f77bcf86cd799439012",
        "name": "Jane Smith",
        "email": "jane@example.com"
      },
      "createdAt": "2024-01-15T12:00:00Z"
    }
  ],
  "changeHistory": [
    {
      "_id": "change-1",
      "fieldChanged": "title",
      "oldValue": "Design homepage",
      "newValue": "Design homepage mockup",
      "reason": "Made title more specific",
      "userId": {
        "_id": "507f1f77bcf86cd799439011",
        "name": "John Doe",
        "email": "john@example.com"
      },
      "timestamp": "2024-01-15T11:30:00Z"
    }
  ],
  "teamId": "team-123"
}
```

---

### Update Todo

```http
PUT /todos/:todoId
Authorization: Bearer <TOKEN>
Content-Type: application/json

{
  "title": "Design homepage mockup",
  "description": "Create detailed Figma mockup",
  "category": "design",
  "dueDate": "2024-02-20",
  "completed": false,
  "reason": "Updated description to be more specific"
}
```

**Response (200 OK):**
```json
{
  "message": "Todo updated",
  "todo": {
    "_id": "607f1f77bcf86cd799439002",
    "title": "Design homepage mockup",
    "description": "Create detailed Figma mockup",
    "category": "design",
    "dueDate": "2024-02-20",
    "completed": false,
    "user": "507f1f77bcf86cd799439011",
    "teamId": "team-123",
    "updatedAt": "2024-01-15T12:00:00Z"
  },
  "changesRecorded": 4
}
```

---

### Toggle Todo Complete Status

```http
PATCH /todos/:todoId/toggle
Authorization: Bearer <TOKEN>
```

**Response (200 OK):**
```json
{
  "message": "Todo toggled",
  "completed": true,
  "todo": {
    "_id": "607f1f77bcf86cd799439002",
    "completed": true
  }
}
```

---

### Delete Todo

```http
DELETE /todos/:todoId
Authorization: Bearer <TOKEN>
```

**Response (200 OK):**
```json
{
  "message": "Todo deleted successfully"
}
```

---

### Search Todos

```http
GET /todos/search?query=design&category=design&completed=false
Authorization: Bearer <TOKEN>
```

**Query Parameters:**
- `query` (string) - Search in title and description
- `category` (string) - Filter by category
- `completed` (boolean) - Filter by completion status
- `dueDate` (string) - Filter by due date

**Response (200 OK):**
```json
{
  "message": "Todos fetched",
  "todos": [...]
}
```

---

### Get Team Todos

```http
GET /todos/team/:teamId
Authorization: Bearer <TOKEN>
```

**Response (200 OK):**
```json
{
  "message": "Team todos fetched",
  "todos": [...]
}
```

---

## 💬 Comment Endpoints

### Add Comment to Todo

```http
POST /todos/:todoId/comments
Authorization: Bearer <TOKEN>
Content-Type: application/json

{
  "text": "Great progress! Ready for review."
}
```

**Response (201 Created):**
```json
{
  "_id": "comment-123",
  "todoId": "607f1f77bcf86cd799439002",
  "userId": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com"
  },
  "text": "Great progress! Ready for review.",
  "createdAt": "2024-01-15T13:00:00Z"
}
```

---

### Get Comments for Todo

```http
GET /todos/:todoId/comments
Authorization: Bearer <TOKEN>
```

**Response (200 OK):**
```json
[
  {
    "_id": "comment-1",
    "text": "This looks great!",
    "userId": {
      "_id": "507f1f77bcf86cd799439012",
      "name": "Jane Smith",
      "email": "jane@example.com"
    },
    "createdAt": "2024-01-15T12:00:00Z"
  },
  {
    "_id": "comment-2",
    "text": "Ready for review.",
    "userId": {
      "_id": "507f1f77bcf86cd799439011",
      "name": "John Doe",
      "email": "john@example.com"
    },
    "createdAt": "2024-01-15T13:00:00Z"
  }
]
```

---

### Delete Comment

```http
DELETE /todos/comments/:commentId
Authorization: Bearer <TOKEN>
```

**Response (200 OK):**
```json
{
  "message": "Comment deleted"
}
```

---

## 👥 Team Endpoints

### Create Team

```http
POST /teams
Authorization: Bearer <TOKEN>
Content-Type: application/json

{
  "name": "Project Alpha",
  "description": "Building the new feature"
}
```

**Response (201 Created):**
```json
{
  "message": "Team created successfully",
  "team": {
    "_id": "team-123",
    "name": "Project Alpha",
    "description": "Building the new feature",
    "owner": "507f1f77bcf86cd799439011",
    "createdAt": "2024-01-15T14:00:00Z"
  }
}
```

---

### Get User's Teams

```http
GET /teams/my-teams
Authorization: Bearer <TOKEN>
```

**Response (200 OK):**
```json
{
  "message": "Teams fetched",
  "teams": [
    {
      "_id": "team-123",
      "name": "Project Alpha",
      "description": "Building the new feature",
      "owner": {
        "_id": "507f1f77bcf86cd799439011",
        "name": "John Doe"
      },
      "role": "owner",
      "joinedAt": "2024-01-15T14:00:00Z"
    }
  ],
  "count": 1
}
```

---

### Get Team Details

```http
GET /teams/:teamId
Authorization: Bearer <TOKEN>
```

**Response (200 OK):**
```json
{
  "team": {
    "_id": "team-123",
    "name": "Project Alpha",
    "description": "Building the new feature",
    "owner": {
      "_id": "507f1f77bcf86cd799439011",
      "name": "John Doe",
      "email": "john@example.com"
    },
    "createdAt": "2024-01-15T14:00:00Z"
  },
  "members": [
    {
      "name": "John Doe",
      "email": "john@example.com",
      "role": "owner",
      "joinedAt": "2024-01-15T14:00:00Z",
      "userId": "507f1f77bcf86cd799439011"
    },
    {
      "name": "Jane Smith",
      "email": "jane@example.com",
      "role": "member",
      "joinedAt": "2024-01-15T15:00:00Z",
      "userId": "507f1f77bcf86cd799439012"
    }
  ],
  "yourRole": "owner"
}
```

---

### Invite Team Member

```http
POST /teams/:teamId/invite
Authorization: Bearer <TOKEN>
Content-Type: application/json

{
  "email": "newmember@example.com"
}
```

**Response (200 OK):**
```json
{
  "message": "john@example.com added to team successfully",
  "member": {
    "name": "John New",
    "email": "newmember@example.com",
    "role": "member",
    "joinedAt": "2024-01-15T16:00:00Z"
  }
}
```

**Error (404 Not Found):**
```json
{
  "error": "User not found with this email"
}
```

---

### Remove Team Member

```http
DELETE /teams/:teamId/members/:userId
Authorization: Bearer <TOKEN>
```

**Response (200 OK):**
```json
{
  "message": "Member removed from team"
}
```

---

### Delete Team

```http
DELETE /teams/:teamId
Authorization: Bearer <TOKEN>
```

**Response (200 OK):**
```json
{
  "message": "Team deleted successfully"
}
```

---

## ❌ Error Responses

### 400 Bad Request
```json
{
  "error": "Validation failed",
  "details": {
    "email": "Invalid email format"
  }
}
```

### 401 Unauthorized
```json
{
  "error": "Invalid token or token expired"
}
```

### 403 Forbidden
```json
{
  "error": "You don't have permission to perform this action"
}
```

### 404 Not Found
```json
{
  "error": "Resource not found"
}
```

### 500 Internal Server Error
```json
{
  "error": "Internal server error",
  "message": "Something went wrong on our end"
}
```

---

## 📊 Rate Limiting

- **Free tier:** 100 requests per 15 minutes
- **Per endpoint:** No individual limits
- **Headers returned:**
  ```
  X-RateLimit-Limit: 100
  X-RateLimit-Remaining: 95
  X-RateLimit-Reset: 1234567890
  ```

---

## 🔍 Pagination

Not yet implemented. All endpoints return full results.

**Future format:**
```http
GET /todos?page=1&limit=10
```

---

## 📝 Data Types

### User
```json
{
  "_id": "string",
  "name": "string",
  "email": "string",
  "password": "string (hashed)",
  "createdAt": "ISO 8601",
  "updatedAt": "ISO 8601"
}
```

### Todo
```json
{
  "_id": "string",
  "title": "string",
  "description": "string",
  "category": "string",
  "dueDate": "ISO 8601 or null",
  "completed": "boolean",
  "user": "ObjectId (User)",
  "teamId": "ObjectId (Team) or null",
  "createdAt": "ISO 8601",
  "updatedAt": "ISO 8601"
}
```

### Team
```json
{
  "_id": "string",
  "name": "string",
  "description": "string",
  "owner": "ObjectId (User)",
  "createdAt": "ISO 8601",
  "updatedAt": "ISO 8601"
}
```

### Comment
```json
{
  "_id": "string",
  "todoId": "ObjectId (Todo)",
  "userId": "ObjectId (User)",
  "text": "string",
  "createdAt": "ISO 8601",
  "updatedAt": "ISO 8601"
}
```

---

## 🧪 Testing with cURL

### Register
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Login
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Create Todo
```bash
curl -X POST http://localhost:3000/api/todos \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Learn TodoApp",
    "description": "Study the API",
    "category": "learning"
  }'
```

---

## 📚 Tools for Testing

- **Postman** - [Download](https://www.postman.com/downloads/)
- **Insomnia** - [Download](https://insomnia.rest/download)
- **ThunderClient** - [VS Code Extension](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)
- **cURL** - Command-line tool

---

## 🔗 Related

- [README](README.md) - Main documentation
- [Quick Start](QUICKSTART.md) - Get started in 5 minutes
- [Contributing](CONTRIBUTING.md) - How to contribute

---

<div align="center">

**Happy API Integration! 🚀**

</div>