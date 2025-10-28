import { Hono } from 'hono'
import users from './routes/user'

const app = new Hono()

app.get('/', async c => c.text('Hello Hono!'))

// CONFIGURE ROUTES
app.route('/users', users)

export default app
