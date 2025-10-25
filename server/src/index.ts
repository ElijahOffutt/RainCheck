import { Hono } from 'hono'

const app = new Hono()

app.get('/', async c => c.text('Hello Hono!'))

import users from './routes/user'
app.route('/users', users)

export default app
