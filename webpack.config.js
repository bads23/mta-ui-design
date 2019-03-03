module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: __dirname + "/dist",
    port: 3000,
    watchContentBase: true
  },
  module:  {
    rules: [
      {
        test: /\.scss/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ] 
  }
}