import {} from 'dotenv/config'
import express from 'express';
import cors from 'cors';
import blogsRouter from './routes/blogs.js';
const app = express();
app.use(express.json());
app.use(cors())

const PORT = process.env.PORT;

app.use('/api/blogs', blogsRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});