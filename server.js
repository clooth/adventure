console.dir(process.env);
console.dir(require.paths);
require('./app').listen(process.env.PORT);
