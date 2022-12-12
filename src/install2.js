import {join, resolve} from "path";

const path = require('path')

const bilrom5fr = function (moduleOptions) {
  const options = Object.assign({}, this.options.bilrom, moduleOptions)

  console.log('options', options)


  // maybe for axios
  //if (moduleOptions.fontAwesome !== false) {
  // Add Font Awesome
  //this.options.css.push('font-awesome/css/font-awesome.css')
  //}

  // this.addPlugin({
  //   src: path.resolve(runtimeDir, 'plugin.js'),
  //   fileName: 'my-awesome-module.js',
  //   options
  // })

  this.addPlugin({
    src: resolve(__dirname, 'plugins/plugin.js'),
    fileName: join(namespace, 'plugins/plugin.js'),
  })
  // this.addPlugin(path.resolve(__dirname, 'plugins/plugin.js'))
}

export default bilrom5fr



