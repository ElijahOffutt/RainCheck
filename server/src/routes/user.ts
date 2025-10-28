import { Hono } from 'hono'

const users = new Hono()

users
    .get('/', async c => {
        try {
            return c.json({
                message: `Get All Users (plural) 👍`
            })
        } catch (error) {
            return c.json({
                message: `Error @ "Get All Users" route`,
                error
            })
        }
    })
    .post('/', async c => c.text('POST'))
    .put('/', async c => c.text('PUT'))
    .delete('/', async c => c.text('DELETE'))

export default users
