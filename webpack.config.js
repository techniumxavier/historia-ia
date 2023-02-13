const path = require('path')

module.exports = {
    //define entry point
    entry: './src/js/app.js',
    
    //define output point
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    }
};