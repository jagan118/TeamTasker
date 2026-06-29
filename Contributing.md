# Contributing to TodoApp

First off, thank you for considering contributing to TodoApp! It's people like you that make TodoApp such a great tool.

---

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

---

## How Can I Contribute?

### Reporting Bugs

Before creating a bug report, please check if the issue already exists (someone may have reported it already).

**How to Submit a Good Bug Report:**

1. **Use a clear and descriptive title**
   ```
   ❌ Bad: "App doesn't work"
   ✅ Good: "Cannot create team when email contains uppercase letters"
   ```

2. **Describe the exact steps to reproduce the problem**
   ```
   1. Go to '/teams'
   2. Click '+ Create Team'
   3. Enter "Project Alpha"
   4. Click 'Create Team'
   5. ...
   ```

3. **Provide specific examples**
   ```
   Example: When I try to invite john.DOE@gmail.com, the app shows error 400
   ```

4. **Describe the behavior you observed**
   ```
   The app shows error: "Invalid email format"
   ```

5. **Explain which behavior you expected**
   ```
   Email should be accepted regardless of case
   ```

6. **Include screenshots if possible**
   - Use tools like Snagit or Screenshare

7. **Include your environment details**
   ```
   - OS: Windows 11
   - Browser: Chrome 120
   - Node.js: 18.17.0
   - MongoDB: 5.0
   ```

---

## Suggesting Enhancements

Enhancement suggestions are tracked as GitHub Issues.

**How to Submit a Good Enhancement Suggestion:**

1. **Use a clear and descriptive title**
   ```
   ❌ Bad: "Add feature"
   ✅ Good: "Add dark mode toggle for better UX at night"
   ```

2. **Provide a step-by-step description**
   ```
   1. User clicks theme toggle in navbar
   2. App applies dark theme
   3. Preference saved to localStorage
   4. Next visit uses dark theme
   ```

3. **Provide specific examples**
   ```
   Users working late (like developers) often need dark mode
   Reference: Todoist, Asana, ClickUp all have dark mode
   ```

4. **Why would this be useful?**
   ```
   Reduces eye strain during late-night work
   Improves accessibility for low-vision users
   Matches modern app standards
   ```

---

## Pull Request Process

### Before You Start

1. **Check existing issues/PRs** - Avoid duplicate work
2. **Create an issue first** - Discuss features before coding
3. **Get approval** - Wait for maintainer feedback
4. **Fork and create branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

### Coding Guidelines

#### TypeScript/Angular
```typescript
// ✅ Good: Clear naming, proper typing
createTeam(name: string, description: string): Observable<TeamResponse> {
  // Implementation
}

// ❌ Bad: Unclear naming, missing types
createT(n, d) {
  // Implementation
}
```

#### Comments
```typescript
// ✅ Good: Explain WHY, not WHAT
// We check if user is team member before allowing edit
if (membership && membership.role === 'owner') {

// ❌ Bad: Obvious from code
// Check if user is owner
if (membership && membership.role === 'owner') {
```

#### Error Handling
```typescript
// ✅ Good: Specific error messages
this.error = err.error.message || 'Failed to create team';

// ❌ Bad: Generic message
this.error = 'Error';
```

### Git Commit Messages

```bash
# ✅ Good: Clear, present tense, descriptive
git commit -m "Add team member removal feature

- Allow team owners to remove members
- Show confirmation dialog before removal
- Refresh member list after deletion
- Prevent self-removal validation"

# ❌ Bad: Vague, past tense
git commit -m "fixed stuff"
```

**Format:**
```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style (formatting, missing semicolons, etc)
- `refactor:` Code refactoring without feature changes
- `perf:` Performance improvements
- `test:` Adding or updating tests
- `chore:` Dependency updates, build changes

**Examples:**
```
feat(team): add member removal functionality
fix(auth): prevent token expiration redirect loop
docs(readme): update installation instructions
refactor(service): simplify HTTP interceptor
```

### Code Style

**Frontend (Angular/TypeScript)**
```typescript
// Use meaningful names
private teamService = inject(TeamService);

// Use proper access modifiers
private loadTeams() { }
public isOwner(): boolean { }

// Use type annotations
teams: Team[] = [];
loading: boolean = false;

