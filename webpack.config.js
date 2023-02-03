const path = require('path')

module.exports = {
    //define entry point
    entry: './src/js/script.js',
    
    //define output point
    output: {
        path: path.resolve('./dist'),
        filename: 'bundle.js'
    },

    mode: 'production',
}