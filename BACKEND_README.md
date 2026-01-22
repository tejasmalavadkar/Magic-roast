# MagicRoast Qoffee Backend Setup

## Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

## Installation Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Set up MongoDB
- Install MongoDB locally or use MongoDB Atlas
- Update the MONGODB_URI in `.env` file with your connection string

### 3. Configure Environment Variables
Edit the `.env` file:
```env
MONGODB_URI=your_mongodb_connection_string_here
JWT_SECRET=your_super_secret_jwt_key_here_change_this_in_production
PORT=5000
FRONTEND_URL=http://localhost:3000
```

### 4. Start the Backend Server
```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (protected)
- `PUT /api/auth/profile` - Update user profile (protected)
- `PUT /api/auth/change-password` - Change password (protected)
- `POST /api/auth/forgot-password` - Forgot password

### Orders
- `GET /api/orders` - Get user orders (protected)

## Frontend Integration

The frontend pages are located in:
- `/app/login/page.jsx` - Login page
- `/app/register/page.jsx` - Registration page  
- `/app/my-account/page.jsx` - User account dashboard

## Features Implemented

### Backend
- ✅ User registration with password hashing
- ✅ User login with JWT authentication
- ✅ Protected routes middleware
- ✅ User profile management
- ✅ Password change functionality
- ✅ Order history (placeholder)
- ✅ MongoDB integration
- ✅ CORS support

### Frontend
- ✅ Login page with form validation
- ✅ Registration page with password confirmation
- ✅ My Account dashboard with tab navigation
- ✅ Responsive design matching website theme
- ✅ LocalStorage for token management
- ✅ Protected route redirection
- ✅ Account dropdown menu integration

## Security Features
- Password hashing with bcrypt
- JWT token authentication
- Protected API routes
- Form validation
- Secure password requirements

## Testing
1. Start MongoDB service
2. Run `npm run dev` to start backend
3. Test registration endpoint with POST request
4. Test login endpoint with POST request
5. Test protected endpoints with valid JWT token

## Deployment Notes
- Change JWT_SECRET in production
- Use secure MongoDB connection string
- Set proper CORS origins
- Consider using environment variables for all secrets