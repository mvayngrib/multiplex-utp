require('http')
require('https')
require('sock-plex')

try {
  var net = require('net')
  var utp = require('@tradle/utp')
  if (utp !== net && utp.connect !== net.connect) {
    // yes, force everyone to use utp
    replace(net, utp)
  }
} catch (err) {}

function replace (module, replacement) {
  for (var p in replacement) {
    if (replacement.hasOwnProperty(p)) {
      var val = replacement[p]
      if (typeof val === 'function') module[p] = replacement[p]
      else module[p] = val
    }
  }
}
