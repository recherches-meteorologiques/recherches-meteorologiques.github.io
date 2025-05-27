import { Elysia } from 'elysia'
import { staticPlugin } from '@elysiajs/static'

new Elysia()
    .use(staticPlugin({
        assets: '.',
        prefix: '/',
    }))
    .listen(3000)