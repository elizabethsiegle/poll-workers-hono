import { Hono } from 'hono'
// import { serveStatic } from 'hono/cloudflare-workers';
import { serveStatic } from '@hono/node-server/serve-static'
const app = new Hono();
app.get('/', serveStatic({ root: './index.html' }));

export default app