// Arrow functions preferred
this.teamService.getTeams().subscribe(teams => {
  this.teams = teams;
});
```

**Backend (Node.js/Express)**
```javascript
// Use const for immutable variables
const router = express.Router();

// Meaningful function names
async function validateTeamOwnership(teamId, userId) {
  // Implementation
}

// Consistent error handling
try {
  const result = await operation();
  res.json(result);
} catch (error) {
  console.error('Operation failed:', error);
  res.status(500).json({ error: 'Internal server error' });
}
```

### Testing Your Changes

Before submitting:

1. **Test locally**
   ```bash
   # Frontend
   ng serve
   # Test in browser at http://localhost:4200

   # Backend
   npm start
   # Test API with Postman or curl
   ```

2. **Test different scenarios**
   ```
   ✅ Happy path (everything works)
   ✅ Error cases (invalid input, no permission)
   ✅ Edge cases (empty fields, special characters)
   ✅ Different user roles (owner, member)
   ✅ Different browsers (Chrome, Firefox, Safari)
   ✅ Mobile responsiveness
   ```

3. **Check for console errors**
   ```
   Open DevTools (F12)
   Check Console tab for errors
   Check Network tab for failed requests
   ```

### Submitting Your PR

1. **Update branch before submitting**
   ```bash
   git fetch origin
   git rebase origin/main
   ```

2. **Push your changes**
   ```bash
   git push origin feature/your-feature-name
   ```

3. **Create Pull Request on GitHub**
   - Use our PR template
   - Link related issues (e.g., "Closes #123")
   - Provide screenshots for UI changes
   - Describe your changes clearly

4. **PR Template**
   ```markdown
   ## Description
   Brief description of what this PR does

   ## Type of Change
   - [ ] Bug fix
   - [ ] New feature
   - [ ] Breaking change
   - [ ] Documentation update

   ## Related Issues
   Closes #(issue number)

   ## Screenshots (if applicable)
   [Add screenshots here]

   ## Testing Done
   - [ ] Tested on Chrome
   - [ ] Tested on Firefox
   - [ ] Mobile responsive
   - [ ] No console errors

   ## Checklist
   - [ ] Code follows style guidelines
   - [ ] Comments added for complex logic
   - [ ] Documentation updated
   - [ ] No new warnings generated
   ```

---

## Development Setup

### Initial Setup
```bash
# Clone repository
git clone https://github.com/yourusername/todoapp.git
cd todoapp

# Backend setup
cd backend
npm install
cp .env.example .env
# Edit .env with your MongoDB URI

# Start MongoDB
mongod

# Start backend
npm start

# Frontend setup (in new terminal)
cd frontend
npm install
ng serve
```

### Useful Commands

**Backend**
```bash
npm start              # Start development server
npm test               # Run tests
npm run build          # Build for production
npm run lint           # Lint code
```

**Frontend**
```bash
ng serve               # Start dev server
ng build               # Build for production
ng lint                # Lint code
ng test                # Run unit tests
ng e2e                 # Run end-to-end tests
```

---

## Project Structure Guidelines

### Adding New Feature

1. **Create feature branch**
   ```bash
   git checkout -b feature/user-notifications
   ```

2. **Create necessary files**
   ```
   Backend:
   ├── models/Notification.js
   ├── routes/notificationRoutes.js
   └── controllers/notificationController.js

   Frontend:
   ├── services/notification.service.ts
   └── components/notification/
       ├── notification.ts
       ├── notification.html
       └── notification.css
   ```

3. **Follow existing patterns** from similar features

4. **Update routes** in main config files

5. **Update README** if user-facing

---

## Code Review Process

1. **Automated checks run**
   - Linting
   - TypeScript compilation
   - Basic tests

2. **Maintainer review**
   - Code quality
   - Architecture
   - Performance
   - Security

3. **Addressing feedback**
   - Make requested changes
   - Push new commits
   - Don't force push (keep history)

4. **Approval and merge**
   - Squash commits if requested
   - Merge to main

---

## Recognition

Contributors will be:
- ✨ Mentioned in README contributors section
- 🏆 Thanked in release notes
- 📝 Listed in CONTRIBUTORS.md

---

## Questions?

- 📖 Check [README.md](README.md)
- 💬 Open a GitHub Discussion
- 📧 Email: jack@example.com

---

## License

By contributing to TodoApp, you agree that your contributions will be licensed under the MIT License.

---

**Happy coding! 🚀**