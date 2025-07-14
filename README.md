# Notes API (MERN Backend Only)

A simple backend for a note-taking app with user authentication and notes management.

## Features
- User registration and login (JWT-based)
- Passwords hashed with bcrypt
- Notes CRUD (create, list) for authenticated users
- MongoDB + Mongoose
- Modern ES Modules structure

## Setup

1. **Clone the repo & install dependencies:**
   ```bash
   git clone https://github.com/Aryannnn-n/Notes-Api.git
   cd notes-api
   npm install
   ```
2. **Create a `.env` file:**
   Copy `.env.example` and fill in your values:
   ```env
   PORT=5000
   MONGO_URI=your_mongo_uri
   JWT_SECRET=your_jwt_secret
   ```
3. **Run the server:**
   ```bash
   npm run dev
   ```

## API Endpoints

### Auth
- `POST /register` — Register a new user
  - Body: `{ "name": "John", "email": "john@example.com", "password": "123456" }`
- `POST /login` — Login and get JWT
  - Body: `{ "email": "john@example.com", "password": "123456" }`

### Notes (JWT required in `Authorization: Bearer <token>` header)
- `POST /notes` — Add a new note
  - Body: `{ "title": "Note Title", "content": "Note content" }`
- `GET /notes` — List all notes for the logged-in user

## Example Usage (with curl)

Register:
```bash
curl -X POST http://localhost:5000/register -H "Content-Type: application/json" -d '{"name":"John","email":"john@example.com","password":"123456"}'
```

Login:
```bash
curl -X POST http://localhost:5000/login -H "Content-Type: application/json" -d '{"email":"john@example.com","password":"123456"}'
```

Add Note:
```bash
curl -X POST http://localhost:5000/notes -H "Content-Type: application/json" -H "Authorization: Bearer <token>" -d '{"title":"Test Note","content":"Hello"}'
```

List Notes:
```bash
curl -X GET http://localhost:5000/notes -H "Authorization: Bearer <token>"
```

---
