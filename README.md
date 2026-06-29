# 📝 TodoApp - Team Collaboration Task Manager

> A modern, full-stack todo application with **team collaboration**, **real-time comments**, **change tracking**, and **smart sharing** features built with Angular, Node.js, Express, and MongoDB.

![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)
![Angular](https://img.shields.io/badge/Angular-17%2B-red)
![MongoDB](https://img.shields.io/badge/MongoDB-5.0%2B-green)
![Status](https://img.shields.io/badge/Status-Active%20Development-brightgreen)

---

## 🚀 Features

### ✨ Core Todo Management
- ✅ **Create, Read, Update, Delete** todos with rich descriptions
- 📅 **Due dates** with visual indicators
- 🏷️ **Categories** and tags for organization
- ✔️ **Mark as complete** with completion tracking
- 🔍 **Advanced search and filtering** by category, due date, status
- 💾 **Persistent storage** with MongoDB

### 👥 Team Collaboration (NEW)
- 🤝 **Create teams** and invite members by email
- 📋 **Share todos** within teams for collaborative work
- 👀 **View permissions** - team members see all shared todos
- ✏️ **Edit permissions** - all team members can modify team todos
- 🚀 **Role-based access** - owner vs member roles
- 👤 **Member management** - add/remove team members

### 💬 Real-Time Comments
- 💭 **Add comments** to any todo for discussion
- 📝 **Edit/delete** your own comments
- 👤 **User attribution** - see who commented and when
- 🔄 **Auto-refresh** - see new comments in real-time
- 📌 **Comment threading** - organized discussion per todo

### 📊 Change History & Audit Log
- 🔐 **Track all changes** - see who changed what and when
- 📝 **Change reasons** - users provide context for modifications
- 🔄 **Complete history** - full audit trail of all edits
- 👤 **User attribution** - identify who made each change
- ⏰ **Timestamps** - precise when changes occurred
- 📋 **Field-level tracking** - track changes to title, description, category, due date, status

### 🔐 Authentication & Security
- 🔑 **JWT-based authentication** with secure token management
- 🛡️ **Password hashing** with bcrypt
- 🍪 **LocalStorage persistence** - stay logged in across sessions
- ⚔️ **Auth guards** - protected routes
- 🔒 **Authorization checks** - only authorized users can access resources
- 🌐 **CORS enabled** - secure cross-origin requests
- 🚨 **401 error handling** - automatic logout on token expiration

### 📱 User Interface
- 🎨 **Modern, responsive design** - works on desktop, tablet, mobile
- 🌓 **Clean dashboard** - organized todo view with filters
- 📊 **Todo cards** - visual todo representation with metadata
- 🎯 **Intuitive navigation** - easy switching between personal and team todos
- ⚡ **Fast interactions** - smooth animations and transitions
- 📱 **Mobile-optimized** - touch-friendly interface

### 🔄 Data Synchronization
- ⏱️ **Real-time updates** - changes reflect immediately
- 🔃 **State management** - proper signal-based state in Angular
- 📲 **HTTP interceptors** - automatic token injection
- 🌐 **RESTful API** - standard HTTP methods

---

## 🛠️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|-----------|---------|---------|
| **Angular** | 17+ | Frontend framework with standalone components |
| **TypeScript** | 5+ | Type-safe JavaScript |
| **RxJS** | 7+ | Reactive programming |
| **Angular Signals** | 17+ | Modern state management |
| **CSS3** | Latest | Styling and responsive design |
| **HTTP Client** | Built-in | API communication |
| **Router** | Built-in | Client-side routing |
| **Forms** | Reactive & Template-driven | Form handling |

### Backend
| Technology | Version | Purpose |
|-----------|---------|---------|
| **Node.js** | 18+ | JavaScript runtime |
| **Express.js** | 4.18+ | Web framework |
| **MongoDB** | 5.0+ | NoSQL database |
| **Mongoose** | 7+ | MongoDB ODM |
| **JWT** | Latest | Token-based auth |
| **bcrypt** | 5+ | Password hashing |
| **CORS** | Latest | Cross-origin support |
| **dotenv** | Latest | Environment variables |

---

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm
- MongoDB 5.0+
- Angular CLI 17+
- Git

### Clone Repository
```bash
git clone https://github.com/jagan118/todoapp.git
cd todoapp
```

### Backend Setup

1. **Navigate to backend folder:**
```bash
cd backend
```

2. **Install dependencies:**
```bash
npm install
```

3. **Create `.env` file:**
```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/todoapp
JWT_SECRET=your_secret_key_here
NODE_ENV=development
```

4. **Start MongoDB:**
```bash
# macOS with Homebrew
brew services start mongodb-community

# Windows - MongoDB should run as service
# Or manually: mongod

# Docker
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

5. **Start backend server:**
```bash
npm start
# Server runs on http://localhost:3000
```

### Frontend Setup

1. **Navigate to frontend folder:**
```bash
cd frontend
```

2. **Install dependencies:**
```bash
npm install
```

3. **Update API URL (if needed):**
Edit `src/app/services/auth.services.ts` and other services to match your backend URL.

4. **Start development server:**
```bash
ng serve
# App runs on http://localhost:4200
```

5. **Build for production:**
```bash
ng build --configuration production
```

---

## 🚀 Usage

### Getting Started

1. **Create an account:**
   - Click "Sign Up"
   - Enter name, email, password
   - Account created ✅

2. **Create your first todo:**
   - Click "My Todos"
   - Click "Add Todo"
   - Fill in details (title, description, due date, category)
   - Click "Create"

3. **Create a team:**
   - Click "Teams" in navbar
   - Click "Create Team"
   - Enter team name and description
   - You're now the team owner ✅

4. **Invite team members:**
   - Go to team detail
   - Click "+ Invite Member"
   - Enter their email
   - They can now access team todos

5. **Share a todo with team:**
   - Create todo
   - Select team from dropdown
   - All team members see it

6. **Add comments:**
   - Open any todo
   - Scroll to comments section
   - Type comment and post
   - Team sees it in real-time

7. **Track changes:**
   - Open todo
   - Scroll to "Change History"
   - See who changed what and why

---

## 📂 Project Structure

```
todoapp/
│
├── backend/
│   ├── models/
│   │   ├── User.js              # User schema
│   │   ├── Todo.js              # Todo schema
│   │   ├── Team.js              # Team schema
│   │   ├── TeamMember.js         # Team membership schema
│   │   ├── Comment.js            # Comment schema
│   │   └── TodoChangeLog.js      # Change history schema
│   │
│   ├── routes/
│   │   ├── authRoutes.js         # Auth endpoints
│   │   ├── todoRoutes.js         # Todo endpoints
│   │   ├── teamRoutes.js         # Team endpoints
│   │   └── commentRoutes.js      # Comment endpoints
│   │
│   ├── controllers/
│   │   ├── authController.js     # Auth logic
│   │   ├── todoController.js     # Todo logic
│   │   └── teamController.js     # Team logic
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js     # JWT verification
│   │   └── errorHandler.js       # Error handling
│   │
│   ├── server.js                 # Express app setup
│   └── .env.example              # Environment template
│
└── frontend/
    ├── src/
    │   ├── app/
    │   │   ├── services/
    │   │   │   ├── auth.services.ts      # Auth service
    │   │   │   ├── todo.service.ts       # Todo service
    │   │   │   ├── team.service.ts       # Team service
    │   │   │   └── comment.service.ts    # Comment service
    │   │   │
    │   │   ├── components/
    │   │   │   ├── auth/
    │   │   │   │   ├── login/
    │   │   │   │   └── register/
    │   │   │   ├── dashboard/
    │   │   │   ├── todo/
    │   │   │   │   ├── todo-list/
    │   │   │   │   ├── add-todo/
    │   │   │   │   ├── edit-todo/
    │   │   │   │   ├── todo-item/
    │   │   │   │   └── todo-detail/
    │   │   │   ├── team/
    │   │   │   │   ├── team-dashboard/
    │   │   │   │   ├── team-detail/
    │   │   │   │   └── team-todos/
    │   │   │   └── navbar/
    │   │   │
    │   │   ├── guards/
    │   │   │   └── auth.guard-guard.ts
    │   │   │
    │   │   ├── interceptors/
    │   │   │   └── auth.interceptor.ts
    │   │   │
    │   │   ├── models/
    │   │   │   └── interface.ts
    │   │   │
    │   │   ├── app.routes.ts
    │   │   └── app.config.ts
    │   │
    │   ├── index.html
    │   └── main.ts
    │
    ├── angular.json
    ├── package.json
    └── tsconfig.json
```

---

## 🔌 API Endpoints

### Authentication
```
POST   /api/auth/register          # Create new user
POST   /api/auth/login             # User login
```

### Todos (Protected)
```
GET    /api/todos                  # Get personal todos
POST   /api/todos                  # Create todo
GET    /api/todos/:id              # Get single todo
GET    /api/todos/details/:id      # Get with comments & history
PUT    /api/todos/:id              # Update todo
PATCH  /api/todos/:id/toggle       # Toggle complete status
DELETE /api/todos/:id              # Delete todo
GET    /api/todos/search           # Search todos
GET    /api/todos/team/:teamId     # Get team todos
```

### Comments (Protected)
```
POST   /api/todos/:todoId/comments         # Add comment
GET    /api/todos/:todoId/comments         # Get comments
DELETE /api/comments/:commentId            # Delete comment
```

### Teams (Protected)
```
POST   /api/teams                          # Create team
GET    /api/teams/my-teams                 # Get user's teams
GET    /api/teams/:teamId                  # Get team details
POST   /api/teams/:teamId/invite           # Invite member
DELETE /api/teams/:teamId/members/:userId  # Remove member
DELETE /api/teams/:teamId                  # Delete team
```

---

## 🔐 Authentication Flow

```
1. User Signup/Login
   ↓
2. Backend validates credentials
   ↓
3. JWT token generated
   ↓
4. Token + User stored in localStorage
   ↓
5. Subsequent requests include token via interceptor
   ↓
6. Backend verifies token
   ↓
7. Request allowed/rejected based on permissions
   ↓
8. Token expires → Automatic logout
```

---

## 🎨 Features in Action

### Dashboard
- Personal todo list with filters
- Search by category or due date
- Quick actions (edit, delete, complete)

### Teams
- Create and manage teams
- Invite teammates
- View all team members and roles
- Owner can remove members

### Collaboration
- Share todos within teams
- Comment on todos
- See real-time comment updates
- Change history with reasons

### Responsive Design
- Desktop: Full feature set
- Tablet: Optimized layout
- Mobile: Touch-friendly interface

---

## 🧪 Testing

### Test User Account
```
Email: test@example.com
Password: test123456
```

### Test Scenarios
1. **Create personal todo** → visible only to you
2. **Create team** → invite someone
3. **Share todo with team** → both see it
4. **Comment on todo** → real-time update
5. **Edit todo** → change history shows
6. **Logout & refresh** → session persists
7. **Delete team** → (owner only)

---

## 🐛 Known Issues & Limitations

- Email notifications not yet implemented (invites are in-app only)
- Real-time updates use polling (not WebSocket)
- Maximum file upload size: Not implemented yet
- Two-factor authentication: Not implemented yet

---

## 🚧 Future Enhancements

- [ ] Email notifications for team invites
- [ ] WebSocket for real-time updates
- [ ] File attachments on todos
- [ ] Todo templates and bulk operations
- [ ] Analytics dashboard
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Mobile app (React Native)
- [ ] Todo priorities and smart sorting
- [ ] Recurring todos
- [ ] Todo subtasks
- [ ] Notification preferences

---

## 📚 API Documentation

### Create Todo (Team)
```bash
curl -X POST http://localhost:3000/api/todos \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Design homepage",
    "description": "Create Figma mockup",
    "category": "design",
    "teamId": "team_id_here"
  }'
```

### Invite Team Member
```bash
curl -X POST http://localhost:3000/api/teams/team_id/invite \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "colleague@example.com"
  }'
```

### Add Comment
```bash
curl -X POST http://localhost:3000/api/todos/todo_id/comments \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "text": "This looks great! Ready to merge."
  }'
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create feature branch:** `git checkout -b feature/amazing-feature`
3. **Commit changes:** `git commit -m 'Add amazing feature'`
4. **Push to branch:** `git push origin feature/amazing-feature`
5. **Open Pull Request**

### Code Style
- Use TypeScript for type safety
- Follow Angular style guide
- Comment complex logic
- Write meaningful commit messages

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Jack (Avula Jagan)**
- 🎓 Final-year Diploma in Computer Science Engineering (Tirupati, AP)
- 💼 Interning at Thoughtworks, Hyderabad (Full-Stack Developer)
- 🔗 [GitHub](https://github.com/jagan118)
- 💼 [LinkedIn](https://linkedin.com/in/yourprofile)

---

## 📞 Support

- 📖 **Documentation:** Check `/docs` folder
- 🐛 **Bug Reports:** Open an issue on GitHub
- 💬 **Discussions:** Use GitHub Discussions
- ✉️ **Email:** your.email@example.com

---

## 🙏 Acknowledgments

- Angular team for the amazing framework
- MongoDB for reliable database
- Express.js for lightweight server
- All contributors and users

---

## 📊 Stats

- **Lines of Code:** 5000+
- **Components:** 12+
- **API Endpoints:** 18+
- **Database Models:** 6
- **Features Implemented:** 15+

---

<div align="center">

**⭐ If this project helped you, please consider giving it a star!**

Made with ❤️ by Jack

</div>