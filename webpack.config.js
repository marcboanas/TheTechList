const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  rules: [
    {
      test: /\.scss$/,
      use: [
        'style-loader', // Step3. Injects common JS to DOM
        'css-loader',    // Step2. Turns CSS into common JS
        'sass-loader'   // Step1. Turns SASS into valid CSS
       ]
    }
  ]
}