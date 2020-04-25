const htmlWebpackPlugin = require('html-webpack-plugin');
const path =require('path')
module.exports = {
  entry: path.join(__dirname,'../src/index.ts'),
  output:{
      path:path.join(__dirname,'../dist'),
      filename:'bundle.js'
  },
  resolve:{
      extensions: ['.js', '.ts', '.tsx'],
  },
  module:{
      rules:[
          {
              test: /\.tsx?$/i,
              use:[
                  {
                      loader:'ts-loader'
                  }
              ],
              exclude: /node_modules/
          }
      ]

  },
  plugins:[
      //通过一个模版 帮我们生成网站的首页，而且可以帮我们把输出文件自动嵌入到这个文件中
      new htmlWebpackPlugin({
          template:'./src/tpl/index.html'
      })
  ]


}
