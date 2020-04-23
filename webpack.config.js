const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    output: {
      path: path.resolve("dist"),
      filename: "main.js",
      libraryTarget: "umd",
      umdNamedDefine: true
    },
    plugins: [new MiniCssExtractPlugin()],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          include: path.resolve(__dirname, "src"),
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                esModule: true,
              },
            },
            'css-loader',
          ]
        },
      ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    externals: {          
      react: {          
          commonjs: "react",          
          commonjs2: "react",          
          amd: "React",          
          root: "React"      
      },      
      "react-dom": {          
        commonjs: "react-dom",          
        commonjs2: "react-dom",          
        amd: "ReactDOM",          
        root: "ReactDOM"      
      },
      "react-router-dom": {          
        commonjs: "react-router-dom",          
        commonjs2: "react-router-dom",          
        amd: "ReactRouterDOM",          
        root: "ReactRouterDOM"      
      },
} 
  };