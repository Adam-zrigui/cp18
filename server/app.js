import { config } from 'dotenv'
import express from 'express'
import db from './config/db.js'
import router from './routes/router.js'
import cors from 'cors'
const app = express()
app.use(express.json())
app.use(cors())
config({path:"./config/.env"})
db()

app.use('/api', router)








const PORT = process.env.PORT || 8000
app.listen(PORT , (err) => err ? console.error(err) : console.log(`http://localhost:${PORT}`))
export default app