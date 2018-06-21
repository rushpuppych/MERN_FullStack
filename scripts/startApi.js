

const Api = require('../api/Api');
const chalk = require('chalk');

// Config Api Server
const HOST = process.env.HOST || '0.0.0.0';
const DEFAULT_PORT = parseInt(process.env.API_PORT, 10) || 4000;

// Launch Api Server
const apiServer = Api.listen(DEFAULT_PORT, HOST, err => {
    if (err) {
        return console.log(err);
    }
    console.log(chalk.cyan('Starting the REST Api server...'));
    console.log(chalk.green('REST Api Server is running!\n'));

    console.log('You can now view ' + chalk.bold('Api') + ' in the browser.\n');
    console.log(chalk.bold('Local:            ') + ' http://localhost:' + DEFAULT_PORT);
    console.log(chalk.bold('On Your Network:  ') + ' http://' + process.env.HOST + ':' + DEFAULT_PORT + '\n');  
});

// Quit if CTRL+C is pressed
['SIGINT', 'SIGTERM'].forEach(function(sig) {
    process.on(sig, function() {
        apiServer.close();
        process.exit();
    });
});  