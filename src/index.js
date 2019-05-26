const Server = require('./app')
const yargs = require('yargs') // eslint-disable-line
  // .command('serve [port]', 'start the server', (yargs) => {
  //   yargs
  //     .positional('port', {
  //       describe: 'port to bind on',
  //       default: 5000
  //     })
  // }, (argv) => {
  //   if (argv.verbose) console.info(`start server on :${argv.port}`)
  //   serve(argv.port)
  // })
const argv = yargs
  .usage('anywhere [options]')
  .option('p', {
    alias: 'port',
    default: 9753
  })
  .option('h',{
    alias: 'hostname',
    default: "127.0.0.1"
  })
  .version()
  .alias('v','version')
  .help()
  .argv

  const server = new Server(argv);
  server.start();