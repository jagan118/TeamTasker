# 🚀 Deployment Guide

This guide covers deploying TodoApp to production environments.

---

## Table of Contents
1. [Pre-Deployment Checklist](#pre-deployment-checklist)
2. [Environment Setup](#environment-setup)
3. [Backend Deployment](#backend-deployment)
4. [Frontend Deployment](#frontend-deployment)
5. [Database Setup](#database-setup)
6. [Security Hardening](#security-hardening)
7. [Monitoring & Maintenance](#monitoring--maintenance)

---

## Pre-Deployment Checklist

- [ ] All tests passing (`npm test`)
- [ ] No console errors or warnings
- [ ] Environment variables configured
- [ ] Database backups scheduled
- [ ] SSL certificates obtained
- [ ] Domain configured with DNS
- [ ] CDN configured (optional)
- [ ] Monitoring tools set up
- [ ] Error tracking configured (Sentry, etc.)

---

## Environment Setup

### Backend Environment Variables

Legacy environment-variable example for local development only; set production secrets in the Vercel project settings below:

```env
# Server
PORT=3000
NODE_ENV=production

# Database (MongoDB Atlas recommended)
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/todoapp-prod?retryWrites=true&w=majority

# Security
JWT_SECRET=your-very-long-random-secret-key-min-32-chars-!@#$%^&*()
JWT_EXPIRY=7d

# CORS
FRONTEND_URL=http://localhost:4200

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=noreply@yourdomain.com
SMTP_PASS=your-app-password

# URLs
FRONTEND_URL=http://localhost:4200
BACKEND_URL=https://api.yourdomain.com

# Logging
LOG_LEVEL=info
SENTRY_DSN=https://your-sentry-url
```

### Vercel Project Settings

Import this repository as a **single Vercel project** and keep its **Root Directory** at the repository root. The root `vercel.json` independently builds the frontend and backend services.

The rewrites make `todo-app-backend` public under `/api/*` and `todo-app-frontend` public for all other paths. In the Vercel project's **Settings → Environment Variables**, set `MONGO_URI` to your MongoDB connection string and `JWT_SECRET` to a new random secret of at least 32 characters, for Production and any Preview environments you use.

| Name | Value |
| --- | --- |
| `MONGO_URI` | Your MongoDB Atlas connection string |
| `JWT_SECRET` | A new, random secret with at least 32 characters |
| `FRONTEND_URL` | Only needed for separately hosted cross-origin frontend clients |

Do not commit secrets. Make sure MongoDB Atlas permits connections from Vercel, then redeploy the project. Vercel supplies `NODE_ENV`.

The browser calls `/api` on the same domain, so no backend binding is used; the API must remain publicly routed. The frontend needs no API URL environment variable: it uses `/api` in production and `http://localhost:3000/api` in Angular development mode.

### Frontend Environment

Build with production configuration:

```bash
ng build --configuration production
```

---

## Backend Deployment

### Option 1: Heroku

1. **Create Heroku account** and install Heroku CLI

2. **Login to Heroku**
   ```bash
   heroku login
   ```

3. **Create new app**
   ```bash
   heroku create todoapp-backend
   ```

4. **Set environment variables**
   ```bash
   heroku config:set NODE_ENV=production
   heroku config:set JWT_SECRET=your-secret
   heroku config:set MONGO_URI=your-mongodb-atlas-uri
   ```

5. **Deploy code**
   ```bash
   git push heroku main
   ```

6. **View logs**
   ```bash
   heroku logs --tail
   ```

**Heroku Procfile:**
```
web: node server.js
```

### Option 2: AWS EC2

1. **Launch EC2 instance**
   - OS: Ubuntu 22.04 LTS
   - Instance: t2.micro or larger
   - Security Group: Allow ports 22, 80, 443

2. **SSH into server**
   ```bash
   ssh -i your-key.pem ubuntu@your-instance-ip
   ```

3. **Install Node.js**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

4. **Install MongoDB** (or use MongoDB Atlas)
   ```bash
   wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
   echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
   sudo apt-get update
   sudo apt-get install -y mongodb-org
   sudo systemctl start mongod
   ```

5. **Clone repository**
   ```bash
   git clone https://github.com/yourusername/todoapp.git
   cd todoapp/backend
   ```

6. **Install dependencies**
   ```bash
   npm install
   ```

7. **Configure .env**
   ```bash
   sudo nano .env
   # Add production values
   ```

8. **Use PM2 for process management**
   ```bash
   sudo npm install -g pm2
   pm2 start server.js --name "todoapp-backend"
   pm2 startup
   pm2 save
   ```

9. **Setup reverse proxy with Nginx**
   ```bash
   sudo apt-get install -y nginx
   sudo nano /etc/nginx/sites-available/todoapp
   ```

   **Nginx config:**
   ```nginx
   server {
       listen 80;
       server_name api.yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

   ```bash
   sudo ln -s /etc/nginx/sites-available/todoapp /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

10. **Setup SSL with Let's Encrypt**
    ```bash
    sudo apt-get install -y certbot python3-certbot-nginx
    sudo certbot --nginx -d api.yourdomain.com
    ```

### Option 3: DigitalOcean App Platform

1. **Connect GitHub repository**
2. **Specify build command:**
   ```bash
   npm install
   ```

3. **Specify start command:**
   ```bash
   node server.js
   ```

4. **Set environment variables** in DigitalOcean dashboard
5. **Deploy** - DigitalOcean handles everything

---

## Frontend Deployment

### Option 1: Vercel (Recommended for Angular)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow prompts**
   - Link to GitHub
   - Configure build settings
   - Set environment variables

### Option 2: Netlify

1. **Build Angular app**
   ```bash
   ng build --configuration production
   ```

2. **Connect to Netlify**
   - Link GitHub repository
   - Build command: `ng build --configuration production`
   - Publish directory: `dist/todoapp`

3. **Deploy**
   - Netlify auto-deploys on push

### Option 3: AWS S3 + CloudFront

1. **Build Angular**
   ```bash
   ng build --configuration production
   ```

2. **Create S3 bucket**
   ```bash
   aws s3 mb s3://todoapp-frontend
   ```

3. **Upload files**
   ```bash
   aws s3 sync dist/todoapp s3://todoapp-frontend
   ```

4. **Create CloudFront distribution**
   - Origin: S3 bucket
   - Enable caching
   - Enable gzip compression

5. **Update DNS** to point to CloudFront

### Option 4: Docker + AWS ECS

**Dockerfile:**
```dockerfile
# Build stage
FROM node:18 as build
WORKDIR /app
COPY . .
RUN npm ci
RUN ng build --configuration production

# Runtime stage
FROM node:18
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY package*.json ./
RUN npm ci --only=production
EXPOSE 3000
CMD ["node", "server.js"]
```

**Build and push:**
```bash
docker build -t todoapp .
docker tag todoapp:latest 123456789.dkr.ecr.us-east-1.amazonaws.com/todoapp:latest
docker push 123456789.dkr.ecr.us-east-1.amazonaws.com/todoapp:latest
```

---

## Database Setup

### MongoDB Atlas (Cloud)

1. **Create cluster at mongodb.com**
2. **Create database user**
3. **Get connection string**
4. **Add IP whitelist** (allow your server IP)
5. **Use connection string in .env**

### Self-Hosted MongoDB

1. **Install MongoDB** on server
2. **Create database and user**
   ```bash
   mongo
   use todoapp-prod
   db.createUser({
     user: "todoapp",
     pwd: "secure-password",
     roles: ["readWrite"]
   })
   ```

3. **Setup automated backups**
   ```bash
   # Add to crontab for daily backups
   0 2 * * * mongodump --uri="mongodb://user:pass@localhost/todoapp-prod" --out=/backups/$(date +\%Y\%m\%d)
   ```

---

## Security Hardening

### Backend Security

1. **Update all dependencies**
   ```bash
   npm audit
   npm audit fix
   npm update
   ```

2. **Enable HTTPS**
   - Use SSL certificates (Let's Encrypt)
   - Redirect HTTP to HTTPS

3. **Set secure headers**
   ```javascript
   const helmet = require('helmet');
   app.use(helmet());
   ```

4. **Rate limiting**
   ```javascript
   const rateLimit = require('express-rate-limit');
   const limiter = rateLimit({
     windowMs: 15 * 60 * 1000,
     max: 100
   });
   app.use(limiter);
   ```

5. **CORS configuration**
   ```javascript
   app.use(cors({
     origin: process.env.FRONTEND_URL,
     credentials: true
   }));
   ```

6. **Input validation**
   - Validate all inputs
   - Sanitize data
   - Use schema validation (Mongoose)

7. **Environment variables**
   - Never commit .env
   - Use strong JWT secret
   - Rotate secrets regularly

### Frontend Security

1. **Content Security Policy**
   ```html
   <meta http-equiv="Content-Security-Policy" 
         content="default-src 'self'; script-src 'self'">
   ```

2. **XSS Protection**
   - Angular sanitizes by default
   - Never use innerHTML
   - Use property binding instead

3. **CSRF Protection**
   - Angular includes CSRF token in requests
   - Backend validates tokens

---

## Monitoring & Maintenance

### Setup Error Tracking

**Sentry**
```javascript
const Sentry = require("@sentry/node");
Sentry.init({ dsn: process.env.SENTRY_DSN });
app.use(Sentry.Handlers.errorHandler());
```

### Setup Logging

**Winston Logger**
```javascript
const winston = require('winston');
const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});
```

### Setup Uptime Monitoring

- **Uptime Robot** - Free uptime monitoring
- **StatusCake** - Advanced monitoring
- **Pingdom** - Infrastructure monitoring

### Regular Maintenance

1. **Weekly**
   - Check logs for errors
   - Monitor server resources
   - Review user feedback

2. **Monthly**
   - Update dependencies
   - Review security logs
   - Backup database
   - Check SSL certificate expiry

3. **Quarterly**
   - Performance review
   - Security audit
   - Load testing
   - Plan improvements

---

## Scaling

As your app grows:

1. **Horizontal scaling**
   - Deploy multiple server instances
   - Use load balancer (nginx, AWS ELB)
   - Session management (Redis)

2. **Database optimization**
   - Add indexes
   - Archive old data
   - Implement caching (Redis)

3. **CDN for frontend**
   - Cache static assets
   - Serve from edge locations
   - Reduce latency

4. **Performance optimization**
   - Code splitting
   - Image optimization
   - API response caching

---

## Troubleshooting

### Backend won't start
```bash
# Check logs
pm2 logs todoapp-backend

# Check port usage
lsof -i :3000

# Check Node version
node --version

# Check dependencies
npm list
```

### Database connection failed
```bash
# Test MongoDB connection
mongo "mongodb://user:pass@host/todoapp"

# Check firewall
sudo ufw status

# Check MongoDB service
sudo systemctl status mongod
```

### CORS errors
```javascript
// Update CORS in server.js
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH']
}));
```

### 502 Bad Gateway
- Backend might be down
- Check if process is running: `pm2 list`
- Restart: `pm2 restart todoapp-backend`

---

## Rollback Procedure

If something goes wrong:

```bash
# View version history
git log --oneline

# Rollback to previous version
git revert <commit-hash>
git push origin main

# Or reset to specific version
git reset --hard <commit-hash>
git push origin main --force
```

---

## Support

- 📖 [Main README](README.md)
- 🐛 [Report Issues](https://github.com/yourusername/todoapp/issues)
- 💬 [Discussions](https://github.com/yourusername/todoapp/discussions)

---

**Happy deploying! 🚀**