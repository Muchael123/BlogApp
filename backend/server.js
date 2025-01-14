import express from 'express'
import UserRoute from "./routes/user.route.js";
import ComentRoute from "./routes/comment.route.js"
import postRoute from './routes/post.route.js'
import AuthRoutes from './routes/auth.route.js'
import ConnectDb from './lib/connectDb.js';


const app = express()
const port = 3000
ConnectDb()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!!!')
})

app.use('/users', UserRoute)
app.use('/comments', ComentRoute)
app.use('/posts',postRoute)
app.use('/auth', AuthRoutes)

app.listen(port, () => {
  console.log(`Example app listening on  http://localhost:${port}`)
})