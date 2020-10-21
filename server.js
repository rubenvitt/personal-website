/* eslint-disable @typescript-eslint/no-var-requires */
// example taken from: https://github.com/isaachinman/next-i18next/blob/master/examples/simple/server.js

const express = require('express');
const next = require('next');

const app = next({ dev: process.env.NODE_ENV !== 'production', conf: require('./config/next.config') });

const handle = app.getRequestHandler();
(async () => {
    await app.prepare();

    const server = express();

    server.get('*', (req, res) => handle(req, res));
    const port = process.env.PORT || 3000;
    await server.listen(port);
    console.info(`Running on NODE_ENV: ${process.env.NODE_ENV}`);
    console.log(`> Ready on http://localhost:${port}`); // eslint-disable-line no-console
})();
