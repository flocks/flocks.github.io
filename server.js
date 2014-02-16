var connect = require('connect'),
    http = require('http'),
    directory = '/Users/flocks/flocks.github.io';

connect()
    .use(connect.static(directory))
    .listen(44);

console.log('Listening on port 80.');