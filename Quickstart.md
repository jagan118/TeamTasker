# ⚡ Quick Start Guide

Get TodoApp running in **5 minutes**!

---

## 🎯 Prerequisites

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **MongoDB** 5.0+ ([Local](https://www.mongodb.com/try/download/community) or [Cloud](https://www.mongodb.com/cloud/atlas))
- **Angular CLI** 17+ (`npm install -g @angular/cli`)
- **Git**

---

## 🚀 Get Started (Quick Setup)

### 1️⃣ Clone Repository

```bash
git clone https://github.com/yourusername/todoapp.git
cd todoapp
```

### 2️⃣ Backend Setup (Terminal 1)

```bash
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env with your MongoDB URI
# If using local MongoDB, keep default:
# MONGO_URI=mongodb://localhost:27017/todoapp
```

**Start MongoDB** (if using local):
```bash
# macOS
brew services start mongodb-community

# Windows (run as Admin)
mongod

# Docker
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

**Start Backend Server:**
```bash
npm start
# Server running on http://localhost:3000 ✅
```

### 3️⃣ Frontend Setup (Terminal 2)

```bash
cd frontend

# Install dependencies
npm install

# Start dev server
ng serve
# App running on http://localhost:4200 ✅
```

### 4️⃣ Open Browser

Navigate to **http://localhost:4200**

---

## 📝 Test It Out

### Create Account
```
1. Click "Sign Up"
2. Enter: Name, Email, Password
3. Click "Create Account"
```

### Create Your First Todo
```
1. Go to "My Todos"
2. Click "Add Todo"
3. Enter title: "Learn TodoApp"
4. Click "Create"
✅ Todo created!
```

### Create a Team
```
1. Click "Teams" in navbar
2. Click "+ Create Team"
3. Enter: "My First Team"
4. Click "Create Team"
✅ Team created! You're the owner
```

### Invite Someone
```
1. In team detail, click "+ Invite Member"
2. Enter: test@example.com
3. Click "Send Invite"
✅ Member invited!
```

### Share Todo with Team
```
1. In "My Todos", click "Add Todo"
2. Title: "Team project"
3. Team: "My First Team"
4. Click "Create"
✅ Team can see it!
```

### Add Comment
```
1. Click on any todo
2. Scroll to "Comments"
3. Type: "Great progress!"
4. Click "Post Comment"
✅ Comment added!
```

---

## 🔑 Test Credentials

**User 1 (Frontend):**
```
Email: user1@example.com
Password: password123
```

**User 2 (To invite):**
```
Email: user2@example.com
Password: password123
```

---

## 📁 Project Structure

```
todoapp/
├── backend/           # Express.js server
│   ├── models/       # MongoDB schemas
│   ├── routes/       # API endpoints
│   └── server.js     # Main server file
│
└── frontend/         # Angular app
    ├── src/app/
    │   ├── services/    # API communication
    │   ├── components/  # UI components
    │   └── guards/      # Route protection
    └── angular.json
```

---

## 🛠️ Useful Commands

### Backend
```bash
npm start              # Start server
npm test               # Run tests
npm run build          # Build for production
```

### Frontend
```bash
ng serve               # Start dev server
ng build               # Build for production
ng test                # Run tests
ng lint                # Check code quality
```

---

## 🐛 Troubleshooting

### Issue: "Cannot connect to MongoDB"
**Solution:**
```bash
# Make sure MongoDB is running
# macOS:
brew services start mongodb-community

# Or use MongoDB Atlas (cloud)
# Update .env with your connection string
```

### Issue: "Port 3000 already in use"
**Solution:**
```bash
# Kill process on port 3000
lsof -i :3000
kill -9 <PID>

# Or use different port in .env:
PORT=3001
```

### Issue: "Port 4200 already in use"
**Solution:**
```bash
# Start on different port
ng serve --port 4201
```

### Issue: "npm ERR! Cannot find module"
**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules
npm cache clean --force
npm install
```

### Issue: CORS error in console
**Solution:**
```bash
# Make sure backend is running
# Check frontend URL matches in backend .env:
CORS_ORIGIN=http://localhost:4200
```

---

## 📚 Next Steps

1. **Explore features**
   - Create teams
   - Invite members
   - Share todos
   - Add comments

2. **Read documentation**
   - [Full README](README.md)
   - [API Documentation](API.md)
   - [Deployment Guide](DEPLOYMENT.md)

3. **Start developing**
   - Check [Contributing Guide](CONTRIBUTING.md)
   - Pick an issue to work on
   - Submit a PR

---

## 🎓 Learning Resources

### Angular
- [Angular Official Docs](https://angular.io/docs)
- [Angular Tutorial](https://angular.io/tutorial)
- [RxJS Guide](https://rxjs.dev/)

### Node.js/Express
- [Express Guide](https://expressjs.com/)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)

### MongoDB
- [MongoDB University](https://university.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/)

---

## 💡 Tips & Tricks

### Debug Angular
```typescript
// Open DevTools (F12) → Console
// Check network requests
// Use Angular DevTools extension
```

### Debug Backend
```bash
# Check logs
npm start    # Shows console output

# Use Postman to test API
# Import collection from /docs/postman-collection.json
```

### Monitor Database
```bash
# MongoDB Compass (GUI)
# Download: https://www.mongodb.com/products/compass
# Connect: mongodb://localhost:27017
```

---

## 🤝 Get Help

- 📖 [README](README.md) - Full documentation
- 🐛 [GitHub Issues](https://github.com/yourusername/todoapp/issues) - Report bugs
- 💬 [Discussions](https://github.com/yourusername/todoapp/discussions) - Ask questions
- ✉️ Email: jack@example.com

---

## ✅ Checklist

- [ ] Node.js & npm installed
- [ ] MongoDB running
- [ ] Repository cloned
- [ ] Backend running (port 3000)
- [ ] Frontend running (port 4200)
- [ ] Account created
- [ ] First todo created
- [ ] Team created
- [ ] Member invited
- [ ] Comment added

**All done? Congratulations! 🎉**

---

## 📊 What You Have

- ✅ Full-stack todo application
- ✅ User authentication
- ✅ Team collaboration
- ✅ Real-time comments
- ✅ Change tracking
- ✅ Responsive design
- ✅ Modern tech stack

---

<div align="center">

**Ready to build something amazing? Happy coding! 🚀**

</div>