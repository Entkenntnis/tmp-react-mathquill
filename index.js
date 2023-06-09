'use strict'

if (typeof window === 'undefined') {
  module.exports = {}
} else {
  if (process.env.NODE_ENV === 'production') {
    module.exports = require('./dist/react-mathquill.min.js')
  } else {
    module.exports = require('./dist/react-mathquill.js')
  }
}
