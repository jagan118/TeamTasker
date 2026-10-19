const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const todoRoutes = require('./routes/todoRoutes');
const teamRoutes = require('./routes/teamRoutes');
dotenv.config();

const connectDB = require('./config/db');

connectDB();

const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:4200'
}));
app.use(express.json());

app.use('/api/todos',todoRoutes);
app.use('/api/teams',teamRoutes)

app.get('/', (req, res) => {
    res.send('API Running');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
