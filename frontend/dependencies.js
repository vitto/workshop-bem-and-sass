const path = require('path')
const __js = path.join(__dirname, '/js')
const __modules = path.join(__dirname, '/../node_modules')
const __sass = path.join(__dirname, '/sass')

module.exports = {
  css: {
    theme: [
      path.join(__sass, '/import.scss')
    ],
    vendor: [
      path.join(__modules, '/material-design-icons/iconfont/material-icons.css')
    ]
  },
  js: {
    app: [
      path.join(__js, '/buttons.js')
    ],
    vendor: [
      path.join(__modules, '/jquery/dist/jquery.js')
    ],
    provider: {
      $: 'jquery',
      jQuery: 'jquery'
    }
  }
}
