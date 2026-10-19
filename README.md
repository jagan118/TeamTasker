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
- 🤝 **Create shared teams**
- 📋 **Share todos** within teams for collaborative work
- 🌍 **Public demo data** - all visitors see the same todos and teams
- ✏️ **Open editing** - any visitor can add, change, or delete shared data

### ⚠️ Public Demo
- No login or signup is required.
- All visitors share one database and can change or delete any demo data.
- Do not use this deployment for private, personal, or sensitive information.

### 📱 User Interface
- 🎨 **Modern, responsive design** - works on desktop, tablet, mobile
- 🌓 **Clean dashboard** - organized todo view with filters
- 📊 **Todo cards** - visual todo representation with metadata
- 🎯 **Intuitive navigation** - easy switching between personal and team todos
- ⚡ **Fast interactions** - smooth animations and transitions
- 📱 **Mobile-optimized** - touch-friendly interface

### 🔄 Data Synchronization
- 🔃 **State management** - proper signal-based state in Angular
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

1. **Create your first shared todo:**
   - Open the public demo
   - Click "Add Todo"
   - Fill in details (title, description, due date, category)
   - Click "Create"

2. **Create a shared team:**
   - Click "Teams" in navbar
   - Click "Create Team"
   - Enter team name and description
   - Share todos by assigning them to the team

All visitors share the same data and can edit or delete it. Do not enter private or sensitive information.

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

See [Api.md](./Api.md) for the current public API routes and request formats. Login/signup and team member management are disabled.

---

## 🎨 Features in Action

### Dashboard
- Shared todo list with filters
- Search by category or due date
- Quick actions (edit, delete, complete)

### Teams
- Create and manage teams
- Assign shared todos to teams
- Any visitor can modify or delete shared teams and todos

### Collaboration
- Shared data is visible to every visitor
- Team invitations and member management are disabled without accounts

### Responsive Design
- Desktop: Full feature set
- Tablet: Optimized layout
- Mobile: Touch-friendly interface

---

## 🧪 Testing

### Test Scenarios
1. **Create a todo** → visible to every visitor
2. **Create a team** → visible to every visitor
3. **Share a todo with a team** → visible on that team's page
4. **Edit or delete shared data** → changes affect all visitors

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

## Legacy API Examples

The examples in this legacy section may include disabled features. Use [Api.md](./Api.md) for the currently deployed public API.

<!--
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
-->

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