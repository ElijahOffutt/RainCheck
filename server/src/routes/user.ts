import { Hono } from 'hono'

const users = new Hono()

users
    .get('/', async c => c.text('GET'))
    .post('/', async c => c.text('POST'))
    .put('/', async c => c.text('PUT'))
    .delete('/', async c => c.text('DELETE'))

export default users
